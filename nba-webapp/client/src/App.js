import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import Home from 'pages/home/home.js';
import Team from 'pages/team/team.js';
import Player from 'pages/player/player.js';
import Game from 'pages/game/game.js';

export default class App extends React.Component {

	render() {
		return (
			<div className="App">
				<Router>
					<Switch>
						<Route
							exact
							path="/"
							render={() => (
								<Home />
							)}
						/>
						<Route
							exact
							path="/home"
							render={() => (
								<Home />
							)}
						/>
						<Route
							path="/team"
							render={() => (
								<Team />
							)}
						/>
						<Route
							path="/game"
							render={() => (
								<Game />
							)}
						/>
            <Route
							path="/player"
							render={() => (
								<Player />
							)}
						/>
					</Switch>
				</Router>
			</div>
		);
	}
}