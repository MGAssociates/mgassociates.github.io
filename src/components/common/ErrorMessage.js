import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * Reusable error message component
 * @param {string} message - Error message to display
 */
const ErrorMessage = ({ message }) => {
    return (
        <div className="container py-5 text-center">
            <h2 className="text-danger">{message}</h2>
            <p>Sorry, the requested content could not be found. Please try again.</p>
            <Link to="/blog" className="btn btn-primary mt-3">Back to Blogs</Link>
        </div>
    );
};

ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired
};

export default ErrorMessage;