---
layout: moma
title: "Карталар"
lang: ky
permalink: /ky/pages/karty.html
---

{% assign lang = page.lang | default: "ky" %}
{% assign t = site.data.translations[lang] %}

<article class="page-content">
  <header class="page-header">
    <span class="text-uppercase" style="color: var(--text-muted); margin-bottom: var(--space-3); display: block;">География</span>
    <h1 class="page-title">Карталар</h1>
    <p class="page-meta">Аймактын статикалык жана интерактивдүү карталары</p>
  </header>

  <div class="prose" markdown="1">

## Идеялар

- Тарыхый конуштар жана кыштоолор
- Жылышуулар (сезондук маршруттар)
- Урук аймактары / көрүстөндөр (этият жана урмат менен)
- Топонимика (баштапкы аттар жана заманбап аттар)

## Технологиялар (кийинчерээк)

- `assets/images/maps/` ичинде жөнөкөй статикалык сүрөттөр
- `assets/data/geo/` ичинде GeoJSON файлдары
- Интерактивдүү карта үчүн Leaflet.js кыстаруу

## GeoJSON түзүмүнүн мисалы

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {"name": "...", "type": "кыштоо", "years": "болж. 1920"},
      "geometry": {"type": "Point", "coordinates": [78.39, 42.49]}
    }
  ]
}
```

> Маанилүү: коомчулуктун уруксатысыз сезимтал координаттарды (мисалы, көрүстөн жерлерин) жарыялабаңыз.

  </div>
</article>
