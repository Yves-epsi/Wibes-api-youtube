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


exports.insertVideo = (idVideo, title, url, bio) => {
    //insert une video
    return new Promise(resolve => {
        con = connection();
        con.connect(function(err) {
            if (err) throw err;
            con.query("INSERT INTO video (idVideo, title, url, bio) VALUES ('?','?','?')", idVideo, title, url, bio, function(err, res) {
                resolve(res)
            });
        });
    })
}

exports.insertPlaylist = (name, videos, idUser) => {
    //insert une playlist
    return new Promise(resolve => {
        con = connection();
        con.connect(function(err) {
            if (err) throw err;
            con.query("INSERT INTO playlist (name, videos, idUser) VALUES ('?','?','?')", name, videos, idUser, function(err, res) {
                resolve(res)
            });
        });
    });
}

exports.selectVideo = () => {
    //select des video
    return new Promise(resolve => {
        con = connection();
        con.connect(function(err) {
            if (err) throw err;
            con.query("SELECT * FROM video", function(err, res) {
                resolve(res);
            });
        });
    });
}

exports.selectVideoById = (id) => {
    //select des video
    return new Promise(resolve => {
        con = connection();
        con.connect(function(err) {
            if (err) throw err;
            con.query("SELECT idVideo, title, url FROM video WHERE idVideo= ?", id, function(err, res) {
                resolve(res);
            });
        });
    });
}

exports.afficheVideosFromPlaylist = () => {
    //affiche le nom et les vidéos de chaque playlist
    return new Promise(resolve => {
        con = connection();
        con.connect(function(err) {
            if (err) throw err;
            con.query("SELECT videos FROM playlist", function(err, res) {
                resolve(res);
            });
        });
    })
}

exports.majTableVideo = (nameOld, nameNew) => {
    //maj d'un champs de la table video
    return new Promise(resolve => {
        con = connection();
        con.connect(function(err) {
            if (err) throw err;
            con.query("UPDATE video SET name = ?  WHERE name = ?", nameNew, nameOld,
                function() {
                    resolve(res);
                });
        });
    })
}

exports.majTablePLaylist = (nameOld, nameNew) => {
    //maj d'un champs de la table playlist
    return new Promise(resolve => {
        con = connection();
        con.connect(function(err) {
            if (err) throw err;
            con.query("UPDATE playlist SET name = ?  WHERE name = ?", nameNew, nameOld,
                function() {
                    resolve(res);
                });
        });
    })
}