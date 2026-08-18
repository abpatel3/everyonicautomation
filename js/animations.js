/**
 * Everyonic Automation — Animation System (AOS Integration)
 * Initializes Animate On Scroll library with smooth cubic easing and reduced motion fallbacks.
 */

export function initAnimations() {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
      disable: prefersReducedMotion
    });
  } else {
    // Retry if script loading asynchronously
    window.addEventListener('load', () => {
      if (typeof AOS !== 'undefined') {
        AOS.init({
          duration: 800,
          easing: 'ease-out-cubic',
          once: true,
          offset: 80,
          disable: prefersReducedMotion
        });
      }
    });
  }
}
