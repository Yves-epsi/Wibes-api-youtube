const apiYoutubeService = require('../services/apiYoutube');
const connexionService = require('../services/connexion');

exports.insertInBase = (req, res) => {
    apiYoutubeService.getVideoById(req.params.id).then( (video) => {
        connexionService.insertVideo(video.id, video.title, video.url, "");
    })
    res.send("fini")
};

exports.getVideoById = (req, res) => {
    console.log(req.params.id)
    console.log(connexionService.selectVideoById(req.params.id))
    res.send(connexionService.selectVideoById(req.params.id));
};

exports.getAllVideos = (req, res) => {
    console.log(connexionService.selectVideo())
    res.send(connexionService.selectVideo());
};