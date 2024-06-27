import React, { useState } from 'react';
import ImgDiv from '../assets/img/Logoo.webp';  
import { useNavigate } from 'react-router-dom';

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
    if (response.status === 200) {
      setUser(data.employee);
      navigate('/profile');      
    } else {
      alert(data.message);
    }

  }




  return (
    <>
      <div className="authCont  bg-white  mt-5 mr-10 rounded-xl h-[70vh] flex ">

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


        <div className="divImg w-[50%]">
          {/* <img src={ImgDiv} alt="" className='h-[570px] object-cover '/> */}
        </div>

      </div>
    </>
  )
}

export default Auth
