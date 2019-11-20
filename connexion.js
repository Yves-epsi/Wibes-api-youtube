var mysql = require('mysql');

//connexion à la BDD
var con = mysql.createConnection({
    database: 'wibes-api-youtube',
    host: "localhost",
    user: "root",
    password: ""
});

//insert une video

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO video (title, url, bio) VALUES ('Gambi - Popopop', 'https://www.youtube.com/watch?v=H_rZMgS5nE4', 'Gambi - Popopop biographie' )";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
});

//insert une playlist

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO playlist (name, videos, idUser) VALUES ('playlist du gambi', 'https://www.youtube.com/watch?v=H_rZMgS5nE4 , https://www.youtube.com/watch?v=xSHGzO4FzBA', '1' )";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
});


//insert plusieurs vidéos

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO video (title, url, bio) VALUES ?";
    var values = [
        ['musique 1', 'lien 1', 'musique 1'],
        ['musique 2', 'lien 2', 'musique 2'],
        ['musique 3', 'lien 3', 'musique 3'],
        ['musique 4', 'lien 4', 'musique 4'],
        ['musique 5', 'lien 5', 'musique 5'],
        ['musique 6', 'lien 6', 'musique 6']

    ];
    con.query(sql, [values], function(err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
});

//select des video

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM video", function(err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});

//affiche le nom et les vidéos de chaque playlist
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT name, videos FROM playlist", function(err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});

//maj d'un champs de la table video
con.connect(function(err) {
    if (err) throw err;
    var sql = "UPDATE video SET name = 'musique 18' WHERE name = 'musique 4'";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
    });
});

//maj d'un champs de la table video
con.connect(function(err) {
    if (err) throw err;
    var sql = "UPDATE playlist SET tile = 'popopopopo la playlist' WHERE title = 'playlist du gambi'";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
    });
});