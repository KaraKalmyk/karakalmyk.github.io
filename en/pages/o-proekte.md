---
layout: moma
title: "About the Project"
lang: en
permalink: /en/pages/o-proekte.html
---

{% assign lang = page.lang | default: "en" %}
{% assign t = site.data.translations[lang] %}

<article class="page-content">
  <header class="page-header">
    <span class="text-uppercase" style="color: var(--text-muted); margin-bottom: var(--space-3); display: block;">About</span>
    <h1 class="page-title">About the Project</h1>
    <p class="page-meta">Preserving and presenting the cultural heritage of the Sart-Kalmyks</p>
  </header>

  <div class="prose">

This project was created to preserve and make accessible the cultural heritage of the Sart-Kalmyks (Sart-Oirats) of the Issyk-Kul region.

## Principles

- Respect for the community and tradition bearers
- Transparency of sources and attribution
- Non-profit and educational nature
- Gradual expansion and scientific accuracy

## Team / Contributors

*(Add names, roles, contact or pseudonyms.)*

## How the Site Works

Static site built with Jekyll (GitHub Pages). Structure:

- `_config.yml` — settings
- `_layouts/` — templates
- `pages/` — content sections
- `assets/images/` — images
- `assets/css/` — styles
- `_data/` — structured data (dictionary, photos, etc.)

## Development Plans

- Automatic dictionary generation
- Interactive map (Leaflet + GeoJSON)
- Search index (lunr.js)
- Audio player for oral recordings

## Ethical Considerations

Some materials (photos, stories) may require explicit consent. If you would like something removed or corrected — please contact us.

## Licensing

We suggest licensing texts under CC BY-NC-SA 4.0 and separate conditions for photographs.

> Draft text — please expand.

  </div>
</article>

