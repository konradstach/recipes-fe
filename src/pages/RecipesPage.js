import React from 'react';
import './RecipesPage.css'
import RecipeCard from "../components/RecipeCard";

const RecipesPage = () => {
    return (
        <div className="recipes-list">
            <RecipeCard name="Chilli con carne" id="1" prepTime="15 min" withCookTime="20 min" imgUrl="https://naszprzepis.pl/wp-content/uploads/2020/09/chili_con_carne_after-1024x768.jpg"/>
            <RecipeCard name="Sth else" id="2" prepTime="5min" withCookTime="10min" imgUrl="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg"/>
        </div>
    );
};

export default RecipesPage;
