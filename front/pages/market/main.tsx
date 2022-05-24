import React, { FC, useState } from "react";
import { mintAnimalTokenContract } from "./web3Config";

interface MainProps {
    account: string;
}

const Main: FC<MainProps> = ({ account }) => {
    const [newAnimalCard, setNewAnimalCard] = useState<string>();

    const onClickMint = async () => {
        try {
            if (!account) return;

            const response = await mintAnimalTokenContract.methods
            .mintAnimalToken()
            .send({ from: account });

            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            {   
                newAnimalCard
                ? ( <div>AnimalCard</div>)
                : ( <span>Let's mint Animal Card!!!</span>)
            }
            <button onClick={onClickMint} >Mint</button>
        </>
    )
};

export default Main;