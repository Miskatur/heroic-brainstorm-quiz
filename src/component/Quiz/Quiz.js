import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quizLoadedData = useLoaderData();
    const quizData = quizLoadedData.data.questions;
    return (
        <div>
            {
                quizData.map(question => <Question
                    key={question.id}
                    question={question}
                >

                </Question>)
            }
        </div>
    );
};

export default Quiz;