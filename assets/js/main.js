/* Главное взаимодействие: темы, навигация, прокрутка, галерея */
(function() {
  const root = document.documentElement;
  const THEME_KEY = 'themePref';
  let currentTheme;

  function detectSystemDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function applyTheme(mode) {
    if (mode === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else if (mode === 'light') {
      root.setAttribute('data-theme', 'light');
    } else {
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

  function toggleTheme() {
    if (currentTheme === 'light') currentTheme = 'dark';
    else if (currentTheme === 'dark') currentTheme = 'auto';
    else currentTheme = 'light';

    localStorage.setItem(THEME_KEY, currentTheme);
    applyTheme(currentTheme === 'auto' ? 'auto' : currentTheme);
    updateThemeButton();
  }

  function updateThemeButton() {
    const btn = document.getElementById('modeToggle');
    if (!btn) return;
    const mapIcon = { light: '☀', dark: '🌙', auto: '◐' };
    const mapLabel = { light: 'Светлая тема', dark: 'Тёмная тема', auto: 'Автоматическая тема' };
    btn.textContent = mapIcon[currentTheme] || '◐';
    btn.setAttribute('aria-label', 'Переключить тему: ' + mapLabel[currentTheme]);
    btn.title = mapLabel[currentTheme];
  }

  function initTheme() {
    currentTheme = loadTheme();
    updateThemeButton();
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        const stored = localStorage.getItem(THEME_KEY);
        if (!stored || stored === 'auto') {
          applyTheme('auto');
          updateThemeButton();
        }
      });
    }
    const btn = document.getElementById('modeToggle');
    btn && btn.addEventListener('click', toggleTheme);
  }

  function initMobileNav() {
    const toggle = document.getElementById('navToggle');
    const list = document.querySelector('.site-nav ul');
    if (!toggle || !list) return;
    function close() {
      toggle.classList.remove('active');
      list.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
    toggle.addEventListener('click', () => {
      const open = list.classList.toggle('open');
      toggle.classList.toggle('active', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    list.addEventListener('click', (e) => {
      if (e.target.matches('a')) close();
    });
    document.addEventListener('click', (e) => {
      if (!list.contains(e.target) && !toggle.contains(e.target)) close();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });
  }

  function initScrollFeatures() {
    const progress = document.getElementById('scrollProgress');
    const header = document.getElementById('siteHeader');
    const backBtn = document.getElementById('backToTop');
    let lastScrollY = window.scrollY;

    function updateProgress() {
      if (!progress) return;
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      const pct = height > 0 ? (scrollTop / height) * 100 : 0;
      progress.style.width = pct + '%';
    }

    function updateHeader() {
      if (!header) return;
      const current = window.scrollY;
      const condense = current > 60;
      header.classList.toggle('is-condensed', condense);
      const hidden = current > lastScrollY && current > 120;
      header.classList.toggle('is-hidden', hidden);
      lastScrollY = current;
    }

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

    window.addEventListener('scroll', () => {
      requestAnimationFrame(updateProgress);
      requestAnimationFrame(updateHeader);
      requestAnimationFrame(updateBackBtn);
    }, { passive: true });
    window.addEventListener('resize', () => requestAnimationFrame(updateProgress));

    backBtn && backBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    updateProgress();
    updateHeader();
    updateBackBtn();
  }

  function initLightbox() {
    const figures = Array.from(document.querySelectorAll('.gallery-grid figure'));
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightboxImg');
    const caption = document.getElementById('lightboxCap');
    const btnClose = document.querySelector('.lightbox-close');
    const btnPrev = document.querySelector('.lightbox-prev');
    const btnNext = document.querySelector('.lightbox-next');
    let index = -1;

    const items = figures.map((fig) => {
      const figureImg = fig.querySelector('img');
      const cap = fig.querySelector('figcaption');
      return {
        src: figureImg ? figureImg.currentSrc || figureImg.src : '',
        alt: figureImg ? figureImg.alt : '',
        caption: cap ? cap.textContent.trim() : ''
      };
    });

    function open(i) {
      if (!lightbox || !img || !caption || i < 0 || i >= items.length) return;
      index = i;
      const item = items[i];
      img.src = item.src;
      img.alt = item.alt;
      caption.textContent = item.caption;
      lightbox.hidden = false;
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      btnClose && btnClose.focus();
    }

    function close() {
      if (!lightbox) return;
      lightbox.hidden = true;
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      index = -1;
    }

    function show(delta) {
      if (index < 0) return;
      let i = index + delta;
      if (i < 0) i = items.length - 1;
      if (i >= items.length) i = 0;
      open(i);
    }

    figures.forEach((fig, i) => {
      const preview = fig.querySelector('img');
      if (preview) preview.addEventListener('click', () => open(i));
    });

    btnClose && btnClose.addEventListener('click', close);
    btnPrev && btnPrev.addEventListener('click', () => show(-1));
    btnNext && btnNext.addEventListener('click', () => show(1));
    lightbox && lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) close();
    });
    document.addEventListener('keydown', (e) => {
      if (!lightbox || lightbox.hidden) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') show(1);
      if (e.key === 'ArrowLeft') show(-1);
    });
  }

  function initVocabFilter() {
    const filter = document.getElementById('vocab-filter');
    const table = document.getElementById('vocab-table');
    if (!filter || !table) return;
    const rows = Array.from(table.querySelectorAll('tbody tr'));
    let emptyRow;

    function ensureEmptyRow() {
      if (!emptyRow) {
        emptyRow = document.createElement('tr');
        const cell = document.createElement('td');
        cell.colSpan = 5;
        cell.textContent = 'Нет результатов';
        cell.style.textAlign = 'center';
        cell.style.padding = '1rem';
        emptyRow.appendChild(cell);
      }
      return emptyRow;
    }

    function filterRows() {
      const query = filter.value.trim().toLowerCase();
      let visible = 0;
      rows.forEach((row) => {
        if (row === emptyRow) return;
        const match = row.textContent.toLowerCase().includes(query);
        row.style.display = match ? '' : 'none';
        if (match) visible++;
      });
      if (visible === 0) {
        table.querySelector('tbody').appendChild(ensureEmptyRow());
      } else if (emptyRow && emptyRow.parentNode) {
        emptyRow.remove();
      }
    }

    filter.addEventListener('input', () => requestAnimationFrame(filterRows));
  }

  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileNav();
    initScrollFeatures();
    initLightbox();
    initVocabFilter();
  });
})();
