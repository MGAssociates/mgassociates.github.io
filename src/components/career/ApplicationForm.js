
// File: components/ApplicationForm.jsx
import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormField from './FormField';
import SelectField from './SelectField';
import FileUploadField from './FileUploadField';
import { JOB_POSITIONS, JOB_LOCATIONS } from '../../data/formOptions';
import { submitApplicationForm } from '../../services/formSubmissionService';

const ApplicationForm = () => {
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
    const [isSubmitting, setIsSubmitting] = useState(false);

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
        setIsSubmitting(true);

        try {
            const result = await submitApplicationForm(formData);
            
            if (result.success) {
                alert('Application submitted successfully!');
                resetForm();
            } else {
                alert('There was an error. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetForm = () => {
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
    };

    return (
        <div className="bg-light p-5 rounded mb-5 wow fadeInUp" data-wow-delay="0.2s">
            <h4 className="text-primary">Apply for a Job</h4>
            <Form onSubmit={handleSubmit}>
                <Row className="g-4">
                    <input type="hidden" name="access_key" value="e45fcb9e-5218-466d-ad31-f1cab24d4bfe" />

                    <Col lg={12} xl={6}>
                        <FormField
                            id="name"
                            type="text"
                            label="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </Col>
                    <Col lg={12} xl={6}>
                        <FormField
                            id="email"
                            type="email"
                            label="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </Col>
                    <Col lg={12} xl={6}>
                        <FormField
                            id="phone"
                            type="tel"
                            label="Your Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </Col>
                    <Col lg={12} xl={6}>
                        <SelectField
                            id="jobPosition"
                            label="Job Position"
                            value={formData.jobPosition}
                            onChange={handleChange}
                            options={JOB_POSITIONS}
                            placeholder="Select Job Position"
                            required
                        />
                    </Col>
                    <Col lg={12} xl={6}>
                        <FormField
                            id="currentLocation"
                            type="text"
                            label="Your Current Location"
                            value={formData.currentLocation}
                            onChange={handleChange}
                            required
                        />
                    </Col>
                    <Col lg={12} xl={6}>
                        <SelectField
                            id="jobLocation"
                            label="Job Location"
                            value={formData.jobLocation}
                            onChange={handleChange}
                            options={JOB_LOCATIONS}
                            placeholder="Select Job Location"
                            required
                        />
                    </Col>
                    <Col xs={12}>
                        <FileUploadField
                            id="resume"
                            label="Upload Resume (PDF/DOCX)"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            required
                        />
                    </Col>
                    <Col xs={12}>
                        <FormField
                            id="message"
                            as="textarea"
                            label="Leave your Queries Here"
                            value={formData.message}
                            onChange={handleChange}
                            style={{ height: '160px' }}
                        />
                    </Col>
                    <Col xs={12}>
                        <Button
                            type="submit"
                            className="btn btn-primary w-100 py-3"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Apply Now'}
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default ApplicationForm;