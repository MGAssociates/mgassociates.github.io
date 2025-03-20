import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsClapping } from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
    return (
        <div className="container-fluid position-relative p-0">
            <Carousel className="header-carousel">
                <Carousel.Item className="header-carousel-item">
                    <img
                        src="img/bg/bg 3.jpg"
                        className="img-fluid w-100"
                        alt="Empowering Financial Success imagery"
                    />
                    <Carousel.Caption>
                        <div className="container">
                            <div className="row g-5">
                                <div className="col-12 animated fadeInUp">
                                    <div className="text-center">
                                        <h4 className="text-primary text-uppercase fw-bold mb-4">
                                            <FontAwesomeIcon icon={faHandsClapping} className="me-2" /> Welcome To MGA
                                        </h4>
                                        <h1 className="display-4 text-uppercase text-white mb-4">Empowering Financial Success</h1>
                                        <p className="mb-5 fs-5">Expert guidance for secure financial future growth</p>
                                        <div className="d-flex justify-content-center flex-shrink-0 mb-4">
                                            <Link to="/services" className="btn btn-light rounded-pill py-3 px-4 px-md-5 me-2">View Services</Link>
                                            <Link to="/about" className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2">Know About Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HeroSection;