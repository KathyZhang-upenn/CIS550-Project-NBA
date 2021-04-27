import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import Title from './Title';

const useStyles = makeStyles({
  table: {
    minWidth: 1050,
  },
});
const Records = props => {
  const classes = useStyles();
  return (
    <TableContainer>
      <Title>{props.tablename}</Title>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">PTS</TableCell>
            <TableCell align="center">FGM</TableCell>
            <TableCell align="center">FG PCT</TableCell>
            <TableCell align="center">FG3 PCT</TableCell>
            <TableCell align="center">FT PCT</TableCell>
            <TableCell align="center">AST</TableCell>
            <TableCell align="center">REB</TableCell>
            <TableCell align="center">STL</TableCell>
            <TableCell align="center">PF</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <TableRow key={row.season + row.nickname + row.player_name + row.PTS}>
              <TableCell>{row.player_name}</TableCell>
              <TableCell align="center">{row.PTS.toFixed(1)}</TableCell>
              <TableCell align="center">{row.FGM.toFixed(1)}</TableCell>
              <TableCell align="center">{row.FG_PCT.toFixed(1)}</TableCell>
              <TableCell align="center">{row.FG3_PCT.toFixed(1)}</TableCell>
              <TableCell align="center">{row.FT_PCT.toFixed(1)}</TableCell>
              <TableCell align="center">{row.AST.toFixed(1)}</TableCell>
              <TableCell align="center">{row.REB.toFixed(1)}</TableCell>
              <TableCell align="center">{row.STL.toFixed(1)}</TableCell>
              <TableCell align="center">{row.PF.toFixed(1)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default Records;