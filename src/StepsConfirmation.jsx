/* eslint-disable no-unused-vars */
import { useState } from 'react'

const StepsConfirmation = () => {

    const messages = [
        "Learn React ⚛️",
        "Apply for jobs 💼",
        "Invest your new income 🤑"
    ];

    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const [icon, setIcon] = useState("+");

    function toggle() {
        setIsOpen(isOpen => !isOpen);
        setIcon(icon => isOpen ? "+" : "x");
    }
    return (
        <div>
            <div className="close" onClick={toggle}>{icon}</div>
            {isOpen &&
                <div className="steps">
                    <div className="numbers">
                        {/* Can make this syntax if it's only state */}
                        <div className={step >= 1 ? "active" : ""}>1</div>
                        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
                        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
                    </div>
                    <div className="message">
                        Step {step} : {messages[step - 1]}
                    </div>
                    <div className="buttons">
                        <button
                            style={{ backgroundColor: "#7950f2", color: "#fff" }}
                            onClick={() => {
                                step < messages.length && setStep(step + 1);
                            }}
                        >
                            Next
                        </button>
                        <button
                            style={{ backgroundColor: "#7950f2", color: "#fff" }}
                            onClick={() => {
                                step !== 1 && setStep(step - 1);
                            }}
                        >
                            Previous
                        </button>
                    </div>
                </div>

            }
        </div>
    )
}

export default StepsConfirmation
