const NovaCoin = artifacts.require("NovaCoin");
const EthSwap = artifacts.require("EthSwap");

module.exports = async function(deployer) {
  // Deploy NovaCoin
  await deployer.deploy(NovaCoin);
  const novacoin = await NovaCoin.deployed();

  // Deploy EthSwap
  await deployer.deploy(EthSwap, novacoin.address);
  const ethswap = await EthSwap.deployed();

  // Transfer all tokens to EthSwap (1 million)
  await novacoin.transfer(ethswap.address, '1000000000000000000000000');
};
