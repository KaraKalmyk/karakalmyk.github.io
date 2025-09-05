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

    // (Optional) Future map init can hook here.
  });
})();
