import React from 'react';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

// header,footer of this page 
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
//import charts,tables for this page
import Table from 'pages/player/table.js';
// UI component
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import CssBaseline from '@material-ui/core/CssBaseline';


export default class Game extends React.Component {
  constructor(props) {
    super(props);

    // The state maintained by this React Component. This component maintains the list of genres,
    // and a list of movies for a specified genre.
    this.state = {
      genres: [],
      movies: []
    }

    // this.showMovies = this.showMovies.bind(this);
  }


  render() {
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
          <main>
            <div>
            </div>
          </main>
        </div>
        <Footer></Footer>
      </div >
    )
  }
}