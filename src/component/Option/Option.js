import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Option = ({ option, correctAnswer }) => {

    const handleAnswer = () => {
        if (option === correctAnswer) {
            toast.success("You have Completed your Todays task", { position: toast.POSITION.TOP_CENTER })
        }
        else {
            toast.danger("You have Completed your Todays task", { position: toast.POSITION.TOP_CENTER })
        }
    }

    return (
        <div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadio" id="flexRadioDefault1" onClick={handleAnswer} />
                <label className="form-check-label" htmlFor="flexRadioDefault1" >
                    {option}
                </label>

            </div>
            <ToastContainer />
        </div>
    );
};

export default Option; 