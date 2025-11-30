---
layout: default
title: "Фотоархив"
permalink: /pages/fotoarhiv.html
body_class: "page-photo"
---
<header class="page-header">
  <div class="tag-badge">Цифровая коллекция</div>
  <h1>Фотоархив</h1>
  <p class="muted">Оцифрованные исторические фотографии, семейные альбомы и материалы экспедиций, связанные с сарт-калмыками Иссык-Куля.</p>
</header>

<section class="info-panel" aria-label="Структура каталога">
  <div>
    <p class="info-panel__title">Каталожные блоки</p>
    <pre><code>photos/
  yudakhin/
    borubash/
  family_archives/
  expeditions/
  documents/
</code></pre>
  </div>
  <div>
    <p class="info-pill">Метаданные</p>
    <ul>
      <li><strong>file</strong> — путь к файлу</li>
      <li><strong>title</strong> — короткое описание</li>
      <li><strong>approx_date</strong> — ориентировочная дата</li>
      <li><strong>place</strong> — место съёмки</li>
      <li><strong>source</strong> — коллекция/владелец</li>
    </ul>
  </div>
  <div>
    <p class="info-pill">Дополнительно</p>
    <p class="muted">notes — комментарии; people — список фигурирующих персон.</p>
  </div>
</section>

<section aria-label="Галерея" class="gallery-wrap">
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
        {% if photo.approx_date %}<div class="photo-meta"><span>{{ photo.approx_date }}</span>{% endif %}
        {% if photo.place %}<span>{{ photo.place }}</span>{% endif %}
        {% if photo.source %}<span>Источник: {{ photo.source }}</span>{% endif %}
        {% if photo.people and photo.people.size > 0 %}<span>Люди: {{ photo.people | join: ', ' }}</span>{% endif %}
        {% if photo.notes %}<span>{{ photo.notes }}</span>{% endif %}
        {% if photo.approx_date %}</div>{% endif %}
      </figcaption>
    </figure>
    {% endfor %}
  </div>
  <p class="muted" style="font-size: 0.85rem; margin-top: var(--space-sm);">Всего фотографий: {{ photos.size }}.</p>
  {% else %}
  <p>Фотографии ещё не добавлены в каталог.</p>
  {% endif %}
</section>

<section class="callout" aria-label="Условия использования">
  <h2>Условия использования</h2>
  <p>Изображения публикуются с указанием источника и не предназначены для коммерческого использования. Если вы владеете правами и хотите добавить или удалить фото, свяжитесь с нами через раздел «<a href="{{ '/pages/kontakty.html' | relative_url }}">Контакты</a>».</p>
</section>
