import express from 'express';
import ctrl from '../controllers/email.controller';
import appConstants from '../appConstants';

const router = express.Router();

router.route(appConstants.emailController.routeMethods.send)
    .post(ctrl.sendMail);

export default router;