import React from 'react';
import './InstructionStep.css'

const InstructionStep = (props) => {
    return (
        <div className="single-instruction">
            <header>
                <p>krok {props.stepNumber}</p>
                <div></div>
            </header>
            <p>
                {props.stepDescription}
            </p>
        </div>
    );
};

export default InstructionStep;
