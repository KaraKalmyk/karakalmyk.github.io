---
layout: default
title: "Фотоархив"
permalink: /pages/fotoarhiv.html
---
# Фотоархив

Раздел для оцифрованных исторических фотографий, семейных альбомов и экспедиционных снимков.

## Структура каталога (предложение)
```
assets/images/foto/
  people/
  life/
  migrations/
  documents/
  maps/
```

## Метаданные фотографии (рекомендуемый формат YAML фронт-маттера для отдельных страниц или JSON/YAML в `_data`)
```
- file: people/001.jpg
  title: "Семейный портрет"
  approx_date: "ок. 1930"
  place: "окрестности Каракола"
  source: "семейный архив семьи ..."
  people: ["..."]
  notes: "..."
```

## Публикация
Позже можно автоматизировать галерею через генерацию списков из `_data/photos.yml`.

> Пожалуйста, проверяйте права и согласие на публикацию изображений.

---
## Галерея (черновой рендер из данных)
{% assign photos = site.data.photos | default: [] %}
{% if photos.size > 0 %}
<div class="gallery-grid" id="photo-gallery">
  {% for ph in photos %}
  <figure data-title="{{ ph.title | escape }}" data-place="{{ ph.place | escape }}">
    <img loading="lazy" src="{{ ('/assets/images/foto/' | append: ph.file) | relative_url }}" alt="{{ ph.title | escape }}" />
    <figcaption>
      <strong>{{ ph.title }}</strong>{% if ph.approx_date %} <span class="muted">({{ ph.approx_date }})</span>{% endif %}<br>
      {% if ph.place %}<span class="muted">{{ ph.place }}</span>{% endif %}
    </figcaption>
  </figure>
  {% endfor %}
</div>
<p class="muted" style="font-size:.7rem;">Всего фотографий: {{ photos.size }}. Некоторые файлы могут отсутствовать пока.</p>
{% else %}
<p>Фотографии ещё не добавлены.</p>
{% endif %}

<p style="margin-top:1.2rem;font-size:.8rem;">Источник и условия использования указываются в метаданных. При необходимости удаления изображения — свяжитесь через раздел «Контакты».</p>
