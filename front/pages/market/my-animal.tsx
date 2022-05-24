import React, { FC, useEffect, useState } from "react";
import AnimalCard from "./AnimalCard";
import { mintAnimalTokenContract } from "./web3Config";

interface MyAnimalProps {
    account: string;
}
const MyAnimal: FC<MyAnimalProps> = ({ account }) => {
    const [animalCardArray, setAnimalCardArray] = useState<string[]>();
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

    useEffect(() => {
        if (!account) return;

        getAnimalTokens();
    }, [account]);

    return (
        <div>
            {animalCardArray && animalCardArray.map((v, i) => {
                return <AnimalCard key={i} animalType={v} />;
            })}
        </div>
);
};

export default MyAnimal;