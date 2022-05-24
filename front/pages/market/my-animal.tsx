import React, { FC, useEffect, useState } from "react";
import AnimalCard from "./AnimalCard";
import { mintAnimalTokenContract, saleAnimalTokenAddress } from "./web3Config";

interface MyAnimalProps {
  account: string;
}
const MyAnimal: FC<MyAnimalProps> = ({ account }) => {
  const [animalCardArray, setAnimalCardArray] = useState<string[]>();
  const [saleStatus, setSaleStatus] = useState<boolean>(false);
  const getAnimalTokens = async () => {
    try {
      const balanceLength = await mintAnimalTokenContract.methods
        .balanceOf(account)
        .call();

      const tempAnimalCardArray = [];

      for (let i = 0; i < parseInt(balanceLength, 10); i++) {
        const animalTokenId = await mintAnimalTokenContract.methods
          .tokenOfOwnerByIndex(account, i)
          .call();

        const animalType = await mintAnimalTokenContract.methods
          .animalTypes(animalTokenId)
          .call();

        tempAnimalCardArray.push(animalType);
      }

      setAnimalCardArray(tempAnimalCardArray);
    } catch (error) {
      console.error(error);
    }
  };

  const getIsApprovedForAll = async () => {
    try {
      const response = await mintAnimalTokenContract.methods
        .isApprovedForAll(account, saleAnimalTokenAddress)
        .call();

      if (response) {
        setSaleStatus(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onClickApproveToggle = async () => {
    try {
      if (!account) return;

      const response = await mintAnimalTokenContract.methods
        .setApprovalForAll(saleAnimalTokenAddress, !saleStatus)
        .send({ from: account });

      if (response.status) {
        setSaleStatus(!saleStatus);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!account) return;
    getAnimalTokens();
    getIsApprovedForAll();
  }, [account]);

  return (
    <>
      <span>Sale Status : {saleStatus ? "True" : "False"}</span>

      <button
        onClick={onClickApproveToggle}
        background-color={saleStatus ? "red" : "blue"}
      >
        {saleStatus ? "Cancel" : "Approve"}
      </button>

      <div>
        {animalCardArray &&
          animalCardArray.map((v, i) => {
            return <AnimalCard key={i} animalType={v} />;
          })}
      </div>
    </>
  );
};

export default MyAnimal;
