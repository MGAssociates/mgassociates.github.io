import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import partnersData from '../../data/partnersData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const PartnerCarousel = () => {
    return (
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
            className="partner-swiper wow fadeInUp"
            data-wow-delay="0.2s"
        >
            {partnersData.map((partner, index) => (
                <SwiperSlide key={index}>
                    <div className="p-4">
                        <div className="blog-img mb-4">
                            <img
                                src={partner.image}
                                className="img-fluid w-100 rounded"
                                alt={`${partner.name} partner logo`}
                            />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default PartnerCarousel;