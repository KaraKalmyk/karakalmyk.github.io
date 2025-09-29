---
layout: default
title: "Фотоархив"
permalink: /pages/fotoarhiv.html
---

# Фотоархив

Раздел для оцифрованных исторических фотографий, семейных альбомов и экспедиционных снимков.

## Структура каталога
```
photos/
  yudakhin/
    individual/
    borubash/
  family_archives/
  expeditions/
  documents/
```

## Формат метаданных
Фотографии каталогизированы в `_data/photos.yml` со следующими полями:
- `file` - путь к файлу
- `title` - название/описание
- `approx_date` - приблизительная дата
- `place` - место съёмки
- `source` - источник фотографии
- `people` - список людей на фото
- `notes` - дополнительные заметки

---

## Галерея

{% assign photos = site.data.photos | default: [] %}
{% if photos.size > 0 %}
<div class="gallery-grid" id="photo-gallery">
  {% for photo in photos %}
  <figure>
    <img 
      src="{{ 'photos/' | append: photo.file | relative_url }}" 
      alt="{{ photo.title | escape }}" 
      loading="lazy"
      onerror="this.closest('figure').classList.add('img-error')"
    />
    <figcaption>
      <strong>{{ photo.title }}</strong>
      {% if photo.approx_date %}<span class="muted"> ({{ photo.approx_date }})</span>{% endif %}
      {% if photo.place %}<br><span class="muted">{{ photo.place }}</span>{% endif %}
    </figcaption>
  </figure>
  {% endfor %}
</div>

<p class="muted" style="font-size: 0.85rem; margin-top: 1.5rem;">
  Всего фотографий: {{ photos.size }}
</p>

{% else %}
<p>Фотографии ещё не добавлены в каталог.</p>
{% endif %}

---

**Условия использования:** Все изображения публикуются с указанием источника. При необходимости удаления фотографии свяжитесь через раздел «[Контакты]({{ '/pages/kontakty.html' | relative_url }})».
