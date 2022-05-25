import React, { ChangeEvent, FC, useState } from "react";
import { saleAnimalTokenContract, web3 } from "./web3Config";

import AnimalCard from "./AnimalCard";

export interface IMyAnimalCard {
  animalTokenId: string;
  animalType: string;
  animalPrice: string;
}

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
  const [sellPrice, setSellPrice] = useState<string>("");
  const [myAnimalPrice, setMyAnimalPrice] = useState<string>(animalPrice);

  const onChangeSellPrice = (e: ChangeEvent<HTMLInputElement>) => {
    setSellPrice(e.target.value);
  };

  const onClickSell = async () => {
    try {
      if (!account || !saleStatus) return;
      // console.log("account : ", account);
      // console.log("saleStatus : ", saleStatus);
      // console.log("animalTokenId : ", animalTokenId);
      // console.log("sellPrice : ", sellPrice);
      // const a = web3.utils.toWei(sellPrice, "ether");
      // console.log("wei : ", a);

      const response = await saleAnimalTokenContract.methods
        .setForSaleAnimalToken(
          animalTokenId,
          web3.utils.toWei(sellPrice, "ether")
        )
        .send({ from: account });

      if (response.status) {
        setMyAnimalPrice(web3.utils.toWei(sellPrice, "ether"));
        console.log(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <AnimalCard animalType={animalType} />
      <div>
        {myAnimalPrice === "0" ? (
          <>
            <input
              type="number"
              value={sellPrice}
              onChange={onChangeSellPrice}
            />
            {"Matic"}
            <button onClick={onClickSell}>Sell</button>
          </>
        ) : (
          <div>
            {/*
                    블록체인에서 가격을 가져올때 fromWei
                    fromWei 가격에 맞게 알아서 0을 붙여줌.
                */}
            {web3.utils.fromWei(myAnimalPrice)} Matic
          </div>
        )}
      </div>
    </>
  );
};

export default MyAnimalCard;
