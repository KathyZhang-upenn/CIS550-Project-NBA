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
  SELECT YEAR, TEAM, POSITION, G, GS, round((MP/G),1) As MPG, round((PTS/G), 1) AS PTS, 
  round((AST/G),1) AS AST, round((TRB/G),1) AS REB, round((STL/G),1) AS STL, round((BLK/G),1) AS BLK, PER
  FROM NBA.season_stats
  WHERE PLAYER_NAME LIKE '${input}';
  `;
  connection.query(query, function (err, rows, fields) {
    if (err) console.log(err);
    else if (rows.length === 0) {
      res.status(404).send({ error: "No result!" });
    }
    else {
      res.json(rows);
    }
  });
}

function getPlayerSalary(req, res) {
  var input = req.params.player;
  var query = `
  SELECT YEAR, (SALARY/1000) AS SALARY, SEASON_RANK
  FROM NBA.salaries
  WHERE PLAYER_NAME LIKE '${input}';
  `;
  connection.query(query, function (err, rows, fields) {
    if (err) console.log(err);
    else if (rows.length === 0) {
      res.status(404).send({ error: "No result!" });
    }
    else {
      res.json(rows);
    }
  });
}

function getRecommendedPlayer(req, res) {
  var input = req.params.player;
  var query = `
    With recPlayer As (
    Select player_name, position, round(Avg(MP/G),1) AS MPG, round(Avg(PER),1) as PER,
    round(Avg(G),1) as G, round(Avg(PTS/G),1) as PTS,
    round(Avg(AST/G),1) as AST, round(Avg(TRB/G),1) as REB,
    round(Avg(STL/G),1) as STL
    From season_stats
    Where player_name <> '${input}'
    and position in (
    Select position
    From season_stats
    Where player_name Like '${input}')
    Group by player_name)
    
    Select player_name, G, MPG, PTS, AST, REB, STL, PER,
    Round(ABS(PER- (select avg(PER) From season_stats
    Where player_name Like '${input}')),1) As PER_Difference
    From recPlayer
    Order by PER_Difference
    Limit 1;
  `;
  connection.query(query, function (err, rows, fields) {
    if (err) console.log(err);
    else if (rows.length === 0) {
      res.status(404).send({ error: "No result!" });
    }
    else {
      res.json(rows);
    }
  });
}



/* ---- Team ---- */

function getTeamPlayers(req, res) {
  var input1 = req.params.team
  var input2 = req.params.year
  var query = `
  SELECT PLAYER_NAME AS Name, G, GS, (MP/G) As MPG, (PTS/G) AS PTS, (AST/G) AS AST, (TRB/G) AS REB, (STL/G) AS STL, (BLK/G) AS BLK, PER
  FROM NBA.teams JOIN NBA.season_stats ON NBA.teams.ABBREVIATION = NBA.season_stats.TEAM
  WHERE NBA.teams.TEAM_ID = '${input1}' AND NBA.season_stats.YEAR = '${input2}';
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
  var input1 = req.params.team;
  var input2 = req.params.year;
  var query = `
  SELECT (SEASON_ID - 20000) AS Season, MAX(G) AS Games, MAX(W) AS Win, MAX(L) AS Loss, (MAX(W)/MAX(G)) as WinR
  FROM NBA.ranking
  WHERE TEAM_ID = '${input1}' AND SEASON_ID > 20000 AND (SEASON_ID - 20000) = '${input2}'
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
  var input1 = req.params.team;
  var input2 = req.params.year;
  var query = `
  SELECT TEAM_ID, AVG(SALARY) AS AVG_SALARY
  FROM NBA.salary_joins
  WHERE TEAM_ID = '${input1}' AND YEAR = '${input2}'
  GROUP BY TEAM_ID;
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
  SELECT PLAYER_NAME, PTS AS MEASURE
  FROM NBA.season_stats JOIN NBA.teams ON NBA.season_stats.TEAM = NBA.teams.ABBREVIATION
  WHERE YEAR ='${input2}' AND TEAM_ID = '${input1}' AND G >= 20
  ORDER BY MEASURE DESC
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
  SELECT PLAYER_NAME, TRB AS MEASURE
  FROM NBA.season_stats JOIN NBA.teams ON NBA.season_stats.TEAM = NBA.teams.ABBREVIATION
  WHERE YEAR ='${input2}' AND TEAM_ID = '${input1}' AND G >= 20
  ORDER BY MEASURE DESC
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
  SELECT PLAYER_NAME, PER AS MEASURE
  FROM NBA.season_stats JOIN NBA.teams ON NBA.season_stats.TEAM = NBA.teams.ABBREVIATION
  WHERE YEAR ='${input2}' AND TEAM_ID = '${input1}' AND G >= 20
  ORDER BY MEASURE DESC
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
  SELECT PLAYER_NAME, MP AS MEASURE
  FROM NBA.season_stats JOIN NBA.teams ON NBA.season_stats.TEAM = NBA.teams.ABBREVIATION
  WHERE YEAR ='${input2}' AND TEAM_ID = '${input1}'
  ORDER BY MEASURE DESC
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
  SELECT PLAYER_NAME, AST AS MEASURE
  FROM NBA.season_stats JOIN NBA.teams ON NBA.season_stats.TEAM = NBA.teams.ABBREVIATION
  WHERE YEAR ='${input2}' AND TEAM_ID = '${input1}' AND G >= 20
  ORDER BY MEASURE DESC
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
  SELECT PLAYER_NAME, STL AS MEASURE
  FROM NBA.season_stats JOIN NBA.teams ON NBA.season_stats.TEAM = NBA.teams.ABBREVIATION
  WHERE YEAR ='${input2}' AND TEAM_ID = '${input1}' AND G >= 20 AND 3PA > 20 
  ORDER BY MEASURE DESC
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
  SELECT TEAM_ID, SUM(SALARY) AS SUM_SALARY
  FROM NBA.salary_joins
  WHERE TEAM_ID = '${input1}' AND YEAR = '${input2}'
  GROUP BY TEAM_ID;
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
  var inputHomeTeam = req.params.team1
  var inputVisitorTeam = req.params.team2
  var inputSeason = req.params.year

  var query = `
  Select season,  game_time_est, PTS_home, 
  round(FT_PCT_home,2) as FT_PCT_home,
  round(fg3_Pct_home, 2 ) as FG3_PCT_home, Ast_home, reb_home, 
  PTS_away, round(FT_PCT_away,2) as FT_PCT_away,
  round(fg3_Pct_away, 2 ) as FG3_PCT_away, Ast_away, reb_away, home_team_wins
  From games 
  Where season = '${inputSeason}' 
  and home_team_ID= '${inputHomeTeam}' 
  and visitor_team_ID = '${inputVisitorTeam}';
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


function getPlayerStatsOfHomeTeam(req, res) {
  var inputHomeTeam = req.params.team1
  var inputVisitorTeam = req.params.team2
  var inputSeason = req.params.year

  var query = `
  Select player_name, round(avg(PTS),1) as PTS,
  round(avg(fgm),1) as FGM, round(avg (FG_pct), 2) as FG_PCT,
  round(avg(fg3m),1) as FG3M, round(avg(fg3_pct),2) as FG3_PCT,
  round(avg(ftm),1) as FTM, round(avg(ft_pct),2) as FT_PCT,
  round(avg(oreb),1) as OREB, round(avg(dreb),1) as DREB,
  round(avg(reb),1) as REB, round(avg(ast),1) as AST, 
  round(avg(stl),1) as STL, round(avg(pf),1) as PF
  From game_details
  Join games ON games.game_ID = game_details.game_ID
  and game_details.team_ID = '${inputHomeTeam}'
  Where games. season = '${inputSeason}'
  and games.home_team_ID= '${inputHomeTeam}' 
  and games.visitor_team_ID = '${inputVisitorTeam}'
  Group by game_details.PLAYER_ID
  Order by PTS DESC;
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

