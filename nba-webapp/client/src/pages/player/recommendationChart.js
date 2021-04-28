import React from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";


const style = {
  top: 0,
  left: 350,
  lineHeight: "24px"
};
export default function Recommendation(props) {


  return (
    <React.Fragment>
      <RadialBarChart
        width={500}
        height={300}
        cx={150}
        cy={150}
        innerRadius={20}
        outerRadius={140}
        barSize={10}
        data={props.data}
      >
        <RadialBar
          minAngle={15}

          background
          clockWise
          dataKey="VALUE"
        />
        <Legend
          iconSize={15}
          width={150}
          height={170}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={style}
        />
      </RadialBarChart>

    </React.Fragment>
  );


}