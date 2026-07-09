const Product = require('../models/Product');
const Setting = require('../models/Setting');

exports.home = async (req, res, next) => {
  try {
    const q = (req.query.q || '').trim();
    const filter = q ? { name: { $regex: q, $options: 'i' } } : {};

    const [products, setting, categories, featuredCount, totalProducts] = await Promise.all([
      Product.find(filter).sort({ featured: -1, createdAt: -1 }).lean(),
      Setting.findOne().lean(),
      Product.distinct('category'),
      Product.countDocuments({ featured: true }),
      Product.countDocuments()
    ]);

    res.render('user/home', {
      title: 'Trang chủ',
      products,
      q,
      categories,
      featuredCount,
      totalProducts,
      setting: setting || {}
    });
  } catch (err) {
    next(err);
  }
};

exports.detail = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id).lean();
    if (!product) return res.status(404).send('Không tìm thấy sản phẩm');

    const [setting, relatedProducts] = await Promise.all([
      Setting.findOne().lean(),
      Product.find({ _id: { $ne: product._id }, category: product.category }).limit(3).lean()
    ]);

    res.render('user/detail', {
      title: product.name,
      product,
      relatedProducts,
      setting: setting || {}
    });
  } catch (err) {
    next(err);
  }
};

exports.contactRedirect = async (req, res, next) => {
  try {
    const setting = await Setting.findOne().lean();
    const link = setting?.contactLink || '/';
    return res.redirect(link);
  } catch (err) {
    next(err);
  }
};
