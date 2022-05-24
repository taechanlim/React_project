// SPDX-License-Identifier: MIT -> 라이센스
pragma solidity ^0.8.0; // 컴파일러 명시

import "./MintAnimalToken.sol";

contract SaleAnimalToken {
    // mintAnimal을 디플로이하면 나오는 주소값을 저장함
    MintAnimalToken public mintAnimalTokenAddress;

    constructor (address _mintAnimalTokenAddress) {
        mintAnimalTokenAddress = MintAnimalToken(_mintAnimalTokenAddress);
    }

    // 가격을 관리하는 매핑
    mapping(uint256 => uint256) public animalTokenPrices;
    // 프론트엔드에서 어떤게 판매중인지 검색할때 쓸 배열
    uint256[] public onSaleAnimalTokenArray;

    // 판매등록하는 함수 (무엇을 팔지, 얼마에 팔지)
    // public -> 모든 범위
    function setForSaleAnimalToken(uint256 _animalTokenId,uint256 _price) public {
        // 토큰 주인의 정보
        address animalTokenOwner = mintAnimalTokenAddress.ownerOf(_animalTokenId);

        // 주인이 맞는지 확인
        require(animalTokenOwner == msg.sender, "Caller is not animal token owner.");
        
        // 0보다 작은 값은 존재하지 않음
        require(_price > 0, "Price is zero or lower.");
        
        // 값이 0원이거나 아니거나. 0이 아니면 판매등록이 되었다는 뜻
        require(animalTokenPrices[_animalTokenId] == 0, "This animal token is already on sale.");
        
        // this = setForSaleAnimalToken 이걸 가르킴
        // animalTokenOwner(주인)이 address(this)(판매권한)을 넘겼니?
        require(mintAnimalTokenAddress.isApprovedForAll(
            animalTokenOwner, address(this)), "Animal token owner did not approve token."
        );

        animalTokenPrices[_animalTokenId] = _price;
        onSaleAnimalTokenArray.push(_animalTokenId); // 판매중이면 배열에 추가함
    }
}