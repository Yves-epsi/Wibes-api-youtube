const videoController = require('./videoController');
const connexionService = require('../services/connexion');

exports.createPlaylist = (req, res) => {
    connexionService.insertPlaylist(req.body.name, "", req.body.idUser)
    res.send("fini")
};

exports.getPlaylistById = async (req, res) => {
    const result = await connexionService.selectPlaylistById(req.params.id);
    res.send(result);
};

exports.getPlaylistByName = async (req, res) => {
    const result = await connexionService.selectPlaylistbyName(req.params.name);
    res.send(result);
};

exports.getPlaylistByIdUser = async (req, res) => {
    const result = await connexionService.selectPlaylistbyUser(req.params.idUser);
    res.send(result);
};

exports.getAllPlaylists = async (req, res) => {
    const result = await connexionService.selectPlaylist();
    res.send(result);
};

exports.deletePlaylist = async (req, res) => {
    const result = await connexionService.deletePlaylist(req.params.id);
    res.send(result);
};

exports.insertVideoInPlaylist = async (req, res) => {
    const result = await connexionService.associationVideoPLaylist(req.params.idPlaylist, req.params.idVideo);
    res.send(result);
};

exports.deleteVideoInPlaylist = async (req, res) => {
    const result = await connexionService.deleteVideoInPlaylist(req.params.idPlaylist, req.params.idVideo);
    res.send(result);
};
