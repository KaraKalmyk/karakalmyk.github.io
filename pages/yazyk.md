---
layout: default
title: "Язык"
permalink: /pages/yazyk.html
---
# Язык / Диалект

Раздел для материалов по языку (диалекту) сарт-калмыков. Планируется:

## Словарь
- Базовый лексический список (Swadesh, этнографические термины)
- Тематические блоки: природа, кочевье, родство, скотоводство

## Фонетика
- Особенности согласных и гласных
- Дифтонги, редукция
- Сопоставление с ойратскими и монгольскими формами

## Морфология и синтаксис
- Склонение
- Глагольные формы
- Послелоги / частицы

## Тексты
- Устные рассказы с транскрипцией и переводом
- Песни / молитвы (если допустимо к публикации)

## Формат данных
Можно хранить словарь в файле `_data/vocabulary.yml`:
```
- lemma: "..."
  gloss: "..."
  pos: "n|v|adj|..."
  translation: "..."
  notes: "..."
```
Позже можно сгенерировать автоматическую страницу списка.

---
## Автоматически сгенерированный список слов (черновой)
{% assign vocab = site.data.vocabulary | default: [] %}
{% if vocab.size > 0 %}
<label for="vocab-filter" style="display:block;margin:.5rem 0 .25rem;font-size:.85rem;">Фильтр по лемме / переводу:</label>
<input id="vocab-filter" type="text" placeholder="Начните ввод..." style="padding:.45rem .6rem;max-width:340px;width:100%;border:1px solid #ccc;border-radius:4px;" />
<div style="overflow-x:auto;margin-top:1rem;">
<table id="vocab-table">
  <thead>
    <tr>
      <th>Лемма</th>
      <th>Перевод</th>
      <th>Gloss</th>
      <th>Часть речи</th>
      <th>Примечания</th>
    </tr>
  </thead>
  <tbody>
  {% for e in vocab %}
    <tr>
      <td><strong>{{ e.lemma }}</strong></td>
      <td>{{ e.translation }}</td>
      <td>{{ e.gloss }}</td>
      <td>{{ e.pos }}</td>
      <td>{{ e.notes }}</td>
    </tr>
  {% endfor %}
  </tbody>
</table>
</div>
<p class="muted" style="margin-top:.6rem;font-size:.7rem;">Всего записей: {{ vocab.size }}. Черновый список. Возможны исправления.</p>
{% else %}
<p>Словарь пока пуст. Записи будут добавлены позже.</p>
{% endif %}
