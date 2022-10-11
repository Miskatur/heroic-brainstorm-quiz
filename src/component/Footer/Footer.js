import React from 'react';

const Footer = () => {
    return (

        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top mx-5">
            <p className="col-md-4 mb-0 text-muted">© BrainStorm Company, Inc</p>
            <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">FAQs</a></li>
                <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">About</a></li>
            </ul>
        </footer>

    );
};

export default Footer;