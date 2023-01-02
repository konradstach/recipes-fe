import React from 'react';
import './RecipeCard.css'

const RecipeCard = (props) => {
    return (
        <div>
            <a href={"/recipes/" + props.id} className="recipe">
                <img
                    src={props.imgUrl}
                    className="img recipe-img"
                    alt=""
                />
                <h5>{props.name}</h5>
                <p>Prep : {props.prepTime} | With cooking : {props.withCookTime}</p>
            </a>
        </div>
    );
};

export default RecipeCard;
