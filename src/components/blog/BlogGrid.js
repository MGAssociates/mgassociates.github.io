import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard';

/**
 * Blog Grid component for displaying a grid of blog cards
 * @param {Array} blogs - Array of blog data objects
 */
const BlogGrid = ({ blogs }) => {
    // Add a check to prevent mapping over undefined
    if (!blogs || !Array.isArray(blogs)) {
        return <div>No blogs available</div>; // Or any loading state UI
    }

    return (
        <div className="row g-4">
            {blogs.map((blog) => (
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s" key={blog.id}>
                    <Link to={`/blog/${blog.id}`}>
                        <BlogCard blog={blog} />
                    </Link>
                </div>
            ))}
        </div>
    );
};

BlogGrid.propTypes = {
    blogs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            altText: PropTypes.string.isRequired
        })
    ).isRequired
};

export default BlogGrid;