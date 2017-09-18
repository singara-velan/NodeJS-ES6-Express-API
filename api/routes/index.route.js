import express from 'express';
import appConstants from '../appConstants';
import sampleRoute from './sample.route';
import emailRoute from './email.route';


const router = express.Router();

router.use(appConstants.sampleController.routeName, sampleRoute);
router.use(appConstants.emailController.routeName, emailRoute);

export default router;