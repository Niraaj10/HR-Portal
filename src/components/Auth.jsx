
import React, { useState } from 'react';
import ImgDiv from '../assets/img/Logoo.webp';  
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Auth = ({ setUser }) => {

  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePhoto, setProfilePhoto] = useState('');
  const navigate = useNavigate();


  const handeAuth = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? 'login' : 'signup';
    const payload = isLogin ? {email, password} : { name , role, email, password, profilePhoto };

    const response = await fetch(`http://localhost:5000/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(payload),
    });
    
    // console.log(payload);

    const data = await response.json();
    if (response.ok) {
      // console.log(`${isLogin ? 'Login' : 'Signup'} successful`, data);
      localStorage.setItem('user', JSON.stringify(data.employee));
      setUser(data.employee);
      // console.log(data.employee);
      navigate('/profile');      
    } else {
      // alert(data.message);
      toast('Invalid Email or Password', {
        style: {                        
            boxShadow: 'rgba(116, 140, 255, 0.07) 0px 1px 2px, rgba(116, 140, 255, 0.07) 0px 2px 4px, rgba(116, 140, 255, 0.07) 0px 4px 8px, rgba(116, 140, 255, 0.07) 0px 8px 16px, rgba(116, 140, 255, 0.07) 0px 16px 32px, rgba(116, 140, 255, 0.07) 0px 32px 64px'
        }
    });
      console.error("Error :", data.message )
    }

  }




  return (
    <>

<ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                    transition:Bounce
                />
      <div className="authCont  bg-white  mt-5 mr-10 rounded-xl h-[70vh] flex shadow-2xl">

        <div className="formCont w-[50%] p-7 items-center flex flex-col">

          <div className="togglebtn flex">
            <div onClick={() => setIsLogin(true)} className={`toggle-button ${isLogin ? 'active' : ''}`} >Log-In</div>
            <div onClick={() => setIsLogin(false)} className={`toggle-button ${!isLogin ? 'active' : ''}`} >Sign-Up</div>
          </div>

          <form onSubmit={handeAuth} className={`flex flex-col w-full px-28 pt-12 ${isLogin ? 'login' : 'signup'}`}  >

            {!isLogin && (
              <>
              <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' required className='mx-16 my-2 outline-none shadow-sm border px-5 py-2 rounded-xl'/>
              <input type='text' value={role} onChange={(e) => setRole(e.target.value)} placeholder='Role' required className='mx-16 my-2 outline-none shadow-sm border px-5 py-2 rounded-xl'/>
              {/* <input type='text' value={profilePhoto} onChange={(e) => setProfilePhoto(e.target.value)} placeholder='Profile Photo' required className='mx-16 my-2 outline-none shadow-sm border px-5 py-2 rounded-xl'/> */}
              </>
            )}

            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required className={`outline-none shadow-sm border px-5 py-2 rounded-xl mx-16 ${isLogin ? 'mt-12 mb-6' : 'my-2'}`} />
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required className='mx-16 my-2 outline-none shadow-sm border px-5 py-2 rounded-xl'/>
            <button type='submit' className='mx-16 my-5 bg-[#3354F4] py-3 rounded-xl text-white'>{isLogin ? 'LogIn' : 'SignUp'}</button>



          </form>






        </div>


        <div className="divImg w-[50%] flex flex-col justify-center items-center bg-[#3353f4] rounded-xl">
          {/* <img src={ImgDiv} alt="" className='h-[570px] object-cover '/> */}

          <div className='text-[250px] text-white font-anton drop-shadow-2xl '>HR</div>
          <div>
            <div className='text-white'>Hr : dummyhrr@gmail.com | pass</div>
            <div className='text-white'>Emp : dummyemp@gmail.com | pass</div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Auth
