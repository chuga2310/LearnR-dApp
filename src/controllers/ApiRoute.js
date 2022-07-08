import express from 'express';
const router = express.Router();
import { SigningCosmWasmClient, CosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { Web3Storage, File } from 'web3.storage';
import { makeGatewayURL } from '../helpers/helpers.js';
import pen from '../models/Pen.js';

const mnemonic = process.env.MNEMONIC;
const rpcEndpoint = process.env.RPC;
const contractAddress = process.env.CONTRACT;
const web3Token = process.env.WEB3_STORAGE_TOKEN;
const storage = new Web3Storage({ token: web3Token });

let wallet;
let firstAccount;
let client;
let signingClient;

const getWallet = async () => {
    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: 'aura' });
    return wallet;
}

const get1stAccount = async (wallet) => {
    const [firstAccount] = await wallet.getAccounts();
    return firstAccount;
}

const getAuraWasmClient = async () => {
    const client = await CosmWasmClient.connect(rpcEndpoint);
    return client;
}

const getSigningAuraWasmClient = async (wallet) => {
    const signingClient = await SigningCosmWasmClient.connectWithSigner(rpcEndpoint, wallet);
    return signingClient;
}

function makeFileObjects(img) {
    // You can create File objects from a Buffer of binary data
    var buffer = Buffer.from(img.data, 'base64');

    const files = [
        new File(['contents-of-file-1'], 'plain-utf8.txt'),
        new File([buffer], img.name)
    ]
    return files
}

router.route('/Image/Upload').post(async (req, res) => {
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

router.route('/Token/Mint').post(async (req, res) => {
    /* 	#swagger.tags = ['Token']
    #swagger.description = 'Mint NFT Token' */

    /*  #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Token Information',
            schema: { $ref: '#/definitions/Mint' }
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

    let penInfo = await pen.create({
        contract: contractAddress,
        owner: firstAccount.address,
        name: req.name,
        quality: req.quality,
        level: req.level,
        effect: req.effect,
        resilience: req.resilience,
        number_of_mints: req.number_of_mints,
        durability: req.durability
    }, function (err, result) {
        if(err) {
            res.status(500).json({
                data: [err.message],
                message: 'Error'
            });
        }
    });

    if (penInfo) {
        const mintMsg = {
            mint: {
                id: req.penInfo.index,
                owner: req.penInfo.owner,
            }
        };

        const fee = {
            amount: [{
                denom: 'uaura',
                amount: '16',
            },],
            gas: '123',
        }

        try {
            const result = await signingClient.execute(firstAccount.address, contractAddress, mintMsg, fee);
            res.status(200).json({
                data: [result],
                message: 'Mint Result'
            });
        } catch (err) {
            res.status(500).json({
                data: [err.message],
                message: 'Error'
            });
        }
    }
})

router.route('/Token/Get/:id').get(async (req, res) => {
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

router.post('/Token/Transfer', async (req, res, next) => {
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
        },],
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

router.route('/metadata/:contract/token/:index').get(async (req, res) => {
    /* 	#swagger.tags = ['Token Mongodb']
    #swagger.description = 'Get Info NFT Token' */
    const conditions = {
        index: String(req.params.id),
        contract: String(req.params.contract)
    }

    try {
        const tokenInfo = await pen.findOne(conditions).exec();
        res.status(200).json({
            data: [tokenInfo],
            message: 'Found Result'
        });
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            data: [err.message],
            message: 'Error'
        });
    }
})

export default router