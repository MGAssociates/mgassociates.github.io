import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube
} from '@fortawesome/free-brands-svg-icons';
import {
    faAngleRight, faMapMarkerAlt, faEnvelope, faPhoneAlt, faCopyright
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <>
            {/* Footer Start */}
            <div className="container-fluid footer py-3 wow fadeIn" data-wow-delay="0.2s">
                <div className="container py-3 border-start-0 border-end-0"
                     style={{ border: '1px solid', borderColor: 'rgb(255, 255, 255, 0.08)' }}>
                    <div className="row g-5">
                        <div className="col-md-6 col-lg-6 col-xl-4">
                            <div className="footer-item">
                                <Link to="/" className="p-0">
                                    <h4 className="text-white"><i className=""></i>MGA & Associates </h4>
                                </Link>
                                <p className="mb-4">
                                    MGA & Associates is a team of dedicated professionals offering expert financial, audit,
                                    legal, and advisory services
                                </p>
                                <div className="d-flex">
                                    <a className="btn btn-primary btn-sm-square rounded-circle me-3"
                                       href="https://www.facebook.com/profile.php?id=100054312920255" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faFacebookF} className="text-white" />
                                    </a>
                                    <a className="btn btn-primary btn-sm-square rounded-circle me-3"
                                       href="https://x.com/CAofficeMGA/status/1896907593161101344" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faTwitter} className="text-white" />
                                    </a>
                                    <a className="btn btn-primary btn-sm-square rounded-circle me-3"
                                       href="https://www.instagram.com/mga.foundation/" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faInstagram} className="text-white" />
                                    </a>
                                    <a className="btn btn-primary btn-sm-square rounded-circle me-3"
                                       href="https://www.linkedin.com/company/79853897/admin/dashboard/2" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faLinkedinIn} className="text-white" />
                                    </a>
                                    <a className="btn btn-primary btn-sm-square rounded-circle me-0"
                                       href="https://www.youtube.com/@MGAGROUP1987" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faYoutube} className="text-white" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-2">
                            <div className="footer-item">
                                <h4 className="text-white mb-4">Quick Links</h4>
                                <Link to="/"><FontAwesomeIcon icon={faAngleRight} className="me-2" /> Home</Link>
                                <Link to="/about"><FontAwesomeIcon icon={faAngleRight} className="me-2" /> About Us</Link>
                                <Link to="/services"><FontAwesomeIcon icon={faAngleRight} className="me-2" /> Services</Link>
                                <Link to="/career"><FontAwesomeIcon icon={faAngleRight} className="me-2" /> Career</Link>
                                <Link to="/contact"><FontAwesomeIcon icon={faAngleRight} className="me-2" /> Contact us</Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item">
                                <h4 className="text-white mb-4">Services</h4>
                                <Link to="/services/transaction-advisory">
                                    <FontAwesomeIcon icon={faAngleRight} className="me-2" /> Transaction Advisory
                                </Link>
                                <Link to="/services/tax-advisory">
                                    <FontAwesomeIcon icon={faAngleRight} className="me-2" /> Tax Advisory
                                </Link>
                                <Link to="/services/forensic-audits">
                                    <FontAwesomeIcon icon={faAngleRight} className="me-2" /> Forensic Audits
                                </Link>
                                <Link to="/services/virtual-cfo">
                                    <FontAwesomeIcon icon={faAngleRight} className="me-2" /> Virtual CFO
                                </Link>
                                <Link to="/services">
                                    <FontAwesomeIcon icon={faAngleRight} className="me-2" /> All Services
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item">
                                <h4 className="text-white mb-4">Contact Info</h4>
                                <div className="d-flex align-items-center">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary me-3" />
                                    <p className="text-white mb-0">103, Link Road Behram Baug, West, Oshiwara, Mumbai, Maharashtra 400102</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-primary me-3" />
                                    <p className="text-white mb-0">office@mgaca.co.in</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <FontAwesomeIcon icon={faPhoneAlt} className="text-primary me-3" />
                                    <p className="text-white mb-0">+91 8828029351</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <FontAwesomeIcon icon={faPhoneAlt} className="text-primary me-3" />
                                    <p className="text-white mb-0">+91 8999239953</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}

            {/* Copyright Start */}
            <div className="container-fluid copyright py-4">
                <div className="container">
                    <div className="row g-4 align-items-center">
                        <div className="col-md-6 text-center text-md-start mb-md-0">
              <span className="text-body">
                <a href="#" className="border-bottom text-white">
                  <FontAwesomeIcon icon={faCopyright} className="text-light me-2" />
                  2025 MGA & Associates
                </a>, All right reserved.
              </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Copyright End */}

            {/* Back to Top */}
            <a href="#" className="btn btn-primary btn-lg-square rounded-circle back-to-top">
                <i className="fa fa-arrow-up"></i>
            </a>
        </>
    );
};

export default Footer;