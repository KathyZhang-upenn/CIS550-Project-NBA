import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Table(props) {
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Detailed History
    </Typography>
      <MaterialTable size="small">
        <TableHead>
          <TableRow>
            <TableCell>Year</TableCell>
            <TableCell>Team</TableCell>
            <TableCell>Position</TableCell>
            <TableCell>3 Points</TableCell>
            <TableCell>MP</TableCell>
            <TableCell align="center">PTS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            /* assign an unique key to each row */
            <TableRow key={"i" + row.YEAR + "-" + row.MP + row.PTS}>
              <TableCell>{row.YEAR}</TableCell>
              <TableCell>{row.TEAM}</TableCell>
              <TableCell>{row.POSITION}</TableCell>
              <TableCell>{row.THREEP}</TableCell>
              <TableCell>{row.MP}</TableCell>
              <TableCell align="center">{row.PTS}</TableCell>
            </TableRow>
          ))}
          {/* a better way to rewrite the above lines with repeating would 
            be using map() like this : 
            { {row.map(cell => <TableCell>{cell.value}</TableCell>)} } */}
        </TableBody>
      </MaterialTable>

    </React.Fragment>
  );
}


