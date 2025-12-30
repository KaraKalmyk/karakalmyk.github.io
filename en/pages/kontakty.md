---
layout: moma
title: "Contacts"
lang: en
permalink: /en/pages/kontakty.html
---

{% assign lang = page.lang | default: "en" %}
{% assign t = site.data.translations[lang] %}

<article class="page-content">
  <header class="page-header">
    <span class="text-uppercase" style="color: var(--text-muted); margin-bottom: var(--space-3); display: block;">Contact</span>
    <h1 class="page-title">Contacts</h1>
    <p class="page-meta">Get in touch for collaboration or questions</p>
  </header>

  <div class="prose" markdown="1">

If you would like to share materials, clarify information, or propose collaboration — please write to us.

## Email

Add address: `example@domain.org`

## Social Media / Messengers

- Telegram: `@username` (if available)
- Other: ...

## Contact Form (later)

A simple form can be connected through services (Formspree / Netlify Forms) or GitHub Issues.

## Donations (optional)

Describe ways to support the project, if planned.

> Remove or adapt this template after adding actual contact information.

  </div>
</article>
