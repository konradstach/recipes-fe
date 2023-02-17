import React from 'react';
import "./KcalCard.css"

const KcalCard = ({name, value, unit}) => {
    const determineCssClass = () => { //TODO zrobić to inaczej
        if (name === "Energia") {
            return "kcal-card-energy-color"
        } else {
            return "kcal-card-macros-color"
        }
    }
    return (
        <div className="kcal-card-container">
            <div className="kcal-card-name">
                <p>{name}</p>
            </div>
            <div className={"kcal-card-value " + determineCssClass()}>
                <p className="kcal-card-value-text">{value}{unit}</p>
            </div>
        </div>
    );
};

export default KcalCard;
