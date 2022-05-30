import React, { FC, useEffect, useState } from "react";
import { IMyAnimalCard } from "./MyAnimalCard";
import { mintAnimalTokenContract, saleAnimalTokenContract } from "./web3Config";
import SaleAnimalCard from "./SaleAnimalCard";

interface SaleAnimalProps {
  account: string;
}

const SaleAnimal: FC<SaleAnimalProps> = ({ account }) => {
  const [saleAnimalCardArray, setSaleAnimalCardArray] =
    useState<IMyAnimalCard[]>();

  const getOnSaleAnimalTokens = async () => {
    try {
      const onSaleAnimalTokenArrayLength = await saleAnimalTokenContract.methods
        .getOnSaleAnimalTokenArrayLength()
        .call();

      const tempOnSaleArray: IMyAnimalCard[] = [];

      for (let i = 0; i < parseInt(onSaleAnimalTokenArrayLength, 10); i++) {
        const animalTokenId = await saleAnimalTokenContract.methods
          .onSaleAnimalTokenArray(i)
          .call();

        const animalType = await mintAnimalTokenContract.methods
          .animalTypes(animalTokenId)
          .call();

        const animalPrice = await saleAnimalTokenContract.methods
          .animalTokenPrices(animalTokenId)
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
    <div>
      <div style={{position:'absolute'}}>
      <div style={{fontWeight:'bold',fontSize:'25px',border:'3px solid purple',borderRadius:'2px 2px',textAlign:'center'}}>여긴 거래소야!</div>
      <img src="../../static/market.jpg" style={{position:'relative',width:'100%',height:'3000px',zIndex:"0"}}></img>
      </div>
      <div style={{zIndex:'3',position:'relative',paddingTop:'60px'}}>
      
      {saleAnimalCardArray &&
        saleAnimalCardArray.map((v, i) => {
          return (
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
        </div>
    </div>
  );
};

export default SaleAnimal;
