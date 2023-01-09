import React from 'react';
import './RecipeCard.css'
import {faClock} from "@fortawesome/free-regular-svg-icons";
import {faFireAlt, faBowlFood, faHeart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const RecipeCard = (props) => {
    return (<div className="recipe">
        <a href={"/recipes/" + props.id} className="recipe-link">
            <div className="img-fav-icon-container">
                {props.favourite ?
                    <FontAwesomeIcon
                        icon={faHeart} className="fa-2xl img-icon">
                    </FontAwesomeIcon> : null}
                <img
                    src={props.imgUrl}
                    className="recipe-img"
                    alt=""
                />
            </div>
            <h5 className="recipe-name">{props.name}</h5>
        </a>

        <div className="tile recipe-prep-times">
            <FontAwesomeIcon
                icon={faClock} className="fa-2x icon">
            </FontAwesomeIcon>
            <p>{props.prepTime} | {props.withCookTime}</p>
        </div>

        <div className="tile recipe-kcal">
            <FontAwesomeIcon
                icon={faFireAlt} className="fa-2x icon">
            </FontAwesomeIcon>
            <p>452 kcal</p>
        </div>

        <div className="tile recipe-nutri">
            <FontAwesomeIcon
                icon={faBowlFood} className="fa-2x icon">
            </FontAwesomeIcon>
            <p>B: 25g | W: 46g | T: 19g</p>
        </div>
    </div>);
};

export default RecipeCard;
