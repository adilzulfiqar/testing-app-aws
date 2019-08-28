const express = require('express');
const router = express.Router();

const Blog = require('../../Models/blog');

// Get Api 
router.get('/blog', (req, res) => {
    Blog.find().then(data => res.json(data))
})

// Post Api
router.post('/blog', (req, res) => {
    const newBlog = new Blog({
        heading: req.body.heading,
        description: req.body.description
    });
    newBlog.save()
        .then(data => res.json(data))
        .catch(e => console.log('error', e))
})

module.exports = router;