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


app.get('/player/:player', routes.getPlayerInfo); // Hint: Replace () => {} with the appropriate route handler.





/* ---- Team  ---- */


app.get('/team/:team', routes.getTeamInfo);
app.get('/team/:team', routes.getTeamRecords);
app.get('/team/:team', routes.getTeamAvgSalary);
app.get('/team/:team', routes.getTeamTopScorer);
app.get('/team/:team', routes.getTeamTopRebounder);
app.get('/team/:team', routes.getTeamTopPlayer);
app.get('/team/:team', routes.getTeamTopPlayedPlayer);
app.get('/team/:team', routes.getTeamTopAssister);
app.get('/team/:team', routes.getTeamTop3ptShooter);
app.get('/team/:team', routes.getTeamTotalSalary);



/* ---- Game ---- */
app.get('/game/:game', routes.getGameInfo);






app.listen(8081, () => {
	console.log(`Server listening on PORT 8081`);
});