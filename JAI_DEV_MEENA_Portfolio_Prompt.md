# 🧠 MASTER PROMPT — Portfolio Website for Jai Dev Meena
### For: Antigravity / Full-Stack AI Builder
### Type: Single-Page Portfolio Website (SPA) — HTML + CSS + JS (Vanilla or Next.js)

---

## 📌 PROJECT OVERVIEW

Build a **stunning, dark-themed, minimal developer portfolio website** for **Jai Dev Meena**, a Computer Science undergraduate at Lovely Professional University, Punjab, India. The website should feel like a premium, handcrafted developer portfolio — inspired by the design language of Nikita Khvatov's portfolio (dark, monochrome, code-aesthetic) but personalized for Jai Dev's profile.

The site must be **fully responsive** (mobile-first), **single-page with smooth scroll navigation**, and have a strong, memorable visual identity.

---

## 🎨 DESIGN SYSTEM

### Color Palette
```
Background (primary):   #121212
Background (secondary): #1A1A1A
Surface / Cards:        #1F1F1F
Border / Dividers:      #2A2A2A
Gray Accent:            #3D3D3D
Text Muted:             #A6A6A6
Text Body:              #F5F5F5
Text Headings:          #FFFFFF
Accent Highlight:       #FFFFFF (white pill buttons, hover states)
Tag Background:         #2A2A2A with #A6A6A6 text
```

### Typography
```
Headings / Code Labels: "Fira Code", monospace — bold, large, impactful
Body / Descriptions:    "Open Sans", sans-serif — regular/light weight
Section Labels:         "Fira Code", size 13px, #A6A6A6, styled as: ... /Section Name ...
Hero Title:             "Fira Code", 72–96px, white, line-height 1.05
Sub-hero text:          "Open Sans", 16px, #A6A6A6, italic on key phrases
```

Import both fonts from Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600;700&family=Open+Sans:ital,wght@0,300;0,400;0,600;1,400&display=swap" rel="stylesheet">
```

### Spacing & Layout
- Max content width: `1100px`, centered with `auto` margins
- Section vertical padding: `100px 0`
- Cards: `border-radius: 12px`, `border: 1px solid #2A2A2A`, `background: #1F1F1F`
- Tag pills: `border-radius: 6px`, `padding: 4px 10px`, `font-size: 12px`, `Fira Code`

### Motion / Micro-interactions
- Fade-in + slide-up on scroll for every section (IntersectionObserver, threshold 0.1)
- Hover: cards lift with `transform: translateY(-4px)`, `transition: 0.3s ease`
- Nav links: underline slide-in from left on hover
- Cursor: custom dot cursor (small white circle 8px, trailing ghost 24px outline)
- Hero title: typing animation for the role text ("Frontend Developer", "Web Developer", "Problem Solver")
- Tag pills: subtle scale-up on hover

---

## 🗂️ SITE STRUCTURE & SECTIONS

### 0. NAVIGATION (Sticky, top)
```
Left:   Name — [ Jai Dev ] in Fira Code, white, 18px
Center: About  |  Projects  |  Certificates  |  Contact
Right:  [Download CV] → white outlined pill button
```
- Transparent background at top, transitions to `rgba(18,18,18,0.95)` with `backdrop-filter: blur(10px)` on scroll
- On mobile: hamburger menu (animated ☰ → ✕ toggle), full-screen dark overlay nav

---

### 1. HERO SECTION

**Layout:** Full viewport height (`100vh`), vertically centered content

**Top-left corner label:**
```
... / Jai Dev Meena ...
```
in `Fira Code`, `#A6A6A6`, `13px`

**Main Headline (large, stacked):**
```
Frontend
    Developer  ...
```
Use Fira Code, 80–96px, white, bold. The second line is right-offset (like the reference design). Add `...` ellipses in muted gray before/after to create the "code comment" aesthetic.

**Subtext below headline:**
```
My goal is to write maintainable, clean
and understandable code.
```
Open Sans, 16px, `#A6A6A6`, with "maintainable, clean" and "understandable code" in italic white.

**CTA Button (right side, floating pill):**
```
[ Projects  → ]
```
White filled rounded pill, black text, `Fira Code`, hover: invert colors.

