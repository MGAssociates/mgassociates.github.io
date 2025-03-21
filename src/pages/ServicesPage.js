// File: src/pages/ServicesPage.jsx
import React from 'react';
import Breadcrumb from '../components/services/Breadcrumb';
import ServicesSection from '../components/services/ServicesSection';
import IndustriesSection from '../components/services/IndustriesSection';
import TrustedPartnershipsSection from '../components/home/PartnershipsSection';

const ServicesPage = () => {
    return (
        <>
            <Breadcrumb 
                title="Services" 
                links={[
                    { name: 'Home', path: '/' },
                    { name: 'Services', path: '/services', active: true }
                ]} 
            />
            <ServicesSection />
            <IndustriesSection />
            <TrustedPartnershipsSection />
        </>
    );
};

export default ServicesPage;