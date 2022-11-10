const express = require('express');
const mongo = require('./connect');
const dotenv = require('dotenv');
const hallroomRouter = require('./Router/roomRouter');
const bookedRouter = require('./Router/bookedroomRouter');

dotenv.config();
mongo.connect();
const app = express();
app.use(express.json());

app.use('/room', hallroomRouter);
app.use('/bookedroom', bookedRouter);
app.listen(process.env.PORT);