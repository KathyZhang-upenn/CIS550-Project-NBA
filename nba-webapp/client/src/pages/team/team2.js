import React, { useState } from 'react';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';


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
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';


// header,footer of this page 
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
//import charts,tables for this page

import Table from 'pages/team/table.js';
import ListPlayer from 'pages/team/list.js';



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


const Team = props => {
  /*--states and setStates() --*/
  const classes = useStyles();
  const [tableRows, setTableRows] = useState([]);
  const [inputTeam, setInputTeam] = useState("");
  const [inputYear, setInputYear] = useState("");


  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const selectTeam = () => {
    // Send an HTTP request to the server.
    fetch("http://localhost:8081/team/" + inputTeam,
      {
        method: 'GET'
      }).then(res => res.json(), err => {
        console.log(err);
      }).then(teamInfoList => {
        if (!teamInfoList) return;
        console.log(teamInfoList);
        setTableRows(teamInfoList);
      }, err => {
        console.log(err);
      });
  };

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
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <ListPlayer>{ListPlayer}</ListPlayer>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
          </Box>
        </Container>
      </main>
    </div>
  );
  // return (
  //   <div>

  //     <Header
  //       color="white"
  //       brand="NBA Statistics and History"
  //       rightLinks={<HeaderLinks />}
  //       fixed
  //       changeColorOnScroll={{
  //         height: 400,
  //         color: "transparent"
  //       }}
  //     >
  //       <SportsBasketballIcon color="primary" />
  //     </Header>
  //     <CssBaseline />

  //     <div >

  //       <main className={classes.content}>
  //         <div className={classes.appBarSpacer} />

  //         <Container maxWidth="lg" className={classes.container}>

  //           <TextField
  //             className={classes.margin}
  //             id="input-with-icon-textfield"
  //             label="Search Player"
  //             value={inputTeam}
  //             onChange={e => {
  //               setInputTeam(e.target.value);
  //               console.log(e.target.value);
  //             }}
  //             InputProps={{
  //               startAdornment: (
  //                 <InputAdornment position="start">
  //                   <AccountCircle />
  //                 </InputAdornment>
  //               ),
  //             }}
  //           />
  //           <Button
  //             variant="contained"
  //             color="primary"
  //             className={classes.button}
  //             endIcon={<Icon>send</Icon>}
  //             id="playerSearchButton"
  //             onClick={selectTeam}
  //           >
  //             Search
  //           </Button>
  //         </Container>
  //         <Drawer variant="permanent">

  //         </Drawer>
  //         <Drawer
  //       variant="permanent"
  //       classes={{
  //         paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
  //       }}
  //       open={open}
  //     >
  //       <div className={classes.toolbarIcon}>
  //         <IconButton onClick={handleDrawerClose}>
  //           <ChevronLeftIcon />
  //         </IconButton>
  //       </div>
  //       <Divider />
  //       <List>{List}</List>
  //       <Divider />
  //     </Drawer>

  //         <Container maxWidth="lg" className={classes.container}>
  //           <Grid container spacing={4}>
  //             {/* <Grid items> */}

  //             {/* Table */}
  //             <Grid item xs={12} lg={12}>
  //               <Paper className={classes.paper}>
  //                 <Table position="center" rows={tableRows} />
  //               </Paper>
  //             </Grid>
  //           </Grid>

  //         </Container>
  //       </main>
  //     </div>
  //     <Footer></Footer>
  //   </div>
  // )
}

export default Team;