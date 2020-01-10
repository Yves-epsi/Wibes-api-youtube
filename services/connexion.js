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
        con = connection();
        con.connect(function(err) {
            if (err) throw err;
            con.query("INSERT INTO video (idVideo, title, url, bio) VALUES ('?','?','?')", idVideo, title, url, bio, function(err, res) {
                resolve(res)
            });
        });
}

exports.insertPlaylist = (name, videos, idUser) => {
    //insert une playlist
        con = connection();
        console.log(name)
        con.connect(function(err) {
            if (err) throw err;
            con.query("INSERT INTO playlist (name, videos, idUser) VALUES ('?','?','?')", name, videos, idUser, function(err, res) {
                resolve(res)
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

exports.selectPlaylist = () => {
    //affiche le nom et les vidéos de chaque playlist
    return new Promise(resolve => {
        con = connection();
        con.connect(function(err) {
            if (err) throw err;
            con.query("SELECT * FROM playlist", function(err, res) {
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

exports.findVideosWithTitle = (title) => {
    //recherche de video qui contiennent le mot recherché dans le tritre
    return new Promise(resolve => {
        con = connection();
        con.connect(function(err) {
            if (err) throw err;
            con.query("SELECT * FROM VIDEO WHERE title = ?", title,
                function() {
                    resolve(res);
                });
        });
    })
}

exports.deletePlaylist = (name) => {
    //supression de playlist
    return new Promise(resolve => {
        con = connection();
        con.connect(function(err) {
            if (err) throw err;
            con.query("DELETE FROM PLAYLIST WHERE name = ?", name,
                function() {
                    resolve(res);
                });
        });
    })
}

exports.deleteVideo = (name) => {
    //supression de vidéo
    return new Promise(resolve => {
        con = connection();
        con.connect(function(err) {
            if (err) throw err;
            con.query("DELETE FROM VIDEO WHERE name = ?", name,
                function() {
                    resolve(res);
                });
        });
    })
}

exports.deleteVideo = (idUser) => {
    //recherche de playlist par iduser
    return new Promise(resolve => {
        con = connection();
        con.connect(function(err) {
            if (err) throw err;
            con.query("SELECT * FROM PLAYLIST WHERE idUser = ?", idUser,
                function() {
                    resolve(res);
                });
        });
    })
}


exports.associationVideoPLaylist = (idVideo, idPlaylist) => {
    //inserer l'id d'une vidéo dans une playlist en prennant en compte les id déjà dans ce champs
    return new Promise(resolve => {
        con = connection();
        con.connect(function(err) {
            if (err) throw err;
            con.query("UPDATE PLAYLIST SET videos = (select videos from PLAYLIST WHERE idPlaylist=?)", idPlaylist,
                function() {
                    resolve(res);
                });
            let val = res + idVideo
            con.query("UPDATE PLAYLIST SET videos = ? where idPlaylist = ?", val, idPlaylist,
                function() {
                    resolve(res);
                });
        });
    })
}