require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

const commentRoutes = require('./routes/comments.routes');

app.use(express.json());

app.use('/comments', commentRoutes);

module.exports = app;
