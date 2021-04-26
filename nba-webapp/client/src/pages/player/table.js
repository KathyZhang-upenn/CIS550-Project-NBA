import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';



// const useStyles = makeStyles((theme) => ({
//   seeMore: {
//     marginTop: theme.spacing(3),
//   },
// }));

export default function Table(props) {
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Detailed History
    </Typography>
      <MaterialTable size="medium">
        <TableHead>
          <TableRow>
            <TableCell>Year</TableCell>
            <TableCell>Team</TableCell>
            <TableCell>Position</TableCell>
            <TableCell>G</TableCell>
            <TableCell>GS</TableCell>
            <TableCell>MPG</TableCell>
            <TableCell>PTS</TableCell>
            <TableCell>AST</TableCell>
            <TableCell>REB</TableCell>
            <TableCell>STL</TableCell>
            <TableCell>BLK</TableCell>
            <TableCell>PER</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            /* assign an unique key to each row */
            <TableRow key={"i" + row.YEAR + "-" + row.MPG + row.PTS}>
              <TableCell>{row.YEAR}</TableCell>
              <TableCell>{row.TEAM}</TableCell>
              <TableCell>{row.POSITION}</TableCell>
              <TableCell>{row.G}</TableCell>
              <TableCell>{row.GS}</TableCell>
              <TableCell>{row.MPG}</TableCell>
              <TableCell>{row.PTS}</TableCell>
              <TableCell>{row.AST}</TableCell>
              <TableCell>{row.REB}</TableCell>
              <TableCell>{row.STL}</TableCell>
              <TableCell>{row.BLK}</TableCell>
              <TableCell>{row.PER}</TableCell>
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


