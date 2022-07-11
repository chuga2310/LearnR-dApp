
import express from 'express';

const router = express.Router();

/**
 * MiddleWare
 */
 router.use(function (req, res, next) {
    if (!req.headers.authorization) {
        return res.status(403).json({ error: 'No credentials sent!' });
    }
    next();
})

export default router