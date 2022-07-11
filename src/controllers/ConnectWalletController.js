import express from 'express';
const router = express.Router(); 

import path from 'path';
const __dirname = path.resolve();

router.route('/connect-wallet').get(async (req, res) => {
       res.sendFile(__dirname + '/src/html/connect-wallet.html');
})

export default router