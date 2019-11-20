const http = require('http');
const express = require('express');
const indexRouter = require('./routes/indexRouter');
const playlistRouter = require('./routes/playlistRouter');
const VideoRouter = require('./routes/VideoRouter');
const logger = require('./services/log');

logger.writeLog("Démarrage de l'application", "START SERVER");

const app = express();

app.listen(3000,()=> {
  console.log("listen");
  logger.writeLog("Application démarrée", "START SERVER");
});


app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
  logger.writeLog("Erreur au démarrage de l'application.", "START SERVER");
});

app.use('/', indexRouter);
app.use('/playlist', playlistRouter);
app.use('/video', VideoRouter);
