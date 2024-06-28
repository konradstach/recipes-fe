import React from 'react';
import "./ShoppingListItem.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import "./ShoppingItemInput.css";

const ShoppingItemInput = (props) => {
    return (
        <div className="add-new-product-container">
            <input
                className="add-new-product-input"
                type="text"
                placeholder="Dodaj nowy produkt"
                value={props.newItem.name}
                onChange={e => {
                    props.setNewItem({"name": e.target.value, "checked": false})
                }}
                onKeyDown={props.handleEnterPress}
            />
            <button className="fa-icon add-new-product-icon" onClick={props.handleAdd}>
                <FontAwesomeIcon
                    icon={faPlus} className="fa-1x"
                ></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default ShoppingItemInput;
