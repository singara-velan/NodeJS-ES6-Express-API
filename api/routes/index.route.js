import express from 'express';
import sampleRoute from './sample.route';
import appConstants from '../appConstants';

const router = express.Router();

router.use(appConstants.sampleController.routeName, sampleRoute);

export default router;