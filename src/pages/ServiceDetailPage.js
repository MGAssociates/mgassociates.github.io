import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// Service data
const serviceData = {
    'transaction-advisory': {
        title: 'Transaction Advisory',
        description: [
            'Navigating complex business transactions requires expert guidance to ensure strategic growth and financial success. At MGA & Associates, our Transaction Advisory Services provide businesses with the insights and expertise needed to make informed decisions during mergers, acquisitions, investments, and restructuring.',
            'We offer a comprehensive suite of services, including Mergers & Acquisitions Advisory, Financial Due Diligence, Business Valuation, Private Equity & Venture Capital Support, Debt & Equity Structuring, Business Restructuring, and Tax & Regulatory Compliance. Our client-focused approach ensures that each transaction is tailored to meet your unique business objectives.'
        ],
        image: 'img/services/S1.png'
    },
    'due-diligence': {
        title: 'Due Diligence',
        description: [
            'In today\'s fast-paced business landscape, thorough due diligence is crucial to making well-informed and successful transactions. Whether you are considering a merger, acquisition, investment, or partnership, ensuring that all risks and opportunities are fully understood is essential to safeguarding your business interests.',
            'At MGA & Associates, our Due Diligence Services provide a detailed and systematic evaluation of all aspects of a potential transaction. Our team of experienced professionals helps you uncover hidden risks, assess opportunities, and make informed decisions based on comprehensive, reliable data. Through meticulous research and analysis, we offer valuable insights that ensure you are equipped with the necessary information to proceed confidently.'
        ],
        image: 'img/services_details/due deligence.jpg'
    },
    'tax-advisory': {
        title: 'Tax Advisory',
        description: [
            'Tax planning is a crucial component of any business strategy. At MGA & Associates, our Tax Advisory Services are designed to provide businesses and individuals with tailored solutions that optimize tax liabilities, ensure compliance, and support financial growth. Navigating the complex world of taxation can be challenging, but with our expertise, you can stay ahead of regulatory changes and maximize the potential benefits of tax laws.',
            'We offer comprehensive tax advisory services for a wide range of industries, focusing on strategic tax planning, risk management, and the development of efficient tax structures. Whether you\'re an individual, startup, or large corporation, our team ensures that your tax position is optimized while maintaining strict compliance with tax regulations.'
        ],
        image: 'img/services_details/tax advisory.png'
    },
    'virtual-cfo': {
        title: 'Virtual CFO',
        description: [
            'As businesses evolve, the need for expert financial guidance and strategic decision-making becomes more crucial. However, not every organization has the resources to hire a full-time Chief Financial Officer (CFO). At MGA & Associates, we offer Virtual CFO Services, providing you with the financial expertise, leadership, and insights you need without the overhead of a full-time hire.',
            'Our Virtual CFO Services deliver high-level financial management, planning, and advisory tailored to your business\'s unique needs. We become an integral part of your team, working closely with you to enhance financial performance, optimize cash flow, and support strategic growth. Whether you\'re a startup or an established business, our Virtual CFO services allow you to focus on what matters most—growing your business—while we handle the complexities of your financial operations.'
        ],
        image: 'img/services_details/vitrual cfo.png'
    },
    'forensic-audits': {
        title: 'Forensic Audits',
        description: [
            'In today\'s complex business environment, organizations face an increasing risk of financial fraud, mismanagement, and other financial irregularities. Whether due to internal misconduct, external fraud, or poor financial controls, these issues can have severe consequences. A Forensic Audit is an investigative process designed to uncover and assess these irregularities, providing clients with a detailed and thorough examination of financial records.',
            'At MGA & Associates, our Forensic Audit Services are tailored to uncover fraudulent activities, misappropriation of funds, and other financial misconduct. Our team uses specialized techniques and a systematic approach to gather evidence, analyze financial records, and reconstruct events to help resolve disputes, enforce legal actions, or provide clarity in situations involving financial wrongdoing.'
        ],
        image: 'img/services_details/forensic audit.jpg'
    },
    'investment-advisory': {
        title: 'Investment Advisory & Wealth Management',
        description: [
            'In today\'s complex financial world, making smart investment decisions is essential to growing and safeguarding your wealth. At MGA & Associates, our Investment Advisory & Wealth Management services are designed to provide personalized strategies that align with your financial goals, risk tolerance, and time horizon. Whether you\'re looking to build wealth for the future, preserve your assets, or plan for retirement, our team of experienced professionals offers tailored advice and solutions to help you achieve financial security and success.',
            'Our approach to wealth management combines deep market knowledge, advanced financial planning tools, and a client-focused strategy to optimize your investment portfolio, reduce risks, and maximize returns.'
        ],
        image: 'img/services_details/wealth mgmt.jpg'
    },
    'international-taxation': {
        title: 'International Taxation & Compliance',
        description: [
            'In a globalized business environment, understanding and complying with international tax regulations is more important than ever. With complex tax laws and varying compliance requirements across different jurisdictions, businesses need expert guidance to navigate the intricacies of international taxation and avoid costly pitfalls.',
            'At MGA & Associates, we specialize in providing International Taxation and Compliance Services to help businesses manage their global tax obligations efficiently and in full compliance with local and international regulations. Our team of experienced professionals ensures that you are not only compliant with tax laws across multiple regions but also optimize your tax position to drive long-term success.'
        ],
        image: 'img/services_details/International Taxation and Compliance Services.webp'
    },
    'audit-assurance': {
        title: 'Audit & Assurance Services',
        description: [
            'At MGA & Associates, we understand the critical role that accurate, reliable financial reporting plays in building trust with stakeholders and driving business success. Our Audit & Assurance Services are designed to provide you with an independent and objective evaluation of your financial statements, ensuring compliance with relevant regulations, and improving transparency in your financial reporting.',
            'Through our comprehensive audits and reviews, we help businesses of all sizes and industries strengthen their internal controls, mitigate risks, and provide confidence to investors, regulators, and other stakeholders. Whether you are a small business or a large enterprise, our expert team works closely with you to deliver timely, actionable insights that enhance your financial health and business operations.'
        ],
        image: 'img/services_details/audit and assurance.webp'
    }
};

const ServiceDetailPage = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Simulate data fetching from API
        setTimeout(() => {
            if (serviceData[serviceId]) {
                setService(serviceData[serviceId]);
                setLoading(false);
            } else {
                setError('Service not found');
                setLoading(false);
            }
        }, 300);
    }, [serviceId]);

    if (loading) {
        return (
            <div className="container py-5 text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container py-5 text-center">
                <h2 className="text-danger">{error}</h2>
                <p>Sorry, the requested service could not be found. Please try another service.</p>
                <Link to="/services" className="btn btn-primary mt-3">Back to Services</Link>
            </div>
        );
    }

    return (
        <>
            {/* Breadcrumb */}
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{maxWidth: '900px'}}>
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">{service.title}</h4>
                    <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/services">Services</Link></li>
                        <li className="breadcrumb-item active text-primary">{service.title}</li>
                    </ol>
                </div>
            </div>

            {/* Service Detail Content */}
            <div className="container-fluid about py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-xl-7 wow fadeInLeft" data-wow-delay="0.2s">
                            <div>
                                <h1 className="display-5 mb-4" style={{fontSize: '30px'}}>{service.title}</h1>
                                {service.description.map((paragraph, index) => (
                                    <p className="mb-4" key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                        <div className="col-xl-5 wow fadeInRight" data-wow-delay="0.2s">
                            <div className="bg-primary rounded position-relative overflow-hidden">
                                <img src={`/${service.image}`} className="img-fluid rounded w-100" alt={service.title} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetailPage;