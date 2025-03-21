// File: src/pages/ServiceDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Breadcrumb from '../components/services/Breadcrumb';
import ServiceDetailContent from '../components/services/ServiceDetailContent';
import LoadingSpinner from '../components/common/Loader';
import ErrorMessage from '../components/common/ErrorMessage';
import { getServiceById } from '../data/serviceData';

const ServiceDetailPage = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Simulate data fetching from API
        setTimeout(() => {
            const serviceData = getServiceById(serviceId);
            if (serviceData) {
                setService(serviceData);
                setLoading(false);
            } else {
                setError('Service not found');
                setLoading(false);
            }
        }, 300);
    }, [serviceId]);

    if (loading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <ErrorMessage message={error} />;
    }

    return (
        <>
            <Breadcrumb 
                title={service.title} 
                links={[
                    { name: 'Home', path: '/' },
                    { name: 'Services', path: '/services' },
                    { name: service.title, path: `/services/${serviceId}`, active: true }
                ]} 
            />
            <ServiceDetailContent service={service} />
        </>
    );
};

export default ServiceDetailPage;