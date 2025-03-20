import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';

// Import components
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import CareerPage from './pages/CareerPage';
import CareerFormPage from './pages/CareerFormPage';
import ContactPage from './pages/ContactPage';

function App() {
  // Set the basename to '/mga' for GitHub Pages
  const basename = process.env.NODE_ENV === 'production' ? '/mga' : '/';

  // Move useEffect inside the component
  useEffect(() => {
    const loadScripts = async () => {
      try {
        const jQuery = await import('jquery');
        window.$ = window.jQuery = jQuery.default;
        await import('bootstrap/dist/js/bootstrap.bundle.min.js');
      } catch (err) {
        console.error("Failed to load scripts", err);
      }
    };

    loadScripts();
  }, []);

  return (
      <Router basename={basename}>
        <div className="App">
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
        </div>
      </Router>
  );
}

export default App;