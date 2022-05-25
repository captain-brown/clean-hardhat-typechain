import { expect } from 'chai';
import { ethers, waffle } from 'hardhat';
import BasicArtifact from '../artifacts/contracts/Basic.sol/Basic.json';

import { Basic } from '../typechain/Basic';
import { BigNumber } from '@ethersproject/bignumber';

const { deployContract } = waffle;

describe('Basic', () => {
  let basic: Basic;
  const initBalance = BigNumber.from(10).pow(18).mul(10000);
  const initName = 'Brown';

  const afterBalance = BigNumber.from(10).pow(18).mul(10001);
  const afterName = 'Brown2';

  const afterBalance2 = BigNumber.from(10).pow(18).mul(10002);
  const afterName2 = 'Brown3';

  const provider = waffle.provider;
  const [admin, user1, user2] = provider.getWallets();

  beforeEach(async () => {
    basic = (await deployContract(admin, BasicArtifact, [
      initName,
      initBalance,
    ])) as Basic;
  });

  it('test', async () => {
    let info = await basic.getInfo();
    expect(info.rName).to.be.equal(initName);
    expect(info.rBalance).to.be.equal(initBalance);

    const info2 = await basic.getInfo2();
    expect(info2[0]).to.be.equal(initName);
    expect(info2[1]).to.be.equal(initBalance);

    await expect(basic.updateInfo(afterName, afterBalance))
      .to.emit(basic, 'UpdateInfo')
      .withArgs(admin.address, afterName, afterBalance);

    info = await basic.getInfo();
    expect(info.rName).to.be.equal(afterName);
    expect(info.rBalance).to.be.equal(afterBalance);

    await expect(
      basic.updateInfoPayable(afterName2, afterBalance2, {
        value: BigNumber.from(1),
      }),
    )
      .to.emit(basic, 'UpdateInfoPayable')
      .withArgs(admin.address, afterName2, afterBalance2);

    info = await basic.getInfo();
    expect(info.rName).to.be.equal(afterName2);
    expect(info.rBalance).to.be.equal(afterBalance2);

    await expect(
      basic.updateInfoPayable(afterName2, afterBalance2, {
        value: BigNumber.from(2),
      }),
    ).to.revertedWith('diff value');
  });
});
