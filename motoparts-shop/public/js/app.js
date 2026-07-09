document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.reveal-card, .metric-card, .command-card, .form-card, .table-card');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    cards.forEach(card => observer.observe(card));
  } else {
    cards.forEach(card => card.classList.add('is-visible'));
  }

  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mousemove', event => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      card.style.setProperty('--mx', `${x}px`);
      card.style.setProperty('--my', `${y}px`);
    });
  });

  const mainImage = document.querySelector('#mainProductImage');
  const thumbs = Array.from(document.querySelectorAll('.thumb-button'));
  const prevButton = document.querySelector('.gallery-nav.prev');
  const nextButton = document.querySelector('.gallery-nav.next');
  let activeIndex = thumbs.findIndex(button => button.classList.contains('active'));
  if (activeIndex < 0) activeIndex = 0;

  const showImage = index => {
    if (!mainImage || !thumbs.length) return;
    activeIndex = (index + thumbs.length) % thumbs.length;
    const selected = thumbs[activeIndex];
    mainImage.classList.remove('image-swap');
    void mainImage.offsetWidth;
    mainImage.src = selected.dataset.image;
    mainImage.classList.add('image-swap');
    thumbs.forEach(button => button.classList.remove('active'));
    selected.classList.add('active');
  };

  thumbs.forEach((button, index) => {
    button.addEventListener('click', () => showImage(index));
  });

  prevButton?.addEventListener('click', () => showImage(activeIndex - 1));
  nextButton?.addEventListener('click', () => showImage(activeIndex + 1));
});
