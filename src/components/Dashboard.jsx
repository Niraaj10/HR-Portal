import React from 'react'
import DepPie from './DepPie'
import AreaChart from './AreaChart'
import Time from './Time'
import EmpInfo from './empPer'
import LeaveContainer from './LeaveContainer'

const Dashboard = () => {
  return (
    <>

      <div className='Dashboard h-[75vh] mr-9 mt-[-25px] pt-5'>

        {/* <div className='text-[#3354F4] font-bold '>
          DASHBOARD
        </div> */}


        <div className='flex '>


          <div className='pl-0 p-5 pt-0 mt-[-15px] flex flex-col gap-5' >

            <div className='flex gap-5'>
              <Time />
              <EmpInfo />
            </div>

            <div className='AreaChart  rounded-2xl p-5 w-fit bg-white hover:shadow-lg'>
              <AreaChart />
            </div>
          </div>






          <div className='flex flex-col gap-5 mt-[5px]'>

            <div>
              <LeaveContainer />
            </div>

            <div className='PieChart rounded-2xl p-2 w-fit bg-white pr-8 hover:shadow-lg'>
              <DepPie />
            </div>

          </div>

        </div>

      </div>

    </>
  )
}

export default Dashboard
