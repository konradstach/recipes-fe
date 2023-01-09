import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import './SearchBar.css';

const SearchBar = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleSearchChange = (e) =>{
        console.log(props.recipes);

        if(!e.target.value){
            return props.setSearchResults(props.recipes)
        }
        const resultsArray = props.recipes.filter(recipe=> recipe.name.toLowerCase().includes(e.target.value.toLowerCase()))

        props.setSearchResults(resultsArray);
    }

    return (
        <header className="search-bar-container">
            <form className="search" onSubmit={handleSubmit}>
                <input className="search-input" type="text" id ="search" onChange={handleSearchChange}/>
            </form>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"></FontAwesomeIcon>
        </header>
    );
};

export default SearchBar;
