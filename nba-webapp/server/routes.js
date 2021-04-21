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

function getTeamPlayers(req, res) {
  var input1 = req.params.team
  var input2 = req.params.year
  var query = `
  SELECT PLAYER_NAME AS Name, G, GS, (MP/G) As MPG, (PTS/G) AS PTS, (AST/G) AS AST, (TRB/G) AS REB, (STL/G) AS STL, (BLK/G) AS BLK, `FG%`, `3P%`, `FT%`, PER
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
  var input = req.params.team;
  var query = `
  SELECT (SEASON_ID - 20000) AS Season, MAX(G) AS Games, MAX(W) AS Win, MAX(L) AS Loss, (MAX(W)/MAX(G)) as "Win %"
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
  SELECT PLAYER_NAME, `3P%`
  FROM NBA.season_stats
  WHERE YEAR ='${input1}' AND TEAM = '${input2}' AND G >= 20 AND 3PA > 20 
  ORDER BY `3P%` DESC
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
function getGameInfoAsHomeTeam(req, res) {
  var inputSeason = req.params.season;
  var inputTeam = req.params.team;

  var query = `
  With away as (select season, game_time_est, teams.nickname as home_team, VISITOR_TEAM_ID as ID, 
    PTS_home, round(FT_PCT_home,2) as FT_PCT_home,
    round(fg3_Pct_home, 2 ) as FG3_PCT_home, Ast_home, reb_home, 
    PTS_away, round(FT_PCT_away,2) as FT_PCT_away,
    round(fg3_Pct_away, 2 ) as FG3_PCT_away, Ast_away, reb_away, HOME_TEAM_WINS
    from games 
    join teams
    on games. home_team_ID = teams.team_ID
    where season = '${inputSeason}'
    and teams.nickname = '${inputTeam}')
    
    select season,  game_time_est, home_team, teams.nickname as away_team, PTS_home, FT_PCT_home, FG3_PCT_home, Ast_home, reb_home,
    PTS_away, FT_PCT_away, FG3_PCT_away,Ast_away, reb_away, HOME_TEAM_WINS
    from away
    join teams
    on away.ID = teams.team_ID 
    order by away_team;
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

function getGameInfoAsAwayTeam(req, res) {
  var inputSeason = req.params.season;
  var inputTeam = req.params.team;

  var query = `
  With home as (select season,  game_time_est, home_team_ID as ID, teams.nickname as away_team, 
    PTS_home, round(FT_PCT_home,2) as FT_PCT_home,
    round(fg3_Pct_home, 2 ) as FG3_PCT_home, Ast_home, reb_home, 
    PTS_away, round(FT_PCT_away,2) as FT_PCT_away,
    round(fg3_Pct_away, 2 ) as FG3_PCT_away, Ast_away, reb_away, HOME_TEAM_WINS
    from games 
    join teams
    on games. visitor_team_ID = teams.team_ID
    where season = '${inputSeason}'
    and teams.nickname = '${inputTeam}')
    
    select season, game_time_est, teams.nickname as home_team, away_team, PTS_home, FT_PCT_home, FG3_PCT_home, Ast_home, reb_home,
    PTS_away, FT_PCT_away, FG3_PCT_away,Ast_away, reb_away, HOME_TEAM_WINS
    from home
    join teams
    on home.ID = teams.team_ID 
    order by home_team
    
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

function getSeasonPlayersStats(req, res) {
  var inputSeason = req.params.season;
  var inputTeam = req.params.team;

  var query = `
  Select games.season,teams.nickname, city, player_name,sum(PTS) as PTS,sum(fgm) as FGM, round(avg (FG_pct), 2) as FG_PCT,
  sum(fg3m) as FG3M, round(avg(fg3_pct),2) as FG3_PCT,
  sum(ftm) as FTM,round(avg(ft_pct),2) as FT_PCT,
  sum(oreb) as OREB, sum(dreb) as DREB,
  sum(reb) as REB, sum(ast) as AST, 
  sum(stl) as STL, sum(pf) as PF
  from game_details
  join teams on game_details.team_ID = teams.team_ID
  join games on games.GAME_ID = game_details.game_id
  where games. season = '${inputSeason}' and teams.nickname = '${inputTeam}'
  group by game_details.PLAYER_ID
  order by PTS DESC;
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

function getSeasonTop10Scorers(req, res) {
  var inputSeason = req.params.season;

  var query = `
  Select SEASON, PLAYER_NAME, TEAM_ABBREVIATION, TEAM_CITY, sum(pts) as PTS_TOTAL
  from game_details
  join games
  on game_details.game_id = games.GAME_ID
  where season = '${inputSeason}'
  group by PLAYER_ID
  order by PTS_TOTAL desc
  limit 10;
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

function getSeasonTop10Rebounders(req, res) {
  var inputSeason = req.params.season;

  var query = `
  Select SEASON, PLAYER_NAME, TEAM_ABBREVIATION, TEAM_CITY, 
  sum(reb) as REB_TOTAL
  from game_details
  join games
  on game_details.game_id = games.GAME_ID
  where season = '${inputSeason}'
  group by PLAYER_ID
  order by REB_TOTAL desc
  limit 10;
  
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

function getSeasonTop10Assisters(req, res) {
  var inputSeason = req.params.season;

  var query = `
  Select SEASON, PLAYER_NAME, TEAM_ABBREVIATION, TEAM_CITY,  sum(AST) as AST_TOTAL
  from game_details
  join games
  on game_details.game_id = games.GAME_ID
  where season = '${inputSeason}'
  group by PLAYER_ID
  order by AST_TOTAL desc
  limit 10;
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

function getSeasonTop10Stealers(req, res) {
  var inputSeason = req.params.season;

  var query = `
  Select SEASON, PLAYER_NAME, TEAM_ABBREVIATION, TEAM_CITY,  sum(STL) as STL_TOTAL
  from game_details
  join games
  on game_details.game_id = games.GAME_ID
  where season = '${inputSeason}'
  group by PLAYER_ID
  order by STL_TOTAL desc
  limit 10;
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

function getSeasonTop10ThreePointsShooters(req, res) {
  var inputSeason = req.params.season;

  var query = `
  Select SEASON, PLAYER_NAME, TEAM_ABBREVIATION, TEAM_CITY,  sum(FG3M) as FG3M_TOTAL
  from game_details
  join games
  on game_details.game_id = games.GAME_ID
  where season = '${inputSeason}'
  group by PLAYER_ID
  order by FG3M_TOTAL desc
  limit 10;  
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
  
  getTeamPlayers: getTeamPlayers
  getTeamRecords: getTeamRecords,
  getTeamAvgSalary: getTeamAvgSalary
  getTeamTopScorer: getTeamTopScorer
  getTeamTopRebounder: getTeamTopRebounder
  getTeamTopPlayer: getTeamTopPlayer
  getTeamTopPlayedPlayer: getTeamTopPlayedPlayer
  getTeamTopAssister: getTeamTopAssister
  getTeamTop3ptShooter: getTeamTop3ptShooter
  getTeamInfo: getTeamInfo
  getTeamTotalSalary: getTeamTotalSalary

  getGameInfoAsHomeTeam:getGameInfoAsHomeTeam
  getGameInfoAsAwayTeam:getGameInfoAsAwayTeam
  getSeasonPlayersStats:getSeasonPlayersStats
  getSeasonTop10Scorers:getSeasonTop10Scorers
  getSeasonTop10Rebounders:getSeasonTop10Rebounders
  getSeasonTop10Assisters:getSeasonTop10Assisters
  getSeasonTop10Stealers:getSeasonTop10Stealers
  getSeasonTop10ThreePointsShooters:getSeasonTop10ThreePointsShooters
}