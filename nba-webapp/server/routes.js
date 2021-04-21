var config = require('./db-config.js');
var mysql = require('mysql');

config.connectionLimit = 10;
var connection = mysql.createPool(config);

/* -------------------------------------------------- */
/* ------------------- Route Handlers --------------- */
/* -------------------------------------------------- */

function query(query, resultFunction) {
  // database ....
  const result = functi(query);
  resultFunction(result);
}

/* ---- Player ---- */
function getPlayerInfo(req, res) {
  var input = req.params.player;
  var query = `
  SELECT YEAR, TEAM, POSITION,3P AS THREEP, MP, PTS
  FROM NBA.season_stats
  WHERE PLAYER_NAME LIKE '${input}';
  `;
  connection.query(query, function (err, rows, fields) {
    if (err) console.log(err);
    else {
      // connection.query(query, function (err, rows, fields) {
      //   connection.query(query, function (err, rows, fields) {
      res.json(rows);
    }
  });
}



/* ---- Team ---- */

function getTeamInfo(req, res) {
  var input = req.params.team;
  var query = `
  SELECT CITY as Location, Nickname as Mascot, ARENA as Arena, OWNER as Owner, GENERALMANAGER as GM, HEADCOACH as Coach, YEARFOUNDEd as Founded
  FROM NBA.teams
  WHERE TEAM_ID = '${input}'
  `;
  connection.query(query, function (err, rows, fields) {
    if (err) console.log(err);
    else {
      // connection.query(query, function (err, rows, fields) {
      //   connection.query(query, function (err, rows, fields) {
      res.json(rows);
    }
  });
}




function getTeamRecords(req, res) {
  var input = req.params.team;
  var query = `
  SELECT (SEASON_ID - 20000) AS Season, MAX(G) AS Games, MAX(W) AS Win, MAX(L) AS Loss, (MAX(W)/MAX(G)) as WinR
  FROM NBA.ranking
  WHERE TEAM_ID = '${input}' AND SEASON_ID > 20000
  GROUP BY SEASON_ID
  `;
  connection.query(query, function (err, rows, fields) {
    if (err) console.log(err);
    else {
      console.log(rows);
      res.json(rows);
    }
  });
};

function getTeamAvgSalary(req, res) {
  var input = req.params.team;
  var query = `
  SELECT NBA.salaries.YEAR, NICKNAME AS TEAM, AVG(SALARY) AS AVG_SALARY
  FROM NBA.salaries JOIN NBA.players ON NBA.salaries.YEAR = NBA.players.SEASON AND NBA.salaries.PLAYER_NAME =
  NBA.players.PLAYER_NAME
  JOIN NBA.teams ON NBA.players.TEAM_ID = NBA.teams.TEAM_ID
  WHERE NBA.players.TEAM_ID = '${input}'
  GROUP BY NBA.salaries.YEAR, NICKNAME
  ORDER BY YEAR;
  `;
  connection.query(query, function (err, rows, fields) {
    if (err) console.log(err);
    else {
      console.log(rows);
      res.json(rows);
    }
  });
};

function getTeamAvgSalary(req, res) {
  var input = req.params.team;
  var query = `
  SELECT NBA.salaries.YEAR, NICKNAME AS TEAM, AVG(SALARY) AS AVG_SALARY
  FROM NBA.salaries JOIN NBA.players ON NBA.salaries.YEAR = NBA.players.SEASON AND NBA.salaries.PLAYER_NAME =
  NBA.players.PLAYER_NAME
  JOIN NBA.teams ON NBA.players.TEAM_ID = NBA.teams.TEAM_ID
  WHERE NBA.players.TEAM_ID = '${input}'
  GROUP BY NBA.salaries.YEAR, NICKNAME
  ORDER BY YEAR;
  `;
  connection.query(query, function (err, rows, fields) {
    if (err) console.log(err);
    else {
      console.log(rows);
      res.json(rows);
    }
  });
};

function getTeamTopScorer(req, res) {
  var input1 = req.params.team
  var input2 = req.params.year
  var query = `
  SELECT PLAYER_NAME, PTS
  FROM NBA.season_stats
  WHERE YEAR ='${input1}' AND TEAM = '${input2}' AND G >= 20
  ORDER BY PTS DESC
  LIMIT 1
  `;
  connection.query(query, function (err, rows, fields) {
    if (err) console.log(err);
    else {
      console.log(rows);
      res.json(rows);
    }
  });
};

function getTeamTopRebounder(req, res) {
  var input1 = req.params.team
  var input2 = req.params.year
  var query = `
  SELECT PLAYER_NAME, TRB
  FROM NBA.season_stats
  WHERE YEAR ='${input1}' AND TEAM = '${input2}' AND G >= 20
  ORDER BY TRB DESC
  LIMIT 1
  `;
  connection.query(query, function (err, rows, fields) {
    if (err) console.log(err);
    else {
      console.log(rows);
      res.json(rows);
    }
  });
};

