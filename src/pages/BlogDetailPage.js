import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBlogById } from '../data/blog/blogData';
import { getBlogPostById } from '../data/blog/api';
import BlogContent from '../components/blog/BlogContent';
import Loader from '../components/common/Loader';
import ErrorMessage from '../components/common/ErrorMessage';

const BlogDetailPage = () => {
    const { blogId } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Simulate data fetching from API
        setTimeout(() => {
            const blogData = getBlogPostById(blogId);
            if (blogData) {
                setBlog(blogData);
                setLoading(false);
            } else {
                setError('Blog not found');
                setLoading(false);
            }
        }, 300);
    }, [blogId]);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <ErrorMessage message={error} />;
    }

    return (
        <>
            {/* Breadcrumb */}
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{maxWidth: '900px'}}>
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Blogs</h4>
                    <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/blog">Blogs</Link></li>
                        <li className="breadcrumb-item active text-primary">{blog.title}</li>
                    </ol>
                </div>
            </div>

            {/* Blog Detail Content */}
            <div className="container-fluid about py-3">
                <div className="container py-3">
                    <div className="row g-5 align-items-center">
                        <div className="col-xl-7 wow fadeInLeft" data-wow-delay="0.2s">
                            <div>
                                <h1 className="display-5 mb-4" style={{fontSize: '30px'}}>{blog.title}</h1>
                                <BlogContent content={blog.content} />
                            </div>
                        </div>
                        <div className="col-xl-5 wow fadeInRight" data-wow-delay="0.2s">
                            <div className="bg-primary rounded position-relative overflow-hidden">
                                <img src={`/${blog.image}`} className="img-fluid rounded w-100" alt={blog.altText} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetailPage;