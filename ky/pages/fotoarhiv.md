---
layout: moma
title: "Сүрөт архиви"
lang: ky
permalink: /ky/pages/fotoarhiv.html
---

{% assign lang = page.lang | default: "ky" %}
{% assign t = site.data.translations[lang] %}

<article class="page-content">
  <header class="page-header">
    <span class="text-uppercase" style="color: var(--text-muted); margin-bottom: var(--space-3); display: block;">Архив</span>
    <h1 class="page-title">Сүрөт архиви</h1>
    <p class="page-meta">Санарип тарыхый сүрөттөр, үй-бүлөлүк альбомдор жана экспедиция сүрөттөрү</p>
  </header>

  <div class="prose">

## Галерея

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
    Жалпы сүрөттөр: {{ photos.size }}
  </p>

{% else %}
<p>Каталогго сүрөттөр дагы кошула элек.</p>
{% endif %}

---

## Метадаталар форматы

Сүрөттөр `_data/photos.yml` файлында төмөнкү талаалар менен каталогдоштурулган:

- `file` — файлдын жолу
- `title` — аталышы/сүрөттөмөсү
- `approx_date` — болжолдуу датасы
- `place` — сүрөткө тартуу орду
- `source` — сүрөттүн булагы
- `people` — сүрөттөгү адамдардын тизмеси
- `notes` — кошумча эскертүүлөр

---

**Колдонуу шарттары:** Бардык сүрөттөр булагын көрсөтүү менен жарыяланат. Эгер сүрөттү алып салуу керек болсо, «[Байланыштар]({{ '/ky/pages/kontakty.html' | relative_url }})» бөлүмү аркылуу биз менен байланышыңыз.

  </div>
</article>
