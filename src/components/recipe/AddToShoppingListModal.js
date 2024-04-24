import React, {useState} from 'react';
import './AddToShoppingListModal.css'
import ShoppingList from "../shopping/ShoppingList";
import axios from "axios";

function AddToShoppingListModal(props) {
    const [ingredientsToBuy, setIngredientsToBuy] = useState(props.ingredients.map(ingredient => {
        return {
            name: ingredient.amount === null ? ingredient.ingredientName : ingredient.amount + ' ' + ingredient.ingredientName,
            done: false
        };
    }));

    const toggleCheck = (event, index) => {
        event.preventDefault();
        const updatedList = [...ingredientsToBuy];
        const done = updatedList.splice(index, 1).at(0);
        done.done = !done.done;
        if (done.done) {
            setIngredientsToBuy([...updatedList, done]);
        } else {
            setIngredientsToBuy([done, ...updatedList]);
        }
    }

    const handleAddCheckedToShoppingList = () => {
        const productsToAdd = ingredientsToBuy
            .filter(e=> !e.done)
            .map(e => {
            return {
                name: e.name,
                checked: false
            };
        });

        axios.post(`http://localhost:8081/shopping-list`, productsToAdd)
            .then(res => {
                console.log(res);
            })
    }

    return (
        <>
            {props.visible && (
                <div className="overlay">
                    <div className="add-to-shopping-list-modal-content">
                        <ShoppingList list={ingredientsToBuy} handleRemove={toggleCheck}></ShoppingList>
                        {/*<ul className="shopping-list">*/}
                        {/*    {ingredientsToBuy.map((currentValue, index) => {*/}
                        {/*        return <li key={index}>*/}
                        {/*            <p>{currentValue.productToBuy}</p>*/}
                        {/*            <CheckBox*/}
                        {/*                checked={currentValue.toBuy}*/}
                        {/*                checkBoxStyle={{*/}
                        {/*                    checkedColor: "#6C5B7B",*/}
                        {/*                    size: 15,*/}
                        {/*                    unCheckedColor: "#6C5B7B"*/}
                        {/*                }}*/}
                        {/*                duration={300}*/}
                        {/*                onClick={event => toggleCheck(event, index)}*/}
                        {/*            />*/}
                        {/*        </li>*/}
                        {/*    })}*/}
                        {/*</ul>*/}
                        <button onClick={handleAddCheckedToShoppingList}>Dodaj zaznaczone do listy</button>
                        <button onClick={props.closeModal}>CLOSE</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default AddToShoppingListModal;