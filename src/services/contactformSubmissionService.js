const ACCESS_KEY = 'e45fcb9e-5218-466d-ad31-f1cab24d4bfe';

/**
 * Submits form data to the web3forms API
 * @param {Object} formData - The form data to submit
 * @returns {Promise<Object>} - Response with success status and any error messages
 */
export const submitContactForm = async (formData) => {
    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                access_key: ACCESS_KEY,
                ...formData
            }),
        });

        const data = await response.json();
        
        if (response.ok) {
            return { success: true };
        } else {
            return { 
                success: false, 
                error: data.message || 'There was an error. Please try again.' 
            };
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        return { 
            success: false, 
            error: 'Network error. Please check your connection.' 
        };
    }
};