
import express from 'express';
const router = express.Router();
import TokenAccess from '../models/TokenAccess.js';
import { randomBytes } from 'crypto';

router.route('/token-access/generate').post(async (req, res) => {
    /* 	#swagger.tags = ['Authenticate']
     #swagger.description = 'Generate token access' */
    try {
        var result = await TokenAccess.create({
            token: randomBytes(20).toString('hex'),
            is_active: true,
        });
        res.status(200).json({
            data: [result],
            message: 'Found Result'
        });
    } catch (err) {
        res.status(500).json({
            data: [err.message],
            message: 'Error'
        });
    }

})

export default router;