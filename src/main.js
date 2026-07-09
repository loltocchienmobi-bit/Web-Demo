const products = [
  ['Pô độ SH 150i', 1850000, 'Pô xe máy', 'Honda', 'SH 150i', 'Pô thiết kế thể thao, âm thanh uy lực, phù hợp cho xe SH 150i.', 'images/product-exhaust.png', true],
  ['Bình ắc quy xe máy 12V', 420000, 'Ắc quy', 'Honda/Yamaha', 'Nhiều dòng xe', 'Bình ắc quy chất lượng ổn định, phù hợp nhiều mẫu xe tay ga và xe số.', 'images/product-battery.png', true],
  ['Lọc gió độ Winner X', 260000, 'Lọc gió', 'Honda', 'Winner X', 'Lọc gió lưu lượng cao, hỗ trợ xe thoáng máy và phản hồi ga tốt hơn.', 'images/hero-showroom.png', false],
  ['Phuộc sau bình dầu Exciter', 1250000, 'Phuộc xe', 'Yamaha', 'Exciter 150/155', 'Phuộc sau bình dầu tăng độ ổn định, phù hợp đi phố và đi tour nhẹ.', 'images/hero-showroom.png', true],
  ['Heo dầu trước 2 piston', 890000, 'Phanh xe', 'Universal', 'Nhiều dòng xe', 'Heo dầu trước lực bóp ổn định, hoàn thiện kim loại chắc chắn.', 'images/product-exhaust.png', false],
  ['Đĩa thắng trước CNC', 520000, 'Phanh xe', 'Universal', 'Vario, Air Blade, SH Mode', 'Đĩa thắng CNC thoát nhiệt tốt, thiết kế thể thao, dễ lắp đặt.', 'images/hero-showroom.png', false],
  ['Bao tay cao su chống trượt', 95000, 'Phụ kiện', 'Universal', 'Nhiều dòng xe', 'Bao tay mềm, bám tốt, giảm mỏi tay khi chạy xe hằng ngày.', 'images/product-battery.png', false],
  ['Gương gù tay lái nhôm', 330000, 'Phụ kiện', 'Universal', 'Naked bike, scooter', 'Gương gù tay lái vỏ nhôm, góc nhìn rộng, dáng gọn hiện đại.', 'images/hero-showroom.png', true],
  ['Nhông sên dĩa Sirius', 380000, 'Truyền động', 'Yamaha', 'Sirius', 'Bộ nhông sên dĩa bền, vận hành êm, phù hợp thay thế định kỳ.', 'images/product-exhaust.png', false],
  ['Đèn trợ sáng bi LED mini', 690000, 'Đèn xe', 'Universal', 'Nhiều dòng xe', 'Đèn trợ sáng nhỏ gọn, ánh sáng gom tốt, phù hợp đi đêm và đi tour.', 'images/hero-showroom.png', true],
  ['Dầu nhớt tổng hợp 10W40', 185000, 'Bảo dưỡng', 'Universal', 'Xe số, xe côn tay', 'Dầu nhớt tổng hợp giúp máy êm, ổn định nhiệt và bảo vệ động cơ.', 'images/product-battery.png', false],
  ['Bugi Iridium xe tay ga', 210000, 'Bảo dưỡng', 'Honda/Yamaha', 'Xe tay ga', 'Bugi Iridium đánh lửa ổn định, hỗ trợ xe đề nhẹ và tiết kiệm nhiên liệu.', 'images/product-exhaust.png', false]
].map((item, index) => ({
  id: index + 1,
  name: item[0],
  price: item[1],
  category: item[2],
  brand: item[3],
  model: item[4],
  description: item[5],
  image: item[6],
  featured: item[7],
  stock: 8 + index * 3,
  images: [item[6], 'images/hero-showroom.png', index % 2 ? 'images/product-battery.png' : 'images/product-exhaust.png']
}));

const currency = value => value.toLocaleString('vi-VN') + ' đ';
const app = document.querySelector('#app');

function layout(content) {
  app.innerHTML = `
    <nav class="navbar">
      <a class="brand" href="#/"><span><i data-lucide="wrench"></i></span>MotoParts</a>
      <div><a href="#/">Sản phẩm</a><a href="https://zalo.me/0988888888" target="_blank">Liên hệ</a></div>
    </nav>
    ${content}
    <footer><strong>MotoParts</strong><span>Phụ tùng xe máy, đồ chơi xe và tư vấn nhanh.</span></footer>
  `;
  lucide.createIcons();
  setupEffects();
}

