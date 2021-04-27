import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
// import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

const TeamInfo = props => {
    const classes = useStyles();
    var nf = new Intl.NumberFormat()
    return (
        <React.Fragment>
            <Title>{props.title}</Title>
            <Typography component="p" variant="h5">
                ${nf.format(props.content.toFixed(0))}
            </Typography>
        </React.Fragment>
    );
}
export default TeamInfo;