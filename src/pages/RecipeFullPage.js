import React, {useEffect, useState} from 'react';
import Instructions from "../components/recipe/Instructions";
import Ingredients from "../components/recipe/Ingredients";
import NutritionTable from "../components/recipe/NutritionTable";
import {useParams} from "react-router-dom";
import './RecipeFullPage.css'
import RecipeHeader from "../components/recipe/RecipeHeader";
import axios from "axios";

const RecipeFullPage = () => {
    const recipeId = useParams().id;
    const [recipe, setRecipe] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get("http://localhost:8081/recipes/" + recipeId).then(response => {
            setRecipe(response.data)
            setIsLoading(false);
        })
    }, []);

    const handleFavouriteClick = (event) => {
        event.preventDefault();

        const editedRecipe = [...recipe];
        // editedRecipe.
    }

    console.log(recipe);

    if (isLoading) {
        return <p>Loading...</p>
    } else {
        return (
            <div>
                <RecipeHeader mealName={recipe.name} imgUrl={recipe.imgUrl} tags={recipe.tags}
                              favourite={recipe.favourite}
                              toggleFavourite={handleFavouriteClick}/>
                <section className="recipe-content">
                    <Ingredients ingredients={recipe.ingredients} key={recipe.ingredients.index}/>
                    <Instructions instructions={recipe.steps}/>
                    <NutritionTable/>
                </section>
            </div>
        );
    }
};

export default RecipeFullPage;
