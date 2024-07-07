import React from 'react';
import { Chart } from "react-google-charts";

const AreaChart = () => {

    const data = [
        ["Year", "Sales", "Expenses", "Profit"],
        ["2021", 1000, 400, 200],
        ["2022", 1170, 460, 250],
        ["2023", 660, 1120, 300],
        ["2024", 1030, 540, 350],
      ];

      const opts = {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2021-2024",
        },
        // colors: ['#8576FF', '#7BC9FF', '#A3FFD6']
        colors: ['#3354F4', '#8576FF', '#A3FFD6']
      };

  return (
    <div>
      <Chart
      chartType="Bar"
      width="700px"
      height="300px"
      data={data}
      options={opts}
    />
    </div>
  )
}

export default AreaChart
