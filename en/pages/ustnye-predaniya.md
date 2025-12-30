---
layout: moma
title: "Oral Traditions"
lang: en
permalink: /en/pages/ustnye-predaniya.html
---

{% assign lang = page.lang | default: "en" %}
{% assign t = site.data.translations[lang] %}

<article class="page-content">
  <header class="page-header">
    <span class="text-uppercase" style="color: var(--text-muted); margin-bottom: var(--space-3); display: block;">Folklore</span>
    <h1 class="page-title">Oral Traditions</h1>
    <p class="page-meta">Stories, legends, songs, prayers, and elements of intangible cultural heritage</p>
  </header>

  <div class="prose" markdown="1">

A section for publishing oral stories, legends, songs, prayers, and other elements of intangible cultural heritage.

## Recording Format (Proposal)

For each text, you can create a separate Markdown file in the subfolder `pages/predaniya/` (to be created later) or store a list in `_data/narratives.yml`.

### Example Front Matter for a Story File

```yaml
---
layout: default
title: "About the Ancient Migration"
author: "Name of narrator (or 'anonymous')"
collector: "Who recorded"
date_recorded: "2024-08"
place: "Village / surroundings"
lang: "dialect / Russian / mixed"
original_audio: "/assets/audio/filename.mp3"
transcription_status: "draft"
---

Transcription text...

## Translation
(if needed)

## Commentary
Linguistic and ethnographic explanations.
```

> Before publishing audio or names, make sure you have the narrator's consent.

  </div>
</article>
