import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

const Teamtag = (props) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>{props.tagname}</Title>
            <Typography component="p" variant="h4">
                {props.teamname}
            </Typography>
            {/* <Typography color="textSecondary" className={classes.depositContext}>
                <YearSelect onSelectYear = {props.year}/>
            </Typography> */}

        </React.Fragment>
    );
}

export default Teamtag