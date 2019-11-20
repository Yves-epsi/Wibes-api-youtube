var http = require('http');
const apiyoutube = require('./services/apiyoutube');

let vid;

apiyoutube.getVideoById('MMsCCAzEgaY')
    .then(video => vid = video);

var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end("Le titre de la vidéo est : " + vid.title);
});

server.listen(8080);