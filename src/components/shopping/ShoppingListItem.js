import React from 'react';
import CheckBox from "react-animated-checkbox";


const ShoppingListItem = (props) => {
    return (
        <>
            <div className="shopping-list-item">
                {/*<button className="fa-icon remove-icon" onClick={event => props.handleRemoveClick(event, props.index)}>*/}
                {/*    <FontAwesomeIcon*/}
                {/*        icon={props.item.done ? faSquareCheck : faSquare} className="fa-1x"*/}
                {/*    ></FontAwesomeIcon>*/}
                {/*</button>*/}
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
            <hr className="line-break"/>
        </>
    );
};

export default ShoppingListItem;
