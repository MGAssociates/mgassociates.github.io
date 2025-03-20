import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';

const CareerFormPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        jobPosition: '',
        currentLocation: '',
        jobLocation: '',
        resume: null,
        message: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.size > 5 * 1024 * 1024) { // 5MB limit
            alert("File size must be less than 5MB.");
            e.target.value = "";
            return;
        }
        setFormData(prev => ({ ...prev, resume: file }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Create form data to send file
            const formDataToSend = new FormData();
            Object.keys(formData).forEach(key => {
                formDataToSend.append(key, formData[key]);
            });
            formDataToSend.append('access_key', 'e45fcb9e-5218-466d-ad31-f1cab24d4bfe');

            // Replace with your form submission API
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formDataToSend
            });

            if (response.ok) {
                alert('Application submitted successfully!');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    jobPosition: '',
                    currentLocation: '',
                    jobLocation: '',
                    resume: null,
                    message: ''
                });
                // Reset the file input
                document.getElementById('resume').value = '';
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
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Apply Now</h4>
                    <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/career">Career</Link></li>
                        <li className="breadcrumb-item active text-primary">Apply Now</li>
                    </ol>
                </div>
            </div>

            {/* Application Form */}
            <div className="bg-light p-5 rounded mb-5 wow fadeInUp" data-wow-delay="0.2s">
                <h4 className="text-primary">Apply for a Job</h4>
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
                                    placeholder="Your Phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                                <Form.Label htmlFor="phone">Your Phone</Form.Label>
                            </Form.Group>
                        </Col>
                        <Col lg={12} xl={6}>
                            <Form.Group className="form-floating">
                                <Form.Select
                                    className="form-select border-0"
                                    id="jobPosition"
                                    value={formData.jobPosition}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>Select Job Position</option>
                                    <option>ACCA Article</option>
                                    <option>Admin</option>
                                    <option>CA</option>
                                    <option>CA Article</option>
                                    <option>CMA Article</option>
                                    <option>Digital Marketing</option>
                                    <option>Graduation (Commerce)</option>
                                    <option>HR</option>
                                    <option>Software Developer and Intern</option>
                                    <option>Tender Executive</option>
                                </Form.Select>
                                <Form.Label htmlFor="jobPosition">Job Position</Form.Label>
                            </Form.Group>
                        </Col>
                        <Col lg={12} xl={6}>
                            <Form.Group className="form-floating">
                                <Form.Control
                                    type="text"
                                    className="form-control border-0"
                                    id="currentLocation"
                                    placeholder="Your Current Location"
                                    value={formData.currentLocation}
                                    onChange={handleChange}
                                    required
                                />
                                <Form.Label htmlFor="currentLocation">Your Current Location</Form.Label>
                            </Form.Group>
                        </Col>
                        <Col lg={12} xl={6}>
                            <Form.Group className="form-floating">
                                <Form.Select
                                    className="form-select border-0"
                                    id="jobLocation"
                                    value={formData.jobLocation}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>Select Job Location</option>
                                    <option>Agra</option>
                                    <option>Ahmedabad</option>
                                    <option>Bengaluru</option>
                                    <option>Chennai</option>
                                    <option>Deogarh</option>
                                    <option>Delhi</option>
                                    <option>Goa</option>
                                    <option>Guwahati</option>
                                    <option>Hyderabad</option>
                                    <option>Indore</option>
                                    <option>Jaipur</option>
                                    <option>Kolkata</option>
                                    <option>Mohali</option>
                                    <option>Mumbai</option>
                                    <option>Nagpur</option>
                                    <option>Nanded</option>
                                    <option>Pune</option>
                                    <option>Surat</option>
                                </Form.Select>
                                <Form.Label htmlFor="jobLocation">Job Location</Form.Label>
                            </Form.Group>
                        </Col>
                        <Col xs={12}>
                            <Form.Group>
                                <Form.Label htmlFor="resume">Upload Resume (PDF/DOCX)</Form.Label>
                                <Form.Control
                                    type="file"
                                    className="form-control border-0"
                                    id="resume"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleFileChange}
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col xs={12}>
                            <Form.Group className="form-floating">
                                <Form.Control
                                    as="textarea"
                                    className="form-control border-0"
                                    placeholder="Leave your Queries Here"
                                    id="message"
                                    style={{ height: '160px' }}
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                                <Form.Label htmlFor="message">Leave your Queries Here</Form.Label>
                            </Form.Group>
                        </Col>
                        <Col xs={12}>
                            <Button
                                type="submit"
                                className="btn btn-primary w-100 py-3"
                            >
                                Apply Now
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    );
};

export default CareerFormPage;