function getPlayerStatsOfVisitorTeam(req, res) {
  var inputHomeTeam = req.params.team1
  var inputVisitorTeam = req.params.team2
  var inputSeason = req.params.year

  var query = `
  Select player_name, round(avg(PTS),1) as PTS,
  round(avg(fgm),1) as FGM, round(avg (FG_pct), 2) as FG_PCT,
  round(avg(fg3m),1) as FG3M, round(avg(fg3_pct),2) as FG3_PCT,
  round(avg(ftm),1) as FTM, round(avg(ft_pct),2) as FT_PCT,
  round(avg(oreb),1) as OREB, round(avg(dreb),1) as DREB,
  round(avg(reb),1) as REB, round(avg(ast),1) as AST, 
  round(avg(stl),1) as STL, round(avg(pf),1) as PF
  From game_details
  Join games ON games.game_ID = game_details.game_ID
  and game_details.team_ID = '${inputVisitorTeam}'
  Where games. season = '${inputSeason}'
  and games.home_team_ID= '${inputHomeTeam}' 
  and games.visitor_team_ID = '${inputVisitorTeam}'
  Group by game_details.PLAYER_ID
  Order by PTS DESC;
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

module.exports = {
  getPlayerInfo: getPlayerInfo,
  getPlayerSalary: getPlayerSalary,
  getRecommendedPlayer: getRecommendedPlayer,

  getTeamPlayers: getTeamPlayers,
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

  getGameInfo: getGameInfo,
  getPlayerStatsOfHomeTeam: getPlayerStatsOfHomeTeam,
  getPlayerStatsOfVisitorTeam: getPlayerStatsOfVisitorTeam,

}