import React from "react";

export function Task2() {
    const [number1, setNumber1] = React.useState(0);
    const [number2, setNumber2] = React.useState(0);

    const handleNumber1Change = (event) => setNumber1(event.target.value);
    const handleNumber2Change = (event) => setNumber2(event.target.value);

    return (
        <div>
            <div className="task-2-block">
                <input type="number" onChange={handleNumber1Change}/>
                <div>
                    {number1 * 0.5}
                </div>
            </div>
            <div className="task-2-block">
                <input type="number" onChange={handleNumber2Change}/>
                <div>
                    {number2 * 0.05}
                </div>
            </div>
        </div>
    )
}