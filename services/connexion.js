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
            var sql = "INSERT INTO video (idVideo, title, url, bio) VALUES ('" + idVideo + "','" + title + "','" + url + "', '" + bio + "' )";
            con.query(sql, function(err) {
                if (err) throw err;
            });
        });
}

exports.insertPlaylist = (name, videos, idUser) => {
    //insert une playlist
        con = connection();
        con.connect(function(err) {
            if (err) throw err;
            var sql = "INSERT INTO playlist (name, videos, idUser) VALUES ('" + name + "','" + videos + "', '" + idUser + "'  )";
            con.query(sql, function(err) {
                if (err) throw err;
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

exports.selectPlaylistById = (id) => {
    //affiche le nom et les vidéos de chaque playlist
    return new Promise(resolve => {
        con = connection();
        con.connect(function(err) {
            if (err) throw err;
            con.query("SELECT * FROM playlist WHERE idPlaylist = ?", id, function(err, res) {
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

exports.selectPlaylistbyName = (name) => {
    //affiche le nom et les vidéos de chaque playlist
    return new Promise(resolve => {
        con = connection();
        con.connect(function(err) {
            if (err) throw err;
            con.query("SELECT * FROM playlist WHERE name LIKE '%" + name + "%'", function(err, res) {
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
            con.query("SELECT * FROM VIDEO WHERE title LIKE '%" + title + "%'",
                function(err, res) {
                    resolve(res);
                });
        });
    })
}

exports.deletePlaylist = (id) => {
    //supression de playlist
    return new Promise(resolve => {
        con = connection();
        con.connect(function(err) {
            if (err) throw err;
            con.query("DELETE FROM PLAYLIST WHERE idPlaylist = ?", id,
                function(err, res) {
                    resolve(res);
                });
        });
    })
}

exports.deleteVideo = (id) => {
    //supression de vidéo
    return new Promise(resolve => {
        con = connection();
        con.connect(function(err) {
            if (err) throw err;
            con.query("DELETE FROM VIDEO WHERE idVideo = ?", id,
                function(err, res) {
                    resolve(res);
                });
        });
    })
}

exports.selectPlaylistbyUser = (idUser) => {
    //recherche de playlist par iduser
    return new Promise(resolve => {
        con = connection();
        con.connect(function(err) {
            if (err) throw err;
            con.query("SELECT * FROM PLAYLIST WHERE idUser = ?", idUser,
                function(err, res) {
                    resolve(res);
                });
        });
    })
}


exports.associationVideoPLaylist = async (idPlaylist, idVideo) => {
    //inserer l'id d'une vidéo dans une playlist en prennant en compte les id déjà dans ce champs
    return new Promise(resolve => {
        con = connection();
        con.connect(function(err) {
            if (err) throw err;
            con.query("SELECT videos from PLAYLIST WHERE idPlaylist=?", idPlaylist,
                function(err, res) {
                    if(!res[0].videos.includes(idVideo)) {
                        let val = res[0].videos + "/" + idVideo
                        con.query("UPDATE PLAYLIST SET videos = ? where idPlaylist = ?", [val, idPlaylist],
                        function(err, res) {
                            resolve(res);
                        });
                    } else {
                        resolve("La video est déja dans la playlist");
                    }
                });
        });
    })
}