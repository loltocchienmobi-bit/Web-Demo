const router = require('express').Router();
router.use('/', require('./home'));
router.use('/admin', require('./admin'));
module.exports = router;
