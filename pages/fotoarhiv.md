---
layout: moma
title: "Фотоархив"
permalink: /pages/fotoarhiv.html
---

<article class="page-content page-content-gallery">
  <header class="page-header">
    <span class="text-uppercase" style="color: var(--text-muted); margin-bottom: var(--space-3); display: block;">Архив</span>
    <h1 class="page-title">Фотоархив</h1>
    <p class="page-meta">Оцифрованные исторические фотографии, семейные альбомы и экспедиционные снимки</p>
  </header>

  <div class="prose" markdown="1">

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

  <div class="prose" markdown="1">
  <p style="font-size: var(--text-sm); color: var(--text-muted); margin-top: var(--space-6);">
    Всего фотографий: {{ photos.size }}
  </p>

{% else %}
<p>Фотографии ещё не добавлены в каталог.</p>
{% endif %}

---

## Формат метаданных

Фотографии каталогизированы в `_data/photos.yml` со следующими полями:

- `file` — путь к файлу
- `title` — название/описание
- `approx_date` — приблизительная дата
- `place` — место съёмки
- `source` — источник фотографии
- `people` — список людей на фото
- `notes` — дополнительные заметки

---

**Условия использования:** Все изображения публикуются с указанием источника. При необходимости удаления фотографии свяжитесь через раздел «[Контакты]({{ '/pages/kontakty.html' | relative_url }})».

  </div>
</article>
