import { useState } from "react";
import "./App.css";

export default function App() {
    return (
        <div className="App">
            <Counter />
        </div>
    );
}

function Counter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const date = new Date();
    date.setDate(date.getDate() + count);

    function handleReset() {
        setCount(0);
        setStep(1);
    }

    return (
        <div className="counter-container">
            <div className="control-group1">
                <div>
                    <button className="control-button" onClick={() => setStep(step - 1)}>-</button>
                    <input type="range" min={1} max={10} value={step} onChange={(e) => setStep(Number(e.target.value))}/>
                    <button className="control-button" onClick={() => setStep(step + 1)}>+</button>
                </div>
                <div>
                    <span className="step-label">Step: {step}</span>
                </div>
            </div>

            <div className="control-group">
                <button className="control-button" onClick={() => setCount(count - step)}>-</button>
                <input className="count-input" type="text" value={count} onChange={(e) => setCount(Number(e.target.value))} />
                <button className="control-button" onClick={() => setCount(count + step)}>+</button>
            </div>

            <p className="date-text">
                {count === 0
                    ? "Today is "
                    : count > 0
                        ? `${count} days from today is `
                        : `${Math.abs(count)} days ago was `}
                {date.toDateString()}
            </p>
            <button className="reset-button" onClick={handleReset}>Reset</button>
        </div>
    );
}
