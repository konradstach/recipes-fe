import React, {useEffect, useState} from 'react';
import ShoppingList from "../components/shopping/ShoppingList";
import ShoppingItemInput from "../components/shopping/ShoppingItemInput";
import "./ShoppingListPage.css"
import {motion} from 'framer-motion';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";


const ShoppingListPage = () => {
    const [list, setList] = useState([]);
    const [newItem, setNewItem] = useState({"name": "", "checked": false});

    useEffect(() => {
        axios.get("http://localhost:8081/shopping-list/").then(response => {
            setList(response.data)
        })
    }, []);

    const handleAdd = () => {
        if (newItem.name !== "") {
            const newItemToBuy = {
                "name": newItem.name, "checked": false
            }

            axios.post(`http://localhost:8081/shopping-list/product`, newItemToBuy)
                .then(res => {
                    console.log(res);
                    setList([newItemToBuy, ...list]);
                    setNewItem({"name": "", "checked": false});
                })
        }

    }

    const handleEnterPress = (event) => {
        const keyCode = event.keyCode || event.which;
        if (keyCode === 13) { // Enter
            handleAdd();
        }
    }

    const toggleChecked = (event, index) => {
        event.preventDefault();
        const updatedList = [...list];
        const checked = updatedList.splice(index, 1).at(0);
        checked.checked = !checked.checked;
        if (checked.checked) {
            setList([...updatedList, checked]);
        } else {
            setList([checked, ...updatedList]);
        }
    }

    const deleteChecked = () => {
        const updatedList = [...list];
        setList(updatedList.filter(e => !e.checked));

        axios.put("http://localhost:8081/shopping-list/", list)
            .then(response => {
                setList(response.data)
            })
    }

    return (<motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
    >
        <div className="shopping-list-container">
            <div className="shopping-list-card">
                <button className="fa-icon delete-done-icon" onClick={deleteChecked}>Usuń kupione
                    <FontAwesomeIcon
                        icon={faTrash} className="fa-1x icon-padding"
                    ></FontAwesomeIcon>
                </button>
                <ShoppingList list={list} handleRemove={toggleChecked}></ShoppingList>
                <ShoppingItemInput handleAdd={handleAdd}
                                   handleEnterPress={handleEnterPress}
                                   newItem={newItem}
                                   setNewItem={setNewItem}></ShoppingItemInput>
            </div>
        </div>
    </motion.div>);
};

export default ShoppingListPage;
