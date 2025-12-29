---
layout: moma
title: "Home"
lang: en
permalink: /en/
---

{% assign lang = page.lang | default: "en" %}
{% assign t = site.data.translations[lang] %}

<!-- Hero Section: Single Main Photo -->
<section class="hero-banner">
  <div class="hero-banner-bg">
    <img src="{{ '/photos/home_woman.jpg' | relative_url }}" 
         alt="{{ t.hero.caption }}" />
  </div>
  <div class="hero-banner-content">
    <span class="hero-eyebrow">{{ t.hero.eyebrow }}</span>
    <h1 class="hero-title">
      <span>{{ t.hero.title_1 }}</span>
      <span>{{ t.hero.title_2 }}</span>
    </h1>
    <p class="hero-subtitle">
      {{ t.hero.subtitle }}
    </p>
    <div class="hero-actions">
      <a href="/{{ lang }}/pages/fotoarhiv.html" class="btn btn-primary">{{ t.hero.btn_photos }}</a>
      <a href="/{{ lang }}/pages/o-proekte.html" class="btn btn-light">{{ t.hero.btn_about }}</a>
    </div>
  </div>
  <span class="hero-banner-caption">{{ t.hero.caption }}</span>
</section>

<!-- Stats Block -->
<div class="stats-block container">
  <div class="stat-item" data-animate>
    <div class="stat-number">5</div>
    <div class="stat-label">{{ t.stats.expeditions }}</div>
  </div>
  <div class="stat-item" data-animate>
    <div class="stat-number">14+</div>
    <div class="stat-label">{{ t.stats.photos }}</div>
  </div>
  <div class="stat-item" data-animate>
    <div class="stat-number">1000+</div>
    <div class="stat-label">{{ t.stats.words }}</div>
  </div>
  <div class="stat-item" data-animate>
    <div class="stat-number">∞</div>
    <div class="stat-label">{{ t.stats.stories }}</div>
  </div>
</div>

<!-- Main Sections Grid -->
<section class="section-moma">
  <div class="container">
    <header class="section-header">
      <h2 class="section-title">{{ t.sections.title }}</h2>
      <p class="section-subtitle">
        {{ t.sections.subtitle }}
      </p>
    </header>

    <div class="card-grid stagger-children">
      <!-- Featured Card: History -->
      <a href="/{{ lang }}/pages/istoriya.html" class="card-moma card-feature span-12">
        <div class="card-image">
          <img src="{{ '/photos/yudakhin/borubash/yurta.jpg' | relative_url }}" 
               alt="{{ t.cards.history_title }}" />
        </div>
        <div class="card-content">
          <span class="card-tag">{{ t.cards.history_tag }}</span>
          <h3 class="card-title">{{ t.cards.history_title }}</h3>
          <p class="card-excerpt">
            {{ t.cards.history_excerpt }}
          </p>
          <span class="card-link">{{ t.cards.history_link }}</span>
        </div>
      </a>

      <!-- Language -->
      <a href="/{{ lang }}/pages/yazyk.html" class="card-moma span-6">
        <div class="card-content">
          <span class="card-tag">{{ t.cards.language_tag }}</span>
          <h3 class="card-title">{{ t.cards.language_title }}</h3>
          <p class="card-excerpt">
            {{ t.cards.language_excerpt }}
          </p>
          <span class="card-link">{{ t.cards.language_link }}</span>
        </div>
      </a>

      <!-- Photo Archive -->
      <a href="/{{ lang }}/pages/fotoarhiv.html" class="card-moma span-6">
        <div class="card-image">
          <img src="{{ '/photos/yudakhin/borubash/semia.jpg' | relative_url }}" 
               alt="{{ t.cards.photos_title }}" />
        </div>
        <div class="card-content">
          <span class="card-tag">{{ t.cards.photos_tag }}</span>
          <h3 class="card-title">{{ t.cards.photos_title }}</h3>
          <p class="card-excerpt">
            {{ t.cards.photos_excerpt }}
          </p>
          <span class="card-link">{{ t.cards.photos_link }}</span>
        </div>
      </a>

      <!-- Maps -->
      <a href="/{{ lang }}/pages/karty.html" class="card-moma span-4">
        <div class="card-content">
          <span class="card-tag">{{ t.cards.maps_tag }}</span>
          <h3 class="card-title">{{ t.cards.maps_title }}</h3>
          <p class="card-excerpt">
            {{ t.cards.maps_excerpt }}
          </p>
          <span class="card-link">{{ t.cards.maps_link }}</span>
        </div>
      </a>

      <!-- Oral Traditions -->
      <a href="/{{ lang }}/pages/ustnye-predaniya.html" class="card-moma span-4">
        <div class="card-content">
          <span class="card-tag">{{ t.cards.oral_tag }}</span>
          <h3 class="card-title">{{ t.cards.oral_title }}</h3>
          <p class="card-excerpt">
            {{ t.cards.oral_excerpt }}
          </p>
          <span class="card-link">{{ t.cards.oral_link }}</span>
        </div>
      </a>

      <!-- Bibliography -->
      <a href="/{{ lang }}/pages/bibliografiya.html" class="card-moma span-4">
        <div class="card-content">
          <span class="card-tag">{{ t.cards.biblio_tag }}</span>
          <h3 class="card-title">{{ t.cards.biblio_title }}</h3>
          <p class="card-excerpt">
            {{ t.cards.biblio_excerpt }}
          </p>
          <span class="card-link">{{ t.cards.biblio_link }}</span>
        </div>
      </a>
    </div>
  </div>
