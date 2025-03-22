// API client with data mapping for React components
const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:8000/api' : '/api';

// Fetch blog posts with data transformation
/**
 * Fetch all blog posts from the API
 * @returns {Promise<Array>} Array of blog posts
 */
export async function getBlogPosts() {
    try {
        console.log('Fetching blogs from:', `${API_URL}/blog`);
        const response = await fetch(`${API_URL}/blog`);

        if (!response.ok) {
            throw new Error(`API error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Raw API response:', data);

        // Transform data if needed
        return data.map(blog => ({
            id: blog._id,
            title: blog.title,
            description: blog.summary || blog.description,
            image: blog.image,
            altText: blog.title,
            // Include any other fields you need
            slug: blog.slug,
            publishedAt: blog.publishedAt
        }));
    } catch (error) {
        console.error('Error in getBlogPosts:', error);
        // Rethrow the error so the component can handle it
        throw error;
    }
}

// Fetch single blog post by ID with data transformation
export async function getBlogPostById(id) {
    try {
        const response = await fetch(`${API_URL}/blog/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch blog post');
        }
        const blog = await response.json();

        // Transform data to match the expected format
        return {
            id: blog._id,
            title: blog.title,
            description: blog.summary,
            image: blog.image,
            altText: blog.title,
            slug: blog.slug,
            content: blog.content,
            publishedAt: blog.publishedAt
        };
    } catch (error) {
        console.error(`Error fetching blog post with id ${id}:`, error);
        return null;
    }
}
