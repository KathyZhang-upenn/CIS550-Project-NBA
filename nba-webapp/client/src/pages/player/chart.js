import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, Tooltip, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import styles from "styles/homeStyle.js";



const useStyles = makeStyles(styles);

export default function Chart(props) {
  const theme = useTheme();
  console.log(props.data);



  return (
    <React.Fragment>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={props.data}
          margin={{
            top: 10,
            right: 26,
            bottom: 10,
            left: 10,
          }}
        >

          <XAxis dataKey="YEAR" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              {props.ylabel}
            </Label>
          </YAxis>
          <Tooltip />
          <Line type="monotone" dataKey="VALUE" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}