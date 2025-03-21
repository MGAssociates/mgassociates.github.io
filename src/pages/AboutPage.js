import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import BreadcrumbSection from '../components/about/BreadcrumbSection';
import AboutSection from '../components/about/AboutSection';
import CredentialsSection from '../components/about/CredentialsSection';
import StatsSection from '../components/about/StatsSection';
import PresenceSection from '../components/about/PresenceSection';
import TeamSection from '../components/about/TeamSection';

const AboutPage = () => {
    useEffect(() => {
        // Initialize tooltips if any
        const $ = window.jQuery;
        if ($) {
            $('[data-bs-toggle="tooltip"]').tooltip({
                customClass: "custom-tooltip"
            });
        }
    }, []);

    return (
        <>
            <BreadcrumbSection />
            <AboutSection />
            <CredentialsSection />
            <StatsSection />
            <PresenceSection />
            <TeamSection />
        </>
    );
};

export default AboutPage;