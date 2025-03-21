import React, { useState } from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
import FormField from './FormField';
import { serviceOptions } from '../../data/serviceFormOptions';
import { submitContactForm } from '../../services/contactformSubmissionService';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        service: '',
        message: ''
    });

    const [status, setStatus] = useState({
        submitting: false,
        success: null,
        error: null
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ submitting: true, success: null, error: null });

        try {
            const result = await submitContactForm(formData);
            
            if (result.success) {
                setStatus({ submitting: false, success: true, error: null });
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    date: '',
                    time: '',
                    service: '',
                    message: ''
                });
            } else {
                setStatus({ submitting: false, success: false, error: result.error });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus({ submitting: false, success: false, error: 'There was an error. Please try again.' });
        }
    };

    return (
        <div className="bg-light p-5 rounded h-100">
            <h2 className="text-primary text-center mb-4">Get in Touch With Us</h2>
            <p className="text-center mb-4">Have any questions or a project in mind? Fill out the form below, and we'll get back to you shortly.</p>
            
            {status.success && (
                <Alert variant="success" className="mb-4">
                    Message sent successfully!
                </Alert>
            )}
            
            {status.error && (
                <Alert variant="danger" className="mb-4">
                    {status.error}
                </Alert>
            )}
            
            <Form onSubmit={handleSubmit}>
                <Row className="g-4">
                    <input type="hidden" name="access_key" value="e45fcb9e-5218-466d-ad31-f1cab24d4bfe" />

                    <Col lg={6}>
                        <FormField
                            id="name"
                            label="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </Col>
                    <Col lg={6}>
                        <FormField
                            id="email"
                            type="email"
                            label="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </Col>
                    <Col lg={6}>
                        <FormField
                            id="phone"
                            type="tel"
                            label="Your Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </Col>
                    <Col lg={6}>
                        <FormField
                            id="date"
                            type="date"
                            label="Select Date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                    </Col>
                    <Col lg={6}>
                        <FormField
                            id="time"
                            type="time"
                            label="Select Time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                        />
                    </Col>
                    <Col lg={6}>
                        <FormField
                            id="service"
                            type="select"
                            label="Select Service"
                            value={formData.service}
                            onChange={handleChange}
                            options={serviceOptions}
                            required
                        />
                    </Col>

                    <Col xs={12}>
                        <FormField
                            id="message"
                            as="textarea"
                            label="Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            style={{ height: '160px' }}
                        />
                    </Col>
                    <Col xs={12}>
                        <Button
                            type="submit"
                            className="btn btn-primary w-100 py-3"
                            disabled={status.submitting}
                        >
                            {status.submitting ? 'Sending...' : 'Drop a Message'}
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default ContactForm;