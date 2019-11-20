const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAN4uhkTbljQMj9xOTu6P1fwcPRMBpfuV0');


exports.getVideoById = function(id){
        return youtube.getVideoByID(id, {
            "part": "snippet"
        })
            .then(video => {
                if (video){
                    return new Video(id, video.title, video.description);
                }
                else console.log('video not found :(');
            })
            .catch(console.log);
};
