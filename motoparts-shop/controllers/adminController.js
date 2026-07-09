const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Product = require('../models/Product');
const Setting = require('../models/Setting');

const slugify = value => value
  .toLowerCase()
  .trim()
  .replace(/[^a-z0-9\u00C0-\u1EF9]+/gi, '-')
  .replace(/^-+|-+$/g, '');

exports.loginForm = async (req, res, next) => {
  try {
    const setting = (await Setting.findOne().lean()) || {};
    res.render('admin/login', { title: 'Đăng nhập Admin', setting });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const [user, setting] = await Promise.all([
      User.findOne({ username }),
      Setting.findOne().lean()
    ]);

    if (!user) {
      return res.render('admin/login', {
        title: 'Đăng nhập Admin',
        setting: setting || {},
        error: 'Sai tài khoản hoặc mật khẩu'
      });
    }

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) {
      return res.render('admin/login', {
        title: 'Đăng nhập Admin',
        setting: setting || {},
        error: 'Sai tài khoản hoặc mật khẩu'
      });
    }

    req.session.user = { id: user._id, username: user.username, role: user.role };
    return res.redirect('/admin');
  } catch (err) {
    next(err);
  }
};

exports.logout = (req, res) => {
  req.session.destroy(() => res.redirect('/admin/login'));
};

exports.dashboard = async (req, res, next) => {
  try {
    const [userCount, productCount, featuredCount, lowStockCount, setting] = await Promise.all([
      User.countDocuments(),
      Product.countDocuments(),
      Product.countDocuments({ featured: true }),
      Product.countDocuments({ stock: { $lte: 5 } }),
      Setting.findOne().lean()
    ]);

    res.render('admin/dashboard', {
      title: 'Dashboard',
      userCount,
      productCount,
      featuredCount,
      lowStockCount,
      setting: setting || {}
    });
  } catch (err) {
    next(err);
  }
};

exports.listProducts = async (req, res, next) => {
  try {
    const [products, setting] = await Promise.all([
      Product.find().sort({ createdAt: -1 }).lean(),
      Setting.findOne().lean()
    ]);
    res.render('admin/products/list', {
      title: 'Quản lý sản phẩm',
      products,
      setting: setting || {}
    });
  } catch (err) {
    next(err);
  }
};

exports.newProductForm = async (req, res, next) => {
  try {
    const setting = (await Setting.findOne().lean()) || {};
    res.render('admin/products/form', {
      title: 'Thêm sản phẩm',
      product: {},
      formAction: '/admin/products',
      method: 'POST',
      setting
    });
  } catch (err) {
    next(err);
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    const { name, price, category, brand, bikeModel, description, stock, featured } = req.body;
    const uploadedImages = (req.files || []).map(file => `/uploads/${file.filename}`);
    const image = uploadedImages[0] || '/uploads/default-product.png';

    await Product.create({
      name,
      slug: slugify(name),
      price,
      category,
      brand,
      bikeModel,
      description,
      stock: Number(stock || 0),
      featured: featured === 'on',
      image,
      images: uploadedImages.length ? uploadedImages : [image]
    });

    res.redirect('/admin/products');
  } catch (err) {
    next(err);
  }
};

exports.editProductForm = async (req, res, next) => {
  try {
    const [product, setting] = await Promise.all([
      Product.findById(req.params.id).lean(),
      Setting.findOne().lean()
    ]);
    if (!product) return res.status(404).send('Không tìm thấy sản phẩm');

    res.render('admin/products/form', {
      title: 'Sửa sản phẩm',
      product,
      formAction: `/admin/products/${product._id}?_method=PUT`,
      method: 'POST',
      setting: setting || {}
    });
  } catch (err) {
    next(err);
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const update = { ...req.body };
    update.stock = Number(update.stock || 0);
    update.featured = update.featured === 'on';
    if (req.files && req.files.length) {
      const uploadedImages = req.files.map(file => `/uploads/${file.filename}`);
      update.image = uploadedImages[0];
      update.images = uploadedImages;
    }
    update.slug = slugify(update.name);

    await Product.findByIdAndUpdate(req.params.id, update, { runValidators: true });
    res.redirect('/admin/products');
  } catch (err) {
    next(err);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/admin/products');
  } catch (err) {
    next(err);
  }
};

exports.settingsForm = async (req, res, next) => {
  try {
    const setting = (await Setting.findOne().lean()) || {};
    res.render('admin/settings', { title: 'Cài đặt website', setting });
  } catch (err) {
    next(err);
  }
};

exports.saveSettings = async (req, res, next) => {
  try {
    const payload = req.body;
    let setting = await Setting.findOne();
    if (!setting) setting = new Setting(payload);
    else Object.assign(setting, payload);
    await setting.save();
    res.redirect('/admin/settings');
  } catch (err) {
    next(err);
  }
};
