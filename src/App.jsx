import { useEffect, useState } from 'react'
import SideBar from './components/sideBar';
import Navbar from './components/navbar';
import Dashboardhr from './components/DashboardHr';
import DashboardEmp from './components/DashboradEmp';
import { Routes, Navigate, Route, BrowserRouter } from 'react-router-dom';
import EmpDash from './components/EmpDash';
import Auth from './components/Auth';
import Profile from './components/Profile';
import LeaveReq from './components/LeaveReq';

function App() {

  const [user, setUser] = useState(null);
  const [isactive, setIsactive] = useState('Dashboard');


  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);



  return (
    <>
      <div>

        <Navbar user={user} />
        {/* <h2 className='bg-red-500 h-10'>
        HR 
        </h2> */}

        <div className="dashCont flex gap-5">

          {/* <SideBar isactive={user ? 'Profile' : 'Login'} setIsactive={setIsactive} /> */}
          <SideBar isactive={isactive} setIsactive={setIsactive} user={user} />


          <div className="ContainPages flex-auto">


            <Routes>
              <Route path='/' element={user ? <Profile user={user} setUser={setUser} /> : <Auth setUser={setUser} />} />




              {/* <Route
                path="/LeaveReq"
                element={user?.Pose === 'Employee' ? <LeaveReq user={user} userRole={user?.Pose} userId={user.emp_id} /> : <Navigate to="/EmpDash" />}
              />

              <Route
                path="/EmpDash"
                element={user?.Pose === 'HR' ? <EmpDash user={user} /> : <Navigate to="/LeaveReq" />}
              /> */}



              <Route path={user?.Pose === 'Employee' ? '/DashboardEmp' : '/DashboardHr'} element={user?.Pose === 'Employee' ? <DashboardEmp /> : <Dashboardhr />  }  />



              <Route path={user?.Pose === 'Employee' ? '/LeaveReq' : '/EmpDash'} element={user?.Pose === 'Employee' ? <LeaveReq  user={user} userRole={user?.Pose} userId={user.emp_id}/> : <EmpDash user={user}/>  }  />

              {/* <Route path={user?.Pose === 'HR' ? '/EmpDash' : '/LeaveReq'} element={user?.Pose === 'HR' ? <EmpDash user={user}/> : <LeaveReq  user={user} /> } /> */}



              {/* <Route path='/Auth' element={<Auth setUser={setUser}/>} /> */}

              <Route path='/profile' element={user ? <Profile user={user} setUser={setUser} /> : <Auth setUser={setUser} />} />

            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}

export default App




{/* Made By Niraaj10 */}
