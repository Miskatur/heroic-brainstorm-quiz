import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Option from '../Option/Option';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Question = ({ questions }) => {
    const { question, correctAnswer, options } = questions;
    const questionString = question.replace(/(<([^>]+)>)/ig, '');
    const individualQuestion = questionString.replaceAll('&nbsp;', ' ');

    const showAnswer = () => {
        toast.info(`The Correct Answer is : ${correctAnswer}`,
            { position: toast.POSITION.TOP_CENTER }, { autoClose: 3000 })
    }

    return (
        <div className='container lg:mx-5 my-5'>
            <div className='border p-5'>
                <div className='d-flex justify-content-between align-items-center'>
                    <h3 className='text-center me-5'> {individualQuestion}</h3>
                    <p onClick={showAnswer}><FontAwesomeIcon icon={faEye} /> </p>

                </div>
                <ToastContainer />

                <div className='my-4'>
                    {
                        options.map((option, index) => <Option
                            key={index}
                            option={option}
                            correctAnswer={correctAnswer}
                        ></Option>)
                    }
                </div>
            </div>
        </div>
    );
};


export default Question;