const Blog = require('../models/book');


exports.createBlog = (req, res) => {
    const blogData = req.body;
    const blog = new Blog(blogData);


    if (req.user) {
        blog.userId = req.user.sub;
        blog.author = req.user.name;

    }
    blog.save((err, createdBlog) => {
        if (err) return res.status(422).send(err);

        return res.json(createdBlog);
    });
};









