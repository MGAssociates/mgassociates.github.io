// File: CareerFormPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/career/Breadcrumb';
import ApplicationForm from '../components/career/ApplicationForm';

const CareerFormPage = () => {
    return (
        <>
            <Breadcrumb 
                title="Apply Now"
                links={[
                    { to: "/", label: "Home" },
                    { to: "/career", label: "Career" },
                    { label: "Apply Now", active: true }
                ]}
            />
            <ApplicationForm />
        </>
    );
};

export default CareerFormPage;