import React, {useEffect, useState} from 'react';
import './RecipesPage.css'
import RecipeCard from "../components/RecipeCard";
import {getRecipes} from "../services/RecipesService";
import SearchBar from "../components/ui/SearchBar";
import axios from "axios";
import {motion} from 'framer-motion';


const RecipesPage = () => {
    const [recipes, setRecipes] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get("http://localhost:8081/recipes").then(response => {
            setRecipes(response.data)
            return response.data
        }).then(json => {
            setSearchResults(json);
            setIsLoading(false);
        })
    }, []);

    // useEffect(() => {
    //     getRecipes().then(json => {
    //         setRecipes(json)
    //         return json
    //     }).then(json => {
    //         setSearchResults(json);
    //     })
    // }, []);


    if (isLoading) {
        return <p>Loading...</p>
    }
    return (<motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{ duration: 0.5 }}
    >
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
                                   energy={r.energy}
                                   favourite={r.favourite}/>
            })}
        </div>
    </motion.div>);
};

export default RecipesPage;
