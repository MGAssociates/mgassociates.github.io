import React from 'react';
import PropTypes from 'prop-types';

/**
 * Section Header component for page sections
 * @param {string} subtitle - The subtitle text (smaller text above title)
 * @param {string} title - The main title text
 */
const SectionHeader = ({ subtitle, title }) => {
    return (
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: '800px'}}>
            <h4 className="text-primary" style={{paddingTop: '20px'}}>{subtitle}</h4>
            <h1 className="display-5 mb-4">{title}</h1>
        </div>
    );
};

SectionHeader.propTypes = {
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default SectionHeader;