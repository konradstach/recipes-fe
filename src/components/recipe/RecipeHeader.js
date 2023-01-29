import React from 'react';
import './RecipeHeader.css'
import {faHeart as solidHeart} from "@fortawesome/free-solid-svg-icons";
import {faHeart as regularHeart} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
                    <p>
                        Shabby chic humblebrag banh mi bushwick, banjo kale chips
                        meggings. Cred selfies sartorial, cloud bread disrupt blue bottle
                        seitan. Dreamcatcher tousled bitters, health goth vegan venmo
                        whatever street art lyft shabby chic pitchfork beard. Drinking
                        vinegar poke tbh, iPhone coloring book polaroid truffaut tousled
                        ramps pug trust fund letterpress. Portland four loko austin
                        chicharrones bitters single-origin coffee. Leggings letterpress
                        occupy pour-over.
                    </p>
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
