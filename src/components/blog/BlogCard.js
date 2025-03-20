import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * Blog Card component for displaying a blog preview
 * @param {Object} blog - Blog data object containing id, title, description, image, altText
 */
const BlogCard = ({ blog }) => {
    return (
        <div className="service-item">
            <div className="service-img">
                <img
                    src={blog.image}
                    className="img-fluid rounded-top w-100"
                    alt={blog.altText}
                />
            </div>
            <div className="rounded-bottom p-4">
                <Link
                    to={`/blog/${blog.id}`}
                    className="h4 d-inline-block mb-3"
                >
                    {blog.title}
                </Link>
                <p className="mb-4">{blog.description}</p>
                <Link
                    to={`/blog/${blog.id}`}
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
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        altText: PropTypes.string.isRequired
    }).isRequired
};

export default BlogCard;