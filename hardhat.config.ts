import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
import 'dotenv/config';
import 'hardhat-typechain';
import { HardhatUserConfig } from 'hardhat/types';

const config: HardhatUserConfig = {
  solidity: {
    compilers: [{ version: '0.8.6' }],
  },
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      accounts: {
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
