import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import axios from 'axios';

const DepPie = () => {

    const [employees, setEmployees] = useState([]);
    const [depData, setDepData] = useState([]);

    useEffect(() => {
        axios.get('/src/data/EmpData.json')
        .then(resp => {
            setEmployees(resp.data);
            // console.log(resp.data)
            calDepData(resp.data)
        }).catch(err => console.error("Error fetching data", err));
    }, []);     

    const calDepData = (employees) => {
        const depaCounts = employees.reduce((acc, employee) => {
            // console.log(acc);
            // console.log(employee)
            acc[employee.department] = (acc[employee.department] || 0 ) + 1;
            return acc;
        }, {});
        console.log(depaCounts)
  
        const totalEmps = employees.length;
        // console.log(totalEmps);

        const data = [['Department', 'Percentage']];

        // console.log(Object.keys(depaCounts));
        Object.keys(depaCounts).forEach(depa => {
            console.log(depaCounts[depa])
            data.push([depa, (depaCounts[depa] / totalEmps) * 100]);
        });

        setDepData(data);
    }

    const opts = {
        title: 'Employee Dept Distribution',
        pieHole: 0.4,
        is3D: true,
        colors: ['#8576FF', '#3354F4', '#A3FFD6', '#C47AFF', '#F0E9D2'],
    };


  return (
    <>
    <div className="w-[30vw] h-[30vh] rounded-2xl">
      {/* <h2>Employee Department Distribution</h2> */}
      <Chart
        chartType='PieChart'
        width='500px'
        height='300px'
        data={depData}
        options={opts}
        className='rounded-2xl'
      />
    </div>
      
    </>
  )
}


export default DepPie
