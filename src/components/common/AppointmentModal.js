import React, { useState } from 'react';
import { Modal, Form, Button, Row, Col } from 'react-bootstrap';

const AppointmentModal = ({ show, onHide }) => {
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
                alert('Appointment booked successfully!');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    date: '',
                    time: '',
                    service: '',
                    message: ''
                });
                onHide();
            } else {
                alert('There was an error. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error. Please try again.');
        }
    };

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
            className="appointment-modal"
        >
            <div className="modal-content">
                <span className="close" onClick={onHide}>&times;</span>
                <h4 className="text-primary">Book an Appointment</h4>
                <Form onSubmit={handleSubmit}>
                    <Row className="g-4">
                        <input type="hidden" name="access_key" value="e45fcb9e-5218-466d-ad31-f1cab24d4bfe" />

                        <Col lg={12} xl={6}>
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
                        <Col lg={12} xl={6}>
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
                        <Col lg={12} xl={6}>
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
                        <Col lg={12} xl={6}>
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
                        <Col lg={12} xl={6}>
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
                                />
                                <Form.Label htmlFor="message">Message</Form.Label>
                            </Form.Group>
                        </Col>
                        <Col xs={12}>
                            <Button
                                type="submit"
                                className="btn btn-primary w-100 py-3"
                            >
                                Book Appointment
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Modal>
    );
};

export default AppointmentModal;