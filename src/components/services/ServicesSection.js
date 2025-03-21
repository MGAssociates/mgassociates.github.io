// File: src/components/services/ServicesSection.jsx
import React from 'react';
import ServiceCard from '../home/ServiceCard';
import { servicesData } from '../../data';

const ServicesSection = () => {
    return (
        <div className="container-fluid service pb-5">
            <div className="container pb-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
                    <h4 className="text-primary" style={{ paddingTop: '20px' }}>Expert Solutions</h4>
                    <h1 className="display-5 mb-4">Tailored Financial Services</h1>
                </div>

                <div className="row g-4">
                    {servicesData.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            id={service.id}
                            title={service.title}
                            description={service.description}
                            image={service.image}
                            delay={index % 3 === 0 ? '0.2s' : index % 3 === 1 ? '0.4s' : '0.6s'}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;