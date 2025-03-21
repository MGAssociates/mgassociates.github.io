import React from 'react';
import { Link } from 'react-router-dom';
import PositionCard from './PositionCard';
import { careerPositions } from '../../data/careerData';

const CareerPositions = () => {
    return (
        <div className="container-xxl bg-light py-2 my-2">
            <div className="container py-3">
                <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                    <h6 className="text-primary">Join Us</h6>
                    <h1 className="display-6">Build Your Career</h1>
                </div>
                <div className="row g-4">
                    {careerPositions.map((position, index) => (
                        <div 
                            className="col-lg-4 col-md-6 wow fadeInUp" 
                            data-wow-delay={index % 3 === 0 ? "0.1s" : index % 3 === 1 ? "0.3s" : "0.5s"} 
                            key={index}
                        >
                            <Link to="/career-form">
                                <PositionCard position={position} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="col-12 d-flex justify-content-center">
                <Link to="/career-form" className="btn btn-primary rounded-pill py-3 px-5 wow fadeInUp" data-wow-delay="0.1s">
                    Apply Now
                </Link>
            </div>
        </div>
    );
};

export default CareerPositions;