**Social Links Row (below subtext):**
Icon + label pills for: GitHub | LinkedIn | Email
Minimal: small square-rounded buttons with logos, `#2A2A2A` background, hover `#3D3D3D`

**Background:**
- Faint circle outline (stroke-only SVG circle, `#222`, `border-radius: 50%`, ~600px) positioned top-right, partially off-screen — exact match to reference images
- Very subtle diagonal stripe texture or none — keep clean

---

### 2. ABOUT SECTION

**Section label (top-left):**
```
... /About me ...
```

**Two-column layout:**
- Left (60%): Text content
- Right (40%): Abstract decorative element OR placeholder for photo (grayscale, rounded-12px)

**Left Content:**
```
Hello! I'm Jai Dev, a Frontend Developer
& CS undergrad with a passion for Data & AI.

Currently pursuing B.Tech in Computer Science
at Lovely Professional University, Punjab.
More than 1 year of building projects.
```
Open Sans, 16px, line-height 1.7. Bold/italic the key phrases "Frontend Developer" and "CS undergrad".

**Skill Cards Grid (2×2 below bio text):**

Each card: dark surface `#1F1F1F`, `border: 1px solid #2A2A2A`, `border-radius: 12px`, `padding: 20px`

```
┌─────────────────────────────┐  ┌───────────────────────────┐
│  Frontend                   │  │  Styles                   │
│  HTML / CSS / JavaScript /  │  │  Bootstrap / CSS          │
│  React / Next.js / Express  │  │                           │
└─────────────────────────────┘  └───────────────────────────┘

┌─────────────────────────────┐  ┌───────────────────────────┐
│  Back-end & Databases       │  │  Tools & Platforms        │
│  Node.js / PHP / Python /   │  │  Git / GitHub / VS Code / │
│  MongoDB / MySQL / SQL      │  │  Firebase / Streamlit     │
└─────────────────────────────┘  └───────────────────────────┘
```

Each card also has a small top-right toggle icon (like the reference) — decorative arrow/link icon on hover.

---

### 3. PROJECTS SECTION

**Section label:**
```
... /Projects ...
```

**Section Title:**
```
Projects
```
Right-aligned, `Fira Code`, 72px, white (like "Work" and "Articles" in reference images).

**3 Project Cards (full-width stacked layout, alternating left/right image):**

---

**Project 1: Hospital Appointment Scheduler**
```
Period:   Sep 2024 – Dec 2024
Tags:     [HTML] [CSS] [JavaScript] [PHP] [SQL] [Firebase]

Title:    Hospital Appointment Scheduler

Description:
Full-stack online appointment system with patient registration/login,
streamlined booking workflows, automated reminders, and secure data
handling. Real-time doctor availability with dynamic slot updates.
Built a comprehensive doctor/admin dashboard.

Links:    [GitHub ↗]  [Live ↗]
```

**Project 2: Election Analysis Dashboard**
```
Period:   Jun 2025 – Aug 2025
Tags:     [Python] [Pandas] [NumPy] [Matplotlib] [Seaborn]

Title:    Election Analysis Dashboard

Description:
Cleaned and analysed real-world election datasets. Performed EDA to
identify voting patterns, turnout variations, and party performance.
Generated visual and statistical insights on voter behaviour and
demographic influences across regions.

Links:    [GitHub ↗]  [Live ↗]
```

**Project 3: History Chatbot**
```
Period:   Oct 2025 – Dec 2025
Tags:     [Python] [NLP] [Streamlit] [Gemini API] [NLTK]

Title:    History Chatbot

Description:
Interactive AI chatbot answering historical questions using NLP
techniques — tokenization, stemming, and intent detection. Integrated
Gemini API for generative responses. Deployed with a clean Streamlit UI.

Links:    [GitHub ↗]  [Live ↗]
```

**Card Design:**
- Each card: `background: #1A1A1A`, `border: 1px solid #2A2A2A`, `border-radius: 16px`, full-width
- Left side: Text content (title, tags, description, links)
- Right side: Placeholder image area (`#2A2A2A` background with faint grid pattern or abstract gradient blob)
- Tech tags: `Fira Code`, 11px pill badges
- Links: small circle arrow buttons like reference images (`width: 36px, height: 36px, border: 1px solid #A6A6A6, border-radius: 50%`)

