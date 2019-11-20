const apiYoutubeService = require('../services/apiYoutube');
const connexionService = require('../services/connexion');

exports.insertInBase = (req, res) => {
    apiYoutubeService.getVideoById(req.params.id).then( (video) => {
        connexionService.insertVideo(video.id, video.title, video.url, "");
    })
    res.send("fini")
};

const getVideoById = (id) => {
    return connexionService.selectVideo();
};

exports.getAllVideos = (req, res) => {
    res.json(connexionService.selectVideo());
};