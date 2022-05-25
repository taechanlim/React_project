import React, { FC } from "react";

interface AnimalCardProps {
    animalType: string;
}

const AnimalCard: FC<AnimalCardProps> = ({ animalType }) => {
    return ( 
        <img src = {`../static/marketImg/${animalType}.png`} width="150" height="150" alt="AnimalCard" />
    );
};

export default AnimalCard;