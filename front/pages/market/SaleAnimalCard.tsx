import React, { FC, useEffect, useState } from "react";
import { mintAnimalTokenContract, web3 } from "./web3Config";
import AnimalCard from "./AnimalCard";

interface SaleAnimalCardProps {
  animalType: string;
  animalPrice: string;
  animalTokenId: string;
  account: string;
}

const SaleAnimalCard: FC<SaleAnimalCardProps> = ({
  animalType,
  animalPrice,
  animalTokenId,
  account,
}) => {
  const [isBuyable, setIsBuyable] = useState<boolean>(false);

  const getAnimalTokenOnwer = async () => {
    try {
      const response = await mintAnimalTokenContract.methods
        .ownerOf(animalTokenId)
        .call();

      setIsBuyable(
        response.toLocaleLowerCase() === account.toLocaleLowerCase()
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAnimalTokenOnwer();
  }, []);

  return (
    <div>
      <AnimalCard animalType={animalType} />
      <div>
        <span>{web3.utils.fromWei(animalPrice)} Matic</span>
        <button disabled={isBuyable}>Buy</button>
      </div>
    </div>
  );
};

export default SaleAnimalCard;
