const apiYoutubeService = require('../services/apiYoutube');
const connexionService = require('../services/connexion');

exports.insertInBase = (req, res) => {
    apiYoutubeService.getVideoById(req.params.id).then( (video) => {
        connexionService.insertVideo(video.id, video.title, video.url, "");
    })
    res.send("fini")
};

exports.getVideoById = async (req, res) => {
    const result = await connexionService.selectVideoById(req.params.id);
    res.send(result);
};

exports.getAllVideos = async (req, res) => {
    const result = await connexionService.selectVideo();
    res.send(result);
};