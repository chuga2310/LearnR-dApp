import express from 'express';

const router = express.Router();
import TokenAccess from '../models/TokenAccess.js';
import nonSecurePaths from '../config/NoneSecureRoute.js';

/**
 * MiddleWare
 */
router.use(async function(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(403).json({ error: 'No credentials sent!' });
    } else {
        const result = await TokenAccess.findOne({ token: req.headers.authorization, is_active: true }).exec();
        if (result) {
            next();
        } else {
            return res.status(403).json({ error: 'Wrong token sent!' });
        }
    }

})

export default router