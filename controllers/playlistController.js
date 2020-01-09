const videoController = require('./videoController');
const connexionService = require('../services/connexion');

exports.createPlaylist = (req, res) => {
    console.log(req.body)
    connexionService.insertPlaylist(req.body.name, "", req.body.idUser)
    res.send("fini")
};

/*exports.getVideoById = async (req, res) => {
    const result = await connexionService.selectVideoById(req.params.id);
    res.send(result);
};

exports.getAllVideos = async (req, res) => {
    const result = await connexionService.selectVideo();
    res.send(result);
};*/