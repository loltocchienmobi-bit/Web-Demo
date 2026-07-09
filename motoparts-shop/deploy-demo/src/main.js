const products = [
  ['Đèn bóng Led Nexway Vision X8 Pro', 2500000, 3000000, 'Bóng LED', 'Nexway', 'Universal', 'Bóng LED nâng cấp cho xe nguyên bản, cho ánh sáng trắng rõ, dễ lắp đặt và phù hợp khách muốn tăng sáng nhanh mà không can thiệp nhiều vào chóa đèn.', 'images/chungauto/den-bong-led-nexway-vision-x8-pro.jpg', true, 'Mới ra mắt', 'Phù hợp xe cần nâng sáng cơ bản, giữ kết cấu zin, chi phí hợp lý. Ánh sáng trắng giúp quan sát biển báo, vạch đường và vật cản rõ hơn khi đi đêm.'],
  ['Đèn bi Led Nexway Vision LS600', 2500000, 3000000, 'Bi LED', 'Nexway', 'Universal', 'Bi LED LS600 là lựa chọn nâng cấp ánh sáng gọn gàng, có mặt cắt sáng rõ, hỗ trợ đi phố và đường trường với độ ổn định tốt.', 'images/chungauto/den-bi-led-nexway-ls600.jpg', true, 'Giảm 17%', 'Sản phẩm hướng đến nhóm khách cần hiệu năng sáng tốt trong tầm giá. Thiết kế bi cầu giúp ánh sáng tập trung hơn bóng LED thường và hạn chế tản sáng gây chói.'],
  ['Đèn bi gầm Nexway Vision V7 Platinum', 4500000, 5400000, 'Đèn gầm', 'Nexway', 'Universal', 'Bi gầm V7 Platinum hỗ trợ ánh sáng gầm mạnh, hữu ích khi đi mưa, sương mù hoặc cung đường thiếu sáng.', 'images/chungauto/den-bi-gam-vision-v7-platinum.jpg', true, 'Giảm 17%', 'Dòng bi gầm này phù hợp xe có nhu cầu tăng sáng mặt đường gần, mở rộng vùng quan sát hai bên và cải thiện an toàn khi di chuyển trong điều kiện thời tiết xấu.'],
  ['Đèn bi Led Nexway Vision LS500', 4500000, 5500000, 'Bi LED', 'Nexway', 'Universal', 'LS500 là mẫu bi LED có cấu hình cân bằng giữa độ sáng, độ bền và chi phí, phù hợp nhiều dòng xe phổ thông.', 'images/chungauto/den-bi-led-nexway-ls500.jpg', false, 'Giảm 18%', 'Sản phẩm phù hợp khách cần nâng cấp đèn pha/cos ổn định, ánh sáng gom tốt hơn hệ thống nguyên bản và vẫn giữ thiết kế xe gọn gàng.'],
  ['Đèn bi Led Vision Nex 1.8', 4000000, 5500000, 'Bi LED', 'Vision', 'Universal', 'Vision Nex 1.8 là mẫu bi LED kích thước gọn, dễ bố trí trên nhiều dòng xe, cho ánh sáng rõ và mặt cắt đẹp.', 'images/chungauto/den-bi-led-vision-nex-18.jpg', false, 'Giảm 27%', 'Kích thước nhỏ giúp sản phẩm phù hợp các hốc đèn hạn chế không gian. Đây là lựa chọn hợp lý khi muốn nâng sáng nhưng vẫn ưu tiên độ gọn và tính thẩm mỹ.'],
  ['Đèn LED Ô Tô Owleye A360/S3', 5500000, 7500000, 'Bóng LED', 'Owleye', 'Universal', 'Owleye A360/S3 là bóng LED hiệu năng cao, hỗ trợ tăng sáng nhanh cho xe dùng bóng halogen nguyên bản.', 'images/chungauto/den-led-owleye-a360-s3.jpg', true, 'Giảm 23%', 'Sản phẩm phù hợp khách muốn thay bóng LED chất lượng cao, ánh sáng mạnh và ổn định hơn. Nên căn chỉnh đúng để đạt hiệu quả chiếu sáng và hạn chế chói.'],
  ['Đèn LED Ô Tô Owleye A488', 2300000, 3000000, 'Bóng LED', 'Owleye', 'Universal', 'Owleye A488 là lựa chọn bóng LED dễ tiếp cận, tăng độ sáng cho xe đi phố và hỗ trợ quan sát tốt hơn ban đêm.', 'images/chungauto/den-led-owleye-a488.jpg', false, 'Giảm 29%', 'Dòng bóng LED này phù hợp nhu cầu nâng cấp vừa phải, chi phí hợp lý, lắp đặt nhanh và vẫn giữ hệ thống đèn nguyên bản của xe.'],
  ['Đèn LED Ô Tô Owleye A360/Q5', 2500000, 3500000, 'Bóng LED', 'Owleye', 'Universal', 'Owleye A360/Q5 cho ánh sáng trắng, độ sáng tốt trong tầm giá và phù hợp nhiều dòng xe đang dùng bóng nguyên bản.', 'images/chungauto/den-led-owleye-a360-q5.jpg', false, 'Giảm 22%', 'Sản phẩm phù hợp xe cần cải thiện tầm nhìn khi đi đêm mà chưa cần nâng cấp bi cầu. Hiệu quả phụ thuộc vào chóa đèn và cách căn chỉnh sau lắp đặt.'],
  ['Bi Pha Led Vislight LS800 Pro', 8800000, 9900000, 'Bi LED', 'Vislight', 'Universal', 'Vislight LS800 Pro là dòng bi pha LED hiệu năng cao, hướng tới khách cần ánh sáng mạnh và vùng chiếu xa tốt.', 'images/chungauto/bi-pha-led-vislight-ls800-pro.jpg', true, 'Cao cấp', 'Dòng sản phẩm này phù hợp xe thường đi đường trường, cao tốc hoặc khu vực thiếu sáng. Cấu hình bi pha giúp tối ưu cả cos và pha trong một cụm đèn.'],
  ['Đèn bi gầm Nexway Vision V7 Eco New', 2650000, 3300000, 'Đèn gầm', 'Nexway', 'Universal', 'V7 Eco New là mẫu bi gầm dễ tiếp cận, hỗ trợ tăng sáng vùng gần và cải thiện quan sát khi thời tiết xấu.', 'images/chungauto/den-bi-gam-vision-v7-eco-new.jpg', false, 'Giảm 20%', 'Sản phẩm phù hợp người dùng muốn bổ sung ánh sáng gầm với chi phí vừa phải. Nên lắp đặt đúng vị trí và căn chỉnh để ánh sáng bám mặt đường hiệu quả.'],
  ['Đèn bi gầm Nexway Vision V8 Eco New', 2650000, 3300000, 'Đèn gầm', 'Nexway', 'Universal', 'V8 Eco New nâng cấp ánh sáng gầm cho xe, hỗ trợ đi mưa và các đoạn đường tối cần vùng sáng thấp, rộng.', 'images/chungauto/den-bi-gam-vision-v8-eco-new.jpg', false, 'Hàng có sẵn', 'Dòng bi gầm này tập trung vào tính thực dụng: ánh sáng gần rõ hơn, dễ dùng trong đô thị và cung đường nhiều sương mù hoặc mưa nhẹ.'],
  ['Đèn bi gầm Nexway Vision V7 Laser', 5500000, 6600000, 'Đèn gầm', 'Nexway', 'Universal', 'V7 Laser là phiên bản bi gầm có hiệu năng cao hơn, hỗ trợ pha xa tốt hơn so với các cấu hình gầm phổ thông.', 'images/chungauto/den-bi-gam-vision-v7-laser.jpg', true, 'Giảm 17%', 'Sản phẩm phù hợp khách cần đèn gầm mạnh, ánh sáng xa hơn và khả năng hỗ trợ tốt khi đi tour hoặc cung đường thiếu sáng dài.']
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
  detail: item[10],
  stock: 6 + index * 2,
  images: [item[7], 'images/hero-showroom.png', index % 2 ? 'images/chungauto/den-bi-led-nexway-ls600.jpg' : 'images/chungauto/den-bi-gam-vision-v7-platinum.jpg']
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
            <p>Dữ liệu demo dùng ảnh sản phẩm và thông tin tham khảo từ ChungAuto, trình bày lại theo nhận diện MotoParts.</p>
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
          <p>${product.detail}</p>
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
