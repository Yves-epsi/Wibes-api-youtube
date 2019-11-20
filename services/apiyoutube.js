const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAN4uhkTbljQMj9xOTu6P1fwcPRMBpfuV0');

exports.getVideoById = function(id){
        return youtube.getVideoByID(id)
            .then(video => {
                if (video) return video;
                else console.log('video not found :(');
            })
            .catch(console.log);
};
