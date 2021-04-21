import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const YearSelect = () => {
    const classes = useStyles();
    const [year, setYear] = React.useState('');
  
    const handleChange = (event) => {
      setYear(event.target.value);
    };
    return (
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">YEAR</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={year}
          onChange={handleChange}
          label="YEAR"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={2010}>2010</MenuItem>
          <MenuItem value={2011}>2011</MenuItem>
          <MenuItem value={2012}>2012</MenuItem>
          <MenuItem value={2013}>2013</MenuItem>
          <MenuItem value={2014}>2014</MenuItem>
          <MenuItem value={2015}>2015</MenuItem>
          <MenuItem value={2016}>2016</MenuItem>
          <MenuItem value={2017}>2017</MenuItem>
          <MenuItem value={2018}>2018</MenuItem>
          <MenuItem value={2019}>2019</MenuItem>
        </Select>
      </FormControl>
    );
};

export default YearSelect