import http from 'http';

import express from 'express';
import app from './api/express';

let server;
const config = {
    port: process.env.PORT || 1234
}

app.use(express.static('swagger'));


// This method starts api service
const bootServer = () => {
    // listen on port config.port
    server = http.createServer(app).listen(config.port, () => {
        console.log(`server started on port ${config.port}`); // eslint-disable-line
    });
}

// This method stops api server
const shutdown = () => {
    server.close();
};


//  node js application main module
if (!module.parent) {
    bootServer();
}

module.exports = {
    bootServer,
    shutdown,
};