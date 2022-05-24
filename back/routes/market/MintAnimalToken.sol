// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract MintAnimalToken is ERC721Enumerable {
    constructor() ERC721("h662Animals", "HAS") {}

    mapping(uint256 => uint256) public animalTypes;
    // 앞에있는 uint256 = animalTokenId
    // 뒤에있는 uint256 = animalTypes
    // 즉, animalTokenId를 입력하면 animalTypes이 나오는 함수

    function mintAnimalToken() public {
        uint256 animalTokenId = totalSupply() + 1; //지금까지 민팅(발행)된 nft의 양

        // nft 5개를 생성하기
        uint256 animalType = uint256(
            // 솔리디티 내장 해시함수 : 충돌할 확률이 가장 적은 난수를 생성해줌
            keccak256( 
                // keccak256을 사용하기위한 바이트값
                abi.encodePacked(
                    // 언제 실행했는지, 누가 실행했는지, 무엇을 할건지
                    block.timestamp, msg.sender, animalTokenId
                )
            )
        ) % 5 + 1; // 1-5번까지 랜덤하게 넣기위한 함수
        
        animalTypes[animalTokenId] = animalType;

        _mint(msg.sender, animalTokenId);
        //animalTokenId = nft의 유일한 값
    }
}