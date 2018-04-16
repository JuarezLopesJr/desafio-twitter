import express from 'express';
import cors from 'cors';
import Promise from 'bluebird';
import cookieSession from 'cookie-session';
import passport from 'passport';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
import bodyParser from 'body-parser';

import authRoutes from './routers/authRoutes';

dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY]
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(cors('*'));

app.use(bodyParser.json());

authRoutes(app);

MongoClient.connect(process.env.MONGO_URL, err => {
  if (err) {
    console.log(err);
  } else {
    console.log('MongoDB connected...');
  }
});

mongoose.Promise = Promise;
mongoose.set('debug', true);
mongoose.connect(process.env.MONGO_URL);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
