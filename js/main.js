/**
 * Everyonic Automation — Main Entry Point
 * Clean White Header & Industrial Automation System.
 */

(function () {
  "use strict";

  function initHeaderNavigation() {
    const header = document.getElementById("main-header");
    const mobileToggle = document.getElementById("mobile-menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu-drawer");
    const mobileOverlay = document.getElementById("mobile-menu-overlay");
    const navLinks = document.querySelectorAll(".nav-link");

    // Sticky Header Scroll Shadow
    function handleScroll() {
      if (!header) return;
      if (
        window.pageYOffset > 15 ||
        document.documentElement.scrollTop > 15 ||
        window.scrollY > 15
      ) {
        header.classList.add("header-scrolled");
      } else {
        header.classList.remove("header-scrolled");
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll(); // Initial check

    // Active Link Highlighting
    const currentPath =
      window.location.pathname.split("/").pop() || "index.html";
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (
        href === currentPath ||
        (currentPath === "" && href === "index.html")
      ) {
        link.classList.add("text-brand-primary", "font-semibold");
        link.classList.remove("text-brand-secondary");
        link.setAttribute("aria-current", "page");
      }
    });

    // Mobile Navigation Drawer Toggle
    const mobileClose = document.getElementById("mobile-menu-close");
    if (mobileToggle && mobileMenu) {
      let isOpen = false;

      function openMenu() {
        isOpen = true;
        mobileMenu.classList.remove("translate-x-full", "pointer-events-none");
        mobileMenu.classList.add("translate-x-0");
        if (mobileOverlay) {
          mobileOverlay.classList.remove("opacity-0", "pointer-events-none");
          mobileOverlay.classList.add("opacity-100");
        }
        mobileToggle.setAttribute("aria-expanded", "true");
        mobileToggle.querySelector(".hamburger-icon")?.classList.add("hidden");
        mobileToggle.querySelector(".close-icon")?.classList.remove("hidden");
        document.body.classList.add("overflow-hidden");
      }

      function closeMenu() {
        isOpen = false;
        mobileMenu.classList.add("translate-x-full", "pointer-events-none");
        mobileMenu.classList.remove("translate-x-0");
        if (mobileOverlay) {
          mobileOverlay.classList.add("opacity-0", "pointer-events-none");
          mobileOverlay.classList.remove("opacity-100");
        }
        mobileToggle.setAttribute("aria-expanded", "false");
        mobileToggle
          .querySelector(".hamburger-icon")
          ?.classList.remove("hidden");
        mobileToggle.querySelector(".close-icon")?.classList.add("hidden");
        document.body.classList.remove("overflow-hidden");
      }

      mobileToggle.addEventListener("click", () => {
        isOpen ? closeMenu() : openMenu();
      });

      if (mobileClose) {
        mobileClose.addEventListener("click", closeMenu);
      }

      if (mobileOverlay) {
        mobileOverlay.addEventListener("click", closeMenu);
      }

      mobileMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
      });

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && isOpen) {
          closeMenu();
        }
      });
    }
  }

  function initAnimations() {
    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 700,
        easing: "ease-out-cubic",
        once: true,
        offset: 60,
        disable: prefersReducedMotion,
      });
    }
  }

  function initComponents() {
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        if (targetId === "#" || targetId === "") return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  }

  function initClientSlider() {
    const clientSliderEl = document.querySelector(".client-swiper");
    if (!clientSliderEl || typeof Swiper === "undefined") return;

    new Swiper(".client-swiper", {
      slidesPerView: 2,
      spaceBetween: 16,
      loop: true,
      speed: 3500,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      allowTouchMove: true,
      breakpoints: {
        480: {
          slidesPerView: 3,
          spaceBetween: 18,
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 24,
        },
        1280: {
          slidesPerView: 6,
          spaceBetween: 24,
        },
      },
    });
  }

  function initTestimonialSlider() {
    const testimonialSliderEl = document.querySelector(".testimonial-swiper");
    if (!testimonialSliderEl || typeof Swiper === "undefined") return;

    new Swiper(".testimonial-swiper", {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      speed: 700,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      pagination: {
        el: ".testimonial-pagination",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 28,
        },
      },
    });
  }

  function initAll() {
    initHeaderNavigation();
    initAnimations();
    initComponents();
    initClientSlider();
    initTestimonialSlider();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAll);
  } else {
    initAll();
  }

  window.addEventListener("load", () => {
    initAnimations();
    initClientSlider();
    initTestimonialSlider();
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  });
})();
