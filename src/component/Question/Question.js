import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Option from '../Option/Option';
import { Col, Row, Toast } from 'react-bootstrap';


const Question = ({ questions }) => {
    const { question, correctAnswer, options } = questions;
    const questionString = question.replace(/(<([^>]+)>)/ig, '');
    const individualQuestion = questionString.replaceAll('&nbsp;', ' ');

    const [show, setShow] = useState(false)

    console.log(question)
    return (
        <div className='container mx-5 my-5'>
            {/* Toast  */}
            <Row>
                <Col xs={6}>
                    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-auto"
                                alt=""
                            />
                            <strong className="me-auto">Correct Answer</strong>

                        </Toast.Header>
                        <Toast.Body>{correctAnswer}</Toast.Body>
                    </Toast>
                </Col>
                <Col xs={6}></Col>
            </Row>
            {/* Toast  */}


            <div className='border  p-5'>
                <div className='d-flex justify-content-between align-items-center'>
                    <h3 className='text-center me-5'> {individualQuestion}</h3>
                    <p onClick={() => setShow(true)}><FontAwesomeIcon icon={faEye} /> </p>
                </div>

                <div className='my-4'>
                    {
                        options.map((option, index) => <Option
                            key={index}
                            option={option}
                        ></Option>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Question;