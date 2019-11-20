const YouTube = require('simple-youtube-api');
const config = require('./config');
const youtube = new YouTube(config.api);

const Video = require('../models/video');

//Récupérer une video par son ID : https://www.youtube.com/watch?v={ID}
exports.getVideoById = function(id){
        return youtube.getVideoByID(id, {
            "part": "snippet"
        })
            .then(video => {
                if (video){
                    return new Video(id, video.raw.snippet.title, video.raw.snippet.description);
                }
                else console.log('video not found :(');
            })
            .catch(console.log);
};

//Récupérer une video par l'URL entière
exports.getVideoByUrl = function(url){
    return youtube.getVideo(url, {
        "part": "snippet"
    }).then(video => {
        if (video){
            return vid = new Video(video.id, video.title, video.description);
        }
        else console.log('Video not found :(' );
    })
        .catch(console.log);
};
