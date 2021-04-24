import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

const Records = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Records</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Season</TableCell>
            <TableCell>Games</TableCell>
            <TableCell>Win</TableCell>
            <TableCell>Loss</TableCell>
            <TableCell>Win %</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <TableRow key={row.Season}>
              <TableCell>{row.Season} - {row.Season - 1999}</TableCell>
              <TableCell>{row.Games}</TableCell>
              <TableCell>{row.Win}</TableCell>
              <TableCell>{row.Loss}</TableCell>
              <TableCell>{(row.WinR * 100).toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
export default Records;