function home() {
  const categories = [...new Set(products.map(product => product.category))];
  layout(`
    <section class="hero">
      <div class="orbit orbit-a"></div><div class="orbit orbit-b"></div>
      <div class="hero-copy">
        <span class="eyebrow"><i data-lucide="sparkles"></i>Cửa hàng phụ tùng xe máy 4.0</span>
        <h1>Phụ tùng tốt, lên xe gọn, chốt đơn nhanh.</h1>
        <p>Website demo hiện đại cho shop phụ tùng xe máy, có catalog, ảnh sản phẩm, gallery và hiệu ứng sinh động.</p>
        <label class="search"><i data-lucide="search"></i><input id="searchInput" placeholder="Tìm pô, ắc quy, lọc gió..."></label>
        <div class="stats"><div><strong>${products.length}</strong><span>Sản phẩm</span></div><div><strong>${products.filter(p => p.featured).length}</strong><span>Nổi bật</span></div><div><strong>${categories.length}</strong><span>Danh mục</span></div></div>
      </div>
      <div class="hero-card"><div class="scanner"></div><img src="images/hero-showroom.png" alt="Showroom phụ tùng"></div>
    </section>
    <main class="section">
      <div class="heading"><div><span class="eyebrow">Catalog</span><h2>Sản phẩm mới nhất</h2></div><div class="pills">${categories.map(c => `<span>${c}</span>`).join('')}</div></div>
      <div id="grid" class="grid">${productCards(products)}</div>
    </main>
  `);
  document.querySelector('#searchInput').addEventListener('input', event => {
    const q = event.target.value.trim().toLowerCase();
    const filtered = products.filter(product => `${product.name} ${product.category} ${product.brand}`.toLowerCase().includes(q));
    document.querySelector('#grid').innerHTML = productCards(filtered);
    setupEffects();
  });
}

function productCards(list) {
  return list.map(product => `
    <article class="card reveal">
      <a class="media" href="#/product/${product.id}">${product.featured ? '<b>Nổi bật</b>' : ''}<img src="${product.image}" alt="${product.name}"></a>
      <div class="body"><small>${product.brand} / ${product.model}</small><h3><a href="#/product/${product.id}">${product.name}</a></h3><p>${product.description}</p><div><strong>${currency(product.price)}</strong><a class="icon" href="#/product/${product.id}"><i data-lucide="arrow-right"></i></a></div></div>
    </article>
  `).join('');
}

function detail(id) {
  const product = products.find(item => item.id === Number(id)) || products[0];
  layout(`
    <main class="detail">
      <a class="back" href="#/"><i data-lucide="arrow-left"></i>Quay lại catalog</a>
      <div class="detail-grid">
        <div class="gallery">
          <div class="main-image"><button class="prev"><i data-lucide="chevron-left"></i></button><img id="mainProductImage" src="${product.images[0]}" alt="${product.name}"><button class="next"><i data-lucide="chevron-right"></i></button></div>
          <div class="thumbs">${product.images.map((image, i) => `<button class="thumb ${i === 0 ? 'active' : ''}" data-image="${image}"><img src="${image}" alt="${product.name} ${i + 1}"></button>`).join('')}</div>
        </div>
        <div class="info"><span class="eyebrow">${product.category}</span><h1>${product.name}</h1><div class="price">${currency(product.price)}</div><p>${product.description}</p><div class="specs"><div><span>Hãng xe</span><b>${product.brand}</b></div><div><span>Dòng xe</span><b>${product.model}</b></div><div><span>Tồn kho</span><b>${product.stock}</b></div><div><span>Tình trạng</span><b>Còn hàng</b></div></div><a class="cta" href="https://zalo.me/0988888888" target="_blank"><i data-lucide="message-circle"></i>Liên hệ mua hàng</a></div>
      </div>
    </main>
  `);
  setupGallery();
}

function setupGallery() {
  const main = document.querySelector('#mainProductImage');
  const thumbs = [...document.querySelectorAll('.thumb')];
  let index = 0;
  const show = next => {
    index = (next + thumbs.length) % thumbs.length;
    main.src = thumbs[index].dataset.image;
    main.classList.remove('swap');
    void main.offsetWidth;
    main.classList.add('swap');
    thumbs.forEach(t => t.classList.remove('active'));
    thumbs[index].classList.add('active');
  };
  thumbs.forEach((thumb, i) => thumb.addEventListener('click', () => show(i)));
  document.querySelector('.prev').addEventListener('click', () => show(index - 1));
  document.querySelector('.next').addEventListener('click', () => show(index + 1));
}

function setupEffects() {
  document.querySelectorAll('.reveal').forEach((el, i) => setTimeout(() => el.classList.add('show'), i * 45));
  document.querySelectorAll('.card').forEach(card => card.addEventListener('mousemove', event => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    card.style.setProperty('--my', `${event.clientY - rect.top}px`);
  }));
}

function router() {
  const match = location.hash.match(/^#\/product\/(\d+)/);
  if (match) detail(match[1]);
  else home();
}

window.addEventListener('hashchange', router);
router();
