import React, {useState} from 'react';
import ShoppingList from "../components/shopping/ShoppingList";
import ShoppingItemInput from "../components/shopping/ShoppingItemInput";
import "./ShoppingListPage.css"
import {motion} from 'framer-motion';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";


const ShoppingListPage = () => {
    const [list, setList] = useState([{
        "name": "coś", "done": false
    }, {
        "name": "coś innego", "done": true
    }]);
    const [newItem, setNewItem] = useState({"name": "", "done": false});

    const handleAdd = () => {
        if (newItem.name !== "") {
            const newItemToBuy = {
                "name": newItem.name, "done": false
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

    const toggleDone = (event, index) => {
        event.preventDefault();
        const updatedList = [...list];
        const done = updatedList.splice(index, 1).at(0);
        done.done = !done.done;
        if (done.done) {
            setList([...updatedList, done]);
        } else {
            setList([done, ...updatedList]);
        }
    }

    const deleteDone = () => {
        const updatedList = [...list];
        setList(updatedList.filter(e => !e.done));
    }

    return (<motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >
            <div className="shopping-list-container">
                <div className="shopping-list-card">
                    <button className="fa-icon delete-done-icon" onClick={deleteDone}>Usuń kupione
                        <FontAwesomeIcon
                            icon={faTrash} className="fa-1x icon-padding"
                        ></FontAwesomeIcon>
                    </button>
                    <ShoppingList list={list} handleRemove={toggleDone}></ShoppingList>
                    <ShoppingItemInput handleAdd={handleAdd}
                                       handleEnterPress={handleEnterPress}
                                       newItem={newItem}
                                       setNewItem={setNewItem}></ShoppingItemInput>
                </div>
            </div>
        </motion.div>);
};

export default ShoppingListPage;
