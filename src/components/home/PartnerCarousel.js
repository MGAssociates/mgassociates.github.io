import React, { useEffect, useRef } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const PartnerCarousel = () => {
    const carouselRef = useRef(null);

    useEffect(() => {
        // Initialize Owl Carousel with jQuery when component mounts
        const $ = window.jQuery;
        if ($) {
            $(carouselRef.current).owlCarousel({
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
                $(carouselRef.current).owlCarousel('destroy');
            }
        };
    }, []);

    // Partner logos data
    const partners = [
        { name: 'Antar Logistics', image: 'img/partners/antar-removebg-preview.png' },
        { name: 'Apollo Hospitals', image: 'img/partners/apollo-removebg-preview.png' },
        { name: 'Atha Group', image: 'img/partners/atha-removebg-preview.png' },
        { name: 'Morgan Stanley', image: 'img/partners/morgan-removebg-preview.png' },
        { name: 'Chemfab Alkalis', image: 'img/partners/chemfab-removebg-preview.png' },
        { name: 'The Hindu Group', image: 'img/partners/hindu.png' },
        { name: 'Classic Stripes', image: 'img/partners/classic-removebg-preview.png' },
        { name: 'DC Shriram', image: 'img/partners/dcshriram-removebg-preview.png' },
        { name: 'COWE', image: 'img/partners/cowe.png' },
        { name: 'Fusion Microfinance', image: 'img/partners/fusion.png' },
        { name: 'Fortis Healthcare', image: 'img/partners/fortis-removebg-preview.png' },
        { name: 'Gati Logistics', image: 'img/partners/gati-removebg-preview.png' },
        { name: 'Global Green', image: 'img/partners/globalgreen-removebg-preview.png' },
        { name: 'Indo Rama Textiles', image: 'img/partners/inod_rama-removebg-preview.png' },
        { name: 'Max Life Insurance', image: 'img/partners/maxlife-removebg-preview.png' },
        { name: 'PepsiCo', image: 'img/partners/pepsi-removebg-preview.png' },
        { name: 'POCL Energy', image: 'img/partners/pocl-removebg-preview.png' },
        { name: 'Premier Limited', image: 'img/partners/premier-removebg-preview.png' },
        { name: 'Sparrow Health Group', image: 'img/partners/sparrow-removebg-preview.png' },
        { name: 'TA Hydro Energy', image: 'img/partners/ta_hydro-removebg-preview.png' },
        { name: 'Titan Company', image: 'img/partners/titan-removebg-preview.png' }
    ];

    return (
        <div className="owl-carousel blog-carousel wow fadeInUp" ref={carouselRef} data-wow-delay="0.2s">
            {partners.map((partner, index) => (
                <div className="p-4" key={index}>
                    <div className="blog-img mb-4">
                        <img
                            src={partner.image}
                            className="img-fluid w-100 rounded"
                            alt={`${partner.name} partner logo`}
                        />
                        <div className="blog-title"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PartnerCarousel;