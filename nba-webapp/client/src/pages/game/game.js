import React, { useState } from 'react';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

// material ui components
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import AccountCircle from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

// header,footer of this page 
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
//import charts,tables for this page
import Table from 'pages/game/table.js';
// UI component
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

// make syles
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundImage: 'url(/assets/image/BasetballBackground.jpeg)',
  },

  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    marginTop: 4,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(1),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(4),
  },
  fixedHeight: {
    height: 370,
  },
}));


const Game = (props) => {
  const classes = useStyles();
  const [selectedSeason, setSelectedSeason] = useState("2017");
  const [selectedTeam, setSelectedTeam] = useState("");

  const [tableRows, setTableRows] = useState([]);
  const [inputPlayer, setInputPlayer] = React.useState("");
  const [chartInfo, setChartInfo] = React.useState([]);
  const [averageInfo, setAverage] = React.useState({});

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const submitPlayer = () => {
    // Send an HTTP request to the server.
    fetch("http://localhost:8081/game/" + selectedSeason,
      {
        method: 'GET'
      }).then(res => res.json(), err => {
        console.log(err);
      }).then(playerInfoList => {
        if (!playerInfoList) return;
        console.log(playerInfoList);
        setTableRows(playerInfoList);
      }, err => {
        console.log(err);
      });
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
          <Container maxWidth="lg" className={classes.container}>
            <TextField
              className={classes.margin}
              id="input-with-icon-textfield"
              label="Search Player"
              value={inputPlayer}
              onChange={e => {
                setInputPlayer(e.target.value);
                console.log(e.target.value);
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
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<Icon>send</Icon>}
              id="playerSearchButton"
              onClick={submitPlayer}
            >
              Search
            </Button>
          </Container>
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={4}>
              {/* <Grid items> */}



              {/* Table */}
              <Grid item xs={12} lg={12}>
                <Paper className={classes.paper}>
                  <Table position="center" rows={tableRows} />
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

export default Game;