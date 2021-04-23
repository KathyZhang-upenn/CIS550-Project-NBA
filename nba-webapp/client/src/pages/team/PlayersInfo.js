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
const PlayersInfo = props => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>Players</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>G</TableCell>
                        <TableCell>GS</TableCell>
                        <TableCell>MPG</TableCell>
                        <TableCell>PTS</TableCell>
                        <TableCell>AST</TableCell>
                        <TableCell>REB</TableCell>
                        <TableCell>STL</TableCell>
                        <TableCell>BLK</TableCell>
                        {/* <TableCell>FG%</TableCell>
                        <TableCell>3P%</TableCell>
                        <TableCell>FT%</TableCell> */}
                        <TableCell>PER</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.rows.map((row) => (
                        <TableRow key={row.Name}>
                            <TableCell>{row.Name}</TableCell>
                            <TableCell>{row.G}</TableCell>
                            <TableCell>{row.GS}</TableCell>
                            <TableCell>{row.MPG.toFixed(1)}</TableCell>
                            <TableCell>{row.PTS.toFixed(1)}</TableCell>
                            <TableCell>{row.AST.toFixed(1)}</TableCell>
                            <TableCell>{row.REB.toFixed(1)}</TableCell>
                            <TableCell>{row.STL.toFixed(1)}</TableCell>
                            <TableCell>{row.BLK.toFixed(1)}</TableCell>
                            {/* <TableCell>{row.FGR}</TableCell>
                            <TableCell>{row.TPR}</TableCell>
                            <TableCell>{row.FTR}</TableCell> */}
                            <TableCell>{row.PER}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    );
}
export default PlayersInfo;