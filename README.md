# Everyonic Automation — Website Project Foundation (Phase 1)

This repository contains the **Phase 1 Project Foundation & Design System** for the **Everyonic Automation** official website.

It establishes a modern, premium industrial automation web foundation built with HTML5, Tailwind CSS, Vanilla JavaScript, AOS (Animate On Scroll), Swiper.js, and Lucide Icons.

---

## 🛠 Tech Stack

- **HTML5**: Semantic markup & SEO structure
- **Tailwind CSS v3**: Utility-first CSS framework & custom design tokens
- **Vanilla JavaScript (ES Modules)**: Modular frontend logic without heavy framework overhead
- **AOS (Animate On Scroll)**: Subtle scroll-triggered animations
- **Swiper.js**: Industrial image & showcase slider infrastructure
- **Lucide Icons**: Crisp SVG UI icons
- **Google Fonts**:
  - `Plus Jakarta Sans` (Primary Sans Serif)
  - `JetBrains Mono` (Technical / Eyebrow Labels)

---

## 🎨 Brand System

### Colors
- **Primary**: `#A52027` (`brand-primary`) — Main CTA, active nav, accent lines
- **Secondary**: `#534A4C` (`brand-secondary`) — Supporting text, secondary borders & icons
- **Dark**: `#171516` (`brand-dark`) — Deep industrial background
- **Black**: `#0D0C0D` (`brand-black`)
- **Off White**: `#F7F7F6` (`brand-offwhite`)
- **Gray**: `#F0EEEE` (`brand-gray`)
- **Border**: `#DED9DA` (`brand-border`)
- **Muted**: `#766F71` (`brand-muted`)

---

## 📁 Project Structure

```text
everyonic-automation/
│
├── index.html                  ← Home Shell
├── about.html                  ← About Us Shell
├── services.html               ← Services Shell
├── contact.html                ← Contact Us Shell
├── privacy-policy.html         ← Privacy Policy Shell
├── terms-and-conditions.html   ← Terms & Conditions Shell
│
├── assets/
│   ├── images/
│   │   ├── hero/
│   │   ├── services/
│   │   ├── about/
│   │   ├── industrial/
│   │   └── general/
│   ├── icons/
│   │   └── favicon.ico
│   └── logo/
│       ├── everyonic-logo.png
│       └── everyonic-mark.png
│
├── css/
│   ├── input.css               ← Tailwind source directives & custom design utilities
│   └── custom.css              ← Compiled production CSS
│
├── js/
│   ├── main.js                 ← Main ES module entry point
│   ├── navigation.js           ← Sticky header scroll & mobile menu drawer
│   ├── animations.js           ← AOS initialization & reduced motion settings
│   └── components.js           ← UI behavior & Swiper helper utilities
│
├── tailwind.config.js          ← Tailwind theme configuration & brand tokens
├── postcss.config.js           ← PostCSS configuration
├── package.json                ← NPM dependencies & scripts
├── .gitignore                  ← Version control ignore rules
└── README.md                   ← Project documentation
```

---

## ⚡ Installation & Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Development (Watch mode for Tailwind CSS):
   ```bash
   npm run dev
   ```

3. Production Build (Minified CSS):
   ```bash
   npm run build
   ```

---

## 🚀 Phase 1 Features Included

- [x] Package setup & Tailwind CLI configuration
- [x] Everyonic Automation logo & favicon integration
- [x] Reusable Design Tokens (Colors, Typography, Shadow, Grid patterns)
- [x] Global Sticky Navigation Header with scroll transitions
- [x] Mobile Navigation Drawer with backdrop overlay & scroll lock
- [x] Premium Dark Global Footer (`#171516`) with verified company contacts
- [x] AOS (Animate On Scroll) setup with reduced-motion support
- [x] Modular JS architecture (`main.js`, `navigation.js`, `animations.js`, `components.js`)
- [x] 6 Responsive Page Shells (`index.html`, `about.html`, `services.html`, `contact.html`, `privacy-policy.html`, `terms-and-conditions.html`)
- [x] Accessibility & SEO foundation with meta headers and semantic HTML5
