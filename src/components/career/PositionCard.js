import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PositionCard = ({ position }) => {
    return (
        <div className="service-item bg-white p-5">
            <FontAwesomeIcon icon={position.icon} className="fa-3x text-primary mb-3" />
            <h5 className="mb-3">{position.title}</h5>
            <p style={{ color: '#a2a2a2' }}>{position.description}</p>
        </div>
    );
};

export default PositionCard;