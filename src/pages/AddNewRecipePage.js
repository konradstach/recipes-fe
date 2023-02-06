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
        <form className="add-recipe-form" onSubmit={submitHandler}>
            <input type="text" id="name" placeholder="Nazwa" ref={nameInputRef}/>
            <input type="number" id="portions" placeholder="Liczba porcji" ref={portionsInputRef}/>
            <div id="cook-times">
                <input type="number" id="prep_time" placeholder="Czas przygotowania" ref={prepTimeInputRef}/>
                <input type="number" id="with_cook_time" placeholder="Z gotowaniem" ref={withCookTimeInputRef}/>
            </div>
            <input type="number" id="energy" placeholder="Kcal (na 1 porcje)" ref={energyInputRef}/>
            <div id="macros-inputs">
                <input type="number" id="protein-input" placeholder="Białko [g]" ref={energyInputRef}/>
                <input type="number" id="carbs-input" placeholder="Węglowodany [g]" ref={energyInputRef}/>
                <input type="number" id="fats-input" placeholder="Tłuszcze [g]" ref={energyInputRef}/>
            </div>
            <input type="text" id="img_url" placeholder="URL zdjęcia" ref={imgUrlInputRef}/>
            <textarea id="ingredients" placeholder="Składniki" ref={ingredientsInputRef}/>
            <textarea id="steps" placeholder="Przygotowanie" ref={stepsInputRef}/>
            <button type='submit'>Add</button>
        </form>
    </div>);
};

export default AddNewRecipePage;
