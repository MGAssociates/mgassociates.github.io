import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFileContract, faUserTie, faChartLine, faBalanceScale, faUsers,
    faTasks, faBullhorn, faLaptopCode, faUniversity, faFileInvoice
} from '@fortawesome/free-solid-svg-icons';

const CareerPage = () => {
    // Career positions data
    const positions = [
        {
            title: 'CA Article',
            description: 'Gain hands-on experience in accounting, auditing, taxation, and compliance under expert mentorship.',
            icon: faFileContract
        },
        {
            title: 'Chartered Accountant',
            description: 'Manage financial statements, audits, taxation, and regulatory compliance for clients.',
            icon: faUserTie
        },
        {
            title: 'CMA Article',
            description: 'Work on cost accounting, financial planning, and management accounting strategies.',
            icon: faChartLine
        },
        {
            title: 'ACCA Article',
            description: 'Assist in financial reporting, risk assessment, and global financial regulations.',
            icon: faBalanceScale
        },
        {
            title: 'HR',
            description: 'Oversee recruitment, employee relations, and HR policy implementation.',
            icon: faUsers
        },
        {
            title: 'Admin',
            description: 'Handle office management, coordination, and operational support activities.',
            icon: faTasks
        },
        {
            title: 'Digital Marketing',
            description: 'Work on SEO, social media, content marketing, and paid advertising strategies.',
            icon: faBullhorn
        },
        {
            title: 'Software Developer & Intern',
            description: 'Develop and maintain software applications, troubleshoot issues, and enhance system functionality.',
            icon: faLaptopCode
        },
        {
            title: 'Graduation in Commerce',
            description: 'Entry-level roles in accounting, finance, and business administration.',
            icon: faUniversity
        },
        {
            title: 'Tender Executive',
            description: 'Manage government and corporate tenders, documentation, and bid submissions.',
            icon: faFileInvoice
        }
    ];

    return (
        <>
            {/* Breadcrumb */}
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{maxWidth: '900px'}}>
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Career</h4>
                    <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active text-primary">Career</li>
                    </ol>
                </div>
            </div>

            {/* Career Positions Section */}
            <div className="container-xxl bg-light py-2 my-2">
                <div className="container py-3">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>
                        <h6 className="text-primary">Join Us</h6>
                        <h1 className="display-6">Build Your Career</h1>
                    </div>
                    <div className="row g-4">
                        {positions.map((position, index) => (
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={index % 3 === 0 ? "0.1s" : index % 3 === 1 ? "0.3s" : "0.5s"} key={index}>
                                <Link to="/career-form">
                                    <div className="service-item bg-white p-5">
                                        <FontAwesomeIcon icon={position.icon} className="fa-3x text-primary mb-3" />
                                        <h5 className="mb-3">{position.title}</h5>
                                        <p style={{color: '#a2a2a2'}}>{position.description}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <Link to="/career-form" className="btn btn-primary rounded-pill py-3 px-5 wow fadeInUp" data-wow-delay="0.1s">
                        Apply Now
                    </Link>
                </div>
            </div>
        </>
    );
};

export default CareerPage;