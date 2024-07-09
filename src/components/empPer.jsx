import React, { useEffect, useState } from 'react';
import axios from 'axios';
import add from '../assets/svg/add.svg';
import Emps from '../assets/svg/emps.svg';
import Aemps from '../assets/svg/Aemp.svg';
import Pro from '../assets/svg/Pro.svg';
import up from '../assets/svg/up.svg';
import work from '../assets/svg/work.svg';

const empPer = () => {
    const [empNo, setEmpNo] = useState([]);


    useEffect(() => {
        axios.get('/src/data/EmpData.json')
            .then(resp => {
                setEmpNo(resp.data);
                // console.log(resp.data)
            }).catch(err => console.error("Error fetching data", err));
    }, []);

    return (
        <>
            <div className="empInfo grid grid-cols-2 gap-6 pt-5">

                <div className="emp w-52 bg-white rounded-xl p-4 flex justify-between flex-col hover:shadow-lg">
                    <div className='flex justify-between'>
                        <div className='text-3xl'>{empNo.length}</div>

                        <div  className='bg-blue-50 p-3 rounded-full'>
                        <img src={Emps} alt=""/>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='pb-1 text-sm'>Total Employees</div>
                        <div className='flex text-xs gap-1 text-gray-500'>
                            <img src={add} alt="" className='w-[16px]' />
                            2 new employee added!
                        </div>
                    </div>
                </div>
                
                <div className="emp w-52 bg-white rounded-xl p-4 flex justify-between flex-col hover:shadow-lg">
                    <div className='flex justify-between'>
                        <div className='text-3xl'>5</div>

                        <div  className='bg-blue-50 p-3 rounded-full'>
                        <img src={Aemps} alt=""/>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='pb-1 text-sm'>Available Positions</div>
                        <div className='flex text-xs gap-1 text-gray-500'>
                            <img src={add} alt="" className='w-[16px]' />
                            2 
                        </div>
                    </div>
                </div>
                
                <div className="emp w-52 bg-white rounded-xl p-4 flex justify-between flex-col hover:shadow-lg">
                    <div className='flex justify-between'>
                        <div className='text-3xl'>4</div>

                        <div  className='bg-blue-50 p-3 rounded-full'>
                        <img src={Pro} alt=""/>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='pb-1 text-sm'>On going Projects</div>
                        <div className='flex text-xs gap-1 text-gray-500'>
                            <div className='bg-green-100 rounded-full'>
                            <img src={up} alt="" className='w-[16px]' />
                            </div>

                            64% work Done 
                        </div>
                    </div>
                </div>
                
                <div className="emp w-52 bg-white rounded-xl p-4 flex justify-between flex-col hover:shadow-lg">
                    <div className='flex justify-between items-start'>
                        <div className='text-2xl'>Todays Meetings</div>

                        <div  className='bg-blue-50 p-3 rounded-full'>
                        <img src={work} alt=""/>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='pb-1 text-sm'>at. 9:30</div>
                    </div>
                </div>
                





                {/* <div className="emp w-52 bg-white rounded-xl"> 10</div>

                <div className="emp w-52 bg-white rounded-xl"> 10</div>

                <div className="emp w-52 bg-white rounded-xl"> 10</div> */}

            </div>
        </>
    )
}

export default empPer
