const hre = require("hardhat");
require("dotenv").config();
const fxERC721RootContractABI = require("../../fxErc721RootContractAbi.json");

const { BRIDGE_ADDRESS, CONTRACT_ADDRESS } = process.env;
const fxERC721RootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer);
  const AfriBarbieNFTFactory = await hre.ethers.getContractFactory(
    "AfriBarbieNFT"
  );
  const afriBarbieNFT = await AfriBarbieNFTFactory.attach(CONTRACT_ADDRESS);

  const fxRootContract = await hre.ethers.getContractAt(
    fxERC721RootContractABI,
    fxERC721RootAddress
  );

  // Approve NFTs for transfer
  const approveTx = await raptorNFT
    .connect(deployer)
    .setApprovalForAll(fxERC721RootAddress, true);

  await approveTx.wait();

  console.log("NFT approval confirmed");

  // Deposit NFTs to Polygon Mumbai bridge
  for (let i = 0; i < 5; i++) {
    const depositTx = await fxRootContract
      .connect(deployer)
      .deposit(afriBarbieNFT.address, BRIDGE_ADDRESS, i, "0x6566");

    await depositTx.wait();
  }

  console.log("NFT deposited on Polygon Amoy");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});