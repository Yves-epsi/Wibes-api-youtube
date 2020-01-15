const apiYoutubeService = require('../services/apiYoutube');
const connexionService = require('../services/connexion');

exports.insertInBase = (req, res) => {
    apiYoutubeService.getVideoById(req.params.id).then( (video) => {
        connexionService.insertVideo(video.id, video.title, video.url, "").then(()=>{
            res.send("fini")
        })
    })
    
};

exports.getVideoById = async (req, res) => {
    const result = await connexionService.selectVideoById(req.params.id);
    res.send(result);
};

exports.getMultipleVideoById = async (req, res) => {
    const result = await connexionService.selectMultipleVideoById(req.body.videos);
    res.send(result);
};

exports.getAllVideos = async (req, res) => {
    const result = await connexionService.selectVideo();
    res.send(result);
};

exports.getVideoByTitle = async (req, res) => {
    const result = await connexionService.findVideosWithTitle(req.params.title);
    res.send(result);
};