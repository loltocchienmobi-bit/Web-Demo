const products = [
  ['VinFast VF3 6 bi Laser', 10950000, 12500000, 'Đèn ô tô', 'VinFast', 'VF3', 'Gói nâng cấp 6 bi Laser cho VF3, ánh sáng mạnh, gom sáng tốt và giữ thẩm mỹ zin xe.', 'images/hero-showroom.png', true, 'Giảm 12%'],
  ['VinFast VF3 Bi Gầm Titan Black', 11500000, 13000000, 'Đèn gầm', 'VinFast', 'VF3', 'Bi gầm Titan Black tăng sáng mặt đường, hỗ trợ đi mưa sương và đường tối.', 'images/product-exhaust.png', true, 'Bán chạy'],
  ['Bi Laser LED X-Light V30 Ultra 2024', 7700000, 8900000, 'Bi Laser LED', 'X-Light', 'Universal', 'Mẫu bi Laser LED cao cấp, cắt sáng sắc, pha xa mạnh và vận hành ổn định.', 'images/product-battery.png', true, 'Giảm 13%'],
  ['Bi Led Laser X-Light V20L 2024', 6600000, 7800000, 'Bi Laser LED', 'X-Light', 'Universal', 'Bi LED Laser cân bằng giữa độ sáng, độ bền và chi phí nâng cấp.', 'images/hero-showroom.png', false, 'Trả góp 0%'],
  ['Bi Led X-Light F10 New', 5200000, 6200000, 'Bi LED', 'X-Light', 'Universal', 'Bi LED F10 New cho ánh sáng rộng, dễ căn chỉnh, phù hợp nhiều dòng xe.', 'images/product-exhaust.png', false, 'Giảm 16%'],
  ['Bi LED X-Light F10 Turbo', 6200000, 7200000, 'Bi LED', 'X-Light', 'Universal', 'Phiên bản Turbo cải thiện cường độ sáng và vùng chiếu gần.', 'images/product-battery.png', true, 'Turbo'],
  ['Bi LED X-Light F10 2.0', 4600000, 5500000, 'Bi LED', 'X-Light', 'Universal', 'Giải pháp nâng sáng gọn, hiệu quả cho xe đi phố và đường trường.', 'images/hero-showroom.png', false, 'Giá tốt'],
  ['Bi Gầm X-Light F10 New', 3900000, 4600000, 'Đèn gầm', 'X-Light', 'Universal', 'Bi gầm hỗ trợ quan sát tốt hơn khi trời mưa, sương mù hoặc đường thiếu sáng.', 'images/product-exhaust.png', false, 'Lắp nhanh'],
  ['Bi Laser X-Light M500 Ultra 2024', 8700000, 9900000, 'Bi Laser LED', 'X-Light', 'Universal', 'Bi Laser Ultra cho dải sáng xa, phù hợp khách cần hiệu năng cao.', 'images/product-battery.png', true, 'Ultra'],
  ['Bi LED X-Light M550 Pro 2024', 7200000, 8300000, 'Bi LED', 'X-Light', 'Universal', 'M550 Pro có ánh sáng đều, thiết kế tản nhiệt tốt, dùng ổn định lâu dài.', 'images/hero-showroom.png', false, 'Pro'],
  ['Bi LED X-Light M30 2024', 3900000, 4800000, 'Bi LED', 'X-Light', 'Universal', 'Mẫu bi LED phổ thông, phù hợp nâng cấp ánh sáng với ngân sách hợp lý.', 'images/product-exhaust.png', false, 'Tiết kiệm'],
  ['Bi Gầm Aozoom Titan Black', 5600000, 6500000, 'Đèn gầm', 'Aozoom', 'Universal', 'Bi gầm Titan Black thiết kế mạnh mẽ, ánh sáng bám đường và thẩm mỹ cao.', 'images/product-battery.png', true, 'Titan Black']
].map((item, index) => ({
  id: index + 1,
  name: item[0],
  price: item[1],
  oldPrice: item[2],
  category: item[3],
  brand: item[4],
  model: item[5],
  description: item[6],
  image: item[7],
  featured: item[8],
  badge: item[9],
  stock: 6 + index * 2,
  images: [item[7], 'images/hero-showroom.png', index % 2 ? 'images/product-battery.png' : 'images/product-exhaust.png']
}));

const currency = value => value.toLocaleString('vi-VN') + ' đ';
const app = document.querySelector('#app');

