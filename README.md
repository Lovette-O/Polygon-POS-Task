# Overview

---
This project involves the creation and deployment of an ERC721A-compliant NFT (Non-Fungible Token)
contract named RaptorNFT on Sepolia Ethereum testnet then approve and deposit the NFT to Polygon
Mumbai using their fxPortal bridge. The NFTs represent a collection of an Eagle's haven.

## Getting Started

---
### Prerequisites

- Use **Node.js version 18** or higher.
- NPM or Yarn


## Project Initialization

---
```shell
git clone <this-repo-url>
```
```shell
cd <the-repo>
```
```shell
npm install
```

## Configuration

---
### Deploy contract
First compile the contract using `npx hardhat compile` then deploy the contract onto
Sepolia Ethereum testnet using the following command:
```shell
npx hardhat run --network sepolia scripts/RaptorNFT/deploy.js
```

Then, if everything is set up right, you get a console response like this:
```
AfriBarbieNFT deployed to: <CONTRACT-ADDRESS>
```
### Batch mint NFTs
To batch mint NFTs to the deployed contract, update the contract address in the
`.env.example.` file and rename the file to `.env`. Also, subsequently update
the required variables in the `.env` file.  

Then run the `batchMint.js` script with this hardhat command:
```shell
npx hardhat run --network sepolia scripts/RaptorNFT/batchMint.js
```
The response log will look like:
```
Successfully minted: <number> AfriBarbieNFTs to <WALLET-ADDRESS>
```
### Approve transfer and deposit the NFTs to Polygon bridge
Pass in the Polygon Mumbai bridged address of your contract to `BRIDGE-ADDRESS` in
`.env`, then run the `approveTransfer.js` script with hardhat:
```shell
npx hardhat run --network sepolia scripts/RaptorNFT/approveTransfer.js
```
The response should look like this:
```
NFT approval confirmed
NFT deposited on Polygon Mumbai
```

## Contract Details

- Contract address: "0x4cad252297927267F93b5F9EA703D4b4b1ae7412"


## Author

0xLovette-O