import React, { FC, useState } from "react";

interface MainProps {
    account: string;
}

const Main: FC<MainProps> = ({ account }) => {
    const [newAnimalCard, setNewAnimalCard] = useState<string>();

    return (
        <>
            {   
                newAnimalCard
                ? ( <div>AnimalCard</div>)
                : ( <span>Let's mint Animal Card!!!</span>)
            }
            <button>Mint</button>
        </>
    )
};

export default Main;