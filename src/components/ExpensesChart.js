import React from "react";

import Chart from "./chart/chart";

function ExpensesChart(props) {
  const datapointsArray = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sept", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 }
  ];

  props.expenses.map((ele) => {
    const eleMonth = new Date(ele.date).getMonth();
    datapointsArray[eleMonth].value += ele.amount;
    return null;
  });

  return <Chart datapoints={datapointsArray} />;
}

export default ExpensesChart;
