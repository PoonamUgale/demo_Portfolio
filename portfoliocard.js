import React, { useEffect, useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import portfolio from "../../portfolio.json";

const PortfolioCard = () => {
  const [cards, setcards] = useState([]);

  useEffect(() => {
    setcards(portfolio.cards);
  }, []);
  return (
    // <div className="card-container">
    //   {cards.map((cards) => (
    //     <div key={cards.id} className="card">
    //       <h2 className="card-name">{cards.cardName}</h2>
    //       <p className="card-about">{cards.about}</p>
    //     </div>
    //   ))}
    // </div>

    <div className=" card-container">
      {(() => {
        const arr = [];
        for (let i = 0; i < cards.length; i++) {
          const card = cards[i];
          arr.push(
            <div key={i + 1} className="card">
              <h2 className="employee-name">{card.cardName}</h2>
              <p className="employee-profile">{card.about}</p>
            </div>
          );
        }
        return arr;
      })()}
    </div>
  );
};
export default PortfolioCard;
