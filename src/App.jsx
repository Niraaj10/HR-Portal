import { useEffect, useState } from 'react'
import SideBar from './components/sideBar';
import Navbar from './components/navbar';
import Dashboard from './components/Dashboard';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import EmpDash from './components/EmpDash';
import Auth from './components/Auth';
import Profile from './components/Profile';

function App() {

  const [user, setUser] = useState(null);
  const [isactive, setIsactive] = useState('Dashboard');


  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if(loggedInUser){
      setUser(JSON.parse(loggedInUser));
    }
  }, []);



  return (
    <>
      <div>

        <Navbar />
        {/* <h2 className='bg-red-500 h-10'>
        HR 
        </h2> */}

           <div className="dashCont flex gap-5">

          {/* <SideBar isactive={user ? 'Profile' : 'Login'} setIsactive={setIsactive} /> */}
          <SideBar isactive={isactive} setIsactive={setIsactive} />


          <div className="ContainPages flex-auto">
          <Routes>
            <Route path='/' element={<Dashboard />} />

            <Route path='/EmpDash' element={<EmpDash />} />

            {/* <Route path='/Auth' element={<Auth setUser={setUser}/>} /> */}

            <Route path='/profile' element={user ? <Profile user={user} setUser={setUser}/> : <Auth setUser={setUser}/> } />

          </Routes>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
