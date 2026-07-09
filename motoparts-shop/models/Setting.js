const mongoose = require('mongoose');

const settingSchema = new mongoose.Schema(
  {
    websiteName: { type: String, default: 'MotoParts Shop' },
    logoText: { type: String, default: 'MotoParts' },
    contactLink: { type: String, default: 'https://zalo.me/' },
    facebookLink: { type: String, default: '' },
    zaloLink: { type: String, default: '' },
    tiktokLink: { type: String, default: '' },
    shopeeLink: { type: String, default: '' },
    contactLabel: { type: String, default: 'Liên hệ mua hàng' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Setting', settingSchema);
