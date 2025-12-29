---
layout: moma
title: "blog"
lang: ky
permalink: /ky/pages/blog.html
---
{% assign lang = page.lang | default: "ky" %}
{% assign t = site.data.translations[lang] %}
<article class="page-content">
  <header class="page-header">
    <h1 class="page-title">{{ t.nav.blog | default: "blog" }}</h1>
    <p class="page-meta">Бул бет которулуп жатат. Толук мазмун үчүн орусча версиясын караңыз.</p>
  </header>
  <div class="prose">
    <p>Мазмун жакында. Бул бет учурда орус тилинен которулуп жатат.</p>
    <p><a href="/pages/blog.html">Орусча версиясын көрүү →</a></p>
  </div>
</article>
