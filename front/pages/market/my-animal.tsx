import React, { FC, useEffect, useState } from "react";
import MyAnimalCard, { IMyAnimalCard } from "./MyAnimalCard";
import {
  mintAnimalTokenContract,
  saleAnimalTokenAddress,
  saleAnimalTokenContract,
} from "./web3Config";

// props에서 account를 내려줬으니까
interface MyAnimalProps {
  account: string;
}

// 내려준 account 받기
const MyAnimal: FC<MyAnimalProps> = ({ account }) => {
  // 동물 리스트를 담을 state 생성
  // 동물의 타입만 담아 갈거니까 <string[]>
  const [animalCardArray, setAnimalCardArray] = useState<IMyAnimalCard[]>();
  // 판매상태를 담을 state
  const [saleStatus, setSaleStatus] = useState<boolean>(false);

  // 새로 민팅했을때 이미지를 가져오던 단계와 같다
  const getAnimalTokens = async () => {
    try {

      // 민팅해서 갖고있는 nft 개수 확인
      const balanceLength = await mintAnimalTokenContract.methods
        .balanceOf(account)
        .call();

      // 마이페이지에 넣어줄 이미지 임시 배열
      // const tempAnimalCardArray = [];
      if (balanceLength === "0") return;

      const tempAnimalCardArray: IMyAnimalCard[] = [];

      // 판매 가격
      const response = await mintAnimalTokenContract.methods
        .getAnimalTokens(account)
        .call();

      response.map((v: IMyAnimalCard) => {
        tempAnimalCardArray.push({
          animalTokenId: v.animalTokenId,
          animalType: v.animalType,
          animalPrice: v.animalPrice,
        });
      });

      // 완성된 배열을 담아주기
      setAnimalCardArray(tempAnimalCardArray);
    } catch (error) {
      console.error(error);
    }
  };

  // 판매상태를 가져오는 isApprovedForAll 기능 구현
  const getIsApprovedForAll = async () => {
    try {
      const response = await mintAnimalTokenContract.methods
        .isApprovedForAll(account, saleAnimalTokenAddress)
        .call();
      if (response) {
        setSaleStatus(response); // 판매상태 업데이트
      }
    } catch (error) {
      console.error(error);
    }
  };

  // 판매등록하는 setApprovesForAll 기능 구현
  const onClickApproveToggle = async () => {
    try {
      if (!account) return; // 계정이 없으면 return

      const response = await mintAnimalTokenContract.methods
        .setApprovalForAll(saleAnimalTokenAddress, !saleStatus)
        .send({ from: account }); // 주의! call이 아니고 transact 기능 구현!! 
      
        if (response.status) { // 값이 변했다는 신호
        setSaleStatus(!saleStatus); // 판매상태 업데이트
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!account) return;
    
    getIsApprovedForAll(); // 먼저 판매상태 확인하고
    getAnimalTokens(); // 동물 리스트를 가져옴
  }, [account]);

  return (
    <>
      <div>
        <span>
          {/* saleStatus : 판매상태 */}
          Sale Status : {saleStatus ? "True" : "False"}
        </span>

        {/* 판매상태 토글버튼 : 판매상태 승인 || 취소 */}
          <button onClick={onClickApproveToggle}>
            {saleStatus ? "Cancel" : "Approve"}
          </button>
      </div>

      {/* 한줄에 4개를 띄울것, 사이에 틈을 줄것. */}
      <div>
        {animalCardArray &&
          animalCardArray.map((v, i) => {

            return (
              <MyAnimalCard
                key={i}
                animalTokenId={v.animalTokenId}
                animalType={v.animalType}
                animalPrice={v.animalPrice}
                saleStatus={saleStatus}
                account={account}
              />
            );
          })}
      </div>
    </>
  );
};

export default MyAnimal;