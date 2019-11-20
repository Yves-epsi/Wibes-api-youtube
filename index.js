const http = require('http');
const express = require('express');
const indexRouter = require('./routes/indexRouter');
const playlistRouter = require('./routes/playlistRouter');
const VideoRouter = require('./routes/VideoRouter');

const app = express();

app.listen(3000,()=> console.log('listen'));


app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.use('/', indexRouter);
app.use('/playlist', playlistRouter);
app.use('/video', VideoRouter);