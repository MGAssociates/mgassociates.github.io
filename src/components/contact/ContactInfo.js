import React from 'react';
import { faPhoneAlt, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'react-bootstrap';
import ContactItem from './ContactItem';

const ContactInfo = () => {
    return (
        <div className="bg-light rounded p-5">
            <h4 className="text-primary mb-4">Get in Touch</h4>
            <Row className="g-4">
                <Col md={6}>
                    <ContactItem 
                        icon={faPhoneAlt} 
                        title="Telephone" 
                        content="+91 8828029351" 
                    />
                </Col>
                <Col md={6}>
                    <ContactItem 
                        icon={faPhoneAlt} 
                        title="Telephone" 
                        content="+91 8999239953" 
                    />
                </Col>
                <Col md={6}>
                    <ContactItem 
                        icon={faMapMarkerAlt} 
                        title="Address" 
                        content="103, Link Road Behram Baug, West, Oshiwara, Mumbai, Maharashtra 400102" 
                    />
                </Col>
                <Col md={6}>
                    <ContactItem 
                        icon={faEnvelope} 
                        title="Mail Us" 
                        content="office@mgaca.co.in" 
                    />
                </Col>
            </Row>
        </div>
    );
};

export default ContactInfo;