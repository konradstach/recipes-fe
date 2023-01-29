import React from 'react';
import './Ingredients.css'

const Ingredients = (props) => {
    return (
        <div>
            <article className="second-column">
                <div className="ingredients-list">
                    <h4>składniki</h4>
                    {props.ingredients.map((currentValue, index) =>{
                        return <p className="single-ingredient" key={index}>{currentValue.amount} {currentValue.ingredientName}</p>
                    })}
                </div>
            </article>
        </div>
    );
};

export default Ingredients;
