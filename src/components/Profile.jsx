import React, { useEffect, useRef, useState } from 'react'
import ProfilePic from '../assets/img/ProfilePic.jpg';
import Edit from '../assets/svg/Edit.svg'
import { useNavigate } from 'react-router-dom';

const Profile = ({ user, setUser }) => {
    const [userData, setUserData] = useState({
        emp_id: user.emp_id,
        name: user.name,
        email: user.email,
        role: user.role,
        profilePhoto: user.profilePhoto,
        address: user.address,
        phone: user.phone
    });

    const navigate = useNavigate();

    const nameInputRef = useRef(null);
    const emailInputRef = useRef(null);
    const addressInputRef = useRef(null);
    const phoneInputRef = useRef(null);
    const profilePhotoInputRef = useRef(null);


    const InputChange = (e) => {
        const { name, value } = e.target;

        setUserData({ ...userData, [name]: value, });
        console.log(userData);
    };

    const EditClick = (inputRef) => {
        inputRef.current.focus();
        console.log(inputRef.current.value);
    }

    const ProfileUpdate = async (e) => {
        e.preventDefault();
        // console.log(userData);
        try {
            const response = await fetch('http://localhost:5000/updateProfile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            console.log(userData)

            const result = await response.json();
            if (response.ok) {
                console.log('Profile updated successfully:', result);
            } else {
                console.error('Error updating profile:', result.message);
            }
        } catch (error) {
            console.error('Error updating Profile:', error);
        }
    };


    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        console.log(loggedInUser);
        if (!loggedInUser) {
            navigate('/login');
        }
    }, [navigate]);


    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        navigate('/profile');
    }


    return (
        <>

            <div className='Profile-Cont flex bg-white p-7 mt-5 mr-10 rounded-xl h-[70vh]'>

                <div className="Pro-Card w-[50%] flex flex-col items-center mt-16">
                    <div className="ProPhoto w-56 ">
                        <img
                            src={userData.profilePhoto ? userData.profilePhoto : ProfilePic} alt="ProfilePicture"
                            className='w-80 rounded-full shadow-2xl object-contain'
                        />
                    </div>

                    <div className="ProName m-3 mt-9">
                        <span className='text-[#3354F4] text-3xl'>{userData.name}</span>
                    </div>

                    <div className="ProRole m">
                        <span className=' text-xl'>{userData.role}</span>
                    </div>

                    <div className="ProEmail ">
                        <span className=' text-xl'>{userData.email}</span>
                    </div>

                </div>



                <div className="Pro-Change w-[50%] flex flex-col items-center  px-12 border-l">
                    <span className='mb-10 text-2xl text-[#3354F4]'>PERSONAL INFORMATION</span>

                    <div>


                        <form onSubmit={ProfileUpdate}>



                            <div className="NameEdit flex gap-10 my-5">
                                <input
                                    type="text"
                                    name='name'
                                    // value={userData.name}
                                    placeholder={userData.name}
                                    onChange={InputChange}
                                    className='input border border-[#3353f468] rounded-2xl py-2 px-4  text-gray-500 w-[450px]'
                                    ref={nameInputRef}
                                />
                                <img
                                    src={Edit}
                                    alt=""
                                    onClick={() => EditClick(nameInputRef)}
                                    className='cursor-pointer' />
                            </div>

                            <div className="NameEdit flex gap-10 my-5">
                                <input
                                    type="email"
                                    name='email'
                                    // value={userData.email}
                                    placeholder={userData.email}
                                    onChange={InputChange}
                                    className='input border border-[#3353f468] rounded-2xl py-2 px-4  text-gray-500 w-[450px]'
                                    ref={emailInputRef}
                                />
                                <img
                                    src={Edit}
                                    alt=""
                                    onClick={() => EditClick(emailInputRef)}
                                    className='cursor-pointer' />
                            </div>

                            <div className="NameEdit flex gap-10 my-5">
                                <input
                                    type="text"
                                    name='address'
                                    // value={userData.add}
                                    placeholder={userData.address}
                                    onChange={InputChange}
                                    className='input border border-[#3353f468] rounded-2xl py-2 px-4 text-gray-500 w-[450px]'
                                    ref={addressInputRef}
                                />
                                <img
                                    src={Edit}
                                    alt=""
                                    onClick={() => EditClick(addressInputRef)}
                                    className='cursor-pointer' />
                            </div>

                            <div className="NameEdit flex gap-10 my-5">
                                <input
                                    type="tel"
                                    name='phone'
                                    // value={userData.PhoneNo}
                                    placeholder={userData.phone}
                                    onChange={InputChange}
                                    className='input border border-[#3353f468] rounded-2xl py-2 px-4 text-gray-500 w-[450px]'
                                    ref={phoneInputRef}
                                />
                                <img
                                    src={Edit}
                                    alt=""
                                    onClick={() => EditClick(phoneInputRef)}
                                    className='cursor-pointer' />
                            </div>

                            <div className="NameEdit flex gap-10 my-5">
                                <input
                                    type="image"
                                    name='profilePhoto'
                                    // value={userData.profilePhoto}
                                    placeholder={userData.profilePhoto}
                                    onChange={InputChange}
                                    className='input border border-[#3353f468] rounded-2xl py-2 px-4 text-gray-500 w-[450px]'
                                    ref={profilePhotoInputRef}
                                />
                                <img
                                    src={Edit}
                                    alt=""
                                    onClick={() => EditClick(profilePhotoInputRef)}
                                    className='cursor-pointer' />
                            </div>

                            <div className="NameEdit flex gap-16 my-5">

                            <button type='submit' className='bg-[#3354F4] py-3 rounded-xl text-white w-full'>Change Information</button>
                            <div></div>
                            </div>



                        </form>


                        <div className='flex items-end justify-end py-7 '>
                            <button onClick={handleLogout} className='text-[#3354F4] py-2 px-4 rounded-xl bg-white border drop-shadow-lg shadow-red-600'>Logout</button>
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Profile




