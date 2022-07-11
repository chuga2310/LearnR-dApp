import express from 'express';

const router = express.Router();
// import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';
// router.use(bodyParser.json());
router.use(fileUpload());

import apiV1 from './controllers/ApiRoute.js';
import apiConnectWallet from './controllers/ConnectWallet.js';

router.use(apiV1);

router.use('/connect-wallet', (req, res) => {
    res.render('connect_wallet');
});

export default router