import React from 'react'
import { Link } from 'react-router-dom';
import ProfilePic from '../assets/img/Pro.webp'
import activeLI from '../assets/svg/ALogin.svg';

const navbar = ({ user }) => {
    return (
        <>
            <div className="Navbarr  bg-white m-10 p-6 h-24 flex justify-between items-center rounded-xl ">
                <div className="logo font-anton text-7xl text-[#3354F4]"> HR </div>

                <div className="Profile flex gap-6 items-center">
                    {user ? (
                        <Link to='/profile'>
                        <div className='Profile flex gap-6 items-center'>
                            <div className="img w-32 border-[#3354F4] border rounded-full ">
                                <img src={user.ProfilePic ? ProfilePic : ProfilePic} alt="" className='rounded-full' />
                            </div>

                            <div className="ProInfo">
                                <div className="ProName">
                                    {/* Amit shinde */}
                                    {user.name}
                                </div>
                                <div className="ProPro font-bold">
                                    {/* HR */}
                                    {user.role}
                                </div>
                                <div className="ProEmail">
                                    {/* Amit123@gmail.com */}
                                    {user.email}
                                </div>
                            </div>
                        </div>
                        </Link>


                        // <div className="img w-32 border-[#3354F4] border rounded-full ">
                        //      <img src={ProfilePic} alt="" className='rounded-full'/>
                        // </div>
                        // <div className="ProInfo">
                        //     <div className="ProName">
                        //     Amit shinde
                        //     </div>
                        //     <div className="ProEmail">
                        //     Amit123@gmail.com
                        //     </div>
                        //     <div className="ProPro">
                        //     HR
                        //     </div>
                        // </div>
                    ) : (
                        // <div className='flex gap-6 mx-5'>
                            <Link to='/profile' className='flex gap-6 mx-5'>
                            <img src={activeLI} alt="" className='scale-150'/>
                            Login /  Signup</Link>
                        // </div>
                    )}

                </div>
            </div>



        </>
    )
}

export default navbar

