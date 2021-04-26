import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

export default function BarGraph(props) {

  console.log(props.data);
  return (
    <React.Fragment>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={props.data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="YEAR" />
          <YAxis unit={"K$"} />
          <Tooltip />
          <Legend />
          <Bar dataKey="SALARY" fill="#8884d8" />
          <Bar dataKey="RANK" fill="#82ca9d" background={{ fill: '#eee' }} />
        </BarChart>


      </ResponsiveContainer>

    </React.Fragment>

  );
}
