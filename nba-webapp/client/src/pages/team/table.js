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
            <TableCell>Location</TableCell>
            <TableCell>Mascot</TableCell>
            <TableCell>Arena</TableCell>
            <TableCell>Owner</TableCell>
            <TableCell>GM</TableCell>
            <TableCell>Coach</TableCell>
            <TableCell>Founded</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            /* assign an unique key to each row */
            <TableRow key={row.Mascot}>
              <TableCell>{row.Location}</TableCell>
              <TableCell>{row.Mascot}</TableCell>
              <TableCell>{row.Arena}</TableCell>
              <TableCell>{row.Owner}</TableCell>
              <TableCell>{row.GM}</TableCell>
              <TableCell>{row.Coach}</TableCell>
              <TableCell>{row.Founded}</TableCell>
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


