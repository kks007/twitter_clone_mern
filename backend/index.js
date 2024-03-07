// dependencies 

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

//modules 

import userRoutes from './routes/users.js';
import authRoutes from './routes/auths.js'
import tweetRoutes from "./routes/tweets.js";


const app = express();
dotenv.config();

const PORT = 4000;

// database connection check: 

const connect = () => {
    mongoose.set("strictQuery", false);
    mongoose.
    connect(process.env.MONGO_URI)
    .then(() => {
        console.log("connected to db");
    })
    .catch((err) => {
        throw err;
    });
};

app.use(cors({
    origin: 'https://melodyverse.netlify.app'
  }));

// include json
app.use(cookieParser());
app.use(express.json());


//route handling 

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/tweets", tweetRoutes);


// listen to reqs

app.listen(PORT, () => {
    connect(); // to db
    console.log("listening on port 4000");
});

