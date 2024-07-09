import React, { useEffect, useState } from 'react';
import axios from 'axios';
import add from '../assets/svg/add.svg';

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

                <div className="emp w-52 bg-white rounded-xl p-4">
                    <div className='flex justify-between'>
                        <div className='text-3xl'>{empNo.length}</div>
                        <img src="" alt="" />
                    </div>
                    <div className='flex flex-col'>
                        <div>Total Employees</div>
                        <div className='flex text-xs'>
                            <img src={add} alt="" className='w-[16px]' />
                            2 new employee added!
                        </div>
                    </div>
                </div>

                <div className="emp w-52 bg-white rounded-xl"> 10</div>

                <div className="emp w-52 bg-white rounded-xl"> 10</div>

                <div className="emp w-52 bg-white rounded-xl"> 10</div>

            </div>
        </>
    )
}

export default empPer
