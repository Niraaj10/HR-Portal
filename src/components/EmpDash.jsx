import axios from 'axios';
import React, { useEffect, useState } from 'react'


const EmpDash = () => {

  const [employees, setEmployees] = useState([]);



  useEffect(() => {
    fetch('/src/data/EmpData.json')
      .then(response => response.json())
      .then(data => setEmployees(data))
      .catch(error =>
        console.error('Error fetching employee data', error)
      );
  }, []);


  const handleReq = async (empId, leaveId, status) => {
    try {
        const response = await axios.put(`http://localhost:5000/employees/${empId}/leaveRequests/${leaveId}`, { status });

        if (response.status === 200) {
          setEmployees(prevEmps => 
            prevEmps.map(emp => 
              emp.emp_id === empId ? {
                ...emp, 
                leaveRequests: emp.leaveRequests.map(leaveReq => 
                  leaveReq.id === leaveId ? { ...leaveReq, status} : leaveReq
                )
              } : emp
            )
          );
        } else {
          console.error('Error updationg leave request: ', response.data.message);
        }
    } catch (error) {
      console.error('Error updating...', error);
    }
  }

  return (
    <>

      <div className="EmpDash bg-white p-7 mt-5 mr-10 rounded-xl h-[70vh] hover:shadow-xl">
        Empolyee Table

        <div className="empTable m-5 h-[58vh] border-t pb-5 overflow-y-scroll scrollbar-hide ">
          <table className='emp-Table  w-full '>
            <thead className='h-19 text-left'>
              <tr className='border-b-2 '>
                <th className="p-5">ID</th>
                <th className="p-5">Name</th>
                <th className="p-5">Role</th>
                <th className="p-5">Department</th>
                <th className="p-5">E-mail</th>
                <th className="p-5 text-center">Leave Reuest</th>
                {/* <th className="p-5">Leave Reuest</th> */}
              </tr>
            </thead>

            <tbody>
              {
                employees.map(employee => (
                  <tr key={employee.emp_id} className='border-b h-[100px]'>
                    <td className="p-4">{employee.emp_id}</td>
                    <td className="p-4">{employee.name}</td>
                    <td className="p-4">{employee.role}</td>
                    <td className="p-4">{employee.department}</td>
                    <td className="p-4">{employee.email}</td>
                    <td className=" flex flex-col items-center justify-center">{
                      employee.leaveRequests && employee.leaveRequests.length > 0 ? (
                        // <div className='w-[350px] px-8 h-[500px] overflow-y-auto overflow-x-hidden scrollbar-hide'>
                        <div className="div overflow-x-hidden overflow-y-scroll px-4 scrollbar-hide flex flex-col justify-center h-[100px] ">

                          {
                            employee.leaveRequests.map(req => (
                              req.status === 'Pending' ? (<div className="ReqCard border flex w-full m-4 p-4 py-3 rounded-xl border-blue-500 gap-3">
                                <div>
                                <div className="date flex justify-between">
                                  <div className="strDate">{req.startDate}</div>to
                                  <div className="endDate">{req.endDate}</div>
                                </div>
                                <div className="Status flex justify-between">
                                  <div className="Reason">{req.lType}</div>
                                  <div className="stat">{req.status === 'Pending' ? (req.status) : (" ")}</div>
                                </div>
                                </div>
                                <div className="flex p-2 justify-center items-center">
                                <button
                                  className="mr-2 bg-blue-500 text-white px-2 py-2 rounded-xl"
                                  onClick={() => handleReq(employee.emp_id, req.id, 'Approved')}
                                >
                                  Approve
                                </button>
                                <button
                                  className="bg-red-500 text-white px-2 py-2 rounded-xl"
                                  onClick={() => handleReq(employee.emp_id, req.id, 'Rejected')}
                                >
                                  Reject
                                </button>
                              </div>
                              </div>) : ('')

                            ))
                          }


                        </div>

                        // </div>

                      ) : (
                        <div className="div h-[95px] flex flex-col justify-center">
                          No leave Request
                        </div>
                        // <td className="p-4 flex flex-col justify-center h-[95px]"> No leave Request</td>
                      )
                    }</td>

                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>




      </div>

    </>
  )
}

export default EmpDash
