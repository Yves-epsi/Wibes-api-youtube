const apiYoutubeService = require('../services/apiYoutube');
const connexionService = require('../services/connexion');

exports.insertInBase = (req, res) => {
    const video = apiYoutubeService.getVideo(req.params.url);
    connexionService.insertVideo(video.title, video.url, video.bio);
};

const getVideoById = (id) => {
    return connexionService.selectVideo();
};

exports.getAllVideos = (req, res) => {
    res.json(connexionService.selectVideo());
};