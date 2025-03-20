import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ id, title, description, image, delay }) => {
    return (
        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay={delay}>
            <Link to={`/services/${id}`}>
                <div className="service-item">
                    <div className="service-img">
                        <img
                            src={image}
                            className="img-fluid rounded-top w-100"
                            alt={title}
                        />
                    </div>
                    <div className="rounded-bottom p-4">
                        <Link to={`/services/${id}`} className="h4 d-inline-block mb-4">{title}</Link>
                        <p className="mb-4">{description}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ServiceCard;