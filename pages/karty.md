---
layout: moma
title: "Карты"
permalink: /pages/karty.html
---

<article class="page-content">
  <header class="page-header">
    <span class="text-uppercase" style="color: var(--text-muted); margin-bottom: var(--space-3); display: block;">География</span>
    <h1 class="page-title">Карты</h1>
    <p class="page-meta">Статичные и интерактивные карты региона</p>
  </header>

  <div class="prose" markdown="1">

## Идеи

- Исторические стоянки и зимовки
- Перемещения (сезонные маршруты)
- Родовые участки / кладбища (с осторожностью и уважением)
- Топонимика (оригинальные названия и современные)

## Технологии (позже)

- Простые статические изображения в `assets/images/maps/`
- GeoJSON файлы в `assets/data/geo/`
- Встраивание Leaflet.js для интерактивной карты

## Пример структуры GeoJSON

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {"name": "...", "type": "зимовка", "years": "ок. 1920"},
      "geometry": {"type": "Point", "coordinates": [78.39, 42.49]}
    }
  ]
}
```

> Важно: не публикуйте чувствительные координаты (например, мест погребений) без разрешения общины.

  </div>
</article>
