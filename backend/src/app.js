require('dotenv').config();

const express = require('express');

const app = express();

const commentRoutes = require('./routes/comments.routes');

app.use(express.json());

app.options('*', cors())

app.use('/comments', commentRoutes);

module.exports = app;
