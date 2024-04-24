import React from 'react';
import ShoppingListItem from "./ShoppingListItem";
import "./ShoppingList.css"

const ShoppingList = (props) => {
    return (<>
        {props.list.length > 0 &&
            <ul className="shopping-list">
            {props.list.map((currentValue, index) => {
                return <ShoppingListItem item={currentValue}
                                         index={index}
                                         key={index}
                                         handleRemoveClick={props.handleRemove}/>
            })}
        </ul>}
    </>);
};

export default ShoppingList;
