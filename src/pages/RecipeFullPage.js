import React, {useEffect, useState} from 'react';
import Instructions from "../components/recipe/Instructions";
import Ingredients from "../components/recipe/Ingredients";
import NutritionTable from "../components/recipe/NutritionTable";
import {useParams} from "react-router-dom";
import './RecipeFullPage.css'
import RecipeHeader from "../components/recipe/RecipeHeader";
import axios from "axios";
import {motion} from 'framer-motion';


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

        const favouriteValue = {favourite: !recipe.favourite};
        axios.patch("http://localhost:8081/recipes/" + recipeId, favouriteValue)
            .then(response => {
                setRecipe(response.data)
            })
    }

    console.log(recipe);

    if (isLoading) {
        return <p>Loading...</p>
    } else {
        return (<div className="recipe-full-page-container">
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 0.5}}
            >
                <RecipeHeader mealName={recipe.name} imgUrl={recipe.imgUrl} tags={recipe.tags}
                              favourite={recipe.favourite}
                              toggleFavourite={handleFavouriteClick}/>
                <section className="recipe-content">
                    <Ingredients ingredients={recipe.ingredients} key={recipe.ingredients.index}/>
                    <Instructions instructions={recipe.steps}/>
                    <NutritionTable/>
                </section>
            </motion.div>
            </div>
        );
    }
};

export default RecipeFullPage;
