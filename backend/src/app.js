require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

// app.use(cors({ origin: process.env.API_URL }));

app.options('/comments', cors())

const commentRoutes = require('./routes/comments.routes');

app.use(express.json());

app.use('/comments', commentRoutes);

module.exports = app;
