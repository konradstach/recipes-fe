import React from 'react';
import CheckBox from "react-animated-checkbox";


const ShoppingListItem = (props) => {
    return (
        <>
            <div className="shopping-list-item">
                {props.item.checked ?
                    <p className="item-name-done">{props.item.name}</p>
                    : <p className="item-name">{props.item.name}</p>}
                <CheckBox
                    checked={props.item.checked}
                    checkBoxStyle={{
                        checkedColor: "#6C5B7B",
                        size: 15,
                        unCheckedColor: "#6C5B7B"
                    }}
                    duration={300}
                    onClick={event => props.handleRemoveClick(event, props.index)}
                />
            </div>
            <hr className="line-break"/>
        </>
    );
};

export default ShoppingListItem;
