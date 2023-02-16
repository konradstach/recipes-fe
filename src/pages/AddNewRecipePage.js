import React, {useRef, useState} from 'react';
import './AddNewRecipe.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {motion} from 'framer-motion';
import {Tab, Tabs} from "react-bootstrap";


const AddNewRecipePage = () => {
    const [key, setKey] = useState('manual');

    const nameInputRef = useRef();
    const portionsInputRef = useRef();
    const prepTimeInputRef = useRef();
    const withCookTimeInputRef = useRef();
    const energyInputRef = useRef();
    const imgUrlInputRef = useRef();
    const ingredientsInputRef = useRef();
    const stepsInputRef = useRef();
    const webScrapInputRef = useRef();

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

    const scrapRecipeFromWebPageHandler = () => { //TODO pobrać dane z backendu i wrzucić do formularza
        const webScrapInput = webScrapInputRef.current.value;
        axios.get(`http://localhost:8081/recipes/scrap`, { params: { url: webScrapInput } })
            .then(res => {
                console.log(res.data);
                const scrappedRecipe = res.data;
                nameInputRef.current.value = scrappedRecipe.name;
                portionsInputRef.current.value = scrappedRecipe.servings;
                imgUrlInputRef.current.value = scrappedRecipe.imgUrl;
                ingredientsInputRef.current.value = scrappedRecipe.ingredients;
                stepsInputRef.current.value = scrappedRecipe.steps;
            })
    }

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >
            <div className="add-new-recipe-container">
                <p>Dodaj nowy przepis</p>
                <Tabs defaultActiveKey="manual" id="tabs" className="mb-3" onSelect={(k) => setKey(k)}>
                    <Tab title="Ręcznie" eventKey="manual"></Tab>
                    <Tab title="Z kwestii smaku" eventKey="web-scrap"></Tab>
                </Tabs>
                {key === "web-scrap" &&
                    <div className="web-scrap-form">
                        <input className="web-scrap-input" ref={webScrapInputRef}/>
                        <button onClick={scrapRecipeFromWebPageHandler}>Go</button>
                    </div>
                }
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
            </div>
        </motion.div>);
};

export default AddNewRecipePage;
