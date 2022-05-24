import React, { FC, useEffect, useState } from "react";
import { IMyAnimalCard } from "./MyAnimalCard";
import {
  mintAnimalTokenContract,
  saleAnimalTokenContract,
} from "./web3Config";
// 생성한 SaleAnimalCard import
import SaleAnimalCard from "./SaleAnimalCard";

interface SaleAnimalProps {
  account: string;
}

const SaleAnimal: FC<SaleAnimalProps> = ({ account }) => {
  const [saleAnimalCardArray, setSaleAnimalCardArray] = useState<
    IMyAnimalCard[]
  >();

  const getOnSaleAnimalTokens = async () => {
    try {
      const onSaleAnimalTokenArrayLength = await saleAnimalTokenContract.methods
        .getOnSaleAnimalTokenArrayLength()
        .call();

      const tempOnSaleArray: IMyAnimalCard[] = [];

      for (let i = 0; i < parseInt(onSaleAnimalTokenArrayLength, 10); i++) {
        const animalTokenId = await saleAnimalTokenContract.methods
          .onSaleAnimalTokenArray(i) // 인덱스 값을 넣었을때 몇번째인지(=tokenId) 값을 알려줌
          .call();

        const animalType = await mintAnimalTokenContract.methods
          .animalTypes(animalTokenId) // 인덱스 값을 넣었을때 뽑은 카드가 몇번인지 알려줌.
          .call();

        const animalPrice = await saleAnimalTokenContract.methods
          .animalTokenPrices(animalTokenId) // 뽑은 카드 번호를 입력하면 얼마인지 알려줌. (Wei 기준)
          .call();

        tempOnSaleArray.push({ animalTokenId, animalType, animalPrice });
      }

      setSaleAnimalCardArray(tempOnSaleArray);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getOnSaleAnimalTokens();
  }, []);

  return (
    // 판매중인 목록을 가져와서 map처리로 이미지와 텍스트를 나열함.
    <>
      {saleAnimalCardArray &&
        saleAnimalCardArray.map((v, i) => {
          return (
            // props로 내려보내기
            <SaleAnimalCard
              key={i}
              animalType={v.animalType}
              animalPrice={v.animalPrice}
              animalTokenId={v.animalTokenId}
              account={account}
              getOnSaleAnimalTokens={getOnSaleAnimalTokens}
            />
          );
        })}
    </>
  );
};

export default SaleAnimal;