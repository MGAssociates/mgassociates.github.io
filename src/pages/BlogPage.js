import React, {useEffect, useState} from 'react';
import {getAllBlogs} from '../data/blogData';
import SectionHeader from '../components/common/SectionHeader';
import BlogGrid from '../components/blog/BlogGrid';

/**
 * Blog Page component to display all blog posts
 */
const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate API call to get blogs
        const fetchBlogs = async () => {
            try {
                // Get blogs from data source
                const data = getAllBlogs();
                setBlogs(data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <>
            {/* Blog Section */}
            <div className="container-fluid service pb-5">
                <div className="container pb-5">
                    <SectionHeader
                        subtitle="Our Blogs & Financial News"
                        title="Future Insights"
                    />

                    {loading ? (
                        <div className="text-center py-4">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <BlogGrid blogs={blogs} />
                    )}
                </div>
            </div>
        </>
    );
};

export default BlogPage;