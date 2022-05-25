import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "dotenv/config";
import "hardhat-typechain";
import { HardhatUserConfig } from "hardhat/types";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [{ version: "0.8.6" }],
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      accounts: {
        count: 10,
      },
    },
  },
  mocha: {
    timeout: 400000,
  },
};

export default config;
