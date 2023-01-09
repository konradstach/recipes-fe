import React, {useEffect, useState} from 'react';
import './RecipesPage.css'
import RecipeCard from "../components/RecipeCard";
import {getRecipes} from "../services/RecipesService";
import SearchBar from "../components/ui/SearchBar";

const RecipesPage = () => {
    const [recipes, setRecipes] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        getRecipes().then(json => {
            setRecipes(json)
            return json
        }).then(json => {
            setSearchResults(json);
        })
    }, []);

    return (<>
        <div className="recipes-nav">
            <SearchBar recipes={recipes} setSearchResults={setSearchResults}></SearchBar>
        </div>
        <div className="recipes-list">
            {searchResults.map(r => {
                return <RecipeCard name={r.name}
                                   id={r.id}
                                   key={r.id}
                                   prepTime={r.prepTime}
                                   withCookTime={r.withCookTime}
                                   imgUrl={r.imgUrl}
                                   favourite={r.favourite}/>
            })}
        </div>
    </>);
};

export default RecipesPage;
