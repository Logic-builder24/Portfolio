# 🌐 Portfolio — Jai Dev Meena

A **stunning, dark-themed, single-page portfolio website** built with pure HTML, CSS, and JavaScript. Inspired by premium developer portfolio designs with a code-aesthetic feel.

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## ✨ Features

- 🎨 **Dark Theme** — Premium #121212 monochrome design with purple/cyan gradient accents
- 🪟 **Glassmorphism** — Frosted-glass effect on cards, navbar, and UI elements
- 🎬 **Smooth Animations** — Fade-in on scroll, typing animation, floating gradient orbs, particle effects
- 🖱️ **Custom Cursor** — Dual-layer dot + trailing ring cursor (desktop only)
- 📱 **Fully Responsive** — Mobile-first design with hamburger nav and adaptive layouts
- 📄 **Mac-style Resume Preview** — Hover-to-reveal PDF preview with macOS window chrome
- ⌨️ **Code Aesthetic** — Fira Code monospace headings, `... /Section ...` labels
- 🔗 **Smart Link System** — Configurable project links with placeholder protocol
- 📊 **Animated Stats Counter** — Numbers count up when scrolled into view
- 🔍 **SEO Optimized** — Full Open Graph, Twitter Card, and meta tag support

---

## 🗂️ Project Structure

```
Portfolio/
├── index.html              # Main HTML structure
├── style.css               # Complete design system + styles
├── script.js               # Animations, cursor, nav, typing, counters
├── assets/
│   ├── favicon.png         # JD initials favicon
│   └── JaiDevMeena_CV.pdf  # Resume / CV file
├── Resume.pdf              # Source resume file
└── README.md               # This file
```

---

## 🖼️ Sections

| Section | Description |
|---------|-------------|
| **Hero** | Full-viewport intro with animated gradient orbs, typing animation, social links |
| **About** | Bio, skills grid (2×2 glassmorphism cards), code-styled decorative element |
| **Projects** | 3 project cards with tech tags, descriptions, GitHub/Live links |
| **Certificates** | 5 certificate cards in 2-column grid with accent borders |
| **Education** | Timeline layout with current/past entries |
| **Stats Bar** | Animated counter strip (Projects, Certificates, Hackathon, Years) |
| **Resume** | Mac-style window with PDF preview, hover reveal, view/download actions |
| **Contact** | Large name display, contact details, social icons, site credits |

---

## 🎨 Design System

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#121212` | Page background |
| `--bg-secondary` | `#1A1A1A` | Cards, sections |
| `--surface` | `#1F1F1F` | Elevated elements |
| `--border` | `#2A2A2A` | Borders, dividers |
| `--text-heading` | `#FFFFFF` | Headings |
| `--text-body` | `#F5F5F5` | Body text |
| `--text-muted` | `#A6A6A6` | Secondary text |

### Typography
- **Headings:** [Fira Code](https://fonts.google.com/specimen/Fira+Code) (monospace)
- **Body:** [Open Sans](https://fonts.google.com/specimen/Open+Sans) (sans-serif)

### Effects
- Glassmorphism (`backdrop-filter: blur`)
- Gradient orbs (purple → cyan → pink)
- CSS Grid + Flexbox layouts
- IntersectionObserver scroll animations

---

## 🚀 Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Logic-builder24/Portfolio.git
   cd Portfolio
   ```

2. **Open in browser:**
   Simply open `index.html` in your browser, or use a local server:
   ```bash
   npx serve .
   ```

3. **Customize:**
   - Edit personal info in `index.html`
   - Update project links in the `PROJECT_LINKS` config at the top of `script.js`
   - Place your CV at `assets/JaiDevMeena_CV.pdf`

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|------------|--------|
| `≥ 1024px` | Desktop — two-column layouts, large hero text |
| `768–1023px` | Tablet — stacked columns, medium hero text |
| `< 768px` | Mobile — single column, hamburger nav, compact stats |

---

## 🔗 Links & Contact

- **GitHub:** [github.com/Logic-builder24](https://github.com/Logic-builder24)
- **LinkedIn:** [linkedin.com/in/jai-dev-meena893144281](https://www.linkedin.com/in/jai-dev-meena893144281/)
- **Email:** [mjai9127@gmail.com](mailto:mjai9127@gmail.com)
- **Phone:** +91 82099 26739

---

## 📜 License

This project is open source and available for personal use and learning.

---

> Built with ♥ by **Jai Dev Meena** — Data Analyst & CS Undergrad @ LPU
