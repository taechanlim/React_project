import React, { FC } from "react";

interface AnimalCardProps {
    animalType: string;
}

const AnimalCard: FC<AnimalCardProps> = ({ animalType }) => {
    return ( 
        <img src = {`../static/marketImg/${animalType}.png`} width="500" height="500" alt="AnimalCard" style={{borderRadius:'5px 5px'}}/>
    );
};

export default AnimalCard;