import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import TableContainer from '@material-ui/core/TableContainer';

// const useStyles = makeStyles((theme) => ({
//   seeMore: {
//     marginTop: theme.spacing(3),
//   },
// }));

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Records = props => {
  const classes = useStyles();
  return (
    <TableContainer>
      <Title>Game Records</Title>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Season</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">PTS</TableCell>
            <TableCell align="center">FT PCT</TableCell>
            <TableCell align="center">FG3 PCT</TableCell>
            <TableCell align="center">AST</TableCell>
            <TableCell align="center">REB</TableCell>
            <TableCell align="center">Home Win</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <TableRow key={row.season + row.game_time_est}>
              <TableCell align="center">{row.season - 2000} - {row.season - 1999}</TableCell>
              <TableCell align="center">{row.game_time_est}</TableCell>
              <TableCell align="center">{row.PTS_home} : {row.PTS_away}</TableCell>
              <TableCell align="center">{row.FT_PCT_home} : {row.FT_PCT_away}</TableCell>
              <TableCell align="center">{row.FG3_PCT_home} : {row.FG3_PCT_away}</TableCell>
              <TableCell align="center">{row.Ast_home} : {row.Ast_away}</TableCell>
              <TableCell align="center">{row.reb_home} : {row.reb_away}</TableCell>
              <TableCell align="center">{row.HOME_TEAM_WINS === 1 ? "Y" : "N"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default Records;