---
layout: moma
title: "Оозеки уламыштар"
lang: ky
permalink: /ky/pages/ustnye-predaniya.html
---

{% assign lang = page.lang | default: "ky" %}
{% assign t = site.data.translations[lang] %}

<article class="page-content">
  <header class="page-header">
    <span class="text-uppercase" style="color: var(--text-muted); margin-bottom: var(--space-3); display: block;">Фольклор</span>
    <h1 class="page-title">Оозеки уламыштар</h1>
    <p class="page-meta">Аңгемелер, легендалар, ырлар, сыйынуулар жана материалдык эмес маданий мурастын элементтери</p>
  </header>

  <div class="prose">

Оозеки аңгемелерди, легендаларды, ырларды, сыйынууларды жана материалдык эмес маданий мурастын башка элементтерин жарыялоо бөлүмү.

## Жазуу форматы (сунуш)

Ар бир текст үчүн `pages/predaniya/` подпапкасында (кийинчерээк түзүлөт) өзүнчө Markdown файлы түзүлүшү мүмкүн же тизме `_data/narratives.yml` файлында сакталышы мүмкүн.

### Аңгеме файлынын фронт маттеринин мисалы

```yaml
---
layout: default
title: "Байыркы көчүп-конуу жөнүндө"
author: "Баяндоочунун аты (же 'аноним')"
collector: "Ким жазып алды"
date_recorded: "2024-08"
place: "Айыл / тегереги"
lang: "диалект / орусча / аралаш"
original_audio: "/assets/audio/filename.mp3"
transcription_status: "долбоор"
---

Транскрипция тексти...

## Котормо
(зарыл болсо)

## Комментарийлер
Лингвистикалык жана этнографиялык түшүндүрмөлөр.
```

> Аудио же аттарды жарыялоодон мурун, баяндоочунун макулдугун алганыңызды текшериңиз.

  </div>
</article>
