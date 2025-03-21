// File: src/components/common/Breadcrumb.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ title, links }) => {
    return (
        <div className="container-fluid bg-breadcrumb">
            <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
                <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">{title}</h4>
                <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                    {links.map((link, index) => (
                        <li key={index} className={`breadcrumb-item ${link.active ? 'active text-primary' : ''}`}>
                            {link.active ? link.name : <Link to={link.path}>{link.name}</Link>}
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default Breadcrumb;