// test-api.js
// Save this file and run it with Node.js to test your API endpoint directly

const fetch = require('node-fetch'); // You might need to install this: npm install node-fetch

async function testBlogAPI() {
    try {
        console.log('Testing API endpoint...');
        const response = await fetch('http://localhost:8000/api/blog');

        if (!response.ok) {
            throw new Error(`API error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log('API Response:');
        console.log(JSON.stringify(data, null, 2)); // Pretty print the JSON
        console.log(`Retrieved ${data.length} blog posts`);

        // Check if the data has the expected structure
        if (data.length > 0) {
            const firstItem = data[0];
            console.log('\nFirst blog post structure:');
            console.log(Object.keys(firstItem));

            // Check for required fields
            const requiredFields = ['_id', 'title', 'image', 'summary', 'content', 'slug'];
            const missingFields = requiredFields.filter(field => !firstItem[field]);

            if (missingFields.length > 0) {
                console.log(`\nWARNING: Missing required fields: ${missingFields.join(', ')}`);
            } else {
                console.log('\nAll required fields are present');
            }
        }
    } catch (error) {
        console.error('Test failed:', error);
    }
}

testBlogAPI();