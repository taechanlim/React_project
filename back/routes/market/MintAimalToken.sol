// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract MintAnimalToken is ERC721Enumerable {
    constructor() ERC721("h662Animals", "HAS") {}

    function mintAnimalToken() public {
        uint256 animalTokenId = totalSupply() + 1;
        //지금까지 민팅(발행)된 nft의 양
        _mint(msg.sender, animalTokenId);
    }
}