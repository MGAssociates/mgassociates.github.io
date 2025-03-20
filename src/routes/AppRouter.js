import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Import components
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ServicesPage from '../pages/ServicesPage';
import ServiceDetailPage from '../pages/ServiceDetailPage';
import BlogPage from '../pages/BlogPage';
import BlogDetailPage from '../pages/BlogDetailPage';
import CareerPage from '../pages/CareerPage';
import CareerFormPage from '../pages/CareerFormPage';
import ContactPage from '../pages/ContactPage';

// Import Swiper CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const AppRouter = () => {
    // Set the basename to '/' for HashRouter
    const basename = '/';

    // Load bootstrap scripts when component mounts
    useEffect(() => {
        const loadScripts = async () => {
            try {
                // Only load bootstrap - don't try to load jQuery
                await import('bootstrap/dist/js/bootstrap.bundle.min.js');
            } catch (err) {
                console.error("Failed to load bootstrap scripts", err);
            }
        };

        loadScripts();
    }, []);

    return (
        <Router basename={basename}>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:blogId" element={<BlogDetailPage />} />
                <Route path="/career" element={<CareerPage />} />
                <Route path="/career-form" element={<CareerFormPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default AppRouter;