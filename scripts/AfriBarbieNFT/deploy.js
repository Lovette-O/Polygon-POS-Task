const hre = require("hardhat");

async function main() {
  const AfriBarbieNFT = await hre.ethers.deployContract("AfriBarbieNFT");
  const afriBarbieNFT = await AfriBarbieNFT.waitForDeployment();

  console.log("AfriBarbieNFT address:", afriBarbieNFT.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});