function layout(content) {
  app.innerHTML = `
    <nav class="navbar">
      <a class="brand" href="#/"><span><i data-lucide="car-front"></i></span>MotoParts</a>
      <div><a href="#/">Sản phẩm</a><a href="https://zalo.me/0988888888" target="_blank">Liên hệ</a></div>
    </nav>
    ${content}
    <footer><strong>MotoParts</strong><span>Phụ tùng, đèn ô tô và giải pháp nâng cấp ánh sáng chính hãng.</span></footer>
  `;
  lucide.createIcons();
  setupEffects();
}

function home() {
  const categories = [...new Set(products.map(product => product.category))];
  layout(`
    <section class="category-hero">
      <div class="container">
        <div class="breadcrumb"><a href="#/">Trang chủ</a><i data-lucide="chevron-right"></i><span>Đèn ô tô</span></div>
        <div class="category-grid">
          <article class="category-copy">
            <span class="eyebrow"><i data-lucide="badge-check"></i> Danh mục sản phẩm</span>
            <h1>Đèn ô tô chính hãng, nâng cấp ánh sáng an toàn</h1>
            <p>MotoParts tuyển chọn các dòng bi LED, bi Laser LED và bi gầm chất lượng cao, bảo hành rõ ràng, tư vấn đúng dòng xe và lắp đặt chuyên nghiệp.</p>
            <div class="trust-row">
              <div><i data-lucide="shield-check"></i><strong>Bảo hành rõ ràng</strong><span>Sản phẩm có nguồn gốc, chính sách minh bạch.</span></div>
              <div><i data-lucide="settings"></i><strong>Lắp đặt chuẩn kỹ thuật</strong><span>Căn chỉnh ánh sáng đúng, hạn chế chói xe đối diện.</span></div>
              <div><i data-lucide="truck"></i><strong>Giao hàng nhanh</strong><span>Hỗ trợ tư vấn và chốt đơn nhanh qua Zalo.</span></div>
            </div>
          </article>
          <div class="hero-card"><div class="scanner"></div><img src="images/hero-showroom.png" alt="Đèn ô tô và phụ kiện"></div>
        </div>
      </div>
    </section>

    <main class="container catalog-layout">
      <aside class="sidebar">
        <section class="filter-box">
          <h2>Danh mục</h2>
          ${categories.map(category => `<button class="side-filter" data-category="${category}">${category}</button>`).join('')}
        </section>
        <section class="filter-box">
          <h2>Khoảng giá</h2>
          <button class="price-filter" data-price="0-5000000">Dưới 5 triệu</button>
          <button class="price-filter" data-price="5000000-8000000">5 - 8 triệu</button>
          <button class="price-filter" data-price="8000000-99999999">Trên 8 triệu</button>
        </section>
        <section class="filter-box support-box">
          <i data-lucide="headphones"></i>
          <strong>Cần tư vấn đúng xe?</strong>
          <span>Gửi đời xe, nhu cầu ánh sáng và ngân sách để được gợi ý.</span>
          <a href="https://zalo.me/0988888888" target="_blank">Liên hệ ngay</a>
        </section>
      </aside>

      <section class="catalog-main">
        <div class="catalog-heading">
          <div>
            <span class="eyebrow">Sản phẩm nổi bật</span>
            <h2>Đèn ô tô</h2>
            <p>Danh sách sản phẩm demo theo phong cách trang danh mục chuyên nghiệp.</p>
          </div>
          <div class="toolbar">
            <label><i data-lucide="search"></i><input id="searchInput" placeholder="Tìm sản phẩm..."></label>
            <select id="sortSelect">
              <option value="default">Sắp xếp mặc định</option>
              <option value="priceAsc">Giá tăng dần</option>
              <option value="priceDesc">Giá giảm dần</option>
            </select>
          </div>
        </div>
        <div class="quick-policies">
          <span><i data-lucide="rotate-ccw"></i> Đổi trả theo chính sách</span>
          <span><i data-lucide="credit-card"></i> Hỗ trợ trả góp</span>
          <span><i data-lucide="badge-check"></i> Hàng tuyển chọn</span>
        </div>
        <div id="grid" class="product-grid">${productCards(products)}</div>
      </section>
    </main>

    <section class="container faq">
      <h2>Câu hỏi thường gặp</h2>
      <details open><summary>Nâng cấp bi LED có ảnh hưởng đăng kiểm không?</summary><p>Cần lắp đặt đúng kỹ thuật, căn chỉnh mặt cắt sáng và chọn cấu hình phù hợp từng dòng xe.</p></details>
      <details><summary>Nên chọn bi LED hay bi Laser LED?</summary><p>Bi LED phù hợp nhu cầu phổ thông; bi Laser LED mạnh hơn ở pha xa và phù hợp khách thường đi đường trường.</p></details>
      <details><summary>Có hỗ trợ tư vấn theo đời xe không?</summary><p>Có. Bạn chỉ cần gửi dòng xe, nhu cầu sử dụng và ngân sách để được gợi ý cấu hình phù hợp.</p></details>
    </section>
  `);
  bindCatalog();
}

