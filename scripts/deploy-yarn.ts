import { ethers } from 'hardhat';

async function main() {
  const cap = ethers.BigNumber.from(10)
    .pow(9)
    .mul(ethers.BigNumber.from(10).pow(18));

  const [deployer] = await ethers.getSigners();

  console.log('Deploying contracts with the account:', deployer.address);

  console.log('Account balance:', (await deployer.getBalance()).toString());

  const Yarn = await ethers.getContractFactory('Yarn');
  const yarn = await Yarn.deploy('Brown Yarn', 'YARN', cap);

  console.log('Yarn address:', yarn.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
