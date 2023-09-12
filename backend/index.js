import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const PORT = 4000;

const connect = () => {
    mongoose.
    connect(process.env.MONGO_URI)
    .then(() => {
        console.log("connected to db");
    })
    .catch((err) => {
        throw err;
    });
};


app.listen(PORT, () => {
    connect();
    console.log("listening on port 4000");
});

