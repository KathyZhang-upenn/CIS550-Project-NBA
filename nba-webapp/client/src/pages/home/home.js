import React from 'react';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

// material ui components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
// import SectionBasics from "sections/SectionBasics.js";
// import SectionNavbars from "Sections/SectionNavbars.js";
// import SectionTabs from "Sections/SectionTabs.js";
// import SectionPills from "Sections/SectionPills.js";
// import SectionNotifications from "Sections/SectionNotifications.js";


//styles
import styles from "styles/homeStyle.js";

// sections for this page
import ProductSection from "pages/home/ProductSection.js";
import WorkSection from "pages/home/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);
function Home(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="NBA Statistics and History"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      >
        <SportsBasketballIcon color="primary" />
      </Header>
      <Parallax image={"assets/image/background.jpeg"}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.brand}>
                <h1 className={classes.title}>Your Favourite NBA Stats Viewer</h1>
                <h4>

                  Who is the greatest NBA player of all time? What is best game in NBA history?
                  How is your favourite player doing this season? Find your answers here today!
              </h4>
              </div>
              <br />
              <Button
                color="primary"
                size="lg"
                href="https://www.youtube.com/channel/UCWJ2lWNubArHWmf3FIHbfcQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
