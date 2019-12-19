function connection() {
    //connexion à la BDD
    var mysql = require('mysql');
    var con = mysql.createConnection({
        database: 'wibes-api-youtube',
        host: "localhost",
        user: "root",
        password: ""
    });
    return con;
}


exports.insertVideo = (id, title, url, bio) => {
    //insert une video
    con = connection();
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO video (idVideo, title, url, bio) VALUES ('" + id + "','" + title + "','" + url + "', '" + bio + "' )";
        con.query(sql, function(err) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    });
}

exports.insertPlaylist = (name, videos, idUser) => {
    //insert une playlist
    con = connection();
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO playlist (name, videos, idUser) VALUES ('" + name + "','" + videos + "', '" + idUser + "'  )";
        con.query(sql, function(err) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    });
}

exports.selectVideo = () => {
    //select des video
    con = connection();
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM video", function(err, res, fields) {
            console.log(res)
            return res;
        });
    });

}

exports.selectVideoById = (id) => {
    //select des video
    con = connection();
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT idVideo, title, url FROM video WHERE idVideo= ?", id, function(err, res, fields) {
            console.log(res)
            return res;
        });
    });

}

exports.afficheVideosFromPlaylist = () => {
    //affiche le nom et les vidéos de chaque playlist
    con = connection();
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT videos FROM playlist", function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    });
}

exports.majTableVideo = (nameOld, nameNew) => {
    //maj d'un champs de la table video
    con = connection();
    con.connect(function(err) {
        if (err) throw err;
        var sql = "UPDATE video SET name = '" + nameNew + "' WHERE name = '" + nameOld + "''";
        con.query(sql, function(err, result) {
            if (err) throw err;
            console.log(result.affectedRows + " record(s) updated");
        });
    });
}

exports.majTablePLaylist = (nameOld, nameNew) => {
    //maj d'un champs de la table playlist
    con = connection();
    con.connect(function(err) {
        if (err) throw err;
        var sql = "UPDATE playlist SET tile = " + nameNew + "' WHERE title = " + nameOld + "''";
        con.query(sql, function(err, result) {
            if (err) throw err;
            console.log(result.affectedRows + " record(s) updated");
        });
    })
};