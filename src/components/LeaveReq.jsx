import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const LeaveReq = ({ user, userID, userRole }) => {

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');
  const [lType, setLType] = useState('Vaction');

  // const [leaveHist, setLeaveHist] = useState([]);

  console.log(user.leaveRequests);

  const LeaveReqs = user.lleaveRequests;



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/LeaveReq', {
        empId: user.emp_id,
        empName: user.name,
        reason,
        startDate,
        endDate,
        lType,
        status: 'Pending'
      });

      console.log(response.data);

      if (response.data.success) {
        //Leave History update
        setLeaveHist(prevHist => [...prevHist, response.data.LeaveReq]);

        setStartDate('');
        setEndDate('');
        setReason('');
        setLType('Vacation');
        alert('Leave request submitted successfully!');
      } else {
        console.error('Error submitting leave request:', response.data.message);
        alert('Failed to submit leave request');
      }
    } catch (error) {
      console.error('Error submitting leave request:', error);
      alert('Failed to submit leave request');
    }
  };

  return (
    <>

      <div className='LeavePage bg-white p-7 mt-5 mr-10 rounded-xl h-[70vh] flex gap-5'>


        <div className="ReqCont flex flex-col items-center w-[70%]">
          <div className='text-xl mb-5 underline'>
            Leave Request
          </div>

          <form onSubmit={handleSubmit}>


            <div className='flex gap-14 px-9 justify-center py-4'>
              <div className='border border-[#3354F4] px-5 py-2 rounded-xl'>
                <label htmlFor="startDate">Start Date: </label>
                <input type="date" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
              </div>

              <div className='border border-[#3354F4] px-5 py-2 rounded-xl'>
                <label htmlFor="endDate">End Date :</label>
                <input type="date" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
              </div>
            </div>



            <div className='mt-5'>
              <label htmlFor="LeaveType" className=''>Leave Type: </label>

              <div className='flex gap-4 w-[100%] justify-center px-10 py-8'>

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

            <div className='flex flex-col '>
              <label htmlFor="reason">Reason: </label>
              <textarea name="Reason" id="reason" value={reason} onChange={(e) => setReason(e.target.value)} className='border rounded-2xl border-[#3354F4] my-5 mx-10'></textarea >
            </div>

            <button type="submit" className='bg-[#3354F4] py-3 rounded-xl text-white w-fit px-8'> Submit </button>

          </form>

        </div>

        <div className="ReqCont">
          Leave History

          {/* <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Reason</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {user.leaveRequests.map(request => (
                <tr key={request.id}>
                  <td>{request.id}</td>
                  <td>{request.reason}</td>
                  <td>{request.startDate}</td>
                  <td>{request.endDate}</td>
                  <td>{request.status}</td>
                </tr>
              ))}
            </tbody>
          </table> */}


          {
            user.leaveRequests.map(req => (
              <div className="ReqCard border flex flex-col w-full m-4 p-4 rounded-xl border-blue-500 ">
                <div className="date flex justify-between">
                  <div className="strDate">{req.startDate}</div>to
                  <div className="endDate">{req.endDate}</div>
                </div>
                <div className="Status flex justify-between">
                  <div className="Reason">{req.reason}</div>
                  <div className="stat">{req.status}</div>
                </div>
              </div>
            ))
          }

        </div>



      </div>
    </>
  )
}

export default LeaveReq
