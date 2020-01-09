const http = require('http');
const express = require('express');
const indexRouter = require('./routes/indexRouter');
const playlistRouter = require('./routes/playlistRouter');
const VideoRouter = require('./routes/VideoRouter');
const logger = require('./services/log');
var bodyParser = require('body-parser');

logger.writeLog("Démarrage de l'application", "START SERVER", "ERROR");

const app = express();
const expressSwagger = require('express-swagger-generator')(app);

logger.writeLog("Démarrage de l'application", "START SERVER");

app.listen(3000, () => {
  console.log("listen");
  logger.writeLog("Application démarrée", "START SERVER");
});

let options = {
  swaggerDefinition: {
    info: {
      description: 'This is a sample server',
      title: 'Swagger',
      version: '1.0.0',
    },
    host: 'localhost:3000',
    basePath: '/v1',
    produces: [
      "application/json",
      "application/xml"
    ],
    schemes: ['http', 'https'],
    securityDefinitions: {
      JWT: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
        description: "",
      }
    }
  },
  basedir: __dirname, //app absolute path
  files: ['./routes/**/*.js'] //Path to the API handle folder
};
expressSwagger(options)
app.listen(3001);

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
  logger.writeLog("Erreur au démarrage de l'application.", "START SERVER", "ERROR");
});

app.use('/', indexRouter);
app.use('/playlist', playlistRouter);
app.use('/video', VideoRouter);