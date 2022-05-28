import { HardhatUserConfig } from 'hardhat/types';

import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import 'dotenv/config';
import 'hardhat-typechain';
import 'hardhat-deploy-ethers';
import 'hardhat-deploy';
import '@symfoni/hardhat-react';
import 'hardhat-typechain';
import '@typechain/ethers-v5';

/*
task('accounts', 'Prints the list of accounts', async (args, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});
*/

const config: HardhatUserConfig = {
  react: {
    providerPriority: ['web3modal', 'hardhat'],
  },
  solidity: {
    compilers: [{ version: '0.8.6' }],
  },
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      accounts: {
        mnemonic: 'test test test test test test test test test test test junk',
        count: 10,
      },
    },
    baobab: {
      url: 'https://node-api.klaytnapi.com/v1/klaytn',
      httpHeaders: {
        Authorization:
          'Basic ' +
          Buffer.from(
            process.env.KAS_ACCESS_KEY + ':' + process.env.KAS_SECRET_KEY,
          ).toString('base64'),
        'x-chain-id': '1001',
      },
      accounts: [process.env.PRIVATEKEY || ''],
      chainId: 1001,
      gas: 8500000,
      gasPrice: 250000000000,
    },
    cypress: {
      url: 'https://node-api.klaytnapi.com/v1/klaytn',
      httpHeaders: {
        Authorization:
          'Basic ' +
          Buffer.from(
            process.env.KAS_ACCESS_KEY + ':' + process.env.KAS_SECRET_KEY,
          ).toString('base64'),
        'x-chain-id': '8217',
      },
      accounts: [process.env.PRIVATEKEY || ''],
      chainId: 1001,
      gas: 8500000,
      gasPrice: 250000000000,
    },
  },
  mocha: {
    timeout: 400000,
  },
};

export default config;
