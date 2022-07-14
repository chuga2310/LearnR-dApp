import express from 'express';
const router = express.Router();

router.get('/get-offline-signer', (req, res) => {
    res.render('offline_signer', {
        targetUrl: req.query.targetUrl
    })
})

router.get('/connect-wallet', async(req, res) => {
    // const client = await SigningCosmWasmClient.connect({ url: 'https://rpc.halo.aura.network/' })
    //     // client.execute(
    //     // )
    // console.log(Object.values(req.query.offlineSigner))
    // res.status(200).json({
    //     data: [],
    //     message: 'Upload Result'
    // });
})


export default router;