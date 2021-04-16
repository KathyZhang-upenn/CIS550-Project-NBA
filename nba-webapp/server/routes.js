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
  getTeamInfo: getTeamInfo,
  getGameInfo: getGameInfo

}