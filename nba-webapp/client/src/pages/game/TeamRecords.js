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
      <Title>Game Records</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Season</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>PTS</TableCell>
            <TableCell>FT PCT</TableCell>
            <TableCell>FG3 PCT</TableCell>
            <TableCell>AST</TableCell>
            <TableCell>REB</TableCell>
            <TableCell>Home Win</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <TableRow key={row.season + row.game_time_est}>
              <TableCell>{row.season - 2000} - {row.season - 1999}</TableCell>
              <TableCell>{row.game_time_est}</TableCell>
              <TableCell>{row.PTS_home} : {row.PTS_away}</TableCell>
              <TableCell>{row.FT_PCT_home} : {row.FT_PCT_away}</TableCell>
              <TableCell>{row.FG3_PCT_home} : {row.FG3_PCT_away}</TableCell>
              <TableCell>{row.Ast_home} : {row.Ast_away}</TableCell>
              <TableCell>{row.reb_home} : {row.reb_away}</TableCell>
              <TableCell>{row.HOME_TEAM_WINS === 1? "Y":"N"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
export default Records;