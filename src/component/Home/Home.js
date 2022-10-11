import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Background from '../Background/Background';
import Topic from '../Topic/Topic';
import './Home.css'

const Home = () => {
    const topicsLoader = useLoaderData()
    const topics = topicsLoader.data;
    return (
        <div>
            <div>
                <Background></Background>
            </div>
            <div className='topics'>

                {
                    topics.map(topic => <Topic
                        key={topic.id}
                        topic={topic}
                    ></Topic>)
                }
            </div>
        </div>
    );
};

export default Home;