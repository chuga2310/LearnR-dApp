import express from 'express';

const router = express.Router();

import apiV1 from './controllers/TokenController.js';
import apiAuthentication from './controllers/AuthenticateController.js';

import checkAuth from './middleware/Authenticate.js';
/**
 * Route
 */
router.use(checkAuth, apiV1);
router.use(apiAuthentication);

export default router;