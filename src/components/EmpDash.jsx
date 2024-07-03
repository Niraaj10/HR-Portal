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

  return (
    <>

      <div className="EmpDash bg-white p-7 mt-5 mr-10 rounded-xl h-[70vh]">
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
                <th className="p-5">Leave Reuest</th>
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
                              req.status === 'Pending' ? (<div className="ReqCard border flex flex-col w-full m-4 p-4 py-3 rounded-xl border-blue-500 ">
                                <div className="date flex justify-between">
                                  <div className="strDate">{req.startDate}</div>to
                                  <div className="endDate">{req.endDate}</div>
                                </div>
                                <div className="Status flex justify-between">
                                  <div className="Reason">{req.lType}</div>
                                  <div className="stat">{req.status === 'Pending' ? (req.status) : (" ")}</div>
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
