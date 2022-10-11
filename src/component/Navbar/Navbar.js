import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Navbars.css'


const Navbars = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className="me-auto">Brainstorm Quiz</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ms-auto navbars'>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/stats'}>Stats</Link>
                        <Link to={'/blog'}>Blog</Link>
                    </Nav>


                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navbars;