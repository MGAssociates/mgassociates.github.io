import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * Blog Card component for displaying a blog preview
 * @param {Object} blog - Blog data object
 */
const BlogCard = ({ blog }) => {
    // If blog object is missing or malformed, render nothing
    if (!blog) return null;

    // Extract needed fields with fallbacks
    const {
        _id = '',
        id = _id, // Use _id as fallback if id doesn't exist
        title = 'Untitled Blog',
        summary = '',
        description = summary, // Use summary as fallback if description doesn't exist
        image = '',
        altText = title // Use title as fallback for alt text
    } = blog;

    // Use either id or _id, whichever is available
    const blogId = id || _id;

    return (
        <div className="service-item">
            <div className="service-img">
                <img
                    src={image}
                    className="img-fluid rounded-top w-100"
                    alt={altText}
                />
            </div>
            <div className="rounded-bottom p-4">
                <Link
                    to={`/blog/${blogId}`}
                    className="h4 d-inline-block mb-3"
                >
                    {title}
                </Link>
                <p className="mb-4">{description}</p>
                <Link
                    to={`/blog/${blogId}`}
                    className="btn btn-primary rounded-pill py-2 px-4"
                >
                    Read More
                </Link>
            </div>
        </div>
    );
};

BlogCard.propTypes = {
    blog: PropTypes.shape({
        _id: PropTypes.string,
        id: PropTypes.string,
        title: PropTypes.string,
        summary: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.string,
        altText: PropTypes.string
    }).isRequired
};

export default BlogCard;