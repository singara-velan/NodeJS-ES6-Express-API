import express from 'express';
import bodyParser from 'body-parser';

import routes from './routes/index.route';
import appConstants from './appConstants';

const app = express();

// parse body params and attache them to req.body
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '200mb', extended: true }));

// mount all routes on /api path
app.use(appConstants.apiServiceRoute, routes);

export default {app};