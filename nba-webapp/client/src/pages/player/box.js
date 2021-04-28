
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Average(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>On Average</Typography>
      <Typography component="h1" variant="h1" align="center" >
        {props.averageInfo.avg}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext} align="center">
        PER in total <Typography variant="h5" color="primary">{props.averageInfo.years}</Typography> years
      </Typography>

    </React.Fragment>
  );
}