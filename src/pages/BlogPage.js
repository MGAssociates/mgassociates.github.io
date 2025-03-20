import React from 'react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
    // Blog data
    const blogs = [
        {
            id: 'budget-2025',
            title: 'Budget 2025: A Win for the Common Man or Big Corporations?',
            description: 'Examining whether Budget 2025 benefits individuals or corporate giants.',
            image: 'img/blog/Budget 2025.png',
            altText: 'Financial Impact and Implications for Individuals and Corporations'
        },
        {
            id: 'struggling-with-business-problems',
            title: 'Struggling with Business Problems? MGA Group is Here to Help!',
            description: 'MGA Group provides expert solutions for business challenges and growth.',
            image: 'img/blog/Struggling with Business Problems.png',
            altText: 'MGA Group Business Solutions for Overcoming Business Challenges'
        },
        {
            id: 'understanding-budget-2025',
            title: 'Understanding Budget 2025: Benefits, Impact, and How MGA Group Can Help',
            description: 'Learn about Budget 2025\'s impact and maximize your financial benefits.',
            image: 'img/blog/Understanding Budget 2025.png',
            altText: 'Key Benefits and Impacts for Businesses and Individuals'
        },
        {
            id: 'mga-business-growth',
            title: 'MGA Group: Your Business\'s Silent Partner in Compliance & Growth',
            description: 'MGA Group ensures financial compliance, tax efficiency, and marketing success.',
            image: 'img/blog/MGA Your Business\'s Silent.png',
            altText: 'Driving Business Growth and Financial Compliance for Entrepreneurs'
        }
    ];

    return (
        <>
            {/* Breadcrumb */}
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{maxWidth: '900px'}}>
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Blogs</h4>
                    <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active text-primary">Blogs</li>
                    </ol>
                </div>
            </div>

            {/* Blog Section */}
            <div className="container-fluid service pb-5">
                <div className="container pb-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: '800px'}}>
                        <h4 className="text-primary" style={{paddingTop: '20px'}}>Our Blogs & Financial News</h4>
                        <h1 className="display-5 mb-4">Future Insights</h1>
                    </div>

                    <div className="row g-4">
                        {blogs.map((blog, index) => (
                            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s" key={blog.id}>
                                <Link to={`/blog/${blog.id}`}>
                                    <div className="service-item">
                                        <div className="service-img">
                                            <img src={blog.image} className="img-fluid rounded-top w-100" alt={blog.altText} />
                                        </div>
                                        <div className="rounded-bottom p-4">
                                            <Link to={`/blog/${blog.id}`} className="h4 d-inline-block mb-3">{blog.title}</Link>
                                            <p className="mb-4">{blog.description}</p>
                                            <Link to={`/blog/${blog.id}`} className="btn btn-primary rounded-pill py-2 px-4">Read More</Link>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogPage;