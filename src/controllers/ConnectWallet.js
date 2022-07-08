import express from 'express';
const router = express.Router();
import { SigningCosmWasmClient, CosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { Web3Storage, File } from 'web3.storage';
import { makeGatewayURL } from '../helpers/helpers.js';
import pen from '../models/Pen.js';
import path from 'path';
const __dirname = path.resolve();

const mnemonic = process.env.MNEMONIC;
const rpcEndpoint = process.env.RPC;
const contractAddress = process.env.CONTRACT;
const web3Token = process.env.WEB3_STORAGE_TOKEN;
const storage = new Web3Storage({ token: web3Token });

let wallet;
let firstAccount;
let client;
let signingClient;

router.route('/connect-wallet').get(async (req, res) => {
       res.sendFile(__dirname + '/src/html/connect-wallet.html');

})

export default router