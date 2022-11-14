require('dotenv').config();

const express = require('express');

const app = express();

const commentRoutes = require('./routes/comments.routes');

app.use(express.json());

// app.use((_req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//   next()
// })

app.use('/comments', commentRoutes);

module.exports = app;
