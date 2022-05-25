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
      console.log("account : ", account);
      console.log("saleStatus : ", saleStatus);
      console.log("animalTokenId : ", animalTokenId);
      console.log("sellPrice : ", sellPrice);
      const a = web3.utils.toWei(sellPrice, "ether");
      console.log("wei : ", a);

      const response =
        await saleAnimalTokenContract.methods.setForSaleAnimalToken(
          animalTokenId,
          web3.utils.toWei(sellPrice, "ether")
        );
      console.log("에러찾기1");
      // .send({ from: account });
      console.log(response.status);

      if (response.status) {
        // setMyAnimalPrice(web3.utils.toWei(sellPrice, "ether"));
        console.log("에러찾기333");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <AnimalCard animalType={animalType} />
      <div>
        {animalPrice === "0" ? (
          <>
            <input
              type="number"
              value={sellPrice}
              onChange={onChangeSellPrice}
            />
            <button onClick={onClickSell}>Sell</button>
            {/* <button>Matic</button> */}
            <div></div>
            {/* <InputRightAddon children="Matic" /> */}
          </>
        ) : (
          <span>{web3.utils.fromWei(animalPrice)} Matic</span>
        )}
      </div>
    </div>
  );
};

export default MyAnimalCard;
