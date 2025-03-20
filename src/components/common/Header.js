import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppointmentModal from './AppointmentModal';

const Header = () => {
    const [showModal, setShowModal] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const location = useLocation();

    // Handle sticky navbar on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 45) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Check if the link is active
    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <div className="container-fluid position-relative p-0">
            <nav className={`navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0 ${isSticky ? 'sticky-top shadow-sm' : ''}`}>
                <Link to="/" className="navbar-brand p-0">
                    <h1 className="text-primary"><i className="me-3"></i>MGA & Associates</h1>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <Link to="/" className={`nav-item nav-link ${isActive('/')}`}>Home</Link>
                        <Link to="/services" className={`nav-item nav-link ${isActive('/services')}`}>Services</Link>
                        <Link to="/about" className={`nav-item nav-link ${isActive('/about')}`}>About</Link>
                        <Link to="/career" className={`nav-item nav-link ${isActive('/career')}`}>Career</Link>
                        <Link to="/blog" className={`nav-item nav-link ${isActive('/blog')}`}>Blog</Link>
                        <Link to="/contact" className={`nav-item nav-link ${isActive('/contact')}`}>Contact Us</Link>
                    </div>
                    <button
                        className="btn btn-primary rounded-pill py-2 px-4 my-3 my-lg-0 flex-shrink-0"
                        onClick={() => setShowModal(true)}
                    >
                        Book Appointment
                    </button>
                </div>
            </nav>

            {/* Appointment Modal */}
            <AppointmentModal show={showModal} onHide={() => setShowModal(false)} />
        </div>
    );
};

export default Header;