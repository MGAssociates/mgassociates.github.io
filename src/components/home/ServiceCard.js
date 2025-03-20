import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ServiceCard = ({ id, title, description, image, delay }) => {
    return (
        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay={delay}>
            {/* Remove the outer Link component */}
            <div className="service-item">
                <div className="service-img">
                    <Link to={`/services/${id}`}>
                        <img src={image} className="img-fluid rounded-top w-100" alt={title} />
                    </Link>
                </div>
                <div className="rounded-bottom p-4">
                    <Link to={`/services/${id}`} className="h4 d-inline-block mb-4">{title}</Link>
                    <p className="mb-4">{description}</p>
                    {/* Add a read more link if desired */}
                    <Link to={`/services/${id}`} className="btn btn-sm btn-primary">Read More</Link>
                </div>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    delay: PropTypes.string
};

ServiceCard.defaultProps = {
    delay: '0.2s'
};

export default ServiceCard;