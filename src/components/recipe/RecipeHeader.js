import React from 'react';
import './RecipeHeader.css'
import {faBowlFood, faHeart as solidHeart} from "@fortawesome/free-solid-svg-icons";
import {faHeart as regularHeart} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import KcalCard from "./KcalCard";

const RecipeHeader = (props) => {
    return (<div>
        <section className="recipe-hero">
            <img
                src={props.imgUrl}
                className="img recipe-hero-img"
            />
            <article className="recipe-info">
                <h2>{props.mealName}
                    <button className="favourite-btn" onClick={props.toggleFavourite}>
                        <FontAwesomeIcon
                            icon={props.favourite ? solidHeart : regularHeart} className="fa-1x"
                        ></FontAwesomeIcon>
                    </button>
                </h2>
                <div className="kcal-cards">
                    <KcalCard name="Energia" value="570" unit="kcal"/>
                    <KcalCard name="Białko" value="21" unit="g"/>
                    <KcalCard name="Węgle" value="50" unit="g"/>
                    <KcalCard name="Tłuszcze" value="30" unit="g"/>
                </div>


                {/*<div className="tile recipe-nutri">*/}
                {/*    <FontAwesomeIcon*/}
                {/*        icon={faBowlFood} className="fa-2x icon">*/}
                {/*    </FontAwesomeIcon>*/}
                {/*    <p>B: 25g | W: 46g | T: 19g</p>*/}
                {/*</div>*/}
                <div className="recipe-icons">
                    <article>
                        <i className="fas fa-clock"></i>
                        <h5>prep time</h5>
                        <p>30 min.</p>
                    </article>
                    <article>
                        <i className="far fa-clock"></i>
                        <h5>cook time</h5>
                        <p>15 min.</p>
                    </article>
                    <article>
                        <i className="fas fa-user-friends"></i>
                        <h5>serving</h5>
                        <p>6 servings</p>
                    </article>
                </div>
                <p className="recipe-tags">
                    Tags :
                    {props.tags.map((tag, index) => {
                        return <a href="tag-template.html" key={index}>{tag}</a> //TODO
                    })}
                </p>
            </article>
        </section>
    </div>);
};

export default RecipeHeader;
