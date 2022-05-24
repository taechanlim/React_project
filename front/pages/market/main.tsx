//typescript 사용하려면 FC
import React,{FC, useState} from 'react'
import { mintAnimalTokenContract } from "./web3Config";
import AnimalCard from "./AnimalCard";
import Layout from "./Layout";

// typescrips는 이렇게 props를 모두 정해주어야함
interface MainProps {
  account: string;
}

const Main: FC<MainProps> = ({account}) => {
  const [newAnimalType, setNewAnimalType] = useState<string>();

  const onClickMint = async () => {
    try {
      if (!account) return;
      
      const response = await mintAnimalTokenContract.methods
      .mintAnimalToken() // 민팅 기능
      .send({ from: account }); // 누가 보냈는지
      console.log('실행체크444')

        // status가 true일때 실행
        if(response.status){
          // 1. 내가 민팅해서 갖고있는 nft개수 확인
          const balanceLength = await mintAnimalTokenContract.methods // balanceOf에서 주소 넣었던 기능 구현
          .balanceOf(account)
          .call(); // call 버튼 누른것 구현

          // 2. 방금 민팅한 tokenId 확인하기
          const animalTokenId = await mintAnimalTokenContract.methods
          .tokenOfOwnerByIndex(account, parseInt(balanceLength, 10) - 1) // string으로 목록이 들어오기때문에 -> 10진수로 형변환
          .call();

          // tokenId가 갖고있는 값 확인하기
          const animalType = await mintAnimalTokenContract.methods
          .animalTypes(animalTokenId)
          .call();

          setNewAnimalType(animalType);
        }

      console.log(response); // 결과를 출력함
    } catch (error) {
      console.error(error);
      console.log(error)
      // Error: TxGasUtil - Trying to call a function on a non-contract address
      //       {
      //         "originalError": {
      //           "errorKey": "transactionErrorNoContract",
      //           "getCodeResponse": "0x"
      //         }
      //       }
      //           at Object._fireError (index.js?17a6:49:1)
      //           at sendTxCallback (index.js?1819:548:1)
      //           at cb (util.js?2b38:701:1)
      //           at callbackifyOnRejected (util.js?2b38:678:1)
      //           at Item.run (browser.js?5cb3:153:1)
      //           at drainQueue (browser.js?5cb3:123:1)

      const response = await mintAnimalTokenContract.methods
      console.log('1  --> ',response)
      const response1 = await mintAnimalTokenContract.methods.mintAnimalToken()
      console.log('2  --> ',response1)
      const response2 = await mintAnimalTokenContract.methods.mintAnimalToken().send({ from: account });
      console.log('3  --> ',response2)
    }
  }

  return (
    <>
      <div>
        {newAnimalType
        ? (<AnimalCard animalType={newAnimalType} />)
        : (<span>Let's mint Animal Card!!!</span>)}
      </div>
      <button onClick={onClickMint}>
        Mint
      </button>
    </>
  );
};

export default Main; 