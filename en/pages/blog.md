---
layout: moma
title: "Blog"
lang: en
permalink: /en/pages/blog.html
---

{% assign lang = page.lang | default: "en" %}
{% assign t = site.data.translations[lang] %}

<article class="page-content">
  <header class="page-header">
    <span class="text-uppercase" style="color: var(--text-muted); margin-bottom: var(--space-3); display: block;">Publications</span>
    <h1 class="page-title">Blog</h1>
    <p class="page-meta">Materials tagged as blog posts</p>
  </header>

  <div class="prose">

<p style="font-size: var(--text-sm); color: var(--text-muted);">Tip: To include a page in the blog, add <code>blog: true</code> to its YAML front matter and specify <code>title:</code> and (optionally) <code>date:</code>.</p>

{% comment %} Collecting posts from two places: standard _posts directory (site.posts) and pages with front-matter blog: true {% endcomment %}
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
<p>No blog posts found yet. Create a page and add <code>blog: true</code> to its front matter, or create entries in the <code>_posts/</code> directory.</p>
{% endif %}

---

## How to Publish Posts

- Add a file to the `_posts/` folder with a name in the format `YYYY-MM-DD-title.md` and standard Jekyll front matter (title, date, layout).
- Or mark a regular page in `pages/` with `blog: true` in its front matter.

<p style="font-size: var(--text-sm); color: var(--text-muted); margin-top: var(--space-4);">After adding a new post — commit and push the repository, GitHub Pages will automatically rebuild the site.</p>

  </div>
</article>
