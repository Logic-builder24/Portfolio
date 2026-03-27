// ============================================================
// PORTFOLIO — Jai Dev Meena
// Main Script
// ============================================================

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
// DOM READY
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  initCustomCursor();
  initNavbar();
  initHamburger();
  initScrollAnimations();
  initTypingAnimation();
  initCounterAnimation();
  injectProjectLinks();
  initParticles();
});

// ============================================================
// 1. LOADING SCREEN
// ============================================================
function initLoader() {
  const loader = document.getElementById("loader");
  if (!loader) return;

  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.classList.add("hidden");
    }, 600);
  });

  // Fallback: hide loader after 3s max
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 3000);
}

// ============================================================
// 2. CUSTOM CURSOR
// ============================================================
function initCustomCursor() {
  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  if (!dot || !ring) return;

  // Hide on touch devices
  if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
    dot.style.display = "none";
    ring.style.display = "none";
    document.body.style.cursor = "auto";
    return;
  }

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";
  });

  // Smooth trailing ring
  function animateRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.left = ringX + "px";
    ring.style.top = ringY + "px";
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Hover effect on interactive elements
  const interactiveElements = document.querySelectorAll("a, button, .tag, .skill-card, .project-card, .cert-card");
  interactiveElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      dot.classList.add("hover");
      ring.classList.add("hover");
    });
    el.addEventListener("mouseleave", () => {
      dot.classList.remove("hover");
      ring.classList.remove("hover");
    });
  });
}

// ============================================================
// 3. NAVBAR — Sticky + Blur on Scroll + Active Section
// ============================================================
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  // Scroll background
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Active nav link on scroll
  const observerOptions = {
    root: null,
    rootMargin: "-30% 0px -60% 0px",
    threshold: 0,
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => navObserver.observe(section));
}

// ============================================================
// 4. HAMBURGER MENU
// ============================================================
function initHamburger() {
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener("click", () => {
    const isOpen = hamburger.classList.toggle("open");
    mobileNav.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  // Close when a link is clicked
  mobileNav.querySelectorAll(".nav-link, .nav-cta").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      mobileNav.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });
}

// ============================================================
// 5. SCROLL ANIMATIONS (IntersectionObserver)
// ============================================================
function initScrollAnimations() {
  const fadeElements = document.querySelectorAll(".fade-in");

  const scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          scrollObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  fadeElements.forEach((el) => scrollObserver.observe(el));
}

// ============================================================
// 6. TYPING ANIMATION
// ============================================================
function initTypingAnimation() {
  const typingEl = document.getElementById("typingText");
  if (!typingEl) return;

  const roles = ["Data Analyst", "Python Developer", "Problem Solver", "CS Undergrad"];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let speed = 100;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typingEl.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      speed = 50;
    } else {
      typingEl.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      speed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      speed = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      speed = 400; // Pause before next word
    }

    setTimeout(type, speed);
  }

  // Start after a brief delay
  setTimeout(type, 1200);
}

// ============================================================
// 7. COUNTER ANIMATION (Stats)
// ============================================================
function initCounterAnimation() {
  const counters = document.querySelectorAll(".stat-number[data-target]");
  if (!counters.length) return;

  let animated = false;

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          counters.forEach((counter) => {
            const target = parseInt(counter.getAttribute("data-target"), 10);
            const suffix = counter.getAttribute("data-suffix") || "";
            animateCounter(counter, target, suffix);
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  // Observe the stats bar
  const statsBar = document.querySelector(".stats-bar");
  if (statsBar) counterObserver.observe(statsBar);
}

function animateCounter(element, target, suffix) {
  let current = 0;
  const duration = 1500;
  const increment = target / (duration / 30);
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current) + suffix;
  }, 30);
}

// ============================================================
// 8. PROJECT LINKS INJECTION
// ============================================================
function injectProjectLinks() {
  document.querySelectorAll(".project-card").forEach((card) => {
    const key = card.dataset.project;
    const links = PROJECT_LINKS[key];
    if (!links) return;

    const ghBtn = card.querySelector(".project-link--github");
    const liveBtn = card.querySelector(".project-link--live");

    if (links.github && ghBtn) {
      ghBtn.href = links.github;
      ghBtn.removeAttribute("aria-disabled");
      ghBtn.removeAttribute("tabindex");
      ghBtn.classList.remove("project-link--disabled");
    }

    if (links.live && liveBtn) {
      liveBtn.href = links.live;
      liveBtn.removeAttribute("aria-disabled");
      liveBtn.removeAttribute("tabindex");
      liveBtn.classList.remove("project-link--disabled");
    }
  });
}

// ============================================================
// 9. SMOOTH SCROLL with Navbar Offset
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href === "#") return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();

    const navHeight = document.getElementById("navbar")?.offsetHeight || 70;
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
});

// ============================================================
// 10. FLOATING PARTICLES
// ============================================================
function initParticles() {
  // Don't add particles on mobile (performance)
  if (window.innerWidth < 768) return;

  const container = document.body;
  const particleCount = 15;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.width = (Math.random() * 2 + 1) + 'px';
    particle.style.height = particle.style.width;
    particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
    particle.style.animationDelay = (Math.random() * 10) + 's';
    particle.style.opacity = Math.random() * 0.15 + 0.05;
    container.appendChild(particle);
  }
}


