
import express from 'express';

const router = express.Router();
// import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';
// router.use(bodyParser.json());
router.use(fileUpload());

import apiV1 from './controllers/TokenController.js';
import apiConnectWallet from './controllers/ConnectWalletController.js';
// import checkAuth from './middleware/BaseMiddleware.js';

// router.use(checkAuth);

router.use(apiV1);

router.use(apiConnectWallet);

export default router