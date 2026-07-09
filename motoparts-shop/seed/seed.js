require('dotenv').config();
const bcrypt = require('bcryptjs');
const connectDB = require('../config/db');
const User = require('../models/User');
const Product = require('../models/Product');
const Setting = require('../models/Setting');

const gallery = (primary) => [
  primary,
  primary === '/images/product-exhaust.png' ? '/images/hero-showroom.png' : '/images/product-exhaust.png',
  primary === '/images/product-battery.png' ? '/images/hero-showroom.png' : '/images/product-battery.png'
];

async function main() {
  await connectDB(process.env.MONGODB_URI);

  await Promise.all([
    User.deleteMany({}),
    Product.deleteMany({}),
    Setting.deleteMany({})
  ]);

  const adminPassword = await bcrypt.hash('admin123', 10);
  await User.create({ username: 'admin', password: adminPassword, role: 'admin' });

  await Setting.create({
    websiteName: 'MotoParts Shop',
    logoText: 'MotoParts',
    contactLink: 'https://zalo.me/0988888888',
    contactLabel: 'Liên hệ mua hàng',
    facebookLink: 'https://facebook.com/',
    zaloLink: 'https://zalo.me/0988888888',
    tiktokLink: 'https://tiktok.com/',
    shopeeLink: 'https://shopee.vn/'
  });

  await Product.create([
    {
      name: 'Pô độ SH 150i',
      slug: 'po-do-sh-150i',
      price: 1850000,
      category: 'Pô xe máy',
      brand: 'Honda',
      bikeModel: 'SH 150i',
      description: 'Pô thiết kế thể thao, âm thanh uy lực, phù hợp cho xe SH 150i.',
      stock: 12,
      featured: true,
      image: '/images/product-exhaust.png',
      images: gallery('/images/product-exhaust.png')
    },
    {
      name: 'Bình ắc quy xe máy 12V',
      slug: 'binh-ac-quy-xe-may-12v',
      price: 420000,
      category: 'Ắc quy',
      brand: 'Honda/Yamaha',
      bikeModel: 'Nhiều dòng xe',
      description: 'Bình ắc quy chất lượng ổn định, phù hợp nhiều mẫu xe tay ga và xe số.',
      stock: 30,
      featured: true,
      image: '/images/product-battery.png',
      images: gallery('/images/product-battery.png')
    },
    {
      name: 'Lọc gió độ Winner X',
      slug: 'loc-gio-do-winner-x',
      price: 260000,
      category: 'Lọc gió',
      brand: 'Honda',
      bikeModel: 'Winner X',
      description: 'Lọc gió lưu lượng cao, hỗ trợ xe thoáng máy và phản hồi ga tốt hơn.',
      stock: 18,
      featured: false,
      image: '/images/hero-showroom.png',
      images: gallery('/images/hero-showroom.png')
    },
    {
      name: 'Phuộc sau bình dầu Exciter',
      slug: 'phuoc-sau-binh-dau-exciter',
      price: 1250000,
      category: 'Phuộc xe',
      brand: 'Yamaha',
      bikeModel: 'Exciter 150/155',
      description: 'Phuộc sau bình dầu tăng độ ổn định, phù hợp đi phố và đi tour nhẹ.',
      stock: 8,
      featured: true,
      image: '/images/hero-showroom.png',
      images: gallery('/images/hero-showroom.png')
    },
    {
      name: 'Heo dầu trước 2 piston',
      slug: 'heo-dau-truoc-2-piston',
      price: 890000,
      category: 'Phanh xe',
      brand: 'Universal',
      bikeModel: 'Nhiều dòng xe',
      description: 'Heo dầu trước lực bóp ổn định, hoàn thiện kim loại chắc chắn.',
      stock: 15,
      featured: false,
      image: '/images/product-exhaust.png',
      images: gallery('/images/product-exhaust.png')
    },
    {
      name: 'Đĩa thắng trước CNC',
      slug: 'dia-thang-truoc-cnc',
      price: 520000,
      category: 'Phanh xe',
      brand: 'Universal',
      bikeModel: 'Vario, Air Blade, SH Mode',
      description: 'Đĩa thắng CNC thoát nhiệt tốt, thiết kế thể thao, dễ lắp đặt.',
      stock: 22,
      featured: false,
      image: '/images/hero-showroom.png',
      images: gallery('/images/hero-showroom.png')
    },
    {
      name: 'Bao tay cao su chống trượt',
      slug: 'bao-tay-cao-su-chong-truot',
      price: 95000,
      category: 'Phụ kiện',
      brand: 'Universal',
      bikeModel: 'Nhiều dòng xe',
      description: 'Bao tay mềm, bám tốt, giảm mỏi tay khi chạy xe hằng ngày.',
      stock: 60,
      featured: false,
      image: '/images/product-exhaust.png',
      images: gallery('/images/product-exhaust.png')
    },
    {
      name: 'Gương gù tay lái nhôm',
      slug: 'guong-gu-tay-lai-nhom',
      price: 330000,
      category: 'Phụ kiện',
      brand: 'Universal',
      bikeModel: 'Naked bike, scooter',
      description: 'Gương gù tay lái vỏ nhôm, góc nhìn rộng, dáng gọn hiện đại.',
      stock: 25,
      featured: true,
      image: '/images/hero-showroom.png',
      images: gallery('/images/hero-showroom.png')
    },
    {
      name: 'Nhông sên dĩa Sirius',
      slug: 'nhong-sen-dia-sirius',
      price: 380000,
      category: 'Truyền động',
      brand: 'Yamaha',
      bikeModel: 'Sirius',
      description: 'Bộ nhông sên dĩa bền, vận hành êm, phù hợp thay thế định kỳ.',
      stock: 17,
      featured: false,
      image: '/images/product-battery.png',
      images: gallery('/images/product-battery.png')
    },
    {
      name: 'Đèn trợ sáng bi LED mini',
      slug: 'den-tro-sang-bi-led-mini',
      price: 690000,
      category: 'Đèn xe',
      brand: 'Universal',
      bikeModel: 'Nhiều dòng xe',
      description: 'Đèn trợ sáng nhỏ gọn, ánh sáng gom tốt, phù hợp đi đêm và đi tour.',
      stock: 10,
      featured: true,
      image: '/images/hero-showroom.png',
      images: gallery('/images/hero-showroom.png')
    },
    {
      name: 'Dầu nhớt tổng hợp 10W40',
      slug: 'dau-nhot-tong-hop-10w40',
      price: 185000,
      category: 'Bảo dưỡng',
      brand: 'Universal',
      bikeModel: 'Xe số, xe côn tay',
      description: 'Dầu nhớt tổng hợp giúp máy êm, ổn định nhiệt và bảo vệ động cơ.',
      stock: 45,
      featured: false,
      image: '/images/product-exhaust.png',
      images: gallery('/images/product-exhaust.png')
    },
    {
      name: 'Bugi Iridium xe tay ga',
      slug: 'bugi-iridium-xe-tay-ga',
      price: 210000,
      category: 'Bảo dưỡng',
      brand: 'Honda/Yamaha',
      bikeModel: 'Xe tay ga',
      description: 'Bugi Iridium đánh lửa ổn định, hỗ trợ xe đề nhẹ và tiết kiệm nhiên liệu.',
      stock: 28,
      featured: false,
      image: '/images/product-battery.png',
      images: gallery('/images/product-battery.png')
    }
  ]);

  console.log('Seed completed');
  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
