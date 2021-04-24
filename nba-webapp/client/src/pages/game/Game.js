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
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TeamList from './ListItems';
import Teamtag from './Teamtag';
import Yeartag from './YearTag';
import TeamRecords from './TeamRecords';
import PlayerRecords from './PlayerRecords';




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
  toolbarIconLeft: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  toolbarIconRight: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
  appBarLeftOpen: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarRightOpen: {
    marginRight: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarBothOpen: {
    marginLeft: drawerWidth,
    marginRight: drawerWidth,
    width: `calc(100% - 2 * ${drawerWidth}px)`,
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

export default function Dashboard() {

  const classes = useStyles();
  const [leftOpen, setLeftOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(true);
  const handleLeftDrawerOpen = () => {
    setLeftOpen(true);
  };
  const handleLeftDrawerClose = () => {
    setLeftOpen(false);
  };
  const handleRightDrawerOpen = () => {
    setRightOpen(true);
  };
  const handleRightDrawerClose = () => {
    setRightOpen(false);
  };

  const [selectedTeam1, setTeam1] = useState("Boston Celtics");
  const [selectedTeamID1, setTeamID1] = useState("1610612738");
  const [selectedTeam2, setTeam2] = useState("Boston Celtics");
  const [selectedTeamID2, setTeamID2] = useState("1610612738");
  const [selectedYear, setYear] = useState("");
  const [homeRecordRows, setHomeRecordRows] = useState([]);
  const [homePlayerRows, setHomePlayerRows] = useState([]);
  const [awayPlayerRows, setAwayPlayerRows] = useState([]);



  const changeTeamHandler1 = (teamname, teamID) => {
    setTeam1(teamname)
    setTeamID1(teamID)
    updatePage(teamID, selectedTeamID2, selectedYear)
  }

  const changeTeamHandler2 = (teamname, teamID) => {
    setTeam2(teamname)
    setTeamID2(teamID)
    updatePage(selectedTeamID1, teamID, selectedYear)
  }

  const changeYearHandler = (year) => {
    setYear(year)
    updatePage(selectedTeamID1, selectedTeamID2, year)
  }

  const updatePage = (teamID1, teamID2, year) => {
    fetch("http://localhost:8081/game/hometeam/" + teamID1 + "&" + year,
      {
        method: 'GET'
      }).then(res => res.json(), err => {
        console.log(err);
      }).then(fecthedData => {
        if (!fecthedData) return;
        setHomeRecordRows(fecthedData);
      });

      fetch("http://localhost:8081/game/playerstats/" + teamID1 + "&" + year,
      {
        method: 'GET'
      }).then(res => res.json(), err => {
        console.log(err);
      }).then(fecthedData => {
        if (!fecthedData) return;
        setHomePlayerRows(fecthedData);
      });

      fetch("http://localhost:8081/game/playerstats/" + teamID2 + "&" + year,
      {
        method: 'GET'
      }).then(res => res.json(), err => {
        console.log(err);
      }).then(fecthedData => {
        if (!fecthedData) return;
        setAwayPlayerRows(fecthedData);
      });
  }


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar,
        leftOpen && !rightOpen && classes.appBarLeftOpen, rightOpen && !leftOpen && classes.appBarRightOpen, leftOpen && rightOpen && classes.appBarBothOpen)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleLeftDrawerOpen}
            className={clsx(classes.menuButton, leftOpen && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="white" noWrap className={classes.title}>
            NBA Statistics and History
          </Typography>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleRightDrawerOpen}
            className={clsx(classes.menuButton, rightOpen && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: leftOpen,
          [classes.drawerClose]: !leftOpen,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: leftOpen,
            [classes.drawerClose]: !leftOpen,
          }),
        }}
      >
        <div className={classes.toolbarIconLeft}>
          <Typography component="h1" variant="h6" color="white">
            Home Team
          </Typography>
          <IconButton onClick={handleLeftDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <TeamList onClickTeam={changeTeamHandler1} />
        </List>
        <Divider />
      </Drawer>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={4} align="center">
              {/* <Paper className={classes.paper}> */}
              <Teamtag tagname={"Home Team"} teamname={selectedTeam1} />
              {/* </Paper> */}
            </Grid>

            <Grid item xs={4} align="center">
              {/* <Paper className={classes.paper}> */}
              <Yeartag year={changeYearHandler} />
              {/* </Paper> */}
            </Grid>

            <Grid item xs={4} align="center">
              {/* <Paper className={classes.paper}> */}
              <Teamtag tagname={"Away Team"} teamname={selectedTeam2} />
              {/* </Paper> */}
            </Grid>

            {/* Team Records */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <TeamRecords rows={homeRecordRows} awayteam={selectedTeam2} />
              </Paper>
            </Grid>

            {/* Home Player Records */}
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <PlayerRecords tablename={"Home Team Players"} rows={homePlayerRows} />
              </Paper>
            </Grid>
            {/* Away Player Records */}
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <PlayerRecords tablename={"Away Team Players"} rows={awayPlayerRows} />
              </Paper>
            </Grid>


          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>

      <Drawer
        variant="permanent"
        anchor="right"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: rightOpen,
          [classes.drawerClose]: !rightOpen,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: rightOpen,
            [classes.drawerClose]: !rightOpen,
          }),
        }}
      >
        <div className={classes.toolbarIconRight}>
          <IconButton onClick={handleRightDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="white">
            Away Team
          </Typography>
        </div>
        <Divider />
        <List>
          <TeamList onClickTeam={changeTeamHandler2} />
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}