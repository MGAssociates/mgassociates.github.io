import React from 'react';
import TestimonialCarousel from './TestimonialCarousel';

const TestimonialsSection = () => {
    return (
        <div className="container-fluid testimonial pb-5">
            <div className="container pb-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
                    <h4 className="text-primary">Testimonial</h4>
                    <h1 className="display-5 mb-2">Our Clients Reviews</h1>
                    <a href="https://www.google.com/search?q=mga+group" target="_blank" rel="noreferrer" className="text-primary">
                        <img src="img/google.png" alt="MGA & Associates Google Reviews profile" style={{ width: '80px', height: '80px' }} />
                    </a>
                </div>

                <TestimonialCarousel />
            </div>
        </div>
    );
};

export default TestimonialsSection;