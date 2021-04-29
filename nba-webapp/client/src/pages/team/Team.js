import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import TeamList from './ListItems';
import Teamtag from './Teamtag';
import Records from './Records';
import PlayersInfo from './PlayersInfo';
import PlayerTable from './PlayerTable';
import TeamInfo from './TeamInfo';
import Background from './Background';
import Header from "components/Header/Header.js";
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import Footer from "components/Footer/Footer.js";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
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
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },

  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(10),
    },
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

const Team = () => {

  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [selectedTeam, setTeam] = useState("Boston Celtics");
  const [selectedTeamID, setTeamID] = useState("1610612738");
  const [selectedYear, setYear] = useState("");
  const [recordRows, setRecordRows] = useState([]);
  const [playerRows, setPlayerRows] = useState([]);
  const [background, setBackground] = useState([]);
  const [avgsalary, setAvgSalary] = useState(0);
  const [topsalary, setTopSalary] = useState(0);
  const [scorer, setScorer] = useState([]);
  const [rebounder, setRebounder] = useState([]);
  const [player, setPlayer] = useState([]);
  const [playedPlayer, setPlayedPlayer] = useState([]);
  const [assister, setAssister] = useState([]);
  const [shooter, setShooter] = useState([]);


  const changeTeamHandler = (teamname, teamID) => {
    setTeam(teamname)
    setTeamID(teamID)
    updatePage(teamID, selectedYear)
  }

  const changeYearHandler = (year) => {
    setYear(year)
    updatePage(selectedTeamID, year)
  }

  const updatePage = (teamID, year) => {
    fetch("http://localhost:8081/team/records/" + teamID + "&" + year,
      {
        method: 'GET'
      }).then(res => res.json(), err => {
        console.log(err);
      }).then(fecthedTeamInfoList => {
        if (!fecthedTeamInfoList) return;
        //console.log(teamInfoList);
        setRecordRows(fecthedTeamInfoList);
      });

    fetch("http://localhost:8081/team/players/" + teamID + "&" + year,
      {
        method: 'GET'
      }).then(res => res.json(), err => {
        console.log(err);
      }).then(fetchedPlayersList => {
        if (!fetchedPlayersList) return;
        //console.log(playersList);
        setPlayerRows(fetchedPlayersList);
      });

    fetch("http://localhost:8081/team/info/" + teamID,
      {
        method: 'GET'
      }).then(res => res.json(), err => {
        console.log(err);
      }).then(fetchedTeamInfo => {
        if (!fetchedTeamInfo) return;
        // console.log(fetchedTeamInfo);
        if (fetchedTeamInfo.length != 0) {
          setBackground(fetchedTeamInfo);
        }
      });

    fetch("http://localhost:8081/team/avgsalary/" + teamID + "&" + year,
      {
        method: 'GET'
      }).then(res => res.json(), err => {
        console.log(err);
      }).then(fetchedData => {
        if (!fetchedData) return;
        // console.log(fetchedData);
        if (fetchedData.length != 0) setAvgSalary(fetchedData[0].AVG_SALARY);
        else setAvgSalary("");
      });

    fetch("http://localhost:8081/team/totalsalary/" + teamID + "&" + year,
      {
        method: 'GET'
      }).then(res => res.json(), err => {
        console.log(err);
      }).then(fetchedData => {
        if (!fetchedData) return;
        // console.log(fetchedTeamInfo);
        if (fetchedData.length != 0) setTopSalary(fetchedData[0].SUM_SALARY);
        else setTopSalary("")
      });

    fetch("http://localhost:8081/team/scorer/" + teamID + "&" + year,
      {
        method: 'GET'
      }).then(res => res.json(), err => {
        console.log(err);
      }).then(fetchedData => {
        if (!fetchedData) return;
        setScorer(fetchedData);
      });

    fetch("http://localhost:8081/team/rebounder/" + teamID + "&" + year,
      {
        method: 'GET'
      }).then(res => res.json(), err => {
        console.log(err);
      }).then(fetchedData => {
        if (!fetchedData) return;
        setRebounder(fetchedData);
      });

    fetch("http://localhost:8081/team/player/" + teamID + "&" + year,
      {
        method: 'GET'
      }).then(res => res.json(), err => {
        console.log(err);
      }).then(fetchedData => {
        if (!fetchedData) return;
        setPlayer(fetchedData);
      });

    fetch("http://localhost:8081/team/playedplayer/" + teamID + "&" + year,
      {
        method: 'GET'
      }).then(res => res.json(), err => {
        console.log(err);
      }).then(fetchedData => {
        if (!fetchedData) return;
        setPlayedPlayer(fetchedData);
      });

    fetch("http://localhost:8081/team/assister/" + teamID + "&" + year,
      {
        method: 'GET'
      }).then(res => res.json(), err => {
        console.log(err);
      }).then(fetchedData => {
        if (!fetchedData) return;
        setAssister(fetchedData);
      });

    fetch("http://localhost:8081/team/stealer/" + teamID + "&" + year,
      {
        method: 'GET'
      }).then(res => res.json(), err => {
        console.log(err);
      }).then(fetchedData => {
        if (!fetchedData) return;
        setShooter(fetchedData);
      });


  }


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <SportsBasketballIcon color="white" />
          <Typography component="h1" variant="h6" color="transparent" noWrap className={classes.title}>
            NBA Statistics and History
          </Typography>

        </Toolbar>
      </AppBar>
      {/* <Header
        color="transparent"
        brand="NBA Statistics and History"
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
      >
        <SportsBasketballIcon color="primary" />
      </Header> */}
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbarIcon}>
          <Typography component="h1" variant="h6" color="white">
            Teams
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <TeamList onClickTeam={changeTeamHandler} />
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Teamtag teamname={selectedTeam} year={changeYearHandler} />
              </Paper>
            </Grid>

            {/* Team Info */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Background rows={background} />
              </Paper>
            </Grid>
            {/* Team Records */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Records rows={recordRows} />
              </Paper>
            </Grid>

            {/* Team Info */}
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <TeamInfo title={"Average Salary"} content={avgsalary} />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <TeamInfo title={"Total Salary"} content={topsalary} />
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <PlayerTable title={"Top Scorer"} measure={"PTS"} rows={scorer} />
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <PlayerTable title={"Top Rebounder"} measure={"REB"} rows={rebounder} />
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <PlayerTable title={"Top Baller"} measure={"PER"} rows={player} />
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <PlayerTable title={"Top Hustler"} measure={"MP"} rows={playedPlayer} />
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <PlayerTable title={"Top Assister"} measure={"AST"} rows={assister} />
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <PlayerTable title={"Top Stealer"} measure={"STL"} rows={shooter} />
              </Paper>
            </Grid>
            {/* Team Players */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <PlayersInfo rows={playerRows} />
              </Paper>
            </Grid>
          </Grid>
          <Footer />
        </Container>
      </main>
    </div>
  );
}
export default Team;