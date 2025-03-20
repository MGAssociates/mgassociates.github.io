import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import testimonialsData from '../../data/testimonialsData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TestimonialCarousel = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={25}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
                768: { slidesPerView: 2 },
                1200: { slidesPerView: 3 }
            }}
            className="testimonial-swiper wow fadeInUp"
            data-wow-delay="0.2s"
        >
            {testimonialsData.map((testimonial, index) => (
                <SwiperSlide key={index}>
                    <div className="testimonial-item">
                        <div className="testimonial-quote-left">
                            <FontAwesomeIcon icon={faQuoteLeft} className="fa-2x" />
                        </div>
                        <div className="testimonial-img">
                            <img src={testimonial.image} className="img-fluid" alt={`${testimonial.name} testimonial photo`} />
                        </div>
                        <div className="testimonial-text">
                            <p className="mb-0">{testimonial.testimonial}</p>
                        </div>
                        <div className="testimonial-title">
                            <div>
                                <h4 className="mb-0">{testimonial.name}</h4>
                            </div>
                            <div className="d-flex text-primary">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                        </div>
                        <div className="testimonial-quote-right">
                            <FontAwesomeIcon icon={faQuoteRight} className="fa-2x" />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default TestimonialCarousel;