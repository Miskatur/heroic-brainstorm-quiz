import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quizLoadedData = useLoaderData();
    const quizData = quizLoadedData.data.questions;
    const name = quizLoadedData.data.name
    return (
        <div>
            <h2 className='text-center my-5'>This quiz is about <strong>{name}</strong></h2>
            <div>
                {
                    quizData.map((question) => <Question
                        key={question.id}
                        questions={question}
                    >

                    </Question>)
                }
            </div>
        </div>
    );
};

export default Quiz;