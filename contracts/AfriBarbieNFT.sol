// SPDX-License-Identifier: UNLICENSED 
pragma solidity ^0.8.20;

import "erc721a/contracts/ERC721A.sol";

contract AfriBarbieNFT is ERC721A {
    uint8 public maxSupply = 5;

    constructor() ERC721A("AfriBarbieNFT", "AFT") {}

    function safeMint(uint8 _quantity) external payable {
        _safeMint(msg.sender, _quantity);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmaJUjR4GHSHQR4wCbSWsN7n9eXa8dqr9PCu9QLcSxoMvk/";
    }

    function promptDescription() external pure returns (string memory) {
        return "Create NFT like images depicting an african barbie doll";
    }

    function balanceOf(address owner) public view override returns (uint256) {
        return super.balanceOf(owner);
    }
}