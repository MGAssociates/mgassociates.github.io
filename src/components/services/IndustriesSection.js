// File: src/components/services/IndustriesSection.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { industriesData } from '../../data';

const IndustriesSection = () => {
    return (
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
                            <IndustryCard industry={industry} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

// Create a separate component for industry cards
const IndustryCard = ({ industry }) => {
    return (
        <div className="p-4">
            <div className="blog-img mb-4">
                <div className="blog-title text-center mt-3">
                    <FontAwesomeIcon icon={industry.icon} className="fa-4x text-primary" />
                    <h4 style={{ paddingTop: '30px' }}>{industry.title}</h4>
                </div>
            </div>
        </div>
    );
};

export default IndustriesSection;