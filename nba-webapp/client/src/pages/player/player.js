import React from 'react';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import { makeStyles } from "@material-ui/core/styles";

// material ui components
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import HeaderLinks from "components/Header/HeaderLinks.js";
import AccountCircle from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';


// header,footer of this page 
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
//import charts,tables for this page
import Chart from 'pages/player/chart.js';
import Table from 'pages/player/table.js';
import Average from 'pages/player/box.js'
import BarGraph from './barChart';
import Recommendation from './recommendationChart';

// make syles
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    marginTop: 0,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(1),

  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(5),
  },
  fixedHeight: {
    height: 370,
  },
  salary: {
    height: 370,
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(5),
  }
}));

const TEST_DATA = [
  {
    name: "GS",
    VALUE: 31.47,
    fill: "#8884d8"
  },
  {
    name: "MP",
    VALUE: 26.69,
    fill: "#83a6ed"
  },
  {
    name: "FG",
    VALUE: 15.69,
    fill: "#8dd1e1"
  },
  {
    name: "FT",
    VALUE: 8.22,

    fill: "#82ca9d"
  },
  {
    name: "FTA",
    VALUE: 8.63,

    fill: "#a4de6c"
  },
  {
    name: "AST",
    VALUE: 2.63,

    fill: "#d0ed57"
  },
  {
    name: "STL",
    VALUE: 6.67,

    fill: "#ffc658"
  }

];


const Player = props => {
  /*--states and setStates() --*/
  const classes = useStyles();
  const [tableRows, setTableRows] = React.useState([]);
  const [inputPlayer, setInputPlayer] = React.useState("");
  const [chartInfo, setChartInfo] = React.useState([]);
  const [averageInfo, setAverage] = React.useState({});
  const [salaryInfo, setSalaryChart] = React.useState([]);
  const [recommendedPlayer, setRecommendation] = React.useState([]);


  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const submitPlayer = () => {
    // Send an HTTP request to the server.
    fetch("http://localhost:8081/player/" + inputPlayer,
      {
        method: 'GET'
      }).then(res => res.json(), err => {
        console.log(err);
      }).then(playerInfoList => {
        if (!playerInfoList) return;
        console.log(playerInfoList);
        setTableRows(playerInfoList);
        console.log(tableRows);
        setChartInfo(playerInfoList.map(element => ({ YEAR: element.YEAR, VALUE: element.PER })));
        const arr = playerInfoList.map(element => element.PER);
        let years = 0;
        let total = 0;
        arr.forEach(element => {
          years++;
          total += element;
        });
        let value = Math.round(total / years);
        setAverage({ avg: value, years: years });
      }, err => {
        console.log(err);
      });

    fetch("http://localhost:8081/player/salary/" + inputPlayer,
      {
        method: 'GET'
      }).then(res => res.json(), err => {
        console.log(err);
      }).then(playerSalaryList => {
        if (!playerSalaryList) return;
        console.log(playerSalaryList);
        setSalaryChart(playerSalaryList.map(element => ({ YEAR: element.YEAR, SALARY: element.SALARY, RANK: element.SEASON_RANK })));
      }, err => {
        console.log(err);
      });

    fetch("http://localhost:8081/player/recommendation/" + inputPlayer,
      {
        method: 'GET'
      }).then(res => res.json(), err => { console.log(err); }
      ).then(recommendationList => {
        if (!recommendationList) return;
        let color = [];
        setRecommendation(recommendationList.map(obj => {
          let dataObj = {}
          dataObj["name"] = 
        }))
      })
      
      
      )
  };



return (
  <div>
    <Header
      color="white"
      brand="NBA Statistics and History"
      rightLinks={<HeaderLinks />}
      fixed
      changeColorOnScroll={{
        height: 400,
        color: "transparent"
      }}
    >
      <SportsBasketballIcon color="primary" />
    </Header>
    <CssBaseline />
    <div >
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container direction="row" className={classes.container}>
          <Grid
            container
            direction="row"
            justify="right"
            alignItems="flex-end">
            <TextField
              className={classes.margin}
              id="input-with-icon-textfield"
              label="Search Player"
              value={inputPlayer}
              onChange={e => {
                setInputPlayer(e.target.value);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              className={classes.margin}
              variant="contained"
              color="primary"
              endIcon={<Icon>send</Icon>}
              id="playerSearchButton"
              onClick={submitPlayer}
            >
              Search
            </Button>
          </Grid>
        </Container>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={4}>
            {/* <Grid items> */}
            {/* Score Chart */}
            <Grid item xs={9} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Typography component="h2" variant="h6" color="primary" gutterBottom>
                  Player Efficiency Rating History
                  </Typography>
                <Chart data={chartInfo} ylabel="Rating" />
              </Paper>
            </Grid>

            {/* Average Box */
              <Grid item xs={3} md={4} lg={3}>
                <Paper className={classes.paper}>
                  <Average averageInfo={averageInfo} />
                </Paper>
              </Grid>}

            {/* Salary BarChart */}
            <Grid item xs={12} lg={12}>
              <Paper className={classes.salary}>
                <Typography component="h2" variant="h6" color="primary" gutterBottom>
                  Salary History
                  </Typography>
                <Typography variant="body2" color="succuess" gutterBottom>
                  Note: some players have never (or for a certain period) disclosed their salaries
                  </Typography>
                <BarGraph data={salaryInfo} />
              </Paper>
            </Grid>

            {/* Table */}
            <Grid item xs={12} lg={12}>
              <Paper className={classes.paper}>
                <Table position="center" rows={tableRows} />
              </Paper>
            </Grid>
            {/* Recommendation Chart */}
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <Typography component="h2" variant="h6" color="primary" gutterBottom>
                  If you like {inputPlayer}
                </Typography>
                <Recommendation position="center" data={TEST_DATA} />
              </Paper>
            </Grid>
            <Grid item >
              <Paper className={classes.paper}>
                <Typography component="h2" variant="h6" color="primary" gutterBottom>
                  You probably like
                  </Typography>
                <Recommendation position="center" data={TEST_DATA} />
              </Paper>
            </Grid>
          </Grid>

        </Container>
      </main>
    </div>
    <Footer></Footer>
  </div>
)
}

export default Player;

