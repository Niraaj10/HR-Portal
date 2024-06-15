import React from 'react'
import ProfilePic from '../assets/img/Pro.webp'

const navbar = () => {
    return (
        <>
            <div className="Navbarr  bg-white m-10 p-6 h-24 flex justify-between items-center rounded-xl ">
                <div className="logo font-anton text-7xl text-[#3354F4]"> HR </div>

                <div className="Profile flex gap-6 items-center">
                    <div className="img w-32 border-[#3354F4] border rounded-full ">
                        <img src={ProfilePic} alt="" className='rounded-full'/>
                    </div>
                    <div className="ProInfo">
                        <div className="ProName">
                            Amit shinde
                        </div>
                        <div className="ProEmail">
                            Amit123@gmail.com
                        </div>
                        <div className="ProPro">
                            HR
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default navbar

