import React, { FC } from "react";
import { web3 } from "./web3Config";
import AnimalCard from "./AnimalCard";

interface SaleAnimalCardProps {
  animalType: string;
  animalPrice: string;
}

const SaleAnimalCard: FC<SaleAnimalCardProps> = ({
  animalType,
  animalPrice,
}) => {
  return (
    <div>
      <AnimalCard animalType={animalType} />
      <div>
        <span>{web3.utils.fromWei(animalPrice)} Matic</span>
        <button>Buy</button>
      </div>
    </div>
  );
};

export default SaleAnimalCard;
