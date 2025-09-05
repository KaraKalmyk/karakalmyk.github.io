/* Главный скрипт сайта (плейсхолдер)
 * Здесь можно реализовать:
 * - Инициализацию интерактивной карты (Leaflet)
 * - Поисковый индекс (Lunr.js)
 * - Тёмная/светлая тема
 * - Фильтрацию словаря
 */

(function() {
  // Пример: динамическая отметка года в футере (если нужно отдельное поле)
  // const yearSpan = document.querySelector('[data-year]');
  // if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // Заготовка для инициализации карты (будет добавлена на странице "Карты"):
  // if (document.getElementById('map')) {
  //   const map = L.map('map').setView([42.49, 78.39], 8);
  //   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     maxZoom: 18,
  //     attribution: '&copy; OpenStreetMap contributors'
  //   }).addTo(map);
  //   fetch('/assets/data/geo/points.geojson')
  //     .then(r => r.json())
  //     .then(data => {
  //       L.geoJSON(data, {
  //         onEachFeature: (f, layer) => {
  //           layer.bindPopup(`<strong>${f.properties.name||''}</strong><br>${f.properties.type||''}`);
  //         }
  //       }).addTo(map);
  //     });
  // }
})();

