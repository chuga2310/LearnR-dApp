import express from 'express';

const router = express.Router();

import { privateRouter, publicRouter } from './controllers/TokenController.js';
import apiAuthentication from './controllers/AuthenticateController.js';

import checkAuth from './middleware/Authenticate.js';
/**
 * Route
 */
router.use(publicRouter);

router.use(checkAuth, privateRouter);
// router.use(apiAuthentication);

export default router;