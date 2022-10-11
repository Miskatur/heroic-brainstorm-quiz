import React from 'react';
import background from './background.jpg';
import './Background.css'

const Background = () => {
    return (
        <div className="head-text">
            <div className="head-image">
                <img src={background} className="w-100" alt="..." />
            </div>
            <div className='text-on-image text-light'>
                <p> Get a storm in your Brain with</p>
                <h2> Brain Storm Quiz</h2>
            </div>
        </div>
    );
};

export default Background;