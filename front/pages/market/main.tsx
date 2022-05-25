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
                ? ( <AnimalCard animalType={newAnimalType} />)
                : ( <span>Let's mint Animal Card!!!</span>)
            }
            <button onClick={onClickMint} >Mint</button>
        </>
    )
};

export default Main;