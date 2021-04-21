import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import YearSelect from './YearSelect';

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
            <Title>Team</Title>
            <Typography component="p" variant="h4">
                {props.teamname}
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                <YearSelect />
            </Typography>

        </React.Fragment>
    );
}

export default Teamtag