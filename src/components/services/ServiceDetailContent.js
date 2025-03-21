// File: src/components/services/ServiceDetailContent.jsx
import React from 'react';

const ServiceDetailContent = ({ service }) => {
    return (
        <div className="container-fluid about py-5">
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-xl-7 wow fadeInLeft" data-wow-delay="0.2s">
                        <div>
                            <h1 className="display-5 mb-4" style={{ fontSize: '30px' }}>{service.title}</h1>
                            {service.description.map((paragraph, index) => (
                                <p className="mb-4" key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                    <div className="col-xl-5 wow fadeInRight" data-wow-delay="0.2s">
                        <div className="bg-primary rounded position-relative overflow-hidden">
                            <img src={`/${service.image}`} className="img-fluid rounded w-100" alt={service.title} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailContent;