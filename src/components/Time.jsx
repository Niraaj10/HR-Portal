import React, { useEffect, useState } from 'react';
import Sun from '../assets/svg/Sun.svg';
import Moon from '../assets/svg/Moon.svg';

const Time = () => {

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);


    const formateDate = (date) => {
        const pts = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, pts);
    };

    const formateTime = (date) => {
        const pts = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
        return date.toLocaleTimeString(undefined, pts);
    };
    // console.log(formateTime(currentTime));

    const isAm = currentTime.getHours() < 12;

    return (
        <div>
            {/* <img src={Sun} alt="" />
            <img src={Moon} alt="" /> */}
            <div className="time-card bg-white p-5 mt-5 rounded-xl flex flex-col hover:shadow-lg">

                <div className="TimeCont w-60 pt-8 pb-14 flex justify-center  items-center gap-5 ">
                    <div className="Icon">
                        {isAm ? <img src={Sun} alt="" className='icon-animation' /> : <img src={Moon} alt="" className='icon-animation' />}
                    </div>
                    <div>
                        <div className="time text-xl w-[150px]">{formateTime(currentTime)}</div>
                        <div className='text-xs text-gray-400'>
                            Realtime Insight
                        </div>
                    </div>

                </div>


                <div className='flex items-center pl-2 gap-4 pb-8 text-gray-400'>
                        Today : 
                    <div className="date text-lg font-semibold pl-1 text-black">
                        {formateDate(currentTime)}</div>
                </div>
            </div>
        </div>
    )
}

export default Time
