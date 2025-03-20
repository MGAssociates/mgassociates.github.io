import React from 'react';

const PresenceSection = () => {
    return (
        <div className="container-fluid offer-section pb-5">
            <div className="container pb-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
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
    );
};

export default PresenceSection;