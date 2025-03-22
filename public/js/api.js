const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:8000/api' : '/api';

// Fetch services
async function getServices() {
    try {
        const response = await fetch(`${API_URL}/services`);
        if (!response.ok) {
            throw new Error('Failed to fetch services');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching services:', error);
        return [];
    }
}

// Fetch single service by slug
async function getServiceBySlug(slug) {
    try {
        const response = await fetch(`${API_URL}/services/${slug}`);
        if (!response.ok) {
            throw new Error('Failed to fetch service');
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching service with slug ${slug}:`, error);
        return null;
    }
}

// Fetch team members
async function getTeamMembers() {
    try {
        const response = await fetch(`${API_URL}/team`);
        if (!response.ok) {
            throw new Error('Failed to fetch team members');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching team members:', error);
        return [];
    }
}

// Fetch testimonials
async function getTestimonials() {
    try {
        const response = await fetch(`${API_URL}/testimonials`);
        if (!response.ok) {
            throw new Error('Failed to fetch testimonials');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching testimonials:', error);
        return [];
    }
}

// Fetch partners
async function getPartners() {
    try {
        const response = await fetch(`${API_URL}/partners`);
        if (!response.ok) {
            throw new Error('Failed to fetch partners');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching partners:', error);
        return [];
    }
}

// Fetch credentials by type
async function getCredentialsByType(type) {
    try {
        const response = await fetch(`${API_URL}/credentials/${type}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch credentials for type: ${type}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching credentials for type ${type}:`, error);
        return [];
    }
}

// Fetch all credentials
async function getAllCredentials() {
    try {
        const response = await fetch(`${API_URL}/credentials`);
        if (!response.ok) {
            throw new Error('Failed to fetch credentials');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching credentials:', error);
        return [];
    }
}

// Fetch stats
async function getStats() {
    try {
        const response = await fetch(`${API_URL}/stats`);
        if (!response.ok) {
            throw new Error('Failed to fetch stats');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching stats:', error);
        return [];
    }
}

// Fetch industries
async function getIndustries() {
    try {
        const response = await fetch(`${API_URL}/industries`);
        if (!response.ok) {
            throw new Error('Failed to fetch industries');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching industries:', error);
        return [];
    }
}
