import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLightbulb, faCalendarCheck, faPhoneAlt, faBuilding,
    faCertificate, faUsers, faUserTie, faHandshake, faUserGraduate,
    faGraduationCap, faUserCheck, faBalanceScale, faBriefcase,
    faPiggyBank, faUserShield, faAngleRight
} from '@fortawesome/free-solid-svg-icons';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const AboutPage = () => {
    useEffect(() => {
        // Initialize tooltips if any
        const $ = window.jQuery;
        if ($) {
            $('[data-bs-toggle="tooltip"]').tooltip({
                customClass: "custom-tooltip"
            });
        }
    }, []);

    // Team data
    const teamMembers = [
        {
            name: 'Manish Agrawal',
            position: 'Managing Partner',
            qualifications: 'Qualifications : FCA, CS, B.Com, DiFT, NISM - VI, VII\nCertifications : ICAI Certified DISA, IFRS, FTM, PFGA, GST, CCA, FAFD, MSME, Financial Securities\nPanel: Liquidator, Valuer, Independent Director, Peer Reviewer',
            image: 'img/teams/manish agarwal.jpg'
        },
        {
            name: 'Dinesh Kumar Singh',
            position: 'Partner',
            qualifications: 'Qualifications : FCA, CMA, LLB, M.Com, B.Com\nCertifications : DISA, CCA, GST, Forensic Accounting, Concurrent Audit of Banks',
            image: 'img/teams/dinesh singh.jpg'
        },
        {
            name: 'Jyotika Rai',
            position: 'Partner',
            qualifications: 'Qualifications : FCA, CFP, B.COM, ICAI Certified',
            image: 'img/teams/jyothika nalavade.jpg'
        },
        {
            name: 'Kusum Mishra',
            position: 'Partner',
            qualifications: 'Qualifications : ACA, B.COM',
            image: 'img/teams/kusum mishra.jpg'
        },
        {
            name: 'MD Thofik Tufel',
            position: 'Partner',
            qualifications: 'Qualifications : ACA, B.COM',
            image: 'img/teams/md thofiq.jpg'
        }
    ];

    return (
        <>
            {/* Breadcrumb */}
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{maxWidth: '900px'}}>
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">About Us</h4>
                    <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active text-primary">About Us</li>
                    </ol>
                </div>
            </div>

            {/* About Section */}
            <div className="container-fluid about py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-xl-7 wow fadeInLeft" data-wow-delay="0.2s">
                            <div>
                                <h4 className="text-primary">About Us</h4>
                                <h1 className="display-5 mb-4">Trusted Financial Experts</h1>
                                <p className="mb-4">Delivering excellence in finance, audit, and legal advisory for 25 years</p>
                                <div className="row g-4">
                                    <div className="col-md-6 col-lg-6 col-xl-6">
                                        <div className="d-flex">
                                            <div><FontAwesomeIcon icon={faLightbulb} className="fa-3x text-primary" /></div>
                                            <div className="ms-4">
                                                <h4>Financial Advisory</h4>
                                                <p>Expert transaction, investment, and strategic financial guidance for sustainable success</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-6">
                                        <div className="d-flex">
                                            <div><FontAwesomeIcon icon={faCalendarCheck} className="fa-3x text-primary" /></div>
                                            <div className="ms-4">
                                                <h4>25+ Years of Excellence</h4>
                                                <p>Decades of experience in finance, audit, and advisory for business success</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <Link to="/about" className="btn btn-primary rounded-pill py-3 px-5 flex-shrink-0">Know More</Link>
                                    </div>
                                    <div className="col-sm-6">
                                        <a href="tel:+918828029351" style={{color: 'black'}}>
                                            <div className="d-flex">
                                                <FontAwesomeIcon icon={faPhoneAlt} className="fa-2x text-primary me-4" />
                                                <div>
                                                    <h4>Call Us</h4>
                                                    <p className="mb-0 fs-5" style={{letterSpacing: '1px'}}>+91 8828029351</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 wow fadeInRight" data-wow-delay="0.2s">
                            <div className="bg-primary rounded position-relative overflow-hidden">
                                <img src="img/about/A1.jpg" className="img-fluid rounded w-100" alt="MGA & Associates team discussing financial strategies" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Credentials Section */}
            <div className="container-fluid offer-section pb-5">
                <div className="container pb-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: '800px'}}>
                        <h4 className="text-primary">Our Credentials</h4>
                        <h1 className="display-5 mb-4">Proven Expertise</h1>
                    </div>
                    <div className="row g-5 align-items-center">
                        <div className="col-xl-5 wow fadeInLeft" data-wow-delay="0.2s">
                            <div className="nav nav-pills bg-light rounded p-5">
                                <a className="accordion-link p-4 active mb-4" data-bs-toggle="pill" href="#collapseCertificate">
                                    <h5 className="mb-0">Certifications</h5>
                                </a>
                                <a className="accordion-link p-4 mb-4" data-bs-toggle="pill" href="#collapseEmpanelments">
                                    <h5 className="mb-0">Empanelments</h5>
                                </a>
                                <a className="accordion-link p-4 mb-4" data-bs-toggle="pill" href="#collapseExperience">
                                    <h5 className="mb-0">Experience</h5>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-7 wow fadeInRight" data-wow-delay="0.4s">
                            <div className="tab-content">
                                {/* Certifications Tab */}
                                <div id="collapseCertificate" className="tab-pane fade show p-0 active">
                                    <div className="row g-4">
                                        <div className="col-md-5">
                                            <ul className="list-unstyled mb-4">
                                                <li className="py-1"><FontAwesomeIcon icon={faCertificate} className="text-primary" /> ICAI Certified Peer Reviewer</li>
                                                <li className="py-1"><FontAwesomeIcon icon={faAngleRight} className="text-success" /> ICAI Certified DISA</li>
                                                <li className="py-1"><FontAwesomeIcon icon={faAngleRight} className="text-info" /> ICAI Certified IFRS</li>
                                                <li className="py-1"><FontAwesomeIcon icon={faAngleRight} className="text-warning" /> ICAI Certified FTM</li>
                                                <li className="py-1"><FontAwesomeIcon icon={faAngleRight} className="text-danger" /> ICAI Certified PGF</li>
                                                <li className="py-1"><FontAwesomeIcon icon={faAngleRight} className="text-secondary" /> ICAI Certified GST</li>
                                                <li className="py-1"><FontAwesomeIcon icon={faAngleRight} className="text-dark" /> ICAI Certified CCA</li>
                                                <li className="py-1"><FontAwesomeIcon icon={faAngleRight} className="text-primary" /> ICAI Certified FAFD</li>
                                                <li className="py-1"><FontAwesomeIcon icon={faAngleRight} className="text-success" /> ICAI Certified MSME</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-5">
                                            <ul className="list-unstyled mb-4">
                                                <li className="py-1"><FontAwesomeIcon icon={faAngleRight} className="text-warning" /> NISM – VI</li>
                                                <li className="py-1"><FontAwesomeIcon icon={faAngleRight} className="text-danger" /> NISM – VII</li>
                                                <li className="py-1"><FontAwesomeIcon icon={faAngleRight} className="text-primary" /> FCA</li>
                                                <li className="py-1"><FontAwesomeIcon icon={faAngleRight} className="text-success" /> ACS</li>
                                                <li className="py-1"><FontAwesomeIcon icon={faAngleRight} className="text-info" /> B.COM</li>
                                                <li className="py-1"><FontAwesomeIcon icon={faAngleRight} className="text-warning" /> DiFT</li>
                                                <li className="py-1"><FontAwesomeIcon icon={faAngleRight} className="text-danger" /> Liquidator</li>
                                                <li className="py-1"><FontAwesomeIcon icon={faAngleRight} className="text-secondary" /> Central Society Auditor</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Empanelments Tab */}
                                <div id="collapseEmpanelments" className="tab-pane fade show p-0">
                                    <div className="row g-4">
                                        <div className="col-md-10">
                                            <ul className="list-unstyled mb-4">
                                                <li className="py-1"><FontAwesomeIcon icon={faAngleRight} className="text-primary" /> GST Special Audit</li>
                                                <li className="py-1"><FontAwesomeIcon icon={faAngleRight} className="text-success" /> Income Tax Special Audit</li>
                                                <li className="py-1"><FontAwesomeIcon icon={faAngleRight} className="text-info" /> Comptroller and Auditor General (C & AG)</li>
                                                <li className="py-1"><FontAwesomeIcon icon={faAngleRight} className="text-warning" /> Internal Audit for Special Panel for SME Listed Company by SEBI</li>
                                                <li className="py-1"><FontAwesomeIcon icon={faAngleRight} className="text-danger" /> National Investigation Agency (Special Audit)</li>
                                                <li className="py-1"><FontAwesomeIcon icon={faAngleRight} className="text-secondary" /> Securities and Exchange Board of India (SEBI)</li>
                                                <li className="py-1"><FontAwesomeIcon icon={faAngleRight} className="text-dark" /> Bombay Stock Exchange Internal Audit Panel</li>
                                                <li className="py-1"><FontAwesomeIcon icon={faAngleRight} className="text-primary" /> National Stock Exchange Internal Audit Panel</li>
                                                <li className="py-1"><FontAwesomeIcon icon={faAngleRight} className="text-success" /> Asset Specialized Monitoring Panel of IBA</li>
                                                <li className="py-1"><FontAwesomeIcon icon={faAngleRight} className="text-info" /> Audit and Stock Management (ASM)</li>
                                                <li className="py-1"><FontAwesomeIcon icon={faAngleRight} className="text-warning" /> CSR Fund Audit Panel</li>
                                                <li className="py-1"><FontAwesomeIcon icon={faAngleRight} className="text-danger" /> RBI Category 1 Firm</li>
                                                <li className="py-1"><FontAwesomeIcon icon={faAngleRight} className="text-secondary" /> Dept. of Cooperation, Marketing & Textile, Govt Of Maharashtra</li>
                                                <li className="py-1"><FontAwesomeIcon icon={faAngleRight} className="text-primary" /> Central Registrar of Co-operative Society</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Experience Tab */}
                                <div id="collapseExperience" className="tab-pane fade show p-0">
                                    <div className="row g-4">
                                        <div className="col-md-10">
                                            <ul className="list-unstyled mb-4">
                                                <li className="py-1"><FontAwesomeIcon icon={faAngleRight} className="text-primary" /> Insurance Company</li>
                                                <li className="py-1">
                                                    <FontAwesomeIcon icon={faAngleRight} className="text-info" />
                                                    <span data-bs-toggle="tooltip" data-bs-placement="right" className="custom-tooltip"
                                                          title="NCPOR, NHM Goa, NHM Palghar, DHO Palghar, DMO Palghar, WADA Teachers Association">
                            {' '}Government Audit
                          </span>
                                                </li>
                                                <li className="py-1">
                                                    <FontAwesomeIcon icon={faAngleRight} className="text-warning" />
                                                    <span data-bs-toggle="tooltip" data-bs-placement="right" className="custom-tooltip"
                                                          title="DENA Bank, BOM Bank, Indian Bank, BOB, Karnala Corporation Bank (Central Stat Audit)">
                            {' '}Bank Statutory Audit
                          </span>
                                                </li>
                                                <li className="py-1">
                                                    <FontAwesomeIcon icon={faAngleRight} className="text-danger" />
                                                    <span data-bs-toggle="tooltip" data-bs-placement="right" className="custom-tooltip"
                                                          title="Punjab and Sind Bank, SBI, Central Bank of India, NHM Goa, Bank of India, Canara Bank, IDBI Bank, Bank of Maharashtra, Saurashtra Gramin Bank, Punjab National Bank, DENA Bank, Syndicate Bank, Rajasthan Marudhara Gramin Bank">
                            {' '}Bank Concurrent Audit
                          </span>
                                                </li>
                                                <li className="py-1">
                                                    <FontAwesomeIcon icon={faAngleRight} className="text-secondary" />
                                                    <span data-bs-toggle="tooltip" data-bs-placement="right" className="custom-tooltip"
                                                          title="Union Bank, SBI Bank, Bank of India, Central Bank of India, Bank of Maharashtra, DENA Bank, Allahabad Bank">
                            {' '}Bank Stock Audit
                          </span>
                                                </li>
                                                <li className="py-1">
                                                    <FontAwesomeIcon icon={faAngleRight} className="text-primary" />
                                                    <span data-bs-toggle="tooltip" data-bs-placement="right" className="custom-tooltip"
                                                          title="Tax Audit, GST Audit, STATUTORY, Company Audit, Certification, Internal Audit, FA Audit, Stock Audit, IFC Review Audit, Payroll Audit, Vendor Audit">
                            {' '}Corporate
                          </span>
                                                </li>
                                                <li className="py-1">
                                                    <FontAwesomeIcon icon={faAngleRight} className="text-success" />
                                                    <span data-bs-toggle="tooltip" data-bs-placement="right" className="custom-tooltip"
                                                          title="Certification, Advance Ruling, FEMA & FERA Advisory, Transfer Pricing Audit, Transfer Pricing Report">
                            {' '}International Taxation Advisory
                          </span>
                                                </li>
                                                <li className="py-1">
                                                    <FontAwesomeIcon icon={faAngleRight} className="text-info" />
                                                    <span data-bs-toggle="tooltip" data-bs-placement="right" className="custom-tooltip"
                                                          title="Compliance, Assessment, Registration, Liasoning">
                            {' '}RERA
                          </span>
                                                </li>
                                                <li className="py-1">
                                                    <FontAwesomeIcon icon={faAngleRight} className="text-warning" />
                                                    <span data-bs-toggle="tooltip" data-bs-placement="right" className="custom-tooltip"
                                                          title="Home Loan, LAP, Unsecured Business Loan, OD/CC Facility, Packing Credit, Bill Discount, Builder Finance (Construction Finance), Foreign Funding, Private Equity">
                            {' '}Funding
                          </span>
                                                </li>
                                                <li className="py-1">
                                                    <FontAwesomeIcon icon={faAngleRight} className="text-danger" />
                                                    <span data-bs-toggle="tooltip" data-bs-placement="right" className="custom-tooltip"
                                                          title="Income Tax Assessment, GST Assessment, PF Assessment, NCLT (M & A), Tribunal (ITAT)">
                            {' '}Legal Advisory
                          </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
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
                        <SwiperSlide className="text-center">
                            <FontAwesomeIcon icon={faBuilding} className="text-primary fa-3x mb-3" />
                            <h1 className="display-4 text-white">2000</h1>
                            <p className="fs-5 text-primary mb-0"><b>Established Since</b></p>
                        </SwiperSlide>

                        <SwiperSlide className="text-center">
                            <FontAwesomeIcon icon={faCertificate} className="text-primary fa-3x mb-3" />
                            <h1 className="display-4 text-white">16</h1>
                            <p className="fs-5 text-primary mb-0"><b>No of Certificates</b></p>
                        </SwiperSlide>

                        <SwiperSlide className="text-center">
                            <FontAwesomeIcon icon={faUsers} className="text-primary fa-3x mb-3" />
                            <h1 className="display-4 text-white">150</h1>
                            <p className="fs-5 text-primary mb-0"><b>No of Other Employees</b></p>
                        </SwiperSlide>

                        <SwiperSlide className="text-center">
                            <FontAwesomeIcon icon={faUserTie} className="text-primary fa-3x mb-3" />
                            <h1 className="display-4 text-white">15</h1>
                            <p className="fs-5 text-primary mb-0"><b>No of CA Employees</b></p>
                        </SwiperSlide>

                        <SwiperSlide className="text-center">
                            <FontAwesomeIcon icon={faHandshake} className="text-primary fa-3x mb-3" />
                            <h1 className="display-4 text-white">10</h1>
                            <p className="fs-5 text-primary mb-0"><b>No of Partners</b></p>
                        </SwiperSlide>

                        <SwiperSlide className="text-center">
                            <FontAwesomeIcon icon={faUserGraduate} className="text-primary fa-3x mb-3" />
                            <h1 className="display-4 text-white">8</h1>
                            <p className="fs-5 text-primary mb-0"><b>CA Interns</b></p>
                        </SwiperSlide>

                        <SwiperSlide className="text-center">
                            <FontAwesomeIcon icon={faGraduationCap} className="text-primary fa-3x mb-3" />
                            <h1 className="display-4 text-white">5</h1>
                            <p className="fs-5 text-primary mb-0"><b>CMA Interns</b></p>
                        </SwiperSlide>

                        <SwiperSlide className="text-center">
                            <FontAwesomeIcon icon={faUserCheck} className="text-primary fa-3x mb-3" />
                            <h1 className="display-4 text-white">2</h1>
                            <p className="fs-5 text-primary mb-0"><b>ACCA Interns</b></p>
                        </SwiperSlide>

                        <SwiperSlide className="text-center">
                            <FontAwesomeIcon icon={faBalanceScale} className="text-primary fa-3x mb-3" />
                            <h1 className="display-4 text-white">3</h1>
                            <p className="fs-5 text-primary mb-0"><b>Advocates</b></p>
                        </SwiperSlide>

                        <SwiperSlide className="text-center">
                            <FontAwesomeIcon icon={faBriefcase} className="text-primary fa-3x mb-3" />
                            <h1 className="display-4 text-white">4</h1>
                            <p className="fs-5 text-primary mb-0"><b>Company Secretaries</b></p>
                        </SwiperSlide>

                        <SwiperSlide className="text-center">
                            <FontAwesomeIcon icon={faPiggyBank} className="text-primary fa-3x mb-3" />
                            <h1 className="display-4 text-white">3</h1>
                            <p className="fs-5 text-primary mb-0"><b>Ex-Bankers</b></p>
                        </SwiperSlide>

                        <SwiperSlide className="text-center">
                            <FontAwesomeIcon icon={faUserShield} className="text-primary fa-3x mb-3" />
                            <h1 className="display-4 text-white">1</h1>
                            <p className="fs-5 text-primary mb-0"><b>Ex-Government Officer</b></p>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            {/* Our Presence Section */}
            <div className="container-fluid offer-section pb-5">
                <div className="container pb-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: '800px'}}>
                        <h4 className="text-primary">Our Presence</h4>
                        <h1 className="display-5 mb-4">India & Global</h1>
                    </div>
                    <div className="row g-5 align-items-center">
                        <div className="col-xl-5 wow fadeInLeft" data-wow-delay="0.2s">
                            <div className="nav nav-pills bg-light rounded p-5">
                                <a className="accordion-link p-4 active mb-4" data-bs-toggle="pill" href="#collapseOne">
                                    <h5 className="mb-0">India Location</h5>
                                </a>
                                <a className="accordion-link p-4 mb-4" data-bs-toggle="pill" href="#collapseTwo">
                                    <h5 className="mb-0">Global Location</h5>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-7 wow fadeInRight" data-wow-delay="0.4s">
                            <div className="tab-content">
                                <div id="collapseOne" className="tab-pane fade show p-0 active">
                                    <div className="row g-4">
                                        <div className="col-md-9">
                                            <img src="img/location/indiamap.png" className="img-fluid w-100 rounded" alt="Map of India showing MGA & Associates locations" />
                                        </div>
                                    </div>
                                </div>
                                <div id="collapseTwo" className="tab-pane fade show p-0">
                                    <div className="row g-4">
                                        <div className="col-md-9">
                                            <img src="img/location/globalmap.png" className="img-fluid w-100 rounded" alt="Global presence map of MGA & Associates offices" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="container-fluid team pb-5">
                <div className="container pb-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: '800px'}}>
                        <h4 className="text-primary">Expert Team</h4>
                        <h2 className="display-5 mb-4">Passion Meets Expertise</h2>
                    </div>
                    <div className="row g-4">
                        {teamMembers.map((member, index) => (
                            <div className="col-md-12 col-lg-6 col-xl-3 wow fadeInUp align-items-center" data-wow-delay="0.2s" key={index}>
                                <div className="team-item">
                                    <div className="team-img">
                                        <img src={member.image} className="img-fluid" alt={`${member.name} ${member.position} at MGA & Associates`} />
                                    </div>
                                    <div className="team-title">
                                        <h4 className="mb-0">{member.name}</h4>
                                        <p className="mb-0">{member.position}</p>
                                        <p className="mb-0" style={{whiteSpace: 'pre-line'}}>{member.qualifications}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutPage;