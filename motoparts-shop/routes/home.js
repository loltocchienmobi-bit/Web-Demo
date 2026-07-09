const router = require('express').Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.home);
router.get('/product/:id', homeController.detail);
router.get('/contact', homeController.contactRedirect);

module.exports = router;
