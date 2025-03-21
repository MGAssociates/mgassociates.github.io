// File: services/formSubmissionService.js
export const submitApplicationForm = async (formData) => {
    try {
        // Create form data to send file
        const formDataToSend = new FormData();
        Object.keys(formData).forEach(key => {
            formDataToSend.append(key, formData[key]);
        });
        formDataToSend.append('access_key', 'e45fcb9e-5218-466d-ad31-f1cab24d4bfe');

        // API submission
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formDataToSend
        });

        if (response.ok) {
            return { success: true };
        } else {
            return { success: false, error: 'Server error' };
        }
    } catch (error) {
        console.error('Form submission error:', error);
        return { success: false, error: error.message };
    }
};