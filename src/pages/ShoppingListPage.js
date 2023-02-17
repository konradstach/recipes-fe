import React, {useState} from 'react';
import ShoppingList from "../components/shopping/ShoppingList";
import ShoppingItemInput from "../components/shopping/ShoppingItemInput";
import "./ShoppingListPage.css"
import {motion} from 'framer-motion';


const ShoppingListPage = () => {
    const [list, setList] = useState([
        {
            "name": "coś",
            "done": true
        },
        {
            "name": "coś innego",
            "done": false
        }]);
    const [newItem, setNewItem] = useState({"name": "", "done": false});

    const handleAdd = () => {
        if (newItem.name !== "") {
            const newItemToBuy = {
                "name": newItem.name,
                "done": false
            }
            setList([newItemToBuy, ...list]);
            setNewItem({"name": "", "done": false});
        }
    }

    const handleEnterPress = (event) => {
        const keyCode = event.keyCode || event.which;
        if (keyCode === 13) { //enter
            handleAdd();
        }
    }

    const handleRemove = (event, index) => {
        event.preventDefault();
        const updatedList = [...list];
        const done = updatedList.splice(index, 1).at(0);
        done.done = true;

        setList([...updatedList, done]);
    }

    return (<motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >
            <div className="shopping-list-container">
                <div className="shopping-list-card">
                    <ShoppingList list={list} handleRemove={handleRemove}></ShoppingList>
                    <ShoppingItemInput handleAdd={handleAdd} handleEnterPress={handleEnterPress} newItem={newItem}
                                       setNewItem={setNewItem}></ShoppingItemInput>
                </div>
            </div>
        </motion.div>
    );
};

export default ShoppingListPage;
