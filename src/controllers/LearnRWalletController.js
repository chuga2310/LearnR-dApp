import express from 'express';
const router = express.Router();
import { SigningCosmWasmClient, CosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';

const mnemonic = process.env.MNEMONIC;
const rpcEndpoint = process.env.RPC;
const contractAddress = process.env.CONTRACT;

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


const sendTokensQuiz = async(receivedAddress, point, pen_level, total_time_of_course) => {
    const adminWallet = (await get1stAccount()).address;
    let sumTokens = ratio * cal_earning_quiz_mode(point, pen_level, total_time_of_course);

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

export { getWallet, get1stAccount, getAuraWasmClient, getSigningAuraWasmClient, contractAddress, sendTokensQuiz };