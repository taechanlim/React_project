  import React, { ChangeEvent, FC, useState } from "react";
  import { saleAnimalTokenContract, web3 } from "./web3Config";
  
  import AnimalCard from "./AnimalCard";
  
  export interface IMyAnimalCard {
    animalTokenId: string;
    animalType: string;
    animalPrice: string;
  }

  // IMyAnimalCard를 상속받음
  interface MyAnimalCardProps extends IMyAnimalCard {
    saleStatus: boolean;
    account: string;
  }

  const MyAnimalCard: FC<MyAnimalCardProps> = ({
    animalTokenId,
    animalType,
    animalPrice,
    saleStatus,
    account,
  }) => {
    // string은 아직 없는 값이라서 ("")로 초기화해줌. 안하면 에러생김.
    const [sellPrice, setSellPrice] = useState<string>("");
    const [myAnimalPrice, setMyAnimalPrice] = useState<string>(animalPrice);
  
    const onChangeSellPrice = (e: ChangeEvent<HTMLInputElement>) => {
      setSellPrice(e.target.value);
    };
  
    const onClickSell = async () => {
      try {
        if (!account || !saleStatus) return;
  
        const response = await saleAnimalTokenContract.methods
          .setForSaleAnimalToken(
            animalTokenId,
            web3.utils.toWei(sellPrice, "ether")
          )
          .send({ from: account }); // 보낸다!! account에서 보낸다!!!!
  
        if (response.status) {
          // 블록체인으로 가격을 보낼때 toWei, "단위"
          // 다른 토큰단위를 사용하더라도 어쨌든 이더 기반이기 때문!
          setMyAnimalPrice(web3.utils.toWei(sellPrice, "ether"));
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <>
        <AnimalCard animalType={animalType} />
        <div>
          {myAnimalPrice === "0"
          ? (
                <>
                  <input
                  type="number"
                  value={sellPrice}
                  onChange={onChangeSellPrice}
                  />
                  {'Matic'}
                  <button onClick={onClickSell}>Sell</button>
                </>)
          : (
                <div>
                {/*
                    블록체인에서 가격을 가져올때 fromWei
                    fromWei 가격에 맞게 알아서 0을 붙여줌.
                */}
                {web3.utils.fromWei(myAnimalPrice)} Matic
                </div>)}
        </div>
      </>
    );
  };
  export default MyAnimalCard;