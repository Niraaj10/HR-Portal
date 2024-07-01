import React, { useState } from 'react';
import axios from 'axios';

const LeaveReq = ({ user, userID, userRole }) => {

  // const [requsets, setRequsets] = useState([]);
  // const [newReq, setNewReq] = useState({
  //   startDate: '',
  //   endDate: '',
  //   reason: '',
  //   status: 'Pending'
  // });

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');
  const [lType, setLType] = useState('Vaction');





  return (
    <>

      <div className='LeavePage bg-white p-7 mt-5 mr-10 rounded-xl h-[70vh] flex gap-5'>


        <div className="ReqCont flex flex-col items-center w-[70%]">
          <div className='text-xl mb-5'>
            Leave Request
          </div>

          <form action="">


            <div className='flex gap-14 px-9 justify-center'>
              <div>
                <label htmlFor="startDate">Start Date: </label>
                <input type="date" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
              </div>

              <div>
                <label htmlFor="endDate">End Date :</label>
                <input type="date" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
              </div>
            </div>



            <div className=''>
              <label htmlFor="LeaveType" className=''>Leave Type: </label>

              <div className='flex gap-4 w-[100%] justify-center px-10'>

                <div className='flex flex-col justify-center items-end '>
                  <input type="radio" id='vacation' name='leaveType' value="vacation" checked={lType === 'Vacation'} onChange={() => setLType('Vacation')} className='peer mb-3 hidden' />
                  <label htmlFor="vacation" className=' justify-between text-[#3354F4] w-full border border-2 border-[#3354F4] peer-checked:bg-[#3354F4] peer-checked:text-white p-5 px-9 rounded-2xl hover:bg-[#2d50ff] hover:text-white hover:border-white'>
                    Vacation
                  </label>
                </div>

                <div className=' flex flex-col justify-center items-end'>
                  <input type="radio" id='medical' name='leaveType' value="Medical" checked={lType === 'Medical'} onChange={() => setLType('Medical')} className='peer mb-3 hidden' />
                  <label htmlFor="medical" className=' justify-between text-[#3354F4] w-full border border-2 border-[#3354F4] peer-checked:bg-[#3354F4] peer-checked:text-white p-5 px-9 rounded-2xl hover:bg-[#2d50ff] hover:text-white hover:border-white'>
                    Medical
                  </label>
                </div>

                <div className=' flex flex-col justify-center items-center'>
                  <input type="radio" id='casual' name='leaveType' value="casual" checked={lType === 'Casual'} onChange={() => setLType('Casual')} className='peer mb-3 hidden' />
                  <label htmlFor="casual" className=' justify-between text-[#3354F4] w-fullborder border-2 border-[#3354F4] peer-checked:bg-[#3354F4] peer-checked:text-white p-5 px-9 rounded-2xl hover:bg-[#2d50ff] hover:text-white hover:border-white'>
                    Casual
                  </label>
                </div>

                <div className=' flex flex-col justify-center items-center'>
                  <input type="radio" id='mat' name='leaveType' value="mat" checked={lType === 'Maternity'} onChange={() => setLType('Maternity')} className='peer mb-3 hidden' />
                  <label htmlFor="mat" className=' justify-between text-[#3354F4] w-fullborder border-2 border-[#3354F4] peer-checked:bg-[#3354F4] peer-checked:text-white p-5 px-9 rounded-2xl hover:bg-[#2d50ff] hover:text-white hover:border-white'>
                    Maternity
                  </label>
                </div>

                <div className=' flex flex-col justify-center items-center'>
                  <input type="radio" id='other' name='leaveType' value="Other" checked={lType === 'Other'} onChange={() => setLType('Other')} className='peer mb-3 hidden' />
                  <label htmlFor="other" className=' justify-between text-[#3354F4] w-fullborder border-2 border-[#3354F4] peer-checked:bg-[#3354F4] peer-checked:text-white p-5 px-9 rounded-2xl hover:bg-[#2d50ff] hover:text-white hover:border-white'>
                    Other
                  </label>
                </div>





              </div>

            </div>

            <div>
              <label htmlFor="reason">Reason: </label>
              <textarea name="Reason" id="reason" value={reason} onChange={(e) => setReason(e.target.value)}></textarea>
            </div>

            <button type="submit"> Submit </button>

          </form>

        </div>

        <div className="ReqCont">
          Leave History
        </div>



      </div>
    </>
  )
}

export default LeaveReq
