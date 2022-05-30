import React, { FC, useEffect, useState } from "react";
import {
  mintAnimalTokenContract,
  saleAnimalTokenContract,
  web3,
} from "./web3Config";
import AnimalCard from "./AnimalCard";

interface SaleAnimalCardProps {
  animalType: string;
  animalPrice: string;
  animalTokenId: string;
  account: string;
  getOnSaleAnimalTokens: () => Promise<void>;
}

const SaleAnimalCard: FC<SaleAnimalCardProps> = ({
  animalType,
  animalPrice,
  animalTokenId,
  account,
  getOnSaleAnimalTokens,
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

  const onClickBuy = async () => {
    try {
      if (!account) return;

      const response = await saleAnimalTokenContract.methods
        .purchaseAnimalToken(animalTokenId)
        .send({ from: account, value: animalPrice });

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
    
    <div style={{float:'left',width:'26.6%',height:'600px',border:'3px solid orange',borderRadius:'10px 10px',backgroundColor:'#fafafa',marginLeft:'15.5%',marginBottom:'5%'}}>
      
      <AnimalCard animalType={animalType} />
      <div style={{textAlign:'center',marginLeft:'-7.5%'}}>
        <ul style={{listStyle:'none'}}>
        <li><span style={{fontWeight:'bold',fontSize:'30px'}}>{web3.utils.fromWei(animalPrice)} ETH</span></li>
        <li><button disabled={isBuyable} onClick={onClickBuy} style={{fontWeight:'bold',fontSize:'20px',height:'40px',width:'400px',backgroundColor:'red',color:'white',borderRadius:'10px 10px'}}>구매하기!</button></li>

        </ul>
      </div>
    </div>
  );
};

export default SaleAnimalCard;
