/* Главный скрипт сайта: тема, фильтрация, навигация, карта */
(function() {
  const THEME_KEY = 'themePref';
  const root = document.documentElement;

  function detectSystemDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  function applyTheme(mode) {
    if (mode === 'dark') {
      root.setAttribute('data-theme','dark');
    } else if (mode === 'light') {
      root.setAttribute('data-theme','light');
    } else {
      // auto
      root.setAttribute('data-theme', detectSystemDark() ? 'dark' : 'light');
    }
  }
  function loadTheme() {
    const stored = localStorage.getItem(THEME_KEY);
    if (!stored || stored === 'auto') {
      applyTheme('auto');
      return 'auto';
    }
    applyTheme(stored);
    return stored;
  }
  let currentTheme = loadTheme();

  function toggleTheme() {
    if (currentTheme === 'light') {
      currentTheme = 'dark';
    } else if (currentTheme === 'dark') {
      currentTheme = 'auto';
    } else { // auto -> light
      currentTheme = 'light';
    }
    localStorage.setItem(THEME_KEY, currentTheme);
    applyTheme(currentTheme === 'auto' ? 'auto' : currentTheme);
    updateThemeButton();
  }
  function updateThemeButton() {
    const btn = document.getElementById('modeToggle');
    if (!btn) return;
    const labelMap = { light: 'Светлая тема', dark: 'Тёмная тема', auto: 'Авто (система)' };
    const iconMap = { light: '☀', dark: '🌙', auto: '◐' };
    btn.textContent = iconMap[currentTheme] || '◐';
    btn.setAttribute('aria-label', 'Переключить тему: ' + labelMap[currentTheme]);
    btn.title = 'Тема: ' + labelMap[currentTheme] + ' (клик для смены)';
  }

  document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle
    const modeBtn = document.getElementById('modeToggle');
    if (modeBtn) {
      updateThemeButton();
      modeBtn.addEventListener('click', toggleTheme);
      // Respond to system changes when in auto
      if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
          const stored = localStorage.getItem(THEME_KEY);
          if (!stored || stored === 'auto') {
            applyTheme('auto');
            updateThemeButton();
          }
        });
      }
    }

    // Vocabulary filter
    const filterInput = document.getElementById('vocab-filter');
    const vocabTable = document.getElementById('vocab-table');
    if (filterInput && vocabTable) {
      const rows = Array.from(vocabTable.querySelectorAll('tbody tr'));
      let emptyRow = null;

      function ensureEmptyRow() {
        if (!emptyRow) {
          emptyRow = document.createElement('tr');
          const td = document.createElement('td');
          td.colSpan = 5;
          td.style.textAlign = 'center';
          td.style.fontSize = '.75rem';
          td.style.padding = '1rem .5rem';
          td.textContent = 'Нет результатов';
          emptyRow.appendChild(td);
        }
        return emptyRow;
      }

      function filterRows() {
        const q = filterInput.value.trim().toLowerCase();
        let visible = 0;
        rows.forEach(r => {
          // Skip the synthetic row if already there
          if (r === emptyRow) return;
          const text = r.textContent.toLowerCase();
            if (!q || text.indexOf(q) !== -1) {
              r.style.display = '';
              visible++;
            } else {
              r.style.display = 'none';
            }
        });
        if (visible === 0) {
          vocabTable.querySelector('tbody').appendChild(ensureEmptyRow());
        } else if (emptyRow && emptyRow.parentNode) {
          emptyRow.remove();
        }
      }
      filterInput.addEventListener('input', () => {
        window.requestAnimationFrame(filterRows);
      });
    }

    // Mobile navigation
    const navToggle = document.getElementById('navToggle');
    const navList = document.querySelector('.site-nav ul');
    if (navToggle && navList) {
      function closeNav() {
        navToggle.classList.remove('active');
        navList.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
      navToggle.addEventListener('click', () => {
        const open = navList.classList.toggle('open');
        navToggle.classList.toggle('active', open);
        navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      navList.addEventListener('click', e => {
        if (e.target.tagName === 'A') {
          closeNav();
        }
      });
      document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeNav();
      });
      document.addEventListener('click', e => {
        if (!navList.contains(e.target) && !navToggle.contains(e.target)) {
          if (navList.classList.contains('open')) closeNav();
        }
      });
    }

    // Scroll progress bar
    const progressBar = document.getElementById('scrollProgress');
    function updateProgress() {
      if (!progressBar) return;
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      progressBar.style.width = pct + '%';
    }
    if (progressBar) {
      updateProgress();
      window.addEventListener('scroll', () => requestAnimationFrame(updateProgress), { passive: true });
      window.addEventListener('resize', () => requestAnimationFrame(updateProgress));
    }

    // Back to top button
    const backBtn = document.getElementById('backToTop');
    function updateBackBtn() {
      if (!backBtn) return;
      if (window.scrollY > 400) {
        backBtn.hidden = false;
        backBtn.classList.add('show');
      } else {
        backBtn.classList.remove('show');
        backBtn.hidden = true;
      }
    }
    if (backBtn) {
      updateBackBtn();
      window.addEventListener('scroll', () => requestAnimationFrame(updateBackBtn), { passive: true });
      backBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Simple lightbox for gallery
    const galleryFigures = Array.from(document.querySelectorAll('.gallery-grid figure'));
    const lightbox = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightboxImg');
    const lbCap = document.getElementById('lightboxCap');
    const lbClose = lightbox ? lightbox.querySelector('.lightbox-close') : null;
    const lbPrev = lightbox ? lightbox.querySelector('.lightbox-prev') : null;
    const lbNext = lightbox ? lightbox.querySelector('.lightbox-next') : null;
    let lbIndex = -1;

    function readFigure(fig) {
      const img = fig.querySelector('img');
      const cap = fig.querySelector('figcaption');
      return {
        src: img ? img.getAttribute('src') : '',
        alt: img ? img.getAttribute('alt') || '' : '',
        caption: cap ? cap.textContent.trim() : ''
      };
    }
    const items = galleryFigures.map(readFigure);

    function openLightbox(i) {
      if (!lightbox || !lbImg || !lbCap || i < 0 || i >= items.length) return;
      lbIndex = i;
      const it = items[i];
      lbImg.src = it.src;
      lbImg.alt = it.alt;
      lbCap.textContent = it.caption;
      lightbox.hidden = false;
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
    function closeLightbox() {
      if (!lightbox) return;
      lightbox.hidden = true;
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      lbIndex = -1;
    }
    function showNext(delta) {
      if (lbIndex < 0) return;
      let i = lbIndex + delta;
      if (i < 0) i = items.length - 1;
      if (i >= items.length) i = 0;
      openLightbox(i);
    }

    if (galleryFigures.length && lightbox) {
      galleryFigures.forEach((fig, i) => {
        const img = fig.querySelector('img');
        if (img) {
          img.addEventListener('click', () => openLightbox(i));
        }
      });
      lbClose && lbClose.addEventListener('click', closeLightbox);
      lbPrev && lbPrev.addEventListener('click', () => showNext(-1));
      lbNext && lbNext.addEventListener('click', () => showNext(1));
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
      });
      document.addEventListener('keydown', (e) => {
        if (lightbox.hidden) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') showNext(1);
        if (e.key === 'ArrowLeft') showNext(-1);
      });
    }

    // (Optional) Future map init can hook here.
  });
})();
