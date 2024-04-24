import React from 'react';
import CheckBox from "react-animated-checkbox";

function AddToShoppingListItem(props) {
    return (<div className="shopping-list-item">
            {props.item.done ?
                <p className="item-name-done">{props.item.name}</p>
                : <p className="item-name">{props.item.name}</p>}
            <CheckBox
                checked={props.item.done}
                checkBoxStyle={{
                    checkedColor: "#6C5B7B",
                    size: 15,
                    unCheckedColor: "#6C5B7B"
                }}
                duration={300}
                onClick={event => props.handleRemoveClick(event, props.index)}
            />
        </div>
    );
}

export default AddToShoppingListItem;