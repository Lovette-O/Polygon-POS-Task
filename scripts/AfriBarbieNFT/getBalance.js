const hre = require("hardhat");
require("dotenv").config();

const { ACCOUNT_ADDRESS, CONTRACT_ADDRESS } = process.env;

async function main() {
  const AfriBarbieNFT = await hre.ethers.getContractFactory("AfriBarbieNFT");
  const afriBarbieNFT = await AfriBarbieNFT.attach(CONTRACT_ADDRESS);

  const balance = await afriBarbieNFT.balanceOf(ACCOUNT_ADDRESS);
  console.log("Balance: ", balance.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});