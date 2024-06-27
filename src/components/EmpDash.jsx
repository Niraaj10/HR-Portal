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
          <tr className='border-b-2'>
            <th className="p-5">ID</th>
            <th className="p-5">Name</th>
            <th className="p-5">Role</th>
            <th className="p-5">Department</th>
            <th className="p-5">E-mail</th>
          </tr>
         </thead>

         <tbody>
          {
            employees.map(employee => (
              <tr key={employee.emp_id} className='border-b'>
                <td className="p-4">{employee.emp_id}</td>
                <td className="p-4">{employee.name}</td>
                <td className="p-4">{employee.role}</td>
                <td className="p-4">{employee.department}</td>
                <td className="p-4">{employee.email}</td>
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