---

### 4. CERTIFICATES & ACHIEVEMENTS SECTION

**Section label:**
```
... /Certificates ...
```

**Grid layout (2 columns):**

```
┌──────────────────────────────┐  ┌──────────────────────────────┐
│  🎓  Python ML/AI            │  │  🏆  Hackathon — Top 20      │
│  CSE PathSala                │  │  March 2024                  │
│  March 2024                  │  │  Problem-solving & teamwork  │
└──────────────────────────────┘  └──────────────────────────────┘
┌──────────────────────────────┐  ┌──────────────────────────────┐
│  🤖  AI Tools Workshop       │  │  📊  Power BI Workshop       │
│  Be10X                       │  │  OfficeMaster                │
│  September 2025              │  │  September 2025              │
└──────────────────────────────┘  └──────────────────────────────┘
┌──────────────────────────────┐
│  🧮  Computational Theory    │
│  Infosys                     │
│  August 2025                 │
└──────────────────────────────┘
```

Card style: same dark surface, with an accent left border `border-left: 2px solid #A6A6A6`.

---

### 5. EDUCATION SECTION

**Section label:**
```
... /Education ...
```

**Timeline-style layout (vertical):**

```
2023 – Present
└── B.Tech Computer Science & Engineering
    Lovely Professional University, Punjab, India
    CGPA: 6.38

–
└── Matriculation (10th)
    Eklavya International Academy, Jaipur, India
    Percentage: 71.2%
```

Each entry: left date column (muted, small), right content column (white title, gray institution). A thin vertical line (`#2A2A2A`, 1px) connects them. Active/current entry gets a white dot on the timeline.

---

### 6. STATS BAR (between Education and Contact)

**Full-width horizontal band:** `background: #1A1A1A`, `border-top: 1px solid #2A2A2A`, `border-bottom: 1px solid #2A2A2A`

```
  3 Projects Shipped     |    5 Certificates     |    1 Hackathon (Top 20)    |    2+ Years Coding
```

Numbers: `Fira Code`, 40px, white. Labels: `Open Sans`, 13px, `#A6A6A6`. Dividers: `1px solid #2A2A2A`. Animate numbers counting up (0 → value) when section enters viewport.

---

### 7. CONTACT SECTION

**Section label (right-aligned):**
```
... /Contacts ...
```

**Two-column layout:**

Left: Large footer name
```
Jai Dev
  Meena
```
`Fira Code`, 72px, white, bold — stacked like the reference.
Below: `Frontend Developer & CS Undergrad`

Right: Contact links and site credits
```
Navigation:  Main  About  Projects  Certificates

Contact:
  📧  mjai9127@gmail.com
  📱  +91 8209926739
  🔗  linkedin.com/in/jai-dev-meena893144281
  🐙  github.com/Logic-builder24

Site:
  Built by Jai Dev Meena /
  Designed with ♥ /
  Powered by HTML + CSS + JS
```

Links: hover reveals underline slide. Email and phone are clickable (`mailto:`, `tel:`).

**Footer bottom bar:**
```
© 2025 Jai Dev Meena · All rights reserved
```
`Open Sans`, 12px, `#A6A6A6`, centered.

---

## 📱 RESPONSIVE BREAKPOINTS

```
Desktop:  ≥ 1024px  — two-column layouts, large hero text (80–96px)
Tablet:   768–1023px — stack some columns, hero text ~56px
Mobile:   < 768px   — full single column, hero text ~40px,
                       hamburger nav, stacked project cards,
                       2-col stats → 1-col, skill cards stack
```

---

## ⚙️ TECHNICAL REQUIREMENTS

### Stack
```
HTML5 + CSS3 (custom properties / variables) + Vanilla JavaScript
OR  Next.js 14 with Tailwind CSS (if framework preferred)
No heavy UI libraries needed — keep it lean
```

