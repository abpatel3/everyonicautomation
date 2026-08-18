/**
 * Everyonic Automation — UI Components & Swiper Helper Setup
 * Reusable UI behaviors and slider helper structures ready for Phase 2 expansion.
 */

export function initComponents() {
  // Lucide Icons Initialization Helper
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Smooth Anchor Scrolling Helper
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/**
 * Swiper Initialization Helper — Phase 2 Ready
 * @param {string} selector - CSS selector for Swiper container
 * @param {Object} options - Custom Swiper options
 */
export function createSlider(selector, options = {}) {
  if (typeof Swiper === 'undefined') {
    console.warn('Swiper.js is not loaded yet.');
    return null;
  }
  const defaultOptions = {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
  return new Swiper(selector, { ...defaultOptions, ...options });
}
