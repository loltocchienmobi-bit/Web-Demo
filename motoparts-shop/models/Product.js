const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    category: { type: String, required: true, trim: true },
    brand: { type: String, required: true, trim: true },
    bikeModel: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    image: { type: String, default: '/uploads/default-product.png' },
    images: [{ type: String }],
    stock: { type: Number, default: 0, min: 0 },
    featured: { type: Boolean, default: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
