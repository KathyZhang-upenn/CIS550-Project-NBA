const bodyParser = require('body-parser');
const express = require('express');
var routes = require("./routes.js");
const cors = require('cors');

const app = express();

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* ---------------------------------------------------------------- */
/* ------------------- Route handler registration ----------------- */
/* ---------------------------------------------------------------- */


/* ---- Player ---- */
// The route localhost:8081/genres is registered to the function

app.get('/player/:player', routes.getPlayerInfo);
app.get('/player/salary/:player', routes.getPlayerSalary);
app.get('/player/recommendation/:player', routes.getRecommendedPlayer);


/* ---- Team  ---- */

app.get('/team/players/:team&:year', routes.getTeamPlayers);
app.get('/team/info/:team', routes.getTeamInfo);
app.get('/team/records/:team&:year', routes.getTeamRecords);
app.get('/team/avgsalary/:team&:year', routes.getTeamAvgSalary);
app.get('/team/scorer/:team&:year', routes.getTeamTopScorer);
app.get('/team/rebounder/:team&:year', routes.getTeamTopRebounder);
app.get('/team/player/:team&:year', routes.getTeamTopPlayer);
app.get('/team/playedplayer/:team&:year', routes.getTeamTopPlayedPlayer);
app.get('/team/assister/:team&:year', routes.getTeamTopAssister);
app.get('/team/stealer/:team&:year', routes.getTeamTop3ptShooter);
app.get('/team/totalsalary/:team&:year', routes.getTeamTotalSalary);


/* ---- Game ---- */
app.get('/game/info/:team1&:team2&:year', routes.getGameInfo);
app.get('/game/homeplayers/:team1&:team2&:year', routes.getPlayerStatsOfHomeTeam);
app.get('/game/awayplayers/:team1&:team2&:year', routes.getPlayerStatsOfVisitorTeam);


app.listen(8081, () => {
	console.log(`Server listening on PORT 8081`);
});