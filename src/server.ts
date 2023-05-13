import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import { config } from './config/config';
import Logging from './library/Logging';
import userRoutes from './routes/User';


const router = express();

//connect mongodb
mongoose
    .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
        Logging.info('Connected to mongoDB.');
        startServer();
    })
    .catch((error: any) => {
        Logging.error('Unable to connect:');
        Logging.error(error);
    });

// only start server if connection is succesful
const startServer = () => {
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

    router.use(express.urlencoded({ extended: true }));
    router.use(express.json());

    //Rules for api

    router.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header(
            'Access-Control-Alloe-Headers',
            'Origin, X-Requested-With, Content-Type, Accept, Authorization'
        );

        if (req.method == 'OPTIONS') {
            res.header(
                'Access-Control-Allow-Methods',
                'PUT, POST, PATCH, DELETE, GET'
            );
            return res.status(200).json({});
        }
        next();
    });

    //Routes
    router.use('/users',userRoutes);

    //Healthcheck
    router.get('/ping', (req, res, next) => {
        res.status(200).json({ message: 'pong' });
    });

    //Error handling
    router.use((req, res, next) => {
        const error = new Error('not found');
        Logging.error(error);

        return res.status(404).json({ message: error.message });
    });

    http.createServer(router).listen(config.server.port, () => {
        Logging.info(`Listening on http://localhost:${config.server.port}.`);
    });
};
