import React from 'react';
import './Ingredients.css'
import AddToShoppingListModal from "./AddToShoppingListModal";

const Ingredients = (props) => {
    return (
        <div>
            <article className="second-column">
                <div className="ingredients-list">
                    <h4>składniki</h4>
                    {props.ingredients.map((currentValue, index) =>{
                        return <p className="single-ingredient" key={index}>{currentValue.amount} {currentValue.ingredientName}</p>
                    })}
                    <button onClick={props.handleAddToShoppingList}>Dodaj do listy składników</button>
                </div>
            </article>
        </div>
    );
};

export default Ingredients;
