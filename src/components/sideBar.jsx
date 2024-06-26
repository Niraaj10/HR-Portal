import React, { useEffect, useState } from 'react';
import dashSvg from '../assets/svg/db.svg';
import activeDB from '../assets/svg/Adb.svg';
import EmpT from '../assets/svg/EmpT.svg';
import activeET from '../assets/svg/AET.svg';
import LI from '../assets/svg/login.svg'
import activeLI from '../assets/svg/ALogin.svg';
import { Link, useLocation } from 'react-router-dom';

const sideBar = ({ isactive, setIsactive }) => {

  const [hovered, setHovered] = useState(false);
  const location = useLocation();

  
  
  const menuItems = [
    { id: "Dashboard", name: 'Dashboard', icon: dashSvg, activeIcon: activeDB, path: '/' },
    { id: "Employees", name: 'Employees', icon: EmpT, activeIcon: activeET, path: '/EmpDash' },
    // { id: 3, name: 'Salaries', icon: dashSvg,  },
    { id: 'LogIn / SignUp', name: 'LogIn / SignUp', icon: LI, activeIcon: activeLI, path: '/Auth' },
  ];
  


  useEffect(() => {
    // Set the active item based on the current pathname
    const currentItem = menuItems.find(item => item.path === location.pathname);
    if (currentItem) {
      setIsactive(currentItem.id);
    }
  }, [location.pathname, setIsactive, menuItems]);



  return (
    <>
      {/* <div className='h-[65vh] flex items-center'> */}


      <div className='sideBarr bg-white w-fit ml-10 m-5 px-6 py-1 rounded-xl relative h-fit'>
        {/* <div className="SBItems flex gap-4 items-center my-5">
          <div className="icon"><img src={dashSvg} alt="" className='w-8' /></div>
          <div className="heading">Dashboard</div>
        </div> */}

        {
          menuItems.map((item) => (

            <Link to={item.path} onClick={() => setIsactive(item.id)} key={item.id}>
              <div className="SBItems flex gap-4 items-center my-5" >
                <div
                  className="icon"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  <img 
                    src={isactive === item.id ? item.activeIcon : item.icon}  
                    alt={item.name}
                    className={`w-8 transition-all duration-300  ${isactive === item.id ? 'scale-125' : 'w-8  border-none'}`} />
                </div>

                <div
                  className={`heading transition-opacity duration-300 absolute bg-white ml-9 p-7 w-48 rounded-xl ${hovered === true ? 'opacity-100' : 'opacity-0'
                    }`}

                >
                  {item.name}
                </div>
              </div>

            </Link>
          ))
        }



      </div>



      {/* </div> */}
    </>
  )
}

export default sideBar