</section>

<!-- Asymmetric Feature Block -->
<section class="asymmetric-block reverse">
  <div class="asymmetric-image">
    <img src="{{ '/photos/yudakhin/borubash/gruppa_zhenshin.jpg' | relative_url }}" 
         alt="{{ t.origin.title }}" />
  </div>
  <div class="asymmetric-content">
    <span class="text-uppercase" style="color: var(--text-muted); margin-bottom: var(--space-4); display: block;">
      {{ t.origin.eyebrow }}
    </span>
    <h2 style="margin-bottom: var(--space-4);">
      {{ t.origin.title }}
    </h2>
    <p style="font-size: var(--text-lg); line-height: 1.6;">
      {{ t.origin.text }}
    </p>
    <a href="/{{ lang }}/pages/proiskhozhdenie.html" class="btn" style="margin-top: var(--space-6);">
      {{ t.origin.btn }}
    </a>
  </div>
</section>

<!-- Photo Gallery Preview -->
<section class="section-moma" style="background: var(--bg-secondary);">
  <div class="container">
    <header class="section-header">
      <h2 class="section-title">{{ t.archive.title }}</h2>
      <p class="section-subtitle">
        {{ t.archive.subtitle }}
      </p>
    </header>

    <div class="gallery-moma">
      {% for photo in site.data.photos limit:6 %}
      <div class="gallery-item">
        <img src="{{ '/photos/' | append: photo.file | relative_url }}" 
             alt="{{ photo.title }}" />
        <div class="gallery-caption">
          <div class="gallery-caption-title">{{ photo.title }}</div>
          <div class="gallery-caption-meta">{{ photo.approx_date }} · {{ photo.source }}</div>
        </div>
      </div>
      {% endfor %}
    </div>

    <div style="text-align: center; margin-top: var(--space-8);">
      <a href="/{{ lang }}/pages/fotoarhiv.html" class="btn">
        {{ t.archive.btn }}
      </a>
    </div>
  </div>
</section>

<!-- Quote Block -->
<section class="quote-block">
  <blockquote class="quote-text">
    {{ t.quote.text }}
  </blockquote>
  <cite class="quote-author">{{ t.quote.author }}</cite>
</section>

<!-- CTA Section -->
<section class="cta-section">
  <h2 class="cta-title">{{ t.cta.title }}</h2>
  <p class="cta-text">
    {{ t.cta.text }}
  </p>
  <a href="/{{ lang }}/pages/kontakty.html" class="btn">
    {{ t.cta.btn }}
  </a>
</section>

<!-- Additional Links -->
<section class="section-moma">
  <div class="container">
    <div class="card-grid">
      <a href="/{{ lang }}/pages/byt-i-kultura.html" class="card-moma span-3">
        <div class="card-content">
          <span class="card-tag">{{ t.cards.culture_tag }}</span>
          <h3 class="card-title">{{ t.cards.culture_title }}</h3>
          <span class="card-link">→</span>
        </div>
      </a>
      <a href="/{{ lang }}/pages/hozyaystvo.html" class="card-moma span-3">
        <div class="card-content">
          <span class="card-tag">{{ t.cards.economy_tag }}</span>
          <h3 class="card-title">{{ t.cards.economy_title }}</h3>
          <span class="card-link">→</span>
        </div>
      </a>
      <a href="/{{ lang }}/pages/religiya.html" class="card-moma span-3">
        <div class="card-content">
          <span class="card-tag">{{ t.cards.religion_tag }}</span>
          <h3 class="card-title">{{ t.cards.religion_title }}</h3>
          <span class="card-link">→</span>
        </div>
      </a>
      <a href="/{{ lang }}/pages/blog.html" class="card-moma span-3">
        <div class="card-content">
          <span class="card-tag">{{ t.cards.blog_tag }}</span>
          <h3 class="card-title">{{ t.cards.blog_title }}</h3>
          <span class="card-link">→</span>
        </div>
      </a>
    </div>
  </div>
</section>

