import React, {useState} from 'react';
import './AddToShoppingListModal.css'
import ShoppingList from "../shopping/ShoppingList";
import axios from "axios";

function AddToShoppingListModal(props) {
    const [ingredientsToBuy, setIngredientsToBuy] = useState(props.ingredients.map(ingredient => {
        return {
            name: ingredient.amount === null ? ingredient.ingredientName : ingredient.amount + ' ' + ingredient.ingredientName,
            checked: false
        };
    }));

    const toggleCheck = (event, index) => {
        event.preventDefault();
        const updatedList = [...ingredientsToBuy];
        const checked = updatedList.splice(index, 1).at(0);
        checked.checked = !checked.checked;
        if (checked.checked) {
            setIngredientsToBuy([...updatedList, checked]);
        } else {
            setIngredientsToBuy([checked, ...updatedList]);
        }
    }

    const handleAddCheckedToShoppingList = (event) => {
        const productsToAdd = ingredientsToBuy
            .filter(e=> !e.checked)
            .map(e => {
            return {
                name: e.name,
                checked: false
            };
        });

        axios.post(`http://localhost:8081/shopping-list`, productsToAdd)
            .then(res => {
                console.log(res);
                props.closeModal(event);
            })
    }

    return (
        <>
            {props.visible && (
                <div className="overlay" onClick={props.closeModal}>
                    <div className="add-to-shopping-list-modal-content">
                        <h5>Odznacz produkty, których nie potrzebujesz</h5>
                        <ShoppingList list={ingredientsToBuy} handleRemove={toggleCheck}></ShoppingList>
                        <button onClick={handleAddCheckedToShoppingList}>Dodaj zaznaczone do listy</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default AddToShoppingListModal;