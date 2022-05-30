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
    
    <div style={{float:'left',width:'26.6%',height:'600px',border:'3px solid orange',borderRadius:'10px 10px',backgroundColor:'#fafafa',marginLeft:'15.5%',marginBottom:'5%'}}>
     
      <AnimalCard animalType={animalType} />
    
      <div style={{position:'relative',textAlign:'center'}}>
        {myAnimalPrice === "0" ? (
          <>
          <div style={{position:'absolute'}}>
            <input
              type="number"
              value={sellPrice}
              onChange={onChangeSellPrice}
              style={{border:'3px solid black',borderRadius:'10px 10px',fontSize:'20px',height:'40px',width:'400px',fontWeight:'bold',marginTop:'5px',marginBottom:'5px'}}
            />
{/*            
            {"Matic"} */}
            <button onClick={onClickSell} style={{fontWeight:'bold',fontSize:'20px',height:'40px',width:'400px',backgroundColor:'red',color:'white',borderRadius:'10px 10px'}}>팔다!</button>
            </div>
          </>
        ) : (
          <div style={{fontWeight:'bold',fontSize:'30px'}}>
            <div>판매 등록된 상품!</div>
            {/*
                    블록체인에서 가격을 가져올때 fromWei
                    fromWei 가격에 맞게 알아서 0을 붙여줌.
                */}
            {web3.utils.fromWei(myAnimalPrice)} ETH

          </div>
          
        )}
      </div>
    </div>
    </>
  );
};

export default MyAnimalCard;
