/**
 * MoMA-style UI Interactions
 * Sart-Kalmyk Cultural Heritage Archive
 */

(function() {
  'use strict';

  // === Theme Toggle ===
  const themeToggle = document.getElementById('themeToggle');
  const mobileThemeToggle = document.getElementById('mobileThemeToggle');
  const html = document.documentElement;

  // Check for saved theme preference or respect system preference
  function getPreferredTheme() {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  // Initialize theme
  setTheme(getPreferredTheme());

  // Toggle theme on button click (desktop)
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme');
      setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
  }

  // Toggle theme on mobile button click
  if (mobileThemeToggle) {
    mobileThemeToggle.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme');
      setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
  }

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });

  // === Mobile Menu Toggle ===
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

  if (menuToggle && mobileMenuOverlay) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      mobileMenuOverlay.classList.toggle('active');
      document.body.style.overflow = mobileMenuOverlay.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    mobileMenuOverlay.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenuOverlay.classList.contains('active')) {
        menuToggle.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // === Scroll-triggered Animations ===
  function animateOnScroll() {
    const elements = document.querySelectorAll('[data-animate]');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => observer.observe(el));
  }

  // === Smooth Scroll for Anchor Links ===
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // === Image Loading Enhancement ===
  function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

  // === Photo Lightbox ===
  let lightboxInitialized = false;
  
  function initPhotoLightbox() {
    // Prevent duplicate initialization
    if (lightboxInitialized) return;
    lightboxInitialized = true;
    
    // Create lightbox element if it doesn't exist
    let lightbox = document.getElementById('photoLightbox');
    if (!lightbox) {
      lightbox = document.createElement('div');
      lightbox.id = 'photoLightbox';
      lightbox.className = 'photo-lightbox';
      lightbox.innerHTML = `
        <button class="photo-lightbox-close" aria-label="Close">&times;</button>
        <div class="photo-lightbox-content">
          <img src="" alt="" />
          <div class="photo-lightbox-caption">
            <div class="photo-lightbox-caption-title"></div>
            <div class="photo-lightbox-caption-meta"></div>
          </div>
        </div>
        <span class="photo-lightbox-hint">Click anywhere to close</span>
      `;
      document.body.appendChild(lightbox);
    }

    const lightboxImg = lightbox.querySelector('.photo-lightbox-content img');
    const lightboxTitle = lightbox.querySelector('.photo-lightbox-caption-title');
    const lightboxMeta = lightbox.querySelector('.photo-lightbox-caption-meta');
    const closeBtn = lightbox.querySelector('.photo-lightbox-close');

    // Open lightbox function
    function openLightbox(imgSrc, title, meta) {
      lightboxImg.src = imgSrc;
      lightboxImg.alt = title || '';
      lightboxTitle.textContent = title || '';
      lightboxMeta.textContent = meta || '';
      lightbox.classList.add('active');
      document.body.classList.add('lightbox-open');
    }

    // Close lightbox function
    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.classList.remove('lightbox-open');
    }

    // Add click listeners to gallery items
    const galleryItems = document.querySelectorAll('.gallery-moma .gallery-item');
    galleryItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const img = item.querySelector('img');
        const caption = item.querySelector('.gallery-caption');
        const titleEl = caption ? caption.querySelector('.gallery-caption-title') : null;
        const metaEl = caption ? caption.querySelector('.gallery-caption-meta') : null;
        const title = titleEl ? titleEl.textContent : '';
        const meta = metaEl ? metaEl.textContent : '';
        
        if (img) {
          openLightbox(img.src, title, meta);
        }
      });
    });

    // Close on clicking the close button
    closeBtn.addEventListener('click', closeLightbox);

    // Close on clicking the lightbox background (not the content)
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  // === Initialize ===
  document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    lazyLoadImages();
    initPhotoLightbox();
  });

})();

