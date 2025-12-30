---
layout: moma
title: "Блог"
lang: ky
permalink: /ky/pages/blog.html
---

{% assign lang = page.lang | default: "ky" %}
{% assign t = site.data.translations[lang] %}

<article class="page-content">
  <header class="page-header">
    <span class="text-uppercase" style="color: var(--text-muted); margin-bottom: var(--space-3); display: block;">Жарыялоолор</span>
    <h1 class="page-title">Блог</h1>
    <p class="page-meta">Блог-пост катары белгиленген материалдар</p>
  </header>

  <div class="prose">

<p style="font-size: var(--text-sm); color: var(--text-muted);">Кеңеш: бетти блогго киргизүү үчүн, анын YAML фронт маттерине <code>blog: true</code> кошуңуз жана <code>title:</code> жана (каалоо боюнча) <code>date:</code> көрсөтүңүз.</p>

{% comment %} Посттарды эки жерден чогултуу: стандарт _posts каталогу (site.posts) жана blog: true фронт маттери бар беттер {% endcomment %}
{% assign posts = site.posts %}
{% unless posts %}{% assign posts = empty %}{% endunless %}
{% assign pages_blog = site.pages | where: "blog", true %}
{% unless pages_blog %}{% assign pages_blog = empty %}{% endunless %}
{% assign all_items = posts | concat: pages_blog %}
{% if all_items.size > 0 %}
<ul style="margin-top: var(--space-6);">
  {% assign sorted = all_items | sort: 'date' | reverse %}
  {% for item in sorted %}
    <li style="margin-bottom: var(--space-4); padding-bottom: var(--space-4); border-bottom: 1px solid var(--border-light);">
      <a href="{{ item.url | relative_url }}" style="font-weight: var(--font-weight-semibold); font-size: var(--text-lg);">{{ item.title | default: item.name }}</a>
      {% if item.date %}<span style="color: var(--text-muted); font-size: var(--text-sm);"> — {{ item.date | date: "%Y-%m-%d" }}</span>{% endif %}
      {% if item.excerpt %}<div style="color: var(--text-secondary); font-size: var(--text-sm); margin-top: var(--space-2);">{{ item.excerpt | strip_html | truncate: 180 }}</div>{% endif %}
    </li>
  {% endfor %}
</ul>

{% else %}
<p>Блог-посттор дагы табылган жок. Бет түзүп, анын фронт маттерине <code>blog: true</code> кошуңуз, же <code>_posts/</code> каталогунда жазуулар түзүңүз.</p>
{% endif %}

---

## Посттарды кантип жарыялоо керек

- `_posts/` папкасына `YYYY-MM-DD-title.md` форматындагы ат менен файл кошуңуз жана стандарт Jekyll фронт маттери (title, date, layout) колдонуңуз.
- Же `pages/` ичиндеги кадимки бетти анын фронт маттерине `blog: true` кошуу менен белгилеңиз.

<p style="font-size: var(--text-sm); color: var(--text-muted); margin-top: var(--space-4);">Жаңы пост кошкондон кийин — репозиторийди коммиттеп, пушлаңыз, GitHub Pages сайтты автоматтык түрдө кайра курат.</p>

  </div>
</article>
