import React from 'react';
import PartnerCarousel from './PartnerCarousel';

const PartnershipsSection = () => {
    return (
        <div className="container-fluid blog pb-5">
            <div className="container pb-5">
                <div className="text-center mx-auto pb-1 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
                    <h4 className="text-primary">Trusted Partnerships</h4>
                    <h1 className="display-5 mb-4">Proven Excellence</h1>
                </div>

                <PartnerCarousel />
            </div>
        </div>
    );
};

export default PartnershipsSection;