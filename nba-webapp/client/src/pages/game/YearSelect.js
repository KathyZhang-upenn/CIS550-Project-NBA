import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
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

const YearSelect = (props) => {
  const classes = useStyles();

  const handleChange = (event) => {
    props.onSelectYear(event.target.value);
  };
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">SEASON</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        onChange={handleChange}
        label="SEASON"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={2010}>2010-11</MenuItem>
        <MenuItem value={2011}>2011-12</MenuItem>
        <MenuItem value={2012}>2012-13</MenuItem>
        <MenuItem value={2013}>2013-14</MenuItem>
        <MenuItem value={2014}>2014-15</MenuItem>
        <MenuItem value={2015}>2015-16</MenuItem>
        <MenuItem value={2016}>2016-17</MenuItem>
        <MenuItem value={2017}>2017-18</MenuItem>
        {/* <MenuItem value={2018}>2018</MenuItem>
        <MenuItem value={2019}>2019</MenuItem> */}
      </Select>
    </FormControl>
  );
};

export default YearSelect