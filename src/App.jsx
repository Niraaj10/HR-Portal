import { useState } from 'react'
import SideBar from './components/sideBar';
import Navbar from './components/navbar';
import Dashboard from './components/Dashboard';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import EmpDash from './components/EmpDash';
import LogIn from './components/LogIn';

function App() {

  const [isactive, setIsactive] = useState('Dashboard');



  return (
    <>
      <div>

        <Navbar />
        {/* <h2 className='bg-red-500 h-10'>
        HR 
        </h2> */}

        <div className="dashCont flex ">


          <SideBar isactive={isactive} setIsactive={setIsactive} />


          <Routes>
            <Route path='/' element={<Dashboard />} />

            <Route path='/EmpDash' element={<EmpDash />} />

            <Route path='/LogIn' element={<LogIn />} />

          </Routes>
        </div>

      </div>
    </>
  )
}

export default App
