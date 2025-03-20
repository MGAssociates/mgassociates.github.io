import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLightbulb,
    faCalendarCheck,
    faPhoneAlt
} from '@fortawesome/free-solid-svg-icons';

const AboutSection = () => {
    return (
        <div className="container-fluid about py-5">
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-xl-7 wow fadeInLeft" data-wow-delay="0.2s">
                        <div>
                            <h4 className="text-primary">About Us</h4>
                            <h1 className="display-5 mb-4">Trusted Financial Experts</h1>
                            <p className="mb-4">Delivering excellence in finance, audit, and legal advisory for 25 years</p>
                            <div className="row g-4">
                                <div className="col-md-6 col-lg-6 col-xl-6">
                                    <div className="d-flex">
                                        <div><FontAwesomeIcon icon={faLightbulb} className="fa-3x text-primary" /></div>
                                        <div className="ms-4">
                                            <h4>Financial Advisory</h4>
                                            <p>Expert transaction, investment, and strategic financial guidance for sustainable success</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-xl-6">
                                    <div className="d-flex">
                                        <div><FontAwesomeIcon icon={faCalendarCheck} className="fa-3x text-primary" /></div>
                                        <div className="ms-4">
                                            <h4>25+ Years of Excellence</h4>
                                            <p>Decades of experience in finance, audit, and advisory for business success</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <Link to="/about" className="btn btn-primary rounded-pill py-3 px-5 flex-shrink-0">Know More</Link>
                                </div>
                                <div className="col-sm-6">
                                    <a href="tel:+918828029351" style={{ color: 'black' }}>
                                        <div className="d-flex">
                                            <FontAwesomeIcon icon={faPhoneAlt} className="fa-2x text-primary me-4" />
                                            <div>
                                                <h4>Call Us</h4>
                                                <p className="mb-0 fs-5" style={{ letterSpacing: '1px' }}>+91 8828029351</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 wow fadeInRight" data-wow-delay="0.2s">
                        <div className="bg-primary rounded position-relative overflow-hidden">
                            <img src="img/about/A1.jpg" className="img-fluid rounded w-100" alt="MGA & Associates team discussing financial strategies" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;