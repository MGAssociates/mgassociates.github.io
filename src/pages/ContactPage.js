import React from 'react';
import Breadcrumb from '../components/contact/Breadcrumb';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import GoogleMap from '../components/contact/GoogleMap';
import { Row, Col } from 'react-bootstrap';

const ContactPage = () => {
    return (
        <>
            <Breadcrumb />
            
            <div className="container-fluid contact py-5">
                <div className="container py-5">
                    <Row className="g-5">
                        <Col lg={6} className="wow fadeInUp" data-wow-delay="0.2s">
                            <ContactInfo />
                        </Col>
                        
                        <Col lg={6} className="wow fadeInUp" data-wow-delay="0.2s">
                            <ContactForm />
                        </Col>
                    </Row>
                    
                    <Row className="mt-5 wow fadeInUp" data-wow-delay="0.2s">
                        <Col xs={12}>
                            <GoogleMap />
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};

export default ContactPage;