function getTeamTopPlayer(req, res) {
  var input1 = req.params.team
  var input2 = req.params.year
  var query = `
  SELECT PLAYER_NAME, PER
  FROM NBA.season_stats
  WHERE YEAR ='${input1}' AND TEAM = '${input2}' AND G >= 20
  ORDER BY PER DESC
  LIMIT 1
  `;
  connection.query(query, function (err, rows, fields) {
    if (err) console.log(err);
    else {
      console.log(rows);
      res.json(rows);
    }
  });
};

function getTeamTopPlayedPlayer(req, res) {
  var input1 = req.params.team
  var input2 = req.params.year
  var query = `
  SELECT PLAYER_NAME, MP
  FROM NBA.season_stats
  WHERE YEAR ='${input1}' AND TEAM = '${input2}'
  ORDER BY MP DESC
  LIMIT 1
  `;
  connection.query(query, function (err, rows, fields) {
    if (err) console.log(err);
    else {
      console.log(rows);
      res.json(rows);
    }
  });
};

function getTeamTopAssister(req, res) {
  var input1 = req.params.team
  var input2 = req.params.year
  var query = `
  SELECT PLAYER_NAME, AST
  FROM NBA.season_stats
  WHERE YEAR ='${input1}' AND TEAM = '${input2}' AND G >= 20
  ORDER BY AST DESC
  LIMIT 1
  `;
  connection.query(query, function (err, rows, fields) {
    if (err) console.log(err);
    else {
      console.log(rows);
      res.json(rows);
    }
  });
};

function getTeamTop3ptShooter(req, res) {
  var input1 = req.params.team
  var input2 = req.params.year
  var query = `
  SELECT PLAYER_NAME, '3P%'
  FROM NBA.season_stats
  WHERE YEAR ='${input1}' AND TEAM = '${input2}' AND G >= 20 AND 3PA > 20 
  ORDER BY '3P%' DESC
  LIMIT 1
  `;
  connection.query(query, function (err, rows, fields) {
    if (err) console.log(err);
    else {
      console.log(rows);
      res.json(rows);
    }
  });
};

function getTeamTotalSalary(req, res) {
  var input1 = req.params.team
  var input2 = req.params.year
  var query = `
  WITH team_salary AS (
    SELECT NBA.salaries.YEAR, NBA.teams.TEAM_ID, SUM(SALARY) AS SALARY
    FROM NBA.salaries JOIN NBA.players ON NBA.salaries.YEAR = NBA.players.SEASON AND NBA.salaries.PLAYER_NAME =
    NBA.players.PLAYER_NAME
    JOIN NBA.teams ON NBA.players.TEAM_ID = NBA.teams.TEAM_ID
    GROUP BY salaries.YEAR, NBA.teams.TEAM_ID
    )
  SELECT OWNER as Owner, YEAR as Year, SUM(SALARY) AS Salary 
  FROM team_salary JOIN NBA.teams ON team_salary.TEAM_ID = NBA.teams.TEAM_ID
  WHERE team_salary.TEAM_ID = '${input1}' AND YEAR = '${input2}'
  GROUP BY OWNER, YEAR
  ORDER BY YEAR DESC;
  `;
  connection.query(query, function (err, rows, fields) {
    if (err) console.log(err);
    else {
      console.log(rows);
      res.json(rows);
    }
  });
};

/* ---- Game ---- */
function getGameInfo(req, res) {
  var input = req.params.game;


  var query = `
  `
    ;



  connection.query(query, function (err, rows, fields) {
    if (err) console.log(err);
    else {
      console.log(rows);
      res.json(rows);
    }
  });
};


/* ----  ---- */
function getDecades(req, res) {
  var query = `

  `;
  connection.query(query, function (err, rows, fields) {
    if (err) console.log(err);
    else {
      res.json(rows);
    }
  });
}





// The exported functions, which can be accessed in index.js.
module.exports = {
  getPlayerInfo: getPlayerInfo,  
  getGameInfo: getGameInfo,

  getTeamRecords: getTeamRecords,
  getTeamAvgSalary: getTeamAvgSalary,
  getTeamTopScorer: getTeamTopScorer,
  getTeamTopRebounder: getTeamTopRebounder,
  getTeamTopPlayer: getTeamTopPlayer,
  getTeamTopPlayedPlayer: getTeamTopPlayedPlayer,
  getTeamTopAssister: getTeamTopAssister,
  getTeamTop3ptShooter: getTeamTop3ptShooter,
  getTeamInfo: getTeamInfo,
  getTeamTotalSalary: getTeamTotalSalary,

}