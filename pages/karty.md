---
layout: moma
title: "Карты"
permalink: /pages/karty.html
---

{% assign lang = page.lang | default: "ru" %}
{% assign t = site.data.translations[lang] %}

<article class="page-content">
  <header class="page-header">
    <span class="text-uppercase" style="color: var(--text-muted); margin-bottom: var(--space-3); display: block;">География</span>
    <h1 class="page-title">{{ t.maps.title }}</h1>
    <p class="page-meta">{{ t.maps.subtitle }}</p>
  </header>

  <div class="prose" markdown="1">

## {{ t.maps.villages_title }}

{{ t.maps.villages_description }}

  </div>

  <!-- Map Provider Selector -->
  <div class="map-provider-selector" id="map-provider-selector">
    <h4>{{ t.maps.select_provider }}</h4>
    <div class="provider-options">
      <div class="provider-option">
        <input type="radio" id="osm" name="map-provider" value="osm" checked>
        <label for="osm">{{ t.maps.provider_osm }}</label>
      </div>
      <div class="provider-option">
        <input type="radio" id="google_streets" name="map-provider" value="google_streets">
        <label for="google_streets">{{ t.maps.provider_google_streets }}</label>
      </div>
      <div class="provider-option">
        <input type="radio" id="google_satellite" name="map-provider" value="google_satellite">
        <label for="google_satellite">{{ t.maps.provider_google_satellite }}</label>
      </div>
      <div class="provider-option">
        <input type="radio" id="google_hybrid" name="map-provider" value="google_hybrid">
        <label for="google_hybrid">{{ t.maps.provider_google_hybrid }}</label>
      </div>
      <div class="provider-option">
        <input type="radio" id="yandex" name="map-provider" value="yandex">
        <label for="yandex">{{ t.maps.provider_yandex }}</label>
      </div>
      <div class="provider-option">
        <input type="radio" id="yandex_satellite" name="map-provider" value="yandex_satellite">
        <label for="yandex_satellite">{{ t.maps.provider_yandex_satellite }}</label>
      </div>
      <div class="provider-option">
        <input type="radio" id="bing_aerial" name="map-provider" value="bing_aerial">
        <label for="bing_aerial">{{ t.maps.provider_bing }}</label>
      </div>
      <div class="provider-option">
        <input type="radio" id="twogis" name="map-provider" value="twogis">
        <label for="twogis">{{ t.maps.provider_2gis }}</label>
      </div>
    </div>
  </div>

  <!-- Interactive Map -->
  <div class="map-container">
    <div id="villages-map"></div>
  </div>

  <!-- Map Legend -->
  <div class="map-legend">
    <h4>{{ t.maps.legend }}</h4>
    <div id="map-legend">
      <ul class="map-legend-list">
        <li>
          <span class="legend-color" style="background-color: #e74c3c; border-color: #e74c3c;"></span>
          <span class="legend-label">{{ t.maps.chelpek }}</span>
        </li>
        <li>
          <span class="legend-color" style="background-color: #3498db; border-color: #3498db;"></span>
          <span class="legend-label">{{ t.maps.borubash }}</span>
        </li>
        <li>
          <span class="legend-color" style="background-color: #2ecc71; border-color: #2ecc71;"></span>
          <span class="legend-label">{{ t.maps.tashkiya }}</span>
        </li>
        <li>
          <span class="legend-color" style="background-color: #9b59b6; border-color: #9b59b6;"></span>
          <span class="legend-label">{{ t.maps.burmasuu }}</span>
        </li>
      </ul>
    </div>
  </div>

  <div class="prose" markdown="1">

## Идеи для развития

- Исторические стоянки и зимовки
- Перемещения (сезонные маршруты)
- Родовые участки / кладбища (с осторожностью и уважением)
- Топонимика (оригинальные названия и современные)

> Важно: не публикуйте чувствительные координаты (например, мест погребений) без разрешения общины.

  </div>
</article>

<!-- Leaflet CSS -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="">
<!-- Leaflet JS -->
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
<!-- Villages Map Script -->
<script src="{{ '/assets/js/villages-map.js' | relative_url }}"></script>
