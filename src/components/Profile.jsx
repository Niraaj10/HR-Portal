import React, { useState } from 'react'
import ProfilePic from '../assets/img/ProfilePic.jpg';
import Edit from '../assets/svg/Edit.svg'

const Profile = ({ user }) => {
    const [userData, setUserData] = useState({
        emp_id: user.emp_id,
        name: user.name,
        email: user.email,
        role: user.role,
        profilePhoto: user.profilePhoto,
        add: user.address,
        PhoneNo: user.phone
    });


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


                    <form action="">



                        <div className="NameEdit flex gap-10 my-5">
                            <input
                                type="text"
                                name='Name'
                                value={userData.name}
                                onChange=''
                                className='input border border-[#3353f468] rounded-2xl py-2 px-4  text-gray-500 w-[450px]'
                            />
                            <img src={Edit} alt="" />
                        </div>

                        <div className="NameEdit flex gap-10 my-5">
                            <input
                                type="email"
                                name='Name'
                                value={userData.email}
                                onChange=''
                                className='input border border-[#3353f468] rounded-2xl py-2 px-4  text-gray-500 w-[450px]'
                            />
                            <img src={Edit} alt="" />
                        </div>

                        <div className="NameEdit flex gap-10 my-5">
                            <input
                                type="text"
                                name='Name'
                                value={userData.add}
                                onChange=''
                                className='input border border-[#3353f468] rounded-2xl py-2 px-4 text-gray-500 w-[450px]'
                            />
                            <img src={Edit} alt="" />
                        </div>

                        <div className="NameEdit flex gap-10 my-5">
                            <input
                                type="tel"
                                name='Name'
                                value={userData.PhoneNo}
                                onChange=''
                                className='input border border-[#3353f468] rounded-2xl py-2 px-4 text-gray-500 w-[450px]'
                            />
                            <img src={Edit} alt="" />
                        </div>

                        <div className="NameEdit flex gap-10 my-5">
                            <input
                                type="image"
                                name='Name'
                                value={userData.profilePhoto}
                                onChange=''
                                className='input border border-[#3353f468] rounded-2xl py-2 px-4 text-gray-500 w-[450px]'
                            />
                            <img src={Edit} alt="" />
                        </div>

                        <button type='submit' className='bg-[#3354F4] py-3 rounded-xl text-white w-full'>Change Information</button>



                    </form>

                </div>

            </div>

        </>
    )
}

export default Profile




