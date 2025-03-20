import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBuilding,
    faCertificate,
    faUsers,
    faUserTie,
    faHandshake,
    faUserGraduate,
    faGraduationCap,
    faUserCheck,
    faBalanceScale,
    faBriefcase,
    faPiggyBank,
    faUserShield
} from '@fortawesome/free-solid-svg-icons';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Stats data
const statsData = [
    { icon: faBuilding, number: '2000', text: 'Established Since' },
    { icon: faCertificate, number: '16', text: 'No of Certificates' },
    { icon: faUsers, number: '150', text: 'No of Other Employees' },
    { icon: faUserTie, number: '15', text: 'No of CA Employees' },
    { icon: faHandshake, number: '10', text: 'No of Partners' },
    { icon: faUserGraduate, number: '8', text: 'CA Interns' },
    { icon: faGraduationCap, number: '5', text: 'CMA Interns' },
    { icon: faUserCheck, number: '2', text: 'ACCA Interns' },
    { icon: faBalanceScale, number: '3', text: 'Advocates' },
    { icon: faBriefcase, number: '4', text: 'Company Secretaries' },
    { icon: faPiggyBank, number: '3', text: 'Ex-Bankers' },
    { icon: faUserShield, number: '1', text: 'Ex-Government Officer' }
];

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
                        <SwiperSlide key={index} className="text-center">
                            <FontAwesomeIcon icon={stat.icon} className="text-primary fa-3x mb-3" />
                            <h1 className="display-4 text-white">{stat.number}</h1>
                            <p className="fs-5 text-primary mb-0"><b>{stat.text}</b></p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default StatsSection;