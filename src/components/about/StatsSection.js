import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { statsData } from '../../data/statsData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const StatsSection = () => {
    return (
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
                    {statsData.map((stat, index) => (
                        <SwiperSlide className="text-center" key={index}>
                            <FontAwesomeIcon icon={stat.icon} className="text-primary fa-3x mb-3" />
                            <h1 className="display-4 text-white">{stat.value}</h1>
                            <p className="fs-5 text-primary mb-0"><b>{stat.label}</b></p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default StatsSection;