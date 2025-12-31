---
layout: moma
title: "Maps"
lang: en
permalink: /en/pages/karty.html
---

{% assign lang = page.lang | default: "en" %}
{% assign t = site.data.translations[lang] %}

<article class="page-content">
  <header class="page-header">
    <span class="text-uppercase" style="color: var(--text-muted); margin-bottom: var(--space-3); display: block;">Geography</span>
    <h1 class="page-title">Maps</h1>
    <p class="page-meta">Static and interactive maps of the region</p>
  </header>

  <div class="prose" markdown="1">

## Ideas

- Historical camps and winter settlements
- Movements (seasonal routes)
- Clan territories / cemeteries (with caution and respect)
- Toponymy (original names and modern ones)

## Technologies (later)

- Simple static images in `assets/images/maps/`
- GeoJSON files in `assets/data/geo/`
- Embedding Leaflet.js for interactive maps

## Example GeoJSON Structure

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {"name": "...", "type": "winter camp", "years": "ca. 1920"},
      "geometry": {"type": "Point", "coordinates": [78.39, 42.49]}
    }
  ]
}
```

> Important: Do not publish sensitive coordinates (e.g., burial sites) without community permission.

  </div>
</article>
