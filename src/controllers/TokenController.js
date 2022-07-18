import express from 'express';
const router = express.Router();
import { Web3Storage, File } from 'web3.storage';
import { makeGatewayURL } from '../helpers/helpers.js';
import pen from '../models/Pen.js';
import { getWallet, get1stAccount, getAuraWasmClient, getSigningAuraWasmClient, contractAddress, sendTokensQuiz } from './LearnRWalletController.js';

const web3Token = process.env.WEB3_STORAGE_TOKEN;
const storage = new Web3Storage({ token: web3Token });

function makeFileObjects(img) {
    // You can create File objects from a Buffer of binary data
    var buffer = Buffer.from(img.data, 'base64');

    const files = [
        new File(['contents-of-file-1'], 'plain-utf8.txt'),
        new File([buffer], img.name)
    ]
    return files
}

router.route('/Image/Upload').post(async(req, res) => {
    /* 	#swagger.tags = ['Image']
    #swagger.description = 'Upload image to IPFS' */

    /*    #swagger.consumes = ['multipart/form-data']  
        #swagger.parameters['image'] = {
            in: 'formData',
            type: 'file',
            required: 'true',
            description: 'Some description...',
    } */

    const imageFile = req.files.image;

    try {
        const filesObj = makeFileObjects(imageFile);
        const cid = await storage.put(filesObj);
        console.log('Content added with CID:', cid);
        const metadataGatewayURL = makeGatewayURL(cid, 'metadata.json');
        const imageGatewayURL = makeGatewayURL(cid, imageFile.name);
        const imageURI = `ipfs://${cid}/${imageFile.name}`;
        const metadataURI = `ipfs://${cid}/metadata.json`;

        res.status(200).json({
            data: [{ cid, metadataGatewayURL, imageGatewayURL, imageURI, metadataURI }],
            message: 'Upload Result'
        });
    } catch (err) {
        res.status(500).json({
            data: [err.message],
            message: 'Error'
        });
    }
})

router.route('/Token/Mint').post(async(req, res) => {
    /* 	#swagger.tags = ['Token']
    #swagger.description = 'Mint NFT Token' */

    /*  #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Token Information',
            schema: { $ref: '#/definitions/Mint' }
    } */

    try {
        const result = await pen.create({
            contract: contractAddress,
            owner: firstAccount.address,
            quality: req.body.quality,
            level: req.body.level,
            effect: req.body.effect,
            resilience: req.body.resilience,
            number_of_mints: req.body.number_of_mints,
            durability: req.body.durability
        });
        if (result) {
            const mintMsg = {
                mint: {
                    id: `${result.index}`,
                    owner: result.owner,
                }
            };

            const fee = {
                amount: [{
                    denom: 'uaura',
                    amount: '153',
                }, ],
                gas: '100000',
            }

            try {
                const response = await signingClient.execute(firstAccount.address, contractAddress, mintMsg, fee);
                await pen.findOneAndUpdate({ index: result.index }, { deploy_status: true }, { upsert: true });

                res.status(200).json({
                    data: [response],
                    message: 'Mint Result'
                });
            } catch (err) {
                res.status(500).json({
                    data: [err.message],
                    message: 'Error'
                });
            }
        }
    } catch (err) {
        res.status(500).json({
            data: [err.message],
            message: 'Error'
        });
    }
})

router.route('/Token/Get/:id').get(async(req, res) => {
    /* 	#swagger.tags = ['Token']
    #swagger.description = 'Mint NFT Token' */

    if (!client) {
        client = await getAuraWasmClient();
    }
    const nftInfo = {
        get_pen: {
            id: String(req.params.id)
        }
    }
    console.log(client)
    try {
        const result = await client.queryContractSmart(contractAddress, nftInfo);
        res.status(200).json({
            data: [result],
            message: 'Found Result'
        });
    } catch (err) {
        console.log(err)
        res.status(500).json({
            data: [err.message],
            message: 'Error'
        });
    }
})

router.post('/Token/Transfer', async(req, res, next) => {
    /* 	#swagger.tags = ['Token']
        #swagger.description = 'Transfer NFT Token' */

    /*  #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Transfer Information',
            schema: { $ref: '#/definitions/Transfer' }
    } */

    if (!wallet) {
        wallet = await getWallet();
    }
    if (!firstAccount) {
        firstAccount = await get1stAccount(wallet);
    }
    if (!signingClient) {
        signingClient = await getSigningAuraWasmClient(wallet);
    }
    const transMsg = {
        transfer_nft: {
            token_id: req.body.token_id,
            recipient: req.body.recipient,
        }
    }

    const fee = {
        amount: [{
            denom: 'uaura',
            amount: '1000',
        }, ],
        gas: '152375',
    }

    try {
        const result = await signingClient.execute(firstAccount.address, contractAddress, transMsg, fee);
        res.status(200).json({
            data: [result],
            message: 'Tranfer Result'
        });
    } catch (err) {
        res.status(500).json({
            data: [err.message],
            message: 'Error'
        });
    }
})

router.route('/metadata/:contract/token/:index').get(async(req, res) => {
    /* 	#swagger.tags = ['Token Mongodb']
=======
router.route('/metadata/:contract/token/:index').get(async (req, res) => {
    /* 	#swagger.tags = ['Token']
>>>>>>> 106a4723b7357a74944ed4b8f88708573c8672f7:src/controllers/TokenController.js
    #swagger.description = 'Get Info NFT Token' */

    try {
        const result = await pen.create({
            contract: contractAddress,
            owner: firstAccount.address,
            quality: req.body.quality,
            level: req.body.level,
            effect: req.body.effect,
            resilience: req.body.resilience,
            number_of_mints: req.body.number_of_mints,
            durability: req.body.durability
        });
        res.status(200).json({
            data: [tokenInfo],
            message: 'Found Result'
        });
    } catch (err) {
        console.log(err)
        res.status(500).json({
            data: [err.message],
            message: 'Error'
        });
    }
})

/**
 * Get list token by owner
 */

router.route('/token/:owner/:page').get(async(req, res) => {
    /* 	#swagger.tags = ['Token']
     #swagger.description = 'Get Info NFT Token' */
    const conditions = {
        owner: String(req.params.owner),
    }

    var options = {
        page: req.params.page || 1,
        limit: 10,
        sort: {
            index: -1
        },
    };

    try {
        const tokenInfo = await pen.paginate(conditions, options);
        res.status(200).json({
            data: [tokenInfo],
            message: 'Found Result'
        });
    } catch (err) {
        console.log(err)
        res.status(500).json({
            data: [err.message],
            message: 'Error'
        });
    }

})

/**
 * Get list token by owner
 */

router.route('/earn/token/quiz').post(async(req, res) => {
    /* 	#swagger.tags = ['Token']
     #swagger.description = 'Send token to users when they do quiz' */

    try {
        let receivedAddress = req.body.received_address;
        let point = req.body.point;
        let pen_level = req.body.pen_level;
        let total_time_of_course = req.body.total_time_of_course;

        const result = await sendTokensQuiz(receivedAddress, point, pen_level, total_time_of_course);

        res.status(200).json({
            data: [result],
            message: 'Found Result'
        });
    } catch (err) {
        console.log(err)
        res.status(500).json({
            data: [err.message],
            message: 'Error'
        });
    }

})

export default router