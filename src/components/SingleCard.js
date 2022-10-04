import React from "react";
import "./singleCard.css";
import coverCard from "../../src/assets/img/cover.png";

const SingleCard = ({ card , handleChoice, flipped, disabled}) => {

    const handleClick = () => {
        if (!disabled){
            handleChoice(card)
        }
    }

  return (
    <div className="card">
        <div className={flipped ? "flipped": ""}>
            <img 
                className="front-card" 
                src={card.src} 
                alt="tarjeta de frente" 
            />

            <img 
                className="back-card" 
                src={coverCard} 
                onClick={handleClick}
                alt="tarjeta dada vuelta" 
            />
        </div>
    </div>
  );
};

export default SingleCard;
