import React, {useRef} from 'react';
import './AddNewRecipe.css'
import axios from "axios";

const AddNewRecipePage = () => {
    const nameInputRef = useRef();
    const portionsInputRef = useRef();
    const prepTimeInputRef = useRef();
    const withCookTimeInputRef = useRef();
    const energyInputRef = useRef();
    const imgUrlInputRef = useRef();
    const ingredientsInputRef = useRef();
    const stepsInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredPortions = portionsInputRef.current.value;
        const enteredPrepTime = prepTimeInputRef.current.value;
        const enteredWithCookTime = withCookTimeInputRef.current.value;
        const enteredEnergy = energyInputRef.current.value;
        const enteredImgUrl = imgUrlInputRef.current.value;
        const enteredIngredients = ingredientsInputRef.current.value;
        const enteredSteps = stepsInputRef.current.value;


        const recipeData = {
            name: enteredName,
            portions: enteredPortions,
            prepTime: enteredPrepTime,
            withCookTime: enteredWithCookTime,
            energy: enteredEnergy,
            imgUrl: enteredImgUrl,
            ingredients: enteredIngredients,
            steps: enteredSteps,
        }
        console.log(JSON.stringify(recipeData))

        axios.post(`http://localhost:8081/recipes`, recipeData)
            .then(res => {
                console.log(res);
            })
    }

    return (<div className="add-new-recipe-container">
        <p>Dodaj nowy przepis</p>
        <form onSubmit={submitHandler}>
            <ul>
                <li>
                    <label>Meal name</label>
                    <input type="text" id="name" ref={nameInputRef}/>
                </li>
                <li>
                    <label>Portions</label>
                    <input type="number" id="portions" ref={portionsInputRef}/>
                </li>
                <li>
                    <label>Preparation time</label>
                    <input type="number" id="prep_time" ref={prepTimeInputRef}/>
                </li>
                <li>
                    <label>With cooking time</label>
                    <input type="number" id="with_cook_time" ref={withCookTimeInputRef}/>
                </li>
                <li>
                    <label>Energy</label>
                    <input type="number" id="energy" ref={energyInputRef}/>
                </li>
                <li>
                    <label>Image URL</label>
                    <input type="text" id="img_url" ref={imgUrlInputRef}/>
                </li>
                <li>
                    <label>Ingredients</label>
                    <textarea id="ingredients" ref={ingredientsInputRef}/>
                </li>
                <li>
                    <label>Steps</label>
                    <textarea id="steps" ref={stepsInputRef}/>
                </li>
            </ul>
            <button type='submit'>Add</button>
        </form>
    </div>);
};

export default AddNewRecipePage;
