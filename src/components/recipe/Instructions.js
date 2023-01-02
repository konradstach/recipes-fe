import React from 'react';
import InstructionStep from "./InstructionStep";
import './Instructions.css'

const Instructions = (props) => {
    return (
        <div className="instructions">
            {props.instructions.map((currentValue, index) => {
                return <InstructionStep stepNumber={index + 1} stepDescription={currentValue}/>
            })}
        </div>
    );
};

export default Instructions;
