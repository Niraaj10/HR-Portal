import { useState } from 'react'
import SideBar from './components/sideBar';
import Navbar from './components/navbar';
import Dashboard from './components/Dashboard';
import { Routes, Route } from 'react-router-dom';
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


        <SideBar isactive={isactive} setIsactive={setIsactive} />


        <Routes>
          <Route path='/' element={<Dashboard />} />

          <Route path='/src/components/EmpDash.jsx' element={<EmpDash />} />

          <Route path='/src/components/LogIn.jsx' element={<LogIn />} />

        </Routes>



      </div>
    </>
  )
}

export default App
