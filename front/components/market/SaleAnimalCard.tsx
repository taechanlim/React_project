import { Box, Button, Text } from "@chakra-ui/react";
import React, { FC, useEffect, useState } from "react";
import {
  mintAnimalTokenContract,
  saleAnimalTokenContract,
  web3,
} from "../web3Config";
import AnimalCard from "./AnimalCard";

interface SaleAnimalCardProps {
  animalType: string;
  animalPrice: string;
  animalTokenId: string;
  account: string;
  getOnSaleAnimalTokens: () => Promise<void>; // async 함수라서 Promise<> 형태
}

const SaleAnimalCard: FC<SaleAnimalCardProps> = ({
  animalType,
  animalPrice,
  animalTokenId,
  account,
  getOnSaleAnimalTokens,
}) => {
  const [isBuyable, setIsBuyable] = useState<boolean>(false); // 구매값

  const getAnimalTokenOnwer = async () => {
    try {
      const response = await mintAnimalTokenContract.methods
        .ownerOf(animalTokenId)
        .call();

      setIsBuyable(
        // 대문자를 모두 소문자로 바꿔주는 toLocaleLowerCase
        // 생산자와 구매자의 주소값이 같다면
        response.toLocaleLowerCase() === account.toLocaleLowerCase()
      );
    } catch (error) {
      console.error(error);
    }
  };

  const onClickBuy = async () => {
    try {
      if (!account) return;

      const response = await saleAnimalTokenContract.methods
        .purchaseAnimalToken(animalTokenId)
        .send({ from: account, value: animalPrice }); // payable을 위한 value값

      if (response.status) {
        getOnSaleAnimalTokens();
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAnimalTokenOnwer();
  }, []);

  return (
    <Box textAlign="center" w={150}>
      <AnimalCard animalType={animalType} />
      <Box>
        <Text d="inline-block">{web3.utils.fromWei(animalPrice)} Matic</Text>
        
        {/*
          판매 버튼
          생산자와 구매자의 주소값이 같다면 구매할 수 없도록 버튼을 비활성화한다.
        */}
        <Button
          size="sm"
          colorScheme="green"
          m={2}
          disabled={isBuyable}
          onClick={onClickBuy}
        >
          Buy
        </Button>
      </Box>
    </Box>
  );
};

export default SaleAnimalCard;