import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Topcis.css'

const Topic = ({ topic }) => {
    const { name, logo, total, id } = topic;
    return (
        <div className=' mx-4 my-5 border card bg-dark p-2 '>
            <div>
                <img src={logo} alt="" className='image' />
            </div>
            <div className='d-flex justify-content-between align-items-center mt-3'  >
                <div className='text-light'>
                    <h4>{name}</h4>
                    <p>Total lesson : {total}</p>
                </div>
                <div>
                    <Link to={`/quiz/${id}`}><Button varient="dark" className='me-2'>Take Part</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default Topic;