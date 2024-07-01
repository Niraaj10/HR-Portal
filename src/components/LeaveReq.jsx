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


        <div className="ReqCont w-[70%]">
          Leave Request Page

          <form action="">


            <div>
              <div>
                <label htmlFor="startDate">Start Date: </label>
                <input type="date" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
              </div>

              <div>
                <label htmlFor="endDate">End Date :</label>
                <input type="date" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
              </div>

            </div>

            

            <div>
              <label htmlFor="LeaveType">Leave Type: </label>
              <div>
                <input type="radio" id='vacation' name='leaveType' value="Vacation" checked={lType === 'Vacation'} onChange={() => setLType('Vacation')} />
                <label htmlFor="vacation">Vacation</label>
              </div>
              <div>
                <input type="radio" id='medical' name='leaveType' value="Medical" checked={lType === 'Medical'} onChange={() => setLType('Medical')} />
                <label htmlFor="medical">Medical</label>
              </div>
              <div>
                <input type="radio" id='other' name='leaveType' value="Other" checked={lType === 'Other'} onChange={() => setLType('Other')} />
                <label htmlFor="other">Other</label>
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
