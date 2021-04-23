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
      <Title>{props.tablename}</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>PTS</TableCell>
            <TableCell>FGM</TableCell>
            <TableCell>FG PCT</TableCell>
            <TableCell>FG3 PCT</TableCell>
            <TableCell>FT PCT</TableCell>
            <TableCell>AST</TableCell>
            <TableCell>REB</TableCell>
            <TableCell>STL</TableCell>
            <TableCell>PF</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <TableRow key={row.season + row.nickname + row.player_name + row.PTS}>
              <TableCell>{row.player_name}</TableCell>
              <TableCell>{row.PTS}</TableCell>
              <TableCell>{row.FGM}</TableCell>
              <TableCell>{row.FG_PCT}</TableCell>
              <TableCell>{row.FG3_PCT}</TableCell>
              <TableCell>{row.FT_PCT}</TableCell>
              <TableCell>{row.AST}</TableCell>
              <TableCell>{row.REB}</TableCell>
              <TableCell>{row.STL}</TableCell>
              <TableCell>{row.PF}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
export default Records;