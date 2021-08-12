const bookstall = require('./bookstall');

const router = require('express').Router();

router.use('/api',bookstall);

module.exports = router;
