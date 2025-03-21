// src/pages/CareerPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/career/Breadcrumb';
import CareerPositions from '../components/career/CareerPositions';

const CareerPage = () => {
    return (
        <>
            <Breadcrumb 
                title="Career" 
                links={[
                    { to: "/", label: "Home" },
                    { label: "Career", active: true }
                ]}
            />
            <CareerPositions />
        </>
    );
};

export default CareerPage;