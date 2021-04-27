import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import TableContainer from '@material-ui/core/TableContainer';

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));
const PlayersInfo = props => {
    const classes = useStyles();
    return (
        <TableContainer>
            <Title>Players</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">G</TableCell>
                        <TableCell align="right">GS</TableCell>
                        <TableCell align="right">MPG</TableCell>
                        <TableCell align="right">PTS</TableCell>
                        <TableCell align="right">AST</TableCell>
                        <TableCell align="right">REB</TableCell>
                        <TableCell align="right">STL</TableCell>
                        <TableCell align="right">BLK</TableCell>
                        {/* <TableCell>FG%</TableCell>
                        <TableCell>3P%</TableCell>
                        <TableCell>FT%</TableCell> */}
                        <TableCell align="right">PER</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.rows.map((row) => (
                        <TableRow key={row.Name}>
                            <TableCell>{row.Name}</TableCell>
                            <TableCell align="right">{row.G}</TableCell>
                            <TableCell align="right">{row.GS}</TableCell>
                            <TableCell align="right">{row.MPG.toFixed(1)}</TableCell>
                            <TableCell align="right">{row.PTS.toFixed(1)}</TableCell>
                            <TableCell align="right">{row.AST.toFixed(1)}</TableCell>
                            <TableCell align="right">{row.REB.toFixed(1)}</TableCell>
                            <TableCell align="right">{row.STL.toFixed(1)}</TableCell>
                            <TableCell align="right">{row.BLK.toFixed(1)}</TableCell>
                            {/* <TableCell>{row.FGR}</TableCell>
                            <TableCell>{row.TPR}</TableCell>
                            <TableCell>{row.FTR}</TableCell> */}
                            <TableCell align="right">{row.PER}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default PlayersInfo;