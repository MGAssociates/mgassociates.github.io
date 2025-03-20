import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import AboutSection from '../components/home/AboutSection';
import StatsSection from '../components/home/StatsSection';
import PartnershipsSection from '../components/home/PartnershipsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <ServicesSection />
            <AboutSection />
            <StatsSection />
            <PartnershipsSection />
            <TestimonialsSection />
        </div>
    );
};

export default HomePage;