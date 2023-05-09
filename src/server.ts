import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import { config } from './config/config';
import Logging from './library/Logging';

const router = express();

//connect mongodb
mongoose
    .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
        Logging.info('Connected to mongoDB.');
    })
    .catch((error) => {
        Logging.error('Unable to connect:');
        Logging.error(error);
    });

// only start server if connection is succesful
const StartServer = () => {
    router.use((req, res, next) => {
        //Log the request
        Logging.info(
            `Incomming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}]`
        );

        res.on('finish', () => {
            //Log the response
            Logging.info(
                `Incomming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: [${req.statusCode}]`
            );
        });

        next();
    });
};
