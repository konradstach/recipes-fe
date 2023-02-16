import React, {useEffect, useState} from 'react';
import './RecipesPage.css'
import RecipeCard from "../components/recipe/RecipeCard";
import SearchBar from "../components/ui/SearchBar";
import axios from "axios";
import {motion} from 'framer-motion';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";


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

    let navigate = useNavigate();
    const goToNewRecipePage = () =>{
        let path = '/new-recipe';
        navigate(path);
    }

    if (isLoading) {
        return <p>Loading...</p>
    }
    return (<motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
    >
        <div className="recipes-nav">
            <button className="add-new-recipe-button" onClick={goToNewRecipePage}>
                <span className="add-new-recipe-button-text">Dodaj nowy</span>
                <span className="add-new-recipe-button-icon">
                <FontAwesomeIcon
                    icon={faPlus} className="fa-1x add-icon">
                </FontAwesomeIcon>
            </span>
            </button>

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
