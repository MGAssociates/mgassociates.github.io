import React, {useEffect, useState} from 'react';
import SectionHeader from '../components/common/SectionHeader';
import BlogGrid from '../components/blog/BlogGrid';
import { getBlogPosts } from '../data/blog/api';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchBlogs() {
            try {
                setLoading(true);
                const data = await getBlogPosts();
                console.log('Resolved blog data:', data); // Log the resolved data
                setBlogs(data);
            } catch (err) {
                console.error('Error fetching blogs:', err);
                setError('Failed to load blog posts');
            } finally {
                setLoading(false);
            }
        }

        fetchBlogs();
    }, []);

    if (loading) return <div>Loading blogs...</div>;
    if (error) return <div>{error}</div>;
    if (!blogs || blogs.length === 0) return <div>No blogs available</div>;

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