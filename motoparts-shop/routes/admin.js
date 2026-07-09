const router = require('express').Router();
const adminController = require('../controllers/adminController');
const { ensureAdmin } = require('../middleware/auth');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const uploadDir = path.join(__dirname, '..', 'public', 'uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (req, file, cb) => {
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, unique + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

router.get('/login', adminController.loginForm);
router.post('/login', adminController.login);
router.get('/logout', adminController.logout);

router.get('/', ensureAdmin, adminController.dashboard);
router.get('/products', ensureAdmin, adminController.listProducts);
router.get('/products/new', ensureAdmin, adminController.newProductForm);
router.post('/products', ensureAdmin, upload.array('images', 8), adminController.createProduct);
router.get('/products/:id/edit', ensureAdmin, adminController.editProductForm);
router.put('/products/:id', ensureAdmin, upload.array('images', 8), adminController.updateProduct);
router.delete('/products/:id', ensureAdmin, adminController.deleteProduct);
router.get('/settings', ensureAdmin, adminController.settingsForm);
router.post('/settings', ensureAdmin, adminController.saveSettings);

module.exports = router;
