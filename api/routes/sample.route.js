import express from 'express';
import sampleCtrl from '../controllers/sample.controller';
import appConstants from '../appConstants';

const router = express.Router();

router.route(appConstants.sampleController.routeMethods.sampleGet)
    .get(sampleCtrl.getMethod);

export default router;