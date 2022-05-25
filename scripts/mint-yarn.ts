import { ethers } from 'hardhat';
import { Yarn } from '../typechain/Yarn';

async function main() {
  const [deployer] = await ethers.getSigners();

  const contractAddress = '0x82bB72CD5C57674E9096233009e82743E035f491';

  const yarn = (await ethers.getContractAt('Yarn', contractAddress)) as Yarn;
  await yarn.mint(deployer.address, ethers.BigNumber.from(10).pow(18));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
