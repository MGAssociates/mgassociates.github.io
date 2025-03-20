import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHotel, faTshirt, faCar, faBolt, faIndustry, faSeedling,
    faShoppingCart, faBox, faBuilding, faCity, faUniversity,
    faGraduationCap, faGasPump, faHardHat, faHeartbeat, faPlane,
    faShieldAlt, faBroadcastTower, faMugHot, faWineBottle
} from '@fortawesome/free-solid-svg-icons';
import ServiceCard from '../components/home/ServiceCard';
import PartnerCarousel from '../components/home/PartnerCarousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const ServicesPage = () => {
    const industryCarouselRef = useRef(null);

    useEffect(() => {
        // Initialize Owl Carousel with jQuery when component mounts
        const $ = window.jQuery;
        if ($) {
            $(industryCarouselRef.current).owlCarousel({
                autoplay: true,
                smartSpeed: 1500,
                center: false,
                dots: false,
                loop: true,
                margin: 25,
                nav: true,
                navText: [
                    '<i class="fa fa-angle-left"></i>',
                    '<i class="fa fa-angle-right"></i>'
                ],
                responsiveClass: true,
                responsive: {
                    0: { items: 1 },
                    576: { items: 1 },
                    768: { items: 2 },
                    992: { items: 2 },
                    1200: { items: 3 }
                }
            });
        }

        // Cleanup function to destroy Owl Carousel instance
        return () => {
            const $ = window.jQuery;
            if ($) {
                $(industryCarouselRef.current).owlCarousel('destroy');
            }
        };
    }, []);

    // Service data
    const services = [
        {
            id: 'transaction-advisory',
            title: 'Transaction Advisory',
            description: 'Strategic financial guidance for mergers, acquisitions, valuations, and corporate restructuring decisions.',
            image: 'img/services/S1.png'
        },
        {
            id: 'due-diligence',
            title: 'Due Diligence',
            description: 'Comprehensive assessment of financial, legal, and operational aspects for businesses.',
            image: 'img/services/S2.png'
        },
        {
            id: 'tax-advisory',
            title: 'Tax Advisory',
            description: 'Providing expert guidance on tax planning, compliance, and strategy optimization.',
            image: 'img/services/S3.jpg'
        },
        {
            id: 'virtual-cfo',
            title: 'Virtual CFO',
            description: 'Strategic financial guidance, cash flow management, budgeting, and business planning.',
            image: 'img/services/S4.png'
        },
        {
            id: 'forensic-audits',
            title: 'Forensic Audits',
            description: 'Forensic audits investigate financial discrepancies, fraud, and provide legal evidence.',
            image: 'img/services/S5.jpg'
        },
        {
            id: 'investment-advisory',
            title: 'Investment Advisory & Wealth Management',
            description: 'Providing expert guidance on investments, portfolio management, and wealth growth.',
            image: 'img/services/S6.jpg'
        },
        {
            id: 'international-taxation',
            title: 'International Taxation & Compliance',
            description: 'Global tax strategies, compliance, planning, reporting, and cross-border solutions.',
            image: 'img/services/S7.jpg'
        },
        {
            id: 'audit-assurance',
            title: 'Audit & Assurance Services',
            description: 'Providing independent assessments to ensure financial accuracy, compliance, and transparency.',
            image: 'img/services/S8.jpeg'
        }
    ];

    // Industry icons and titles
    const industries = [
        { icon: faHotel, title: 'Hospitality' },
        { icon: faTshirt, title: 'Apparels' },
        { icon: faCar, title: 'Automotive' },
        { icon: faBolt, title: 'Power Genco & Discom' },
        { icon: faIndustry, title: 'Steel & Metals' },
        { icon: faSeedling, title: 'Agro' },
        { icon: faShoppingCart, title: 'Retail' },
        { icon: faBox, title: 'FMCG' },
        { icon: faBuilding, title: 'PSU' },
        { icon: faCity, title: 'Infrastructure & Realty' },
        { icon: faUniversity, title: 'Banking' },
        { icon: faGraduationCap, title: 'Education' },
        { icon: faGasPump, title: 'Oil & Gas' },
        { icon: faHardHat, title: 'Mining' },
        { icon: faHeartbeat, title: 'Healthcare' },
        { icon: faPlane, title: 'Aircraft Chartering' },
        { icon: faShieldAlt, title: 'Insurance' },
        { icon: faBroadcastTower, title: 'Telecom Tower' },
        { icon: faMugHot, title: 'Ceramics' },
        { icon: faWineBottle, title: 'Liquor' }
    ];

    return (
        <>
            {/* Breadcrumb */}
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{maxWidth: '900px'}}>
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Services</h4>
                    <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active text-primary">Services</li>
                    </ol>
                </div>
            </div>

            {/* Services Section */}
            <div className="container-fluid service pb-5">
                <div className="container pb-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: '800px'}}>
                        <h4 className="text-primary" style={{paddingTop: '20px'}}>Expert Solutions</h4>
                        <h1 className="display-5 mb-4">Tailored Financial Services</h1>
                    </div>

                    <div className="row g-4">
                        {services.map((service, index) => (
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

            {/* Industries Section */}
            <div className="container-fluid blog pb-5">
                <div className="container pb-5">
                    <div className="text-center mx-auto pb-3 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: '800px'}}>
                        <h4 className="text-primary">Serving Industries</h4>
                        <h1 className="display-5 mb-4">Broad Expertise</h1>
                    </div>

                    <div className="owl-carousel blog-carousel wow fadeInUp" ref={industryCarouselRef} data-wow-delay="0.2s">
                        {industries.map((industry, index) => (
                            <div className="p-4" key={index}>
                                <div className="blog-img mb-4">
                                    <div className="blog-title text-center mt-3">
                                        <FontAwesomeIcon icon={industry.icon} className="fa-4x text-primary" />
                                        <h4 style={{paddingTop: '30px'}}>{industry.title}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Trusted Partnerships Section */}
            <div className="container-fluid blog pb-5">
                <div className="container pb-5">
                    <div className="text-center mx-auto pb-1 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: '800px'}}>
                        <h4 className="text-primary">Trusted Partnerships</h4>
                        <h1 className="display-5 mb-4">Proven Excellence</h1>
                    </div>

                    <PartnerCarousel />
                </div>
            </div>
        </>
    );
};

export default ServicesPage;