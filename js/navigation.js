/**
 * Everyonic Automation — Navigation Module
 * Permanent Clean White Header with subtle scroll shadow & mobile drawer.
 */

export function initNavigation() {
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
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      link.classList.add("text-brand-primary", "font-semibold");
      link.classList.remove("text-brand-secondary");
      link.setAttribute("aria-current", "page");
    }
  });

  // Mobile Navigation Drawer Toggle
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
      mobileToggle.querySelector(".hamburger-icon")?.classList.remove("hidden");
      mobileToggle.querySelector(".close-icon")?.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    }

    mobileToggle.addEventListener("click", () => {
      isOpen ? closeMenu() : openMenu();
    });

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
