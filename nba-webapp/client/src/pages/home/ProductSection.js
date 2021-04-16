import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import SportsHandballIcon from '@material-ui/icons/SportsHandball';
import SportsKabaddiIcon from '@material-ui/icons/SportsKabaddi';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import styles from "assets/material-ui-kit/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk some stats</h2>
          <h5 className={classes.description}>
          Who is the greatest NBA player of all time? What is best game in the NBA history? 
          How is your favourite player doing this season? Ever curious about how much an NBA
          player earns? Which teams are the successful this season? Find your answers below!
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
          <Link to={"/player"} className={classes.link}>
            <InfoArea
              title="Find Players"
              description="Find out interesting information about your favourite players. Compare different players in multiple dimensions as you like."
              icon={SportsHandballIcon}
              iconColor="info"
              vertical
            />
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
          <Link to={"/team"} className={classes.link}>
            <InfoArea
              title="Find Teams"
              description="Find out interesting information about your favourite teams. Look into teams in great details and compare them in multiple dimensions."
              icon={SportsKabaddiIcon}
              iconColor="success"
              vertical
            />
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
          <Link to={"/game"} className={classes.link}>

            <InfoArea
              title="Find Games"
              description = "Find out interesting facts about your memoriable games. Relive each game in all aspects."
              icon={SupervisedUserCircleIcon }
              iconColor="danger"
              vertical
            />
            </Link>

          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
