import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactItem = ({ icon, title, content }) => {
    return (
        <div className="contact-add-item">
            <div className="contact-icon text-primary mb-4">
                <FontAwesomeIcon icon={icon} className="fa-2x" />
            </div>
            <div>
                <h4>{title}</h4>
                <p className="mb-0">{content}</p>
            </div>
        </div>
    );
};

export default ContactItem;