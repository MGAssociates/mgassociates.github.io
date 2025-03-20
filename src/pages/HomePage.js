import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHandsClapping, faLightbulb, faCalendarCheck,
    faPhoneAlt, faBuilding, faCertificate, faUsers,
    faUserTie, faHandshake, faUserGraduate, faGraduationCap,
    faUserCheck, faBalanceScale, faBriefcase, faPiggyBank,
    faUserShield
} from '@fortawesome/free-solid-svg-icons';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import service components
import ServiceCard from '../components/home/ServiceCard';
import PartnerCarousel from '../components/home/PartnerCarousel';
import TestimonialCarousel from '../components/home/TestimonialCarousel';

const HomePage = () => {
    // Initialize Swiper on component mount
    useEffect(() => {
        // Any initialization if needed
    }, []);

    // Service data
    const services = [
        {
            id: 'transaction-advisory',
            title: 'Transaction Advisory',
            description: 'Strategic financial guidance for mergers, acquisitions, valuations, and corporate restructuring decisions.',
            image: '/img/services/S1.png'
        },
        {
            id: 'due-diligence',
            title: 'Due Diligence',
            description: 'Comprehensive assessment of financial, legal, and operational aspects for businesses.',
            image: '/img/services/S2.png'
        },
        {
            id: 'tax-advisory',
            title: 'Tax Advisory',
            description: 'Providing expert guidance on tax planning, compliance, and strategy optimization.',
            image: '/img/services/S3.jpg'
        },
        {
            id: 'virtual-cfo',
            title: 'Virtual CFO',
            description: 'Strategic financial guidance, cash flow management, budgeting, and business planning.',
            image: '/img/services/S4.png'
        },
        {
            id: 'forensic-audits',
            title: 'Forensic Audits',
            description: 'Forensic audits investigate financial discrepancies, fraud, and provide legal evidence.',
            image: '/img/services/S5.jpg'
        },
        {
            id: 'investment-advisory',
            title: 'Investment Advisory & Wealth Management',
            description: 'Providing expert guidance on investments, portfolio management, and wealth growth.',
            image: '/img/services/S6.jpg'
        },
        {
            id: 'international-taxation',
            title: 'International Taxation & Compliance',
            description: 'Global tax strategies, compliance, planning, reporting, and cross-border solutions.',
            image: '/img/services/S7.jpg'
        },
        {
            id: 'audit-assurance',
            title: 'Audit & Assurance Services',
            description: 'Providing independent assessments to ensure financial accuracy, compliance, and transparency.',
            image: '/img/services/S8.jpeg'
        }
    ];

    return (
        <div>
            {/* Header Carousel */}
            <div className="container-fluid position-relative p-0">
                <Carousel className="header-carousel">
                    <Carousel.Item className="header-carousel-item">
                        <img
                            src="img/bg/bg 3.jpg"
                            className="img-fluid w-100"
                            alt="Empowering Financial Success imagery"
                        />
                        <Carousel.Caption>
                            <div className="container">
                                <div className="row g-5">
                                    <div className="col-12 animated fadeInUp">
                                        <div className="text-center">
                                            <h4 className="text-primary text-uppercase fw-bold mb-4">
                                                <FontAwesomeIcon icon={faHandsClapping} className="me-2" /> Welcome To MGA
                                            </h4>
                                            <h1 className="display-4 text-uppercase text-white mb-4">Empowering Financial Success</h1>
                                            <p className="mb-5 fs-5">Expert guidance for secure financial future growth</p>
                                            <div className="d-flex justify-content-center flex-shrink-0 mb-4">
                                                <Link to="/services" className="btn btn-light rounded-pill py-3 px-4 px-md-5 me-2">View Services</Link>
                                                <Link to="/about" className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2">Know About Us</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
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

            {/* About Section */}
            <div className="container-fluid about py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-xl-7 wow fadeInLeft" data-wow-delay="0.2s">
                            <div>
                                <h4 className="text-primary">About Us</h4>
                                <h1 className="display-5 mb-4">Trusted Financial Experts</h1>
                                <p className="mb-4">Delivering excellence in finance, audit, and legal advisory for 25 years</p>
                                <div className="row g-4">
                                    <div className="col-md-6 col-lg-6 col-xl-6">
                                        <div className="d-flex">
                                            <div><FontAwesomeIcon icon={faLightbulb} className="fa-3x text-primary" /></div>
                                            <div className="ms-4">
                                                <h4>Financial Advisory</h4>
                                                <p>Expert transaction, investment, and strategic financial guidance for sustainable success</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-6">
                                        <div className="d-flex">
                                            <div><FontAwesomeIcon icon={faCalendarCheck} className="fa-3x text-primary" /></div>
                                            <div className="ms-4">
                                                <h4>25+ Years of Excellence</h4>
                                                <p>Decades of experience in finance, audit, and advisory for business success</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <Link to="/about" className="btn btn-primary rounded-pill py-3 px-5 flex-shrink-0">Know More</Link>
                                    </div>
                                    <div className="col-sm-6">
                                        <a href="tel:+918828029351" style={{color: 'black'}}>
                                            <div className="d-flex">
                                                <FontAwesomeIcon icon={faPhoneAlt} className="fa-2x text-primary me-4" />
                                                <div>
                                                    <h4>Call Us</h4>
                                                    <p className="mb-0 fs-5" style={{letterSpacing: '1px'}}>+91 8828029351</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 wow fadeInRight" data-wow-delay="0.2s">
                            <div className="bg-primary rounded position-relative overflow-hidden">
                                <img src="img/about/A1.jpg" className="img-fluid rounded w-100" alt="MGA & Associates team discussing financial strategies" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="container-xxl bg-dark py-5 my-5">
                <div className="container py-3">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        navigation={true}
                        modules={[Navigation]}
                        breakpoints={{
                            1024: { slidesPerView: 4 },
                            768: { slidesPerView: 2 },
                            100: { slidesPerView: 1 }
                        }}
                        className="swiper-container"
                    >
                        <SwiperSlide className="text-center">
                            <FontAwesomeIcon icon={faBuilding} className="text-primary fa-3x mb-3" />
                            <h1 className="display-4 text-white">2000</h1>
                            <p className="fs-5 text-primary mb-0"><b>Established Since</b></p>
                        </SwiperSlide>

                        <SwiperSlide className="text-center">
                            <FontAwesomeIcon icon={faCertificate} className="text-primary fa-3x mb-3" />
                            <h1 className="display-4 text-white">16</h1>
                            <p className="fs-5 text-primary mb-0"><b>No of Certificates</b></p>
                        </SwiperSlide>

                        <SwiperSlide className="text-center">
                            <FontAwesomeIcon icon={faUsers} className="text-primary fa-3x mb-3" />
                            <h1 className="display-4 text-white">150</h1>
                            <p className="fs-5 text-primary mb-0"><b>No of Other Employees</b></p>
                        </SwiperSlide>

                        <SwiperSlide className="text-center">
                            <FontAwesomeIcon icon={faUserTie} className="text-primary fa-3x mb-3" />
                            <h1 className="display-4 text-white">15</h1>
                            <p className="fs-5 text-primary mb-0"><b>No of CA Employees</b></p>
                        </SwiperSlide>

                        <SwiperSlide className="text-center">
                            <FontAwesomeIcon icon={faHandshake} className="text-primary fa-3x mb-3" />
                            <h1 className="display-4 text-white">10</h1>
                            <p className="fs-5 text-primary mb-0"><b>No of Partners</b></p>
                        </SwiperSlide>

                        <SwiperSlide className="text-center">
                            <FontAwesomeIcon icon={faUserGraduate} className="text-primary fa-3x mb-3" />
                            <h1 className="display-4 text-white">8</h1>
                            <p className="fs-5 text-primary mb-0"><b>CA Interns</b></p>
                        </SwiperSlide>

                        <SwiperSlide className="text-center">
                            <FontAwesomeIcon icon={faGraduationCap} className="text-primary fa-3x mb-3" />
                            <h1 className="display-4 text-white">5</h1>
                            <p className="fs-5 text-primary mb-0"><b>CMA Interns</b></p>
                        </SwiperSlide>

                        <SwiperSlide className="text-center">
                            <FontAwesomeIcon icon={faUserCheck} className="text-primary fa-3x mb-3" />
                            <h1 className="display-4 text-white">2</h1>
                            <p className="fs-5 text-primary mb-0"><b>ACCA Interns</b></p>
                        </SwiperSlide>

                        <SwiperSlide className="text-center">
                            <FontAwesomeIcon icon={faBalanceScale} className="text-primary fa-3x mb-3" />
                            <h1 className="display-4 text-white">3</h1>
                            <p className="fs-5 text-primary mb-0"><b>Advocates</b></p>
                        </SwiperSlide>

                        <SwiperSlide className="text-center">
                            <FontAwesomeIcon icon={faBriefcase} className="text-primary fa-3x mb-3" />
                            <h1 className="display-4 text-white">4</h1>
                            <p className="fs-5 text-primary mb-0"><b>Company Secretaries</b></p>
                        </SwiperSlide>

                        <SwiperSlide className="text-center">
                            <FontAwesomeIcon icon={faPiggyBank} className="text-primary fa-3x mb-3" />
                            <h1 className="display-4 text-white">3</h1>
                            <p className="fs-5 text-primary mb-0"><b>Ex-Bankers</b></p>
                        </SwiperSlide>

                        <SwiperSlide className="text-center">
                            <FontAwesomeIcon icon={faUserShield} className="text-primary fa-3x mb-3" />
                            <h1 className="display-4 text-white">1</h1>
                            <p className="fs-5 text-primary mb-0"><b>Ex-Government Officer</b></p>
                        </SwiperSlide>
                    </Swiper>
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

            {/* Testimonials Section */}
            <div className="container-fluid testimonial pb-5">
                <div className="container pb-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: '800px'}}>
                        <h4 className="text-primary">Testimonial</h4>
                        <h1 className="display-5 mb-2">Our Clients Reviews</h1>
                        <a href="https://www.google.com/search?q=mga+group" target="_blank" rel="noreferrer" className="text-primary">
                            <img src="img/google.png" alt="MGA & Associates Google Reviews profile" style={{width: '80px', height: '80px'}} />
                        </a>
                    </div>

                    <TestimonialCarousel />
                </div>
            </div>
        </div>
    );
};

export default HomePage;