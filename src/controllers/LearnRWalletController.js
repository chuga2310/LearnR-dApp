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

export { getWallet, get1stAccount, getAuraWasmClient, getSigningAuraWasmClient, contractAddress };