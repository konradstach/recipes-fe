import React from 'react';
import './RecipeCard.css'
import {faClock} from "@fortawesome/free-regular-svg-icons";
import {faBowlFood, faFireAlt, faHeart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useNavigate} from "react-router-dom";


const RecipeCard = (props) => {
    let navigate = useNavigate();
    const goToRecipeFullPage = (id) => {
        let path = id;
        navigate(path);
    }

    return (<div className="recipe">
        <div onClick={() => goToRecipeFullPage(props.id)} className="recipe-link">
            <div className="img-fav-icon-container">
                {props.favourite ?
                    <FontAwesomeIcon
                        icon={faHeart} className="fa-2x img-icon icon">
                    </FontAwesomeIcon> : null}
                <img
                    src={props.imgUrl}
                    className="recipe-img"
                    alt=""
                />
            </div>
            <h5 className="recipe-name">{props.name}</h5>
        </div>

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
            <p>{props.energy} kcal</p>
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