function productCards(list) {
  if (!list.length) return `<div class="empty">Không tìm thấy sản phẩm phù hợp.</div>`;
  return list.map(product => `
    <article class="product-card reveal">
      <a class="product-media" href="#/product/${product.id}">
        <span class="sale-badge">${product.badge}</span>
        <img src="${product.image}" alt="${product.name}">
      </a>
      <div class="product-info">
        <div class="installment"><i data-lucide="credit-card"></i> Trả góp 0%</div>
        <h3><a href="#/product/${product.id}">${product.name}</a></h3>
        <p>${product.description}</p>
        <div class="price-row"><strong>${currency(product.price)}</strong><del>${currency(product.oldPrice)}</del></div>
        <div class="card-bottom"><span><i data-lucide="check-circle-2"></i> Còn hàng</span><a href="#/product/${product.id}">Chi tiết</a></div>
      </div>
    </article>
  `).join('');
}

function bindCatalog() {
  let activeCategory = '';
  let activePrice = '';
  const searchInput = document.querySelector('#searchInput');
  const sortSelect = document.querySelector('#sortSelect');
  const grid = document.querySelector('#grid');

  const render = () => {
    const query = searchInput.value.trim().toLowerCase();
    let list = products.filter(product => {
      const text = `${product.name} ${product.category} ${product.brand} ${product.description}`.toLowerCase();
      const matchQuery = !query || text.includes(query);
      const matchCategory = !activeCategory || product.category === activeCategory;
      let matchPrice = true;
      if (activePrice) {
        const [min, max] = activePrice.split('-').map(Number);
        matchPrice = product.price >= min && product.price <= max;
      }
      return matchQuery && matchCategory && matchPrice;
    });

    if (sortSelect.value === 'priceAsc') list = [...list].sort((a, b) => a.price - b.price);
    if (sortSelect.value === 'priceDesc') list = [...list].sort((a, b) => b.price - a.price);
    grid.innerHTML = productCards(list);
    lucide.createIcons();
    setupEffects();
  };

  searchInput.addEventListener('input', render);
  sortSelect.addEventListener('change', render);
  document.querySelectorAll('.side-filter').forEach(button => button.addEventListener('click', () => {
    activeCategory = activeCategory === button.dataset.category ? '' : button.dataset.category;
    document.querySelectorAll('.side-filter').forEach(item => item.classList.toggle('active', item.dataset.category === activeCategory));
    render();
  }));
  document.querySelectorAll('.price-filter').forEach(button => button.addEventListener('click', () => {
    activePrice = activePrice === button.dataset.price ? '' : button.dataset.price;
    document.querySelectorAll('.price-filter').forEach(item => item.classList.toggle('active', item.dataset.price === activePrice));
    render();
  }));
}

function detail(id) {
  const product = products.find(item => item.id === Number(id)) || products[0];
  layout(`
    <main class="container detail">
      <div class="breadcrumb"><a href="#/">Trang chủ</a><i data-lucide="chevron-right"></i><a href="#/">Đèn ô tô</a><i data-lucide="chevron-right"></i><span>${product.name}</span></div>
      <div class="detail-grid">
        <div class="gallery">
          <div class="main-image"><button class="prev"><i data-lucide="chevron-left"></i></button><img id="mainProductImage" src="${product.images[0]}" alt="${product.name}"><button class="next"><i data-lucide="chevron-right"></i></button></div>
          <div class="thumbs">${product.images.map((image, i) => `<button class="thumb ${i === 0 ? 'active' : ''}" data-image="${image}"><img src="${image}" alt="${product.name} ${i + 1}"></button>`).join('')}</div>
        </div>
        <div class="detail-info">
          <span class="eyebrow">${product.category}</span>
          <h1>${product.name}</h1>
          <div class="detail-price"><strong>${currency(product.price)}</strong><del>${currency(product.oldPrice)}</del></div>
          <p>${product.description}</p>
          <div class="specs"><div><span>Thương hiệu</span><b>${product.brand}</b></div><div><span>Dòng xe</span><b>${product.model}</b></div><div><span>Tồn kho</span><b>${product.stock}</b></div><div><span>Tình trạng</span><b>Còn hàng</b></div></div>
          <div class="detail-actions"><a class="cta" href="https://zalo.me/0988888888" target="_blank"><i data-lucide="message-circle"></i>Liên hệ tư vấn</a><a class="ghost" href="#/">Xem thêm sản phẩm</a></div>
        </div>
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
  document.querySelectorAll('.product-card').forEach(card => card.addEventListener('mousemove', event => {
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
