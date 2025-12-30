---
layout: moma
title: "Photo Archive"
lang: en
permalink: /en/pages/fotoarhiv.html
---

{% assign lang = page.lang | default: "en" %}
{% assign t = site.data.translations[lang] %}

<article class="page-content">
  <header class="page-header">
    <span class="text-uppercase" style="color: var(--text-muted); margin-bottom: var(--space-3); display: block;">Archive</span>
    <h1 class="page-title">Photo Archive</h1>
    <p class="page-meta">Digitized historical photographs, family albums, and expedition shots</p>
  </header>

  <div class="prose">

## Gallery

{% assign photos = site.data.photos | default: [] %}
{% if photos.size > 0 %}
  </div>

  <div class="gallery-moma" style="margin: var(--space-8) 0;">
    {% for photo in photos %}
    <div class="gallery-item">
      <img 
        src="{{ 'photos/' | append: photo.file | relative_url }}" 
        alt="{{ photo.title | escape }}" 
        loading="lazy"
      />
      <div class="gallery-caption">
        <div class="gallery-caption-title">{{ photo.title }}</div>
        {% if photo.approx_date or photo.place %}
        <div class="gallery-caption-meta">
          {% if photo.approx_date %}{{ photo.approx_date }}{% endif %}{% if photo.approx_date and photo.place %} · {% endif %}{% if photo.place %}{{ photo.place }}{% endif %}
        </div>
        {% endif %}
      </div>
    </div>
    {% endfor %}
  </div>

  <div class="prose">
  <p style="font-size: var(--text-sm); color: var(--text-muted); margin-top: var(--space-6);">
    Total photos: {{ photos.size }}
  </p>

{% else %}
<p>No photographs have been added to the catalog yet.</p>
{% endif %}

---

## Metadata Format

Photographs are catalogued in `_data/photos.yml` with the following fields:

- `file` — file path
- `title` — name/description
- `approx_date` — approximate date
- `place` — location of the photograph
- `source` — source of the photograph
- `people` — list of people in the photo
- `notes` — additional notes

---

**Terms of Use:** All images are published with source attribution. If you need a photograph removed, please contact us through the "[Contacts]({{ '/en/pages/kontakty.html' | relative_url }})" section.

  </div>
</article>
