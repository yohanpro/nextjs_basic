const express = require('express');
const router = express.Router();

const blogCtrl = require('../controllers/blog');
const authService = require('../services/auth');


router.post('',
    authService.checkJWT,
    authService.checkRole('siteOwner'),
    blogCtrl.createBlog);

router.get('/:id',
    authService.checkJWT,
    authService.checkRole('siteOwner'),
    blogCtrl.getBlogById);

// router.get('', blogCtrl.getBooks);

// router.patch('/:id', blogCtrl.updateBook);

// router.delete('/:id', blogCtrl.deleteBook);

module.exports = router;


