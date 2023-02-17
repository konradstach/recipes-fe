import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";

const ShoppingListItem = (props) => {
    return (
        <div className="shopping-list-item">
            <button className="fa-icon remove-icon" onClick={event => props.handleRemoveClick(event, props.index)}>
                <FontAwesomeIcon
                    icon={faCheck} className="fa-1x"
                ></FontAwesomeIcon>
            </button>
            {props.item.done ?
            <p className="item-name-done">{props.item.name}</p>
                : <p className="item-name">{props.item.name}</p>}
        </div>
    );
};

export default ShoppingListItem;
