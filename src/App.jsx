import { useState } from 'react'
import SideBar from './components/sideBar';
import Navbar from './components/navbar';
import Dashboard from './components/Dashboard';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import EmpDash from './components/EmpDash';
import Auth from './components/Auth';

function App() {

  const [isactive, setIsactive] = useState('Dashboard');



  return (
    <>
      <div>

        <Navbar />
        {/* <h2 className='bg-red-500 h-10'>
        HR 
        </h2> */}

           <div className="dashCont flex gap-5">

          <SideBar isactive={isactive} setIsactive={setIsactive} />


          <div className="ContainPages flex-auto">
          <Routes>
            <Route path='/' element={<Dashboard />} />

            <Route path='/EmpDash' element={<EmpDash />} />

            <Route path='/Auth' element={<Auth />} />

          </Routes>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
