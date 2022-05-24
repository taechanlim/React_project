// SPDX-License-Identifier: MIT
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
        require(mintAnimalTokenAddress.isApprovedForAll(animalTokenOwner, address(this)), "Animal token owner did not approve token.");

        animalTokenPrices[_animalTokenId] = _price;
        onSaleAnimalTokenArray.push(_animalTokenId); // 판매중이면 배열에 추가함
    }

    // 구매 기능
    // payalbe : 폴리곤 네트워크에서 메틱이 왔다갔다할 수 있음
    function purchaseAnimalToken(uint256 _animalTokenId) public payable {
        uint256 price = animalTokenPrices[_animalTokenId]; //매핑에 있는 정보 꺼내오기
        address animalTokenOnwer = mintAnimalTokenAddress.ownerOf(_animalTokenId); // 주인의 주소값 불러오기

        // 가격이 0보다 작으면, 판매 등록이 되어있지 않음
        require(price > 0, "Animal token not sale.");
        // msg.value : 함수를 실행할때 보내는 메틱의 양
        // 원래 가격보다 돈을 더 많이 내거나, 같게 내야함
        require(price <= msg.value, "Caller sent lower than price.");
        // animalTokenOnwer가 주인이 구입이 가능함
        require(animalTokenOnwer != msg.sender, "Caller is animal token owner.");

        // 구매 로직
        // 이 함수를 실행한 msg.sender에 msg.value가 전달됨
        // 돈이 주인에게 보내짐
        payable(animalTokenOnwer).transfer(msg.value);
        // 돈을 지불한 사람에게 nft 카드가 보내짐
        // (보내는 사람, 받는 사람, 뭘 보낼 것인가)
        mintAnimalTokenAddress.safeTransferFrom(animalTokenOnwer, msg.sender, _animalTokenId);

        // 판매값을 0원으로 초기화
        animalTokenPrices[_animalTokenId] = 0;

        // 현재 판매중인 배열(onSaleAnimalTokenArray)에서 빼내야하므로 for 사용
        for(uint256 i = 0; i < onSaleAnimalTokenArray.length; i++) {
            if(animalTokenPrices[onSaleAnimalTokenArray[i]] == 0) {
                // 가격 0원과 맨 마지막 배열에 있는 수와 바꿈
                onSaleAnimalTokenArray[i]
                    = onSaleAnimalTokenArray[onSaleAnimalTokenArray.length - 1];
                // 가장 마지막 배열을 제거함
                onSaleAnimalTokenArray.pop();
            }
        }
    }

    // 판매중인 토큰의 배열의 길이
    function getOnSaleAnimalTokenArrayLength() view public returns (uint256) {
        return onSaleAnimalTokenArray.length;
    }

    // MintAnimalToken에서 getAnimalTokenPrice를 사용하기 위해 만들어주는 함수.
    function getAnimalTokenPrice(uint256 _animalTokenId) view public returns(uint256){
        return animalTokenPrices[_animalTokenId]; //mapping이니까 []를 준다
    }
} 