// import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";

const chainId = 'halo-testnet-001'
window.onload = () => {
    window.keplr.enable(chainId)
        .then(async res => {
            console.log(res)
            // return false;
            if (res) {
                const offlineSigner = window.getOfflineSigner(chainId)
                const cosmwasm = await SigningCosmWasmClient.connectWithSigner('https://rpc.halo.aura.network:443', offlineSigner)
                const account = (await offlineSigner.getAccounts())[0]
                    // Example Execute Contract
                let cw20Contract =
                    'aura1tsswv2jnp7kdgn33q3kwmj9jfnlxjpxqq2squ6la3l8mh40djcqqr0xshd';
                let execMsg = {
                    mint: {
                        id: 123,
                        // owner: 'aura1csk4psx5gz0l7c9u65289pwecntpwk9vf0c2xv'
                        owner : account.address
                    }
                }
                const execute = await cosmwasm.execute(account.address, cw20Contract, execMsg, {
                    amount: [{
                        denom: 'uaura',
                        amount: '200',
                    }, ],
                    gas: '200000'
                })
                console.log(execute)
            }
        })
}