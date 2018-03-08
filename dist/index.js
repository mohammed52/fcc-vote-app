'use strict';

var express = require('express');

var app = express();

app.route('/').get(function (req, res) {
  if (req.path == '/') {
    res.sendFile(process.cwd() + '/views/index.html');
  } else {
    res.send({
      name: "hello world"
    });
  }
});

// Respond not found to all the wrong routes
app.use(function (req, res, next) {
  res.status(404);
  res.type('txt').send('Not found');
});

// Error Middleware
app.use(function (err, req, res, next) {
  if (err) {
    res.status(err.status || 500).type('txt').send(err.message || 'SERVER ERROR');
  }
});

app.listen(process.env.PORT || 5000, function () {
  console.log('Node.js listening ...');
});