import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import YearSelect from './YearSelect';

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

const Yeartag = (props) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>VS</Title>
            {/* <Typography component="p" variant="h4">
                VS
            </Typography> */}
            <Typography color="textSecondary" className={classes.depositContext}>
                <YearSelect onSelectYear = {props.year}/>
            </Typography>

        </React.Fragment>
    );
}

export default Yeartag