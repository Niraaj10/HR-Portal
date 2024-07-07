import React from 'react'
import DepPie from './DepPie'
import AreaChart from './AreaChart'
import Time from './Time'

const Dashboard = () => {
  return (
    <>

      <div className='Dashboard border border-red-600 h-[75vh] mr-9 mt-[-6px]'>

        <div className='text-[#3354F4] font-bold '>
          DASHBOARD
        </div>

<div className='pl-0 p-5 pt-0 mt-[-15px] flex'>
<Time />
</div>




        <div className='flex w-100vw gap-14'>

          <div className='PieChart rounded-2xl p-2 w-fit bg-white pr-8 '>
            <DepPie />
          </div>

          <div className='AreaChart  rounded-2xl p-5 w-fit bg-white '>
            <AreaChart />
          </div>

        </div>
      </div>

    </>
  )
}

export default Dashboard
