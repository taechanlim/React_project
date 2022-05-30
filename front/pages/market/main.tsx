import React, { FC, useState } from "react";
import { mintAnimalTokenContract } from "./web3Config";
import AnimalCard from './AnimalCard';

interface MainProps {
    account: string;
}

const Main: FC<MainProps> = ({ account }) => {
    const [newAnimalType, setNewAnimalType] = useState<string>();

    const onClickMint = async () => {
        try {
            if (!account) return;

            const response = await mintAnimalTokenContract.methods
            .mintAnimalToken()
            .send({ from: account });

            console.log(response);
            if (response.status) {
                const balanceLength = await mintAnimalTokenContract.methods
                    .balanceOf(account)
                    .call();
        
                const animalTokenId = await mintAnimalTokenContract.methods
                    .tokenOfOwnerByIndex(account, parseInt(balanceLength, 10) - 1)
                    .call();
        
                const animalType = await mintAnimalTokenContract.methods
                    .animalTypes(animalTokenId)
                    .call();
        
                setNewAnimalType(animalType);
                }

        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            {   
                newAnimalType
                ?   <>
                    <div style={{position:'relative'}}>
                        <img src="../../static/market.jpg" style={{position:'absolute',width:'100%',height:'700px',zIndex:"0"}}></img>
                        <span style={{position:'absolute',zIndex:'10',fontWeight:'bold',fontSize:'50px',color:'black',marginTop:'10%',marginLeft:'20%'}}>카드를 만들자!</span>
                        <button onClick={onClickMint} style={{width:'260px',height:'100px',position:'absolute',zIndex:'10',marginTop:'15%',marginLeft:'20%',border:'3px solid orange',borderRadius:'10px 10px',fontSize:'60px',fontWeight:'bold',boxShadow:'0px 0px 20px 10px orange'}} >다시만들기</button>
                        <div style={{position:'absolute',zIndex:'10',fontWeight:'bold',fontSize:'50px',color:'black',marginTop:'0.5%',marginLeft:'50%'}}>사진이 추가되었어 ↓</div>
                        <div style={{position:'absolute',zIndex:"10",float:'left',width:'26.3%',height:'505px',border:'3px solid orange',borderRadius:'10px 10px',backgroundColor:'#fafafa',marginLeft:'50%',marginBottom:'5%',marginTop:'5%',boxShadow:'0px 0px 30px 3px orange'}}>
                        <AnimalCard animalType={newAnimalType}/>
                        </div>
                        
                    </div>
                    </>
                : ( 
                    <>
                    <div style={{position:'relative'}}>
                        <img src="../../static/market.jpg" style={{position:'absolute',width:'100%',height:'700px',zIndex:"0"}}></img>
                        <span style={{position:'absolute',zIndex:'10',fontWeight:'bold',fontSize:'50px',color:'black',marginTop:'10%',marginLeft:'20%'}}>카드를 만들자!</span>
                        <button onClick={onClickMint} style={{width:'260px',height:'100px',position:'absolute',zIndex:'10',marginTop:'15%',marginLeft:'20%',border:'3px solid orange',borderRadius:'10px 10px',fontSize:'60px',fontWeight:'bold',boxShadow:'0px 0px 20px 10px orange'}} >MINT</button>
                        
                        <div style={{position:'absolute',zIndex:"10",float:'left',width:'26.3%',height:'505px',border:'3px solid orange',borderRadius:'10px 10px',backgroundColor:'#fafafa',marginLeft:'50%',marginBottom:'5%',marginTop:'5%',boxShadow:'0px 0px 30px 3px orange'}}>

                        </div>
                    </div>
                    
                    </>)
            }
            
        </>
    )
};

export default Main;