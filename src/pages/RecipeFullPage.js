import React, {useState} from 'react';
import Instructions from "../components/recipe/Instructions";
import Ingredients from "../components/recipe/Ingredients";
import NutritionTable from "../components/recipe/NutritionTable";
import {useParams} from "react-router-dom";
import './RecipeFullPage.css'
import RecipeHeader from "../components/recipe/RecipeHeader";

const RecipeFullPage = () => {
    const RECIPE = {
        mealName: "Szakszuka",
        steps: [
            "Przygotować pomidory: sparzyć, obrać ze skórki, pokroić na ćwiartki, wykroić szypułki, miąższ pokroić w kosteczkę.",
            "Na niedużą patelnię (około 20 cm średnicy) włożyć masło lub wlać oliwę oraz starty czosnek, chwilę podsmażyć.",
            "Pomidory włożyć na patelnię, doprawić solą, pieprzem i przyprawami. Wymieszać i intensywnie smażyć na większym ogniu przez około 4 minuty, już bez mieszania (wówczas pomidory odparują i zachowają swoją strukturę, jeśli będziemy mieszać zrobi się przecier).",
            "Do podsmażonych pomidorów wbić jajka, doprawić solą. Przykryć i gotować przez około 3 minuty lub do czasu aż białka jajek będą ścięte. Podawać ze świeżą bazylią i bagietką."
        ],
        tags: ["Śniadanie", "Kolacja", "Wegetariańskie"],
        portions: 2,
        ingredients: [
            {amount: 2, ingredientName: "pomidory"},
            {amount: 0.5, ingredientName: "łyżki masła lub oliwy"},
            {amount: 0.5, ingredientName: "ząbka czosnku"},
            {amount: 2, ingredientName: "jajka"},
            {ingredientName: "świeża bazylia"},
            {ingredientName: "bagietka czosnkowa"},
        ],
        favourite: true,
        imgUrl:"https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg"
    }

    const recipeId = useParams(); //TODO

    const [recipe, setRecipe] = useState();

    return (
        <div>
            <RecipeHeader mealName={RECIPE.mealName} imgUrl={RECIPE.imgUrl} tags={RECIPE.tags} favourite={RECIPE.favourite}/>
            <section className="recipe-content">
                <Ingredients ingredients={RECIPE.ingredients}/>
                <Instructions instructions={RECIPE.steps}/>
                <NutritionTable/>
            </section>
        </div>
    );
};

export default RecipeFullPage;
