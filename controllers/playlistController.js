const videoController = require('./videoController');
const connexionService = require('../services/connexion');

exports.createPlaylist = (req, res) => {
    console.log(req.body.name)
    connexionService.insertPlaylist(req.body.name, "", req.body.idUser)
    res.send("fini")
};

exports.getPlaylistByName = async (req, res) => {
    const result = await connexionService.selectVideoById(req.params.id);
    res.send(result);
};

exports.getAllPlaylists = async (req, res) => {
    const result = await connexionService.selectPlaylist();
    res.send(result);
};