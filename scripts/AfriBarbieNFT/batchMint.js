const hre = require("hardhat");
require("dotenv").config();

const { ACCOUNT_ADDRESS, CONTRACT_ADDRESS } = process.env;

async function main() {
  const AfriBarbieNFT = await hre.ethers.getContractFactory("AfriBarbieNFT");
  const afriBarbieNFT = await AfriBarbieNFT.attach(CONTRACT_ADDRESS);

  const mintTx = await afriBarbieNFT.safeMint(5);
  await mintTx.wait();

  console.log(
    `AfriBarbieNFT Balance: ${await afriBarbieNFT.balanceOf(
      ACCOUNT_ADDRESS
    )} AfriBarbieNFTs Minted to ${ACCOUNT_ADDRESS}`
  );
  console.log(await afriBarbieNFT.promptDescription());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});