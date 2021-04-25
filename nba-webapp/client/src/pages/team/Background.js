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

const Background = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Background</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Founded</TableCell>
            <TableCell>Arena</TableCell>
            <TableCell>Owner</TableCell>
            <TableCell>GM</TableCell>
            <TableCell>Coach</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <TableRow key={row.Location}>
              <TableCell>{row.Founded}</TableCell>
              <TableCell>{row.Arena}</TableCell>
              <TableCell>{row.Owner}</TableCell>
              <TableCell>{row.GM}</TableCell>
              <TableCell>{row.Coach}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
export default Background;