const hre = require("hardhat");
require("dotenv").config();

const { CONTRACT_ADDRESS } = process.env;

async function main() {
  const AfriBarbieNFT = await hre.ethers.getContractFactory("AfriBarbieNFT");
  const afriBarbieNFT = AfriBarbieNFT.attach(CONTRACT_ADDRESS);

  console.log(await afriBarbieNFT.promptDescription());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});