### CSS Architecture
- Use CSS custom properties for all design tokens:
  ```css
  :root {
    --bg-primary:    #121212;
    --bg-secondary:  #1A1A1A;
    --surface:       #1F1F1F;
    --border:        #2A2A2A;
    --text-heading:  #FFFFFF;
    --text-body:     #F5F5F5;
    --text-muted:    #A6A6A6;
    --font-code:     'Fira Code', monospace;
    --font-sans:     'Open Sans', sans-serif;
    --radius-card:   12px;
    --radius-pill:   50px;
    --transition:    0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  ```

### JavaScript Features
1. **Smooth scroll** — `scroll-behavior: smooth` + JS offset for sticky nav
2. **Active nav link** — highlight current section on scroll (IntersectionObserver)
3. **Scroll animations** — `data-aos` style fade-up for each section
4. **Typing animation** — hero role text cycles: "Frontend Developer" → "Web Developer" → "Problem Solver"
5. **Mobile nav** — hamburger toggle with animated icon and overlay
6. **Counter animation** — stats count up on entrance
7. **Custom cursor** — small white dot + larger trailing ring (desktop only)

### Performance
- Lazy-load any images
- No external JS dependencies except Google Fonts
- Lighthouse score target: 90+
- `meta` tags for SEO: title, description, og:image, og:title
- Favicon: initials "JD" on dark background

---

## 🔗 PERSONAL DATA TO INJECT

```
Full Name:     Jai Dev Meena
Role:          Frontend Developer | CS Undergrad
Tagline:       My goal is to write maintainable, clean and understandable code.
Email:         mjai9127@gmail.com
Phone:         +91 8209926739
LinkedIn:      https://www.linkedin.com/in/jai-dev-meena893144281/
GitHub:        https://github.com/Logic-builder24
University:    Lovely Professional University, Punjab, India
Degree:        B.Tech — Computer Science and Engineering (Since Aug 2023)
CGPA:          6.38
School:        Eklavya International Academy, Jaipur, India (10th: 71.2%)
```

---

## ✅ QUALITY CHECKLIST

Before delivering the final build, verify:

- [ ] Dark theme renders consistently across Chrome, Firefox, Safari
- [ ] All fonts load correctly (Fira Code + Open Sans)
- [ ] Hero section is full viewport height with vertical centering
- [ ] Section labels follow `... /Name ...` pattern in Fira Code
- [ ] Sticky nav works with blur backdrop on scroll
- [ ] All 3 projects render with tags, description, and link buttons
- [ ] All 5 certificates render in 2-column grid
- [ ] Timeline renders cleanly for education section
- [ ] Stats counter animates on scroll entrance
- [ ] Mobile hamburger menu opens/closes correctly
- [ ] Custom cursor appears on desktop, hidden on touch devices
- [ ] No horizontal scroll on any breakpoint
- [ ] All external links open in `_blank` with `rel="noopener"`
- [ ] CV download button links to a PDF file
- [ ] Page loads under 2 seconds
- [ ] Console shows zero errors

---

## 🖼️ DESIGN REFERENCES (For Visual Inspiration)

The following are key UI patterns to replicate:

1. **Hero aesthetic** — Large Fira Code staggered heading, muted gray ellipsis `...` bookends, faint SVG circle in background top-right (stroke only, no fill)
2. **Section labeling** — `... /Section Name ...` in top-left of every section, Fira Code 13px muted
3. **Project cards** — Full-width horizontal cards, dark surface, left text + right image placeholder, tag pills in Fira Code
4. **Work timeline** — Thin vertical line, date on left, details on right, current item highlighted white
5. **Footer name** — Large staggered two-line name like "Nikita / Khvatov" style, 72px Fira Code
6. **Button style** — White pill with black text for primary CTA; circle arrow buttons for secondary links

Style References:
- Nikita Khvatov portfolio design (provided in screenshots) — primary visual reference
- Lexander Thakur portfolio (clean stats, project cards, contact) — structural reference
- Overall: think "developer who codes their portfolio from scratch" — code-like, precise, minimal, no gradients except subtle glows

---

*This prompt was generated for Jai Dev Meena's personal portfolio. All personal data is sourced from the provided CV. Design language is adapted from provided UI screenshots with an original, unique execution.*
