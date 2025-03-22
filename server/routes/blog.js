const express = require('express');
const router = express.Router();
const {
    BlogPost
} = require('../models');

// GET all blog posts
router.get('/blog', async (req, res) => {
    try {
        const blogs = await BlogPost.find().sort({ publishedAt: -1 });
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET single blog post by slug
router.get('/blog/:slug', async (req, res) => {
    try {
        const blog = await BlogPost.findOne({ slug: req.params.slug });
        if (!blog) {
            return res.status(404).json({ message: 'Blog post not found' });
        }
        res.json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET single blog post by ID
router.get('/blog/id/:id', async (req, res) => {
    try {
        const blog = await BlogPost.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog post not found' });
        }
        res.json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;