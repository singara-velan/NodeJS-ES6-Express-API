import express from 'express';
import bodyParser from 'body-parser';

import routes from './routes/index.route';
import appConstants from './appConstants';

import swaggerJSDoc from 'swagger-jsdoc';

const app = express();

// parse body params and attache them to req.body
app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({
    limit: '200mb',
    extended: true
}));

// mount all API routes on /api path
app.use(appConstants.apiServiceRoute, routes);

var options = {
    swaggerDefinition: {
        info: {
            description: "This is ES6 based NodeJS-Express api boilerplate",
            version: "1.0.0",
            title: "Node API",
        },
        basePath: '/v1'
    },
    apis: ['./api/controllers/*.js'], // Path to the API docs
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
var swaggerSpec = swaggerJSDoc(options);

// Serve swagger docs the way you like (Recommendation: swagger-tools)
app.get(appConstants.swaggerSpecRoute, function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});


export default app;