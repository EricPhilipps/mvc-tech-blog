const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
        });
    }
    catch (err) {
        res.status(500).json(err);
    };
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    // if (req.session.logged_in) {
    //   res.redirect('/posts');
    //   return;
    // }
  
    res.render('login');
});

router.get('/signup', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    // if (req.session.logged_in) {
    //   res.redirect('/posts');
    //   return;
    // }
  
    res.render('signup');
});

router.get('/posts', (req, res) => {
  
    res.render('posts');
});

module.exports = router;