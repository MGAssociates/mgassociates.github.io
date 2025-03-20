import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import ServiceCard from '../components/home/ServiceCard';
import PartnerCarousel from '../components/home/PartnerCarousel';
import { servicesData, industriesData } from '../data';

// Import Swiper styles (should be imported in App.js)
// import 'swiper/css';
// import 'swiper/css/navigation';

const ServicesPage = () => {
    return (
        <>
            {/* Breadcrumb */}
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
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

            {/* Industries Section */}
            <div className="container-fluid blog pb-5">
                <div className="container pb-5">
                    <div className="text-center mx-auto pb-3 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
                        <h4 className="text-primary">Serving Industries</h4>
                        <h1 className="display-5 mb-4">Broad Expertise</h1>
                    </div>

                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={25}
                        slidesPerView={1}
                        navigation={true}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}
                        speed={1500}
                        breakpoints={{
                            576: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 2 },
                            1200: { slidesPerView: 3 }
                        }}
                        className="industry-swiper wow fadeInUp"
                        data-wow-delay="0.2s"
                    >
                        {industriesData.map((industry, index) => (
                            <SwiperSlide key={index}>
                                <div className="p-4">
                                    <div className="blog-img mb-4">
                                        <div className="blog-title text-center mt-3">
                                            <FontAwesomeIcon icon={industry.icon} className="fa-4x text-primary" />
                                            <h4 style={{ paddingTop: '30px' }}>{industry.title}</h4>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Trusted Partnerships Section */}
            <div className="container-fluid blog pb-5">
                <div className="container pb-5">
                    <div className="text-center mx-auto pb-1 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
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