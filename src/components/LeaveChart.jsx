import React from "react";
import { Chart } from "react-google-charts";
  
  const LeaveChart = () => {

    const data = [
        [
            { type: "string", label: "Day" },
            { type: "number", label: "Attendance (hours)" },
            { id: "i0", type: "number", role: "interval" },
            { id: "i1", type: "number", role: "interval" },
            { id: "i2", type: "number", role: "interval" },
            { id: "i2", type: "number", role: "interval" },
            { id: "i2", type: "number", role: "interval" },
            { id: "i2", type: "number", role: "interval" },
          ],
          ["Monday", 8, 7, 9, 6, 7, 8, 9],    // Monday: 8 hours of work
          ["Tuesday", 7, 6, 8, 5, 6, 7, 8],   // Tuesday: 7 hours of work
          ["Wednesday", 6, 5, 7, 4, 5, 6, 7], // Wednesday: 6 hours of work
          ["Thursday", 8, 7, 9, 6, 7, 8, 9],  // Thursday: 8 hours of work
          ["Friday", 9, 8, 10, 7, 8, 9, 10],  // Friday: 9 hours of work
          ["Monday", 8, 7, 9, 6, 7, 8, 9],    // Next Monday: 8 hours of work
          ["Tuesday", 7, 6, 8, 5, 6, 7, 8],   // Next Tuesday: 7 hours of work
          ["Wednesday", 6, 5, 7, 4, 5, 6, 7], // Next Wednesday: 6 hours of work
          ["Thursday", 8, 7, 9, 6, 7, 8, 9],  // Next Thursday: 8 hours of work
          ["Friday", 9, 8, 10, 7, 8, 9, 10],  // Next Friday: 9 hours of work
        ];
    const options = {
        title: "Attendance Comparison ",
        curveType: "function",
        series: [{ color: "#3354F4" }],
        intervals: { style: "area" },
        legend: "none",
      };

    return (
      <div>
        <Chart
        chartType="LineChart"
        width="800px"
        height="300px"
        data={data}
        options={options}
      />
      </div>
    )
  }
  
  export default LeaveChart
  