import express from 'express';
const router = express.Router();
import { SigningCosmWasmClient, CosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import { DirectSecp256k1HdWallet, coin } from '@cosmjs/proto-signing';
import {cal_earning_quiz_mode} from '../controllers/CalculateTokenController.js';

import Pen from '../models/Pen.js';

const mnemonic = process.env.MNEMONIC;
const rpcEndpoint = process.env.RPC;
const contractAddress = process.env.CONTRACT;
const ratio = process.env.RATIO;
const currency = process.env.CURRENCY;
const decreaseTotalTimePercent = 0.1;

let firstAccount;
let client;
let signingClient;

const getWallet = async() => {
    return await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: 'aura' });
}

const get1stAccount = async() => {
    const wallet = await getWallet();
    [firstAccount] = await wallet.getAccounts();
    return firstAccount;
}

const getAuraWasmClient = async() => {
    client = await CosmWasmClient.connect(rpcEndpoint);
    return client;
}

const getSigningAuraWasmClient = async() => {
    const wallet = await getWallet();
    signingClient = await SigningCosmWasmClient.connectWithSigner(rpcEndpoint, wallet);
    return signingClient;
}


const sendTokensQuiz = async(receivedAddress, point, pen_index, total_time_of_course) => {

    let pen = await Pen.findOne({ index: pen_index, deploy_status: true }).exec();
    if(pen) 
    {
        const adminWallet = (await get1stAccount()).address;

        let decreaseTotalTime = total_time_of_course * decreaseTotalTimePercent;

        let sumTokens = ratio * cal_earning_quiz_mode(point, pen.level, decreaseTotalTime);

        let client = await getSigningAuraWasmClient();
        const amount = [
            coin(`${Math.round(sumTokens)}`, currency)
        ];

        const fee = {
            amount: [{
                denom: 'uaura',
                amount: '153',
            }, ],
            gas: '100000',
        };
        return client.sendTokens(adminWallet, receivedAddress, amount, fee);
    }
    return null;
}

export { getWallet, get1stAccount, getAuraWasmClient, getSigningAuraWasmClient, contractAddress, sendTokensQuiz };