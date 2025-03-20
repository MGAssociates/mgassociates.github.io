import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPhoneAlt, faMapMarkerAlt, faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { Form, Button, Row, Col } from 'react-bootstrap';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        service: '',
        message: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Replace with your form submission API
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: 'e45fcb9e-5218-466d-ad31-f1cab24d4bfe', // Replace with your actual key
                    ...formData
                }),
            });

            if (response.ok) {
                alert('Message sent successfully!');
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
                alert('There was an error. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error. Please try again.');
        }
    };

    return (
        <>
            {/* Breadcrumb */}
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{maxWidth: '900px'}}>
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Contact Us</h4>
                    <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active text-primary">Contact Us</li>
                    </ol>
                </div>
            </div>

            {/* Contact Section */}
            <div className="container-fluid contact py-5">
                <div className="container py-5">
                    <div className="row g-5">
                        {/* Get in Touch Section */}
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="bg-light rounded p-5">
                                <h4 className="text-primary mb-4">Get in Touch</h4>
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <div className="contact-add-item">
                                            <div className="contact-icon text-primary mb-4">
                                                <FontAwesomeIcon icon={faPhoneAlt} className="fa-2x" />
                                            </div>
                                            <div>
                                                <h4>Telephone</h4>
                                                <p className="mb-0">+91 8828029351</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="contact-add-item">
                                            <div className="contact-icon text-primary mb-4">
                                                <FontAwesomeIcon icon={faPhoneAlt} className="fa-2x" />
                                            </div>
                                            <div>
                                                <h4>Telephone</h4>
                                                <p className="mb-0">+91 8999239953</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="contact-add-item">
                                            <div className="contact-icon text-primary mb-4">
                                                <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-2x" />
                                            </div>
                                            <div>
                                                <h4>Address</h4>
                                                <p className="mb-0">103, Link Road Behram Baug, West, Oshiwara, Mumbai, Maharashtra 400102</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="contact-add-item">
                                            <div className="contact-icon text-primary mb-4">
                                                <FontAwesomeIcon icon={faEnvelope} className="fa-2x" />
                                            </div>
                                            <div>
                                                <h4>Mail Us</h4>
                                                <p className="mb-0">office@mgaca.co.in</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="bg-light p-5 rounded h-100">
                                <h2 className="text-primary text-center mb-4">Get in Touch With Us</h2>
                                <p className="text-center mb-4">Have any questions or a project in mind? Fill out the form below, and we'll get back to you shortly.</p>
                                <Form onSubmit={handleSubmit}>
                                    <Row className="g-4">
                                        <input type="hidden" name="access_key" value="e45fcb9e-5218-466d-ad31-f1cab24d4bfe" />

                                        <Col lg={6}>
                                            <Form.Group className="form-floating">
                                                <Form.Control
                                                    type="text"
                                                    className="form-control border-0"
                                                    id="name"
                                                    placeholder="Your Name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <Form.Label htmlFor="name">Your Name</Form.Label>
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Group className="form-floating">
                                                <Form.Control
                                                    type="email"
                                                    className="form-control border-0"
                                                    id="email"
                                                    placeholder="Your Email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <Form.Label htmlFor="email">Your Email</Form.Label>
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Group className="form-floating">
                                                <Form.Control
                                                    type="tel"
                                                    className="form-control border-0"
                                                    id="phone"
                                                    placeholder="Phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <Form.Label htmlFor="phone">Your Phone</Form.Label>
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Group className="form-floating">
                                                <Form.Control
                                                    type="date"
                                                    className="form-control border-0"
                                                    id="date"
                                                    placeholder="Select Date"
                                                    value={formData.date}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <Form.Label htmlFor="date">Select Date</Form.Label>
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Group className="form-floating">
                                                <Form.Control
                                                    type="time"
                                                    className="form-control border-0"
                                                    id="time"
                                                    placeholder="Select Time"
                                                    value={formData.time}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <Form.Label htmlFor="time">Select Time</Form.Label>
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Group className="form-floating">
                                                <Form.Select
                                                    className="form-control border-0"
                                                    id="service"
                                                    value={formData.service}
                                                    onChange={handleChange}
                                                    required
                                                >
                                                    <option value="" disabled>Select Service</option>
                                                    <option>General Inquiry</option>
                                                    <option>Tax Consultation</option>
                                                    <option>Legal Advisory</option>
                                                    <option>Financial Planning</option>
                                                    <option>Auditing</option>
                                                    <option>Business Registration</option>
                                                    <option>Company Incorporation</option>
                                                    <option>GST Filing</option>
                                                    <option>Income Tax Return Filing</option>
                                                    <option>Trademark Registration</option>
                                                    <option>Accounting & Bookkeeping</option>
                                                    <option>Payroll Services</option>
                                                    <option>Loan & Investment Advisory</option>
                                                    <option>Business License & Permits</option>
                                                    <option>Import & Export Compliance</option>
                                                    <option>Contract Drafting & Review</option>
                                                    <option>Legal Dispute Resolution</option>
                                                    <option>Startup Consultation</option>
                                                    <option>Other Services</option>
                                                </Form.Select>
                                                <Form.Label htmlFor="services">Select Service</Form.Label>
                                            </Form.Group>
                                        </Col>

                                        <Col xs={12}>
                                            <Form.Group className="form-floating">
                                                <Form.Control
                                                    as="textarea"
                                                    className="form-control border-0"
                                                    placeholder="Leave a message here"
                                                    id="message"
                                                    style={{ height: '160px' }}
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <Form.Label htmlFor="message">Message</Form.Label>
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12}>
                                            <Button
                                                type="submit"
                                                className="btn btn-primary w-100 py-3"
                                            >
                                                Drop a Message
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </div>
                    </div>

                    {/* Google Map */}
                    <div className="row mt-5 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="col-12">
                            <div className="rounded h-100">
                                <iframe
                                    className="rounded h-200 w-100"
                                    style={{ height: '400px' }}
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15076.551879799239!2d72.836627!3d19.145437!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b741e2716d9b%3A0xfa0bdde881901ed5!2sM%20G%20A%20Group!5e0!3m2!1sen!2sin!4v1741611659136!5m2!1sen!2sin"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="MGA Group Office Location Map"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactPage;