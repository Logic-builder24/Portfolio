# SOFTWARE REQUIREMENTS SPECIFICATION (SRS)
## Link Integration & Navigation Architecture
### Portfolio Website — Jai Dev Meena
### Version 1.0 | Document Type: Technical SRS + Developer Instructions

---

## TABLE OF CONTENTS

1. [Master Link Registry](#1-master-link-registry)
2. [Link Placement Map (Section by Section)](#2-link-placement-map)
3. [HTML Implementation Code](#3-html-implementation-code)
4. [Placeholder Protocol for Missing Links](#4-placeholder-protocol)
5. [Accessibility & SEO Requirements](#5-accessibility--seo-requirements)
6. [Link Behaviour Specification](#6-link-behaviour-specification)
7. [QA Checklist](#7-qa-checklist)

---

## 1. MASTER LINK REGISTRY

> This is the single source of truth for every link used across the website.
> All href values must be copied verbatim from this table.

### 1A — Personal / Social Links

| ID    | Label      | URL / Value                                               | Type         | Opens In    |
|-------|------------|-----------------------------------------------------------|--------------|-------------|
| L-001 | GitHub     | `https://github.com/Logic-builder24`                      | External URL | `_blank`    |
| L-002 | LinkedIn   | `https://www.linkedin.com/in/jai-dev-meena893144281/`     | External URL | `_blank`    |
| L-003 | Email      | `mailto:mjai9127@gmail.com`                               | mailto       | Default     |
| L-004 | Phone      | `tel:+918209926739`                                       | tel          | Default     |
| L-005 | CV / Resume| `./assets/JaiDevMeena_CV.pdf`                             | Local file   | `_blank`    |

> ⚠️ **L-005 Note:** Place the downloaded CV PDF at `/assets/JaiDevMeena_CV.pdf` relative to `index.html`.
> If hosted on GitHub Pages, path becomes: `/portfolio/assets/JaiDevMeena_CV.pdf`

---

### 1B — Project Links

| ID    | Project Name                    | GitHub Repo URL                    | Live Demo URL             | Status        |
|-------|---------------------------------|------------------------------------|---------------------------|---------------|
| P-001 | Hospital Appointment Scheduler  | `https://github.com/Logic-builder24` *(see note below)* | *(see placeholder rules)* | ⚠️ Partial   |
| P-002 | Election Analysis Dashboard     | `https://github.com/Logic-builder24` *(see note below)* | *(see placeholder rules)* | ⚠️ Partial   |
| P-003 | History Chatbot                 | `https://github.com/Logic-builder24` *(see note below)* | *(see placeholder rules)* | ⚠️ Partial   |

> ⚠️ **Project Link Note:**
> The CV lists "Live Link" and "Live link" placeholders but does not provide the actual URLs.
> The GitHub profile root (`https://github.com/Logic-builder24`) is confirmed.
> **Action Required:** Jai Dev must supply the three individual repo URLs and live demo URLs.
> Until then, follow the **Placeholder Protocol** in Section 4.

---

### 1C — Certificate / External Links

| ID    | Certificate Name         | Issuer           | Verification URL                  | Status        |
|-------|--------------------------|------------------|-----------------------------------|---------------|
| C-001 | Python ML/AI             | CSE PathSala     | *(to be added by owner)*          | ⚠️ Pending   |
| C-002 | AI Tools Workshop        | Be10X            | *(to be added by owner)*          | ⚠️ Pending   |
| C-003 | Power BI Workshop        | OfficeMaster     | *(to be added by owner)*          | ⚠️ Pending   |
| C-004 | Computational Theory     | Infosys          | *(to be added by owner)*          | ⚠️ Pending   |

> Certificate verification links are optional UI enhancements. Use the placeholder protocol below if not available.

---

## 2. LINK PLACEMENT MAP

> This section defines exactly WHERE each link from the registry must appear.
> Refer to Link IDs when implementing.

---

### 2.1 NAVIGATION BAR

| Element             | Link ID | Placement Detail                                         |
|---------------------|---------|----------------------------------------------------------|
| Logo / Name click   | —       | Smooth scroll to `#hero` (same page anchor)              |
| "About" nav item    | —       | Smooth scroll to `#about`                                |
| "Projects" nav item | —       | Smooth scroll to `#projects`                             |
| "Certificates" nav  | —       | Smooth scroll to `#certificates`                         |
| "Contact" nav item  | —       | Smooth scroll to `#contact`                              |
| [Download CV] button| L-005   | Opens PDF in new tab                                     |

---

### 2.2 HERO SECTION (`#hero`)

| Element              | Link ID  | Placement Detail                                        |
|----------------------|----------|---------------------------------------------------------|
| [Projects →] button  | —        | Smooth scroll to `#projects`                            |
| GitHub icon/button   | L-001    | Opens GitHub profile in `_blank`                        |
| LinkedIn icon/button | L-002    | Opens LinkedIn profile in `_blank`                      |
| Email icon/button    | L-003    | Opens default mail client with `mailto:` address        |

---

### 2.3 ABOUT SECTION (`#about`)

| Element              | Link ID  | Placement Detail                                        |
|----------------------|----------|---------------------------------------------------------|
| Skill card GitHub    | L-001    | Optional: hover tooltip showing GitHub profile URL      |
| No outbound links required in this section by default |  |                                        |

---

### 2.4 PROJECTS SECTION (`#projects`)

Each project card must have two action buttons:

**Project Card: Hospital Appointment Scheduler**

| Button Label  | Link ID | href value                           | Opens In  |
|---------------|---------|--------------------------------------|-----------|
| [GitHub ↗]    | P-001   | See Section 4 (placeholder protocol) | `_blank`  |
| [Live ↗]      | P-001   | See Section 4 (placeholder protocol) | `_blank`  |

**Project Card: Election Analysis Dashboard**

| Button Label  | Link ID | href value                           | Opens In  |
|---------------|---------|--------------------------------------|-----------|
| [GitHub ↗]    | P-002   | See Section 4 (placeholder protocol) | `_blank`  |
| [Live ↗]      | P-002   | See Section 4 (placeholder protocol) | `_blank`  |

**Project Card: History Chatbot**

| Button Label  | Link ID | href value                           | Opens In  |
|---------------|---------|--------------------------------------|-----------|
| [GitHub ↗]    | P-003   | See Section 4 (placeholder protocol) | `_blank`  |
| [Live ↗]      | P-003   | See Section 4 (placeholder protocol) | `_blank`  |

---

### 2.5 CERTIFICATES SECTION (`#certificates`)

Each certificate card may have a "Verify ↗" link if a URL is available.

| Certificate Card | Link ID | Behaviour if URL Missing             |
|------------------|---------|--------------------------------------|
| Python ML/AI     | C-001   | Hide verify button (use CSS `.hidden`) |
| AI Tools Workshop| C-002   | Hide verify button                   |
| Power BI Workshop| C-003   | Hide verify button                   |
| Comp. Theory     | C-004   | Hide verify button                   |

---

### 2.6 CONTACT SECTION (`#contact`)

| Element            | Link ID | Display Text                          | href Value                                            |
|--------------------|---------|---------------------------------------|-------------------------------------------------------|
| Email link         | L-003   | `mjai9127@gmail.com`                  | `mailto:mjai9127@gmail.com`                           |
| Phone link         | L-004   | `+91 82099 26739`                     | `tel:+918209926739`                                   |
| LinkedIn link      | L-002   | `linkedin.com/in/jai-dev-meena893144281` | `https://www.linkedin.com/in/jai-dev-meena893144281/` |
| GitHub link        | L-001   | `github.com/Logic-builder24`          | `https://github.com/Logic-builder24`                  |
| CV Download link   | L-005   | `View / Download CV ↗`               | `./assets/JaiDevMeena_CV.pdf`                         |

---

### 2.7 FOOTER

| Element            | Link ID | Behaviour                             |
|--------------------|---------|---------------------------------------|
| Name click (logo)  | —       | Smooth scroll to `#hero`              |
| GitHub icon        | L-001   | Opens GitHub profile in `_blank`      |
| LinkedIn icon      | L-002   | Opens LinkedIn profile in `_blank`    |
| Email icon         | L-003   | Opens mailto                          |
| "Back to top ↑"    | —       | Smooth scroll to `#hero`              |

---

## 3. HTML IMPLEMENTATION CODE

> Copy these exact HTML snippets for each link type.
> All external links MUST include `rel="noopener noreferrer"` for security.

---

### 3A — GitHub Profile Link

```html
<!-- Standard usage -->
<a
  href="https://github.com/Logic-builder24"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Jai Dev Meena on GitHub"
  class="social-link"
>
  <!-- SVG icon or text label here -->
  GitHub
</a>
```

---

### 3B — LinkedIn Profile Link

```html
<a
  href="https://www.linkedin.com/in/jai-dev-meena893144281/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Jai Dev Meena on LinkedIn"
  class="social-link"
>
  LinkedIn
</a>
```

---

### 3C — Email Link

```html
<!-- In nav / hero / contact section -->
<a
  href="mailto:mjai9127@gmail.com"
  aria-label="Send an email to Jai Dev Meena"
  class="social-link"
>
  mjai9127@gmail.com
</a>

<!-- Pre-filled subject line variant (use in CTA sections) -->
<a
  href="mailto:mjai9127@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Jai%20Dev%2C"
  aria-label="Email Jai Dev Meena"
  class="btn-primary"
>
  Get In Touch ↗
</a>
```

---

### 3D — Phone Link

```html
<!-- Clickable on mobile, decorative on desktop -->
<a
  href="tel:+918209926739"
  aria-label="Call Jai Dev Meena"
  class="contact-link"
>
  +91 82099 26739
</a>
```

---

### 3E — CV / Resume Download

```html
<!-- Navbar button -->
<a
  href="./assets/JaiDevMeena_CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
  download="JaiDevMeena_CV.pdf"
  aria-label="Download Jai Dev Meena's CV"
  class="btn-outline"
>
  Download CV
</a>

<!-- Note: The `download` attribute prompts browser save dialog.
     Remove `download` if you only want it to open in the browser tab. -->
```

---

### 3F — Project Card Buttons (GitHub Repo)

```html
<!-- Replace REPO_URL with the actual repository URL -->
<a
  href="REPO_URL"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="View Hospital Appointment Scheduler on GitHub"
  class="project-link project-link--github"
>
  <span class="link-icon">↗</span>
  GitHub
</a>
```

---

### 3G — Project Card Buttons (Live Demo)

```html
<!-- Replace LIVE_URL with the actual deployed URL -->
<a
  href="LIVE_URL"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="View live demo of Hospital Appointment Scheduler"
  class="project-link project-link--live"
>
  <span class="link-icon">↗</span>
  Live
</a>
```

---

### 3H — Smooth Scroll Anchors (In-page navigation)

```html
<!-- Nav links -->
<a href="#about"        class="nav-link">About</a>
<a href="#projects"     class="nav-link">Projects</a>
<a href="#certificates" class="nav-link">Certificates</a>
<a href="#contact"      class="nav-link">Contact</a>

<!-- Section IDs — must match exactly -->
<section id="hero">...</section>
<section id="about">...</section>
<section id="projects">...</section>
<section id="certificates">...</section>
<section id="education">...</section>
<section id="contact">...</section>
```

```css
/* CSS: Enable smooth scrolling globally */
html {
  scroll-behavior: smooth;
}

/* Offset for sticky navbar (adjust 70px to actual navbar height) */
section[id] {
  scroll-margin-top: 70px;
}
```

---

### 3I — Full Social Links Block (Hero Section)

```html
<div class="social-links" role="list" aria-label="Social media and contact links">

  <a
    href="https://github.com/Logic-builder24"
    target="_blank"
    rel="noopener noreferrer"
    class="social-link"
    aria-label="GitHub Profile"
    role="listitem"
  >
    <svg><!-- GitHub SVG icon --></svg>
    <span>GitHub</span>
  </a>

  <a
    href="https://www.linkedin.com/in/jai-dev-meena893144281/"
    target="_blank"
    rel="noopener noreferrer"
    class="social-link"
    aria-label="LinkedIn Profile"
    role="listitem"
  >
    <svg><!-- LinkedIn SVG icon --></svg>
    <span>LinkedIn</span>
  </a>

  <a
    href="mailto:mjai9127@gmail.com"
    class="social-link"
    aria-label="Send Email"
    role="listitem"
  >
    <svg><!-- Email SVG icon --></svg>
    <span>Email</span>
  </a>

</div>
```

---

### 3J — Contact Section Full Block

```html
<section id="contact">

  <div class="contact-grid">

    <!-- Left: Large name -->
    <div class="contact-name">
      <span class="contact-name__first">Jai Dev</span>
      <span class="contact-name__last">Meena</span>
      <p class="contact-subtitle">Frontend Developer &amp; CS Undergrad</p>
    </div>

    <!-- Right: Links -->
    <div class="contact-links">

      <nav class="contact-nav" aria-label="Page navigation">
        <a href="#hero">Main</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#certificates">Certificates</a>
      </nav>

      <ul class="contact-details" aria-label="Contact information">
        <li>
          <span class="contact-label">Email</span>
          <a href="mailto:mjai9127@gmail.com" class="contact-value">
            mjai9127@gmail.com
          </a>
        </li>
        <li>
          <span class="contact-label">Phone</span>
          <a href="tel:+918209926739" class="contact-value">
            +91 82099 26739
          </a>
        </li>
        <li>
          <span class="contact-label">LinkedIn</span>
          <a
            href="https://www.linkedin.com/in/jai-dev-meena893144281/"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-value"
          >
            jai-dev-meena893144281 ↗
          </a>
        </li>
        <li>
          <span class="contact-label">GitHub</span>
          <a
            href="https://github.com/Logic-builder24"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-value"
          >
            Logic-builder24 ↗
          </a>
        </li>
      </ul>

      <div class="contact-cv">
        <a
          href="./assets/JaiDevMeena_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-outline"
        >
          View / Download CV ↗
        </a>
      </div>

      <p class="contact-credits">
        Built by Jai Dev Meena /
        Designed with ♥ /
        Powered by HTML + CSS + JS
      </p>

    </div>

  </div>

  <div class="footer-bar">
    <p>© 2025 Jai Dev Meena · All rights reserved</p>
    <a href="#hero" class="back-to-top" aria-label="Back to top">↑ Top</a>
  </div>

</section>
```

---

## 4. PLACEHOLDER PROTOCOL

> For every link that is not yet available (project repos, live demos, certificate verifications),
> follow these exact rules to keep the website functional and professional.

---

### Rule 1: Never use `href="#"` for real links

`href="#"` causes page-jump to top. Use the following pattern instead:

```html
<!-- WRONG — causes page jump -->
<a href="#">GitHub</a>

<!-- CORRECT — visually disabled, no jump, accessible -->
<a
  href="https://github.com/Logic-builder24"
  class="project-link project-link--disabled"
  aria-label="GitHub link coming soon"
  aria-disabled="true"
  tabindex="-1"
  title="Link coming soon"
>
  GitHub
</a>
```

---

### Rule 2: CSS for disabled link state

```css
.project-link--disabled {
  opacity: 0.35;
  pointer-events: none;
  cursor: not-allowed;
  text-decoration: line-through;
  position: relative;
}

/* Optional: tooltip badge */
.project-link--disabled::after {
  content: "Coming soon";
  position: absolute;
  bottom: 110%;
  left: 50%;
  transform: translateX(-50%);
  background: #3D3D3D;
  color: #A6A6A6;
  font-size: 11px;
  font-family: 'Fira Code', monospace;
  padding: 4px 8px;
  border-radius: 4px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
}

.project-link--disabled:hover::after {
  opacity: 1;
}
```

---

### Rule 3: Use `data-` attributes for easy URL injection later

Build all project link `<a>` tags with a `data-repo` and `data-live` attribute. This way, when the actual URLs are ready, a developer only needs to update the HTML (or a JS config object) in one place.

```html
<!-- Project card template -->
<div
  class="project-card"
  data-github="REPLACE_WITH_REPO_URL"
  data-live="REPLACE_WITH_LIVE_URL"
>
  ...
  <a
    href="REPLACE_WITH_REPO_URL"
    class="project-link project-link--disabled"
    aria-disabled="true"
    tabindex="-1"
  >
    GitHub ↗
  </a>
  <a
    href="REPLACE_WITH_LIVE_URL"
    class="project-link project-link--disabled"
    aria-disabled="true"
    tabindex="-1"
  >
    Live ↗
  </a>
</div>
```

---

### Rule 4: JS Config Object — Single Place to Update All Links

Add this block at the top of `script.js`. When real URLs are available, only this object needs updating — no need to hunt through HTML.

```javascript
// ============================================================
// PROJECT LINKS CONFIG
// Replace placeholder values with real URLs when available
// ============================================================
const PROJECT_LINKS = {
  hospital: {
    github: "https://github.com/Logic-builder24",   // ← Replace with specific repo
    live:   null,                                    // ← null = disabled button
  },
  election: {
    github: "https://github.com/Logic-builder24",   // ← Replace with specific repo
    live:   null,
  },
  chatbot: {
    github: "https://github.com/Logic-builder24",   // ← Replace with specific repo
    live:   null,
  },
};

// ============================================================
// Auto-injects links and disables null ones
// ============================================================
document.querySelectorAll(".project-card").forEach(card => {
  const key    = card.dataset.project;             // set data-project="hospital" etc.
  const links  = PROJECT_LINKS[key];
  if (!links) return;

  const ghBtn  = card.querySelector(".project-link--github");
  const liveBtn = card.querySelector(".project-link--live");

  if (links.github) {
    ghBtn.href = links.github;
    ghBtn.removeAttribute("aria-disabled");
    ghBtn.removeAttribute("tabindex");
    ghBtn.classList.remove("project-link--disabled");
  }

  if (links.live) {
    liveBtn.href = links.live;
    liveBtn.removeAttribute("aria-disabled");
    liveBtn.removeAttribute("tabindex");
    liveBtn.classList.remove("project-link--disabled");
  }
});
```

---

## 5. ACCESSIBILITY & SEO REQUIREMENTS

### 5.1 Accessibility Rules (WCAG 2.1 AA)

| Rule | Requirement |
|------|-------------|
| All `<a>` tags must have visible text OR `aria-label` | Required |
| Icon-only links MUST have `aria-label` | Required |
| External links should announce "opens in new tab" to screen readers | Recommended |
| Tab order must follow visual order | Required |
| Focus ring must be visible (do not remove `:focus` outline) | Required |
| Color contrast on links: minimum 4.5:1 against background | Required |

```html
<!-- Screen reader "new tab" announcement pattern -->
<a
  href="https://github.com/Logic-builder24"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="GitHub Profile (opens in new tab)"
>
  GitHub
</a>
```

```css
/* Never remove focus ring — restyle it instead */
a:focus-visible {
  outline: 2px solid #FFFFFF;
  outline-offset: 3px;
  border-radius: 3px;
}
```

---

### 5.2 SEO Meta Tags

Place these in `<head>` of `index.html`:

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- Primary SEO -->
  <title>Jai Dev Meena — Frontend Developer & CS Undergrad</title>
  <meta
    name="description"
    content="Portfolio of Jai Dev Meena, a Frontend Developer and B.Tech CSE student at LPU. Projects in web development, Python, and AI/ML."
  />
  <meta name="author" content="Jai Dev Meena" />
  <meta name="keywords"
    content="Jai Dev Meena, Frontend Developer, Portfolio, React, JavaScript, Python, LPU, CSE"
  />

  <!-- Open Graph (LinkedIn / WhatsApp previews) -->
  <meta property="og:title"       content="Jai Dev Meena — Frontend Developer" />
  <meta property="og:description" content="Portfolio of Jai Dev Meena. Projects in web development, data analysis and AI." />
  <meta property="og:type"        content="website" />
  <meta property="og:url"         content="https://logic-builder24.github.io/portfolio/" />
  <meta property="og:image"       content="./assets/og-preview.png" />

  <!-- Twitter Card -->
  <meta name="twitter:card"        content="summary_large_image" />
  <meta name="twitter:title"       content="Jai Dev Meena — Frontend Developer" />
  <meta name="twitter:description" content="Portfolio of Jai Dev Meena, CS undergrad and Frontend Developer." />
  <meta name="twitter:image"       content="./assets/og-preview.png" />

  <!-- Canonical URL -->
  <link rel="canonical" href="https://logic-builder24.github.io/portfolio/" />

  <!-- Favicon -->
  <link rel="icon" type="image/png" href="./assets/favicon.png" />
</head>
```

---

## 6. LINK BEHAVIOUR SPECIFICATION

| Link Type          | Target     | rel attribute           | download attr | Notes                           |
|--------------------|------------|-------------------------|---------------|---------------------------------|
| Social (GitHub)    | `_blank`   | `noopener noreferrer`   | No            | Always new tab                  |
| Social (LinkedIn)  | `_blank`   | `noopener noreferrer`   | No            | Always new tab                  |
| Email (`mailto:`)  | (default)  | None                    | No            | Opens mail client               |
| Phone (`tel:`)     | (default)  | None                    | No            | Dials on mobile                 |
| CV / PDF           | `_blank`   | `noopener noreferrer`   | Optional      | Opens inline or prompts save    |
| Project GitHub     | `_blank`   | `noopener noreferrer`   | No            | New tab                         |
| Project Live Demo  | `_blank`   | `noopener noreferrer`   | No            | New tab                         |
| In-page anchors    | (same page)| None                    | No            | Smooth scroll, offset for navbar|
| Back to top        | (same page)| None                    | No            | Smooth scroll to `#hero`        |

---

### Hover Interaction CSS

```css
/* Base transition for all links */
a {
  transition: color 0.2s ease, opacity 0.2s ease;
  text-decoration: none;
  color: var(--text-muted);
}

/* Social / contact links */
.social-link:hover,
.contact-value:hover {
  color: var(--text-heading);
}

/* Project link buttons */
.project-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border: 1px solid var(--border);
  border-radius: 50px;
  font-family: var(--font-code);
  font-size: 13px;
  color: var(--text-muted);
  transition: all 0.2s ease;
}

.project-link:hover:not(.project-link--disabled) {
  border-color: var(--text-heading);
  color: var(--text-heading);
  transform: translateY(-2px);
}

/* Nav links — underline slide-in from left */
.nav-link {
  position: relative;
  color: var(--text-muted);
  font-family: var(--font-sans);
  font-size: 14px;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--text-heading);
  transition: width 0.25s ease;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

/* CTA pill button (hero / navbar) */
.btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  border: 1px solid var(--text-heading);
  border-radius: 50px;
  font-family: var(--font-code);
  font-size: 14px;
  color: var(--text-heading);
  background: transparent;
  transition: background 0.2s ease, color 0.2s ease;
}

.btn-outline:hover {
  background: var(--text-heading);
  color: var(--bg-primary);
}
```

---

## 7. QA CHECKLIST

Run through this checklist before deploying or handing off:

### Link Integrity
- [ ] GitHub link (`https://github.com/Logic-builder24`) opens correct profile
- [ ] LinkedIn link opens correct profile — verify `/in/jai-dev-meena893144281/` slug
- [ ] Email link (`mailto:mjai9127@gmail.com`) opens mail client with correct address
- [ ] Phone link (`tel:+918209926739`) works on mobile device
- [ ] CV PDF link opens or downloads the correct file
- [ ] All external links have `target="_blank"` and `rel="noopener noreferrer"`
- [ ] No dead `href="#"` anchors on page
- [ ] All in-page anchors (`#about`, `#projects`, etc.) scroll to correct sections with nav offset

### Placeholder Links
- [ ] Project GitHub buttons either have real URLs or are visually disabled
- [ ] Project Live Demo buttons either have real URLs or are visually disabled
- [ ] Disabled buttons have `aria-disabled="true"` and `tabindex="-1"`
- [ ] `PROJECT_LINKS` config object is at top of `script.js` for easy future editing

### Accessibility
- [ ] All icon-only links have `aria-label`
- [ ] Focus ring is visible on all links (tab through the page)
- [ ] External links announce "opens in new tab" in `aria-label`
- [ ] Link contrast ratio ≥ 4.5:1 (use https://webaim.org/resources/contrastchecker/)

### SEO
- [ ] `<title>` contains name + role
- [ ] `<meta name="description">` is filled and under 160 characters
- [ ] Open Graph image (`og-preview.png`) exists at `./assets/`
- [ ] Canonical URL points to live domain
- [ ] Favicon is set

### Mobile
- [ ] Phone link (`tel:`) is clickable and dials on iOS and Android
- [ ] All buttons are minimum 44×44px tap target
- [ ] Social links in hero are reachable without horizontal scroll

---

*SRS Version 1.0 — Jai Dev Meena Portfolio*
*Links sourced directly from CV. Placeholder protocol must be followed for all unconfirmed URLs.*
*Update PROJECT_LINKS config in script.js when real repo/demo URLs are available.*
