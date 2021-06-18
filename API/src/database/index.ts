/*
 * @file        index.ts
 * @desc        initialize database connection to mongoDB
 *
 */

import mongoose from 'mongoose';

import { dbConnection } from '../config';

import { logger } from '../core/logger';

const dbURI = `mongodb://${dbConnection.host}:${dbConnection.port}/${dbConnection.database}`;

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedToplogy: true,
    useFindAndModify: false,
    autoIndex: true,
    poolSize: 10,
    bufferMaxEntries: 0,
    connectionTimeoutMS: 10000,
    socketTimeoutMS: 45000,
};

logger.info(`Connect to ${dbURI}`);

mongoose
    .connect(dbURI, options)
    .then(() => {
        logger.info('Connected to database');
    })
    .catch((e) => {
        logger.info('Fail to connect to database');
        logger.warn(e, 'Fail to connect to database mongoDB');
    });

mongoose.connection.on('connected', () => {
    logger.info('Mongoose connection event: connected');
});

mongoose.connection.on('error', (e) => {
    logger.info('Mongoose connection event: error');
    logger.warn(e);
});

mongoose.connection.on('disconnected', () => {
    logger.info('Mongoose connection event: disconnected');
});

process.on('SIGINT', () => {
    logger.info('NodeJs process is terminated!');
    mongoose.connection.close(() => {
        logger.info('Mongoose connection closed due to app termination');
        process.exit(0);
    });
});
