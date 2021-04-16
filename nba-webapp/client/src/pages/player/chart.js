import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';

import styles from "styles/homeStyle.js";

// Player Data
function createData(time, score) {
  return { time, score };
}

const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', undefined),
];

const useStyles = makeStyles(styles);

export default function Chart(props) {
  const theme = useTheme();
  const classes = useStyles();
  // const chartInfo = [];
  // props.map(row => {
  //   chartInfo.push({ YEAR: row.YEAR, VALUE: row.THREEP })
  //   return chartInfo;
  // });

  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        3-Point Score History
    </Typography>
      <ResponsiveContainer>
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
              Scores
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="VALUE" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}