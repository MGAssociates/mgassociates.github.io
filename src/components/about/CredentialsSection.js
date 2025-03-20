import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { certificationsData, empanelmentsData, experienceData } from '../../data/credentialsData';

const CredentialsSection = () => {
    return (
        <div className="container-fluid offer-section pb-5">
            <div className="container pb-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
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
                                            {certificationsData.left.map((cert, index) => (
                                                <li className="py-1" key={`cert-left-${index}`}>
                                                    <FontAwesomeIcon icon={index === 0 ? faCertificate : faAngleRight} className={cert.color} /> {cert.text}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="col-md-5">
                                        <ul className="list-unstyled mb-4">
                                            {certificationsData.right.map((cert, index) => (
                                                <li className="py-1" key={`cert-right-${index}`}>
                                                    <FontAwesomeIcon icon={faAngleRight} className={cert.color} /> {cert.text}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Empanelments Tab */}
                            <div id="collapseEmpanelments" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-md-10">
                                        <ul className="list-unstyled mb-4">
                                            {empanelmentsData.map((item, index) => (
                                                <li className="py-1" key={`empanelment-${index}`}>
                                                    <FontAwesomeIcon icon={faAngleRight} className={item.color} /> {item.text}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Experience Tab */}
                            <div id="collapseExperience" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-md-10">
                                        <ul className="list-unstyled mb-4">
                                            {experienceData.map((item, index) => (
                                                <li className="py-1" key={`experience-${index}`}>
                                                    <FontAwesomeIcon icon={faAngleRight} className={item.color} />
                                                    <span
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="right"
                                                        className="custom-tooltip"
                                                        title={item.tooltip}
                                                    >
                            {' '}{item.text}
                          </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CredentialsSection;