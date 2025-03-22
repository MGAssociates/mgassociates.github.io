import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard';

/**
 * Blog Grid component for displaying a grid of blog cards
 * @param {Array} blogs - Array of blog data objects
 */
const BlogGrid = ({ blogs }) => {
    console.log('Blogs data:', blogs);

    // Add a check to prevent mapping over undefined
    if (!blogs || !Array.isArray(blogs) || blogs.length === 0) {
        return <div>No blogs available</div>; // Or any loading state UI
    }

    return (
        <div className="row g-4">
            {blogs.map((blog) => {
                // Get the unique identifier, preferring id but falling back to _id
                const uniqueId = blog.id || blog._id;

                return (
                    <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s" key={uniqueId}>
                        <Link to={`/blog/${uniqueId}`}>
                            <BlogCard blog={blog} />
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

BlogGrid.propTypes = {
    blogs: PropTypes.arrayOf(
        PropTypes.shape({
            // Allow for both id and _id fields
            id: PropTypes.string,
            _id: PropTypes.string,
            title: PropTypes.string,
            // Allow for both description and summary fields
            description: PropTypes.string,
            summary: PropTypes.string,
            image: PropTypes.string,
            // Make altText optional
            altText: PropTypes.string
        })
    ).isRequired
};

export default BlogGrid;