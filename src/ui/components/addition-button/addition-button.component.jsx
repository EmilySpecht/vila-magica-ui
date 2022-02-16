import React, {useState} from "react";

import "./addition-button.style.css"

export const AdditionButtonComponent = ({classname}) => {
    const [addition, setAddition] = useState(1);

    const handleAddition = () => {
        setAddition(addition+1)
    }

    const handleDecrease = () => {
        if (addition > 1) {
            setAddition(addition-1)
        }
    }

    return (
        <div className={`addition-button ${classname}`}>
            <button className="decrease" onClick={handleDecrease}>
                -
            </button>
            <div className="number-additioned">
                {addition}
            </div>
            <button className="addition" onClick={handleAddition}>
                +
            </button>
        </div>
    )
}