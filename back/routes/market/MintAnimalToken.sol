// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

// MintAnimalToken이 SaleAnimalToken보다 먼저 생성되므로
// 자동적으로 가져올 수 없으니 임의로 import 해주기
import "SaleAnimalToken.sol";

contract MintAnimalToken is ERC721Enumerable {
    constructor() ERC721("h662Animals", "HAS") {}
    SaleAnimalToken public saleAnimalToken; // 가져온 SaleAnimalToken 전역화

    // 앞에있는 uint256 = animalTokenId
    // 뒤에있는 uint256 = animalTypes
    // 즉, animalTokenId를 입력하면 animalTypes이 나오는 함수
    mapping(uint256 => uint256) public animalTypes;

    // 값을 한꺼번에 보낼 수 있도록 묶음
    struct AnimalTokenData {
        uint256 animalTokenId;
        uint256 animalType;
        uint256 animalPrice;
    }

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

    // view : 읽기전용, 블록체인의 값을 변화시키지 않으면 view를 사용함
    function getAnimalTokens(address _animalTokenOwner) view public returns (AnimalTokenData[] memory) {
        uint256 balanceLength = balanceOf(_animalTokenOwner);

        // balanceLength가 0이면 토큰이 없다는것
        require(balanceLength != 0, "Owner did not have token.");

        AnimalTokenData[] memory animalTokenData = new AnimalTokenData[](balanceLength);

        for(uint256 i = 0; i < balanceLength; i++) {
            uint256 animalTokenId = tokenOfOwnerByIndex(_animalTokenOwner, i);
            uint256 animalType = animalTypes[animalTokenId];

            // SaleAnimalToken.tsx에 getAnimalTokenPrice를 만들어준다
            uint256 animalPrice = saleAnimalToken.getAnimalTokenPrice(animalTokenId);

            animalTokenData[i] = AnimalTokenData(animalTokenId, animalType, animalPrice);
        }

        return animalTokenData;
    }

    function setSaleAnimalToken(address _saleAnimalToken) public {
        saleAnimalToken = SaleAnimalToken(_saleAnimalToken);
    }
} 