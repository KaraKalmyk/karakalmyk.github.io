---
layout: moma
title: "Главная"
---

<!-- Hero Section: Asymmetrical Layout with Bold Typography -->
<section class="hero-moma">
  <div class="hero-content">
    <span class="hero-eyebrow">Цифровой архив культурного наследия</span>
    <h1 class="hero-title">
      <span>Сарт-</span>
      <span>калмыки</span>
    </h1>
    <p class="hero-subtitle">
      Язык, устная история, фотографии, топонимика и культурные практики ойратской общины у Каракола, Иссык-Куль.
    </p>
    <div class="hero-actions">
      <a href="{{ '/pages/fotoarhiv.html' | relative_url }}" class="btn btn-primary">Фотоархив</a>
      <a href="{{ '/pages/o-proekte.html' | relative_url }}" class="btn">О проекте</a>
    </div>
  </div>
  <div class="hero-image">
    <img src="{{ '/photos/yudakhin/borubash/gruppa.jpg' | relative_url }}" 
         alt="Группа сарт-калмыков, экспедиция Юдахина, 1928" />
    <span class="hero-image-caption">Борубаш, 1928. Коллекция Юдахина</span>
  </div>
</section>

<!-- Stats Block -->
<div class="stats-block container">
  <div class="stat-item" data-animate>
    <div class="stat-number">5</div>
    <div class="stat-label">Экспедиции</div>
  </div>
  <div class="stat-item" data-animate>
    <div class="stat-number">14+</div>
    <div class="stat-label">Архивных фото</div>
  </div>
  <div class="stat-item" data-animate>
    <div class="stat-number">1000+</div>
    <div class="stat-label">Слов в словаре</div>
  </div>
  <div class="stat-item" data-animate>
    <div class="stat-number">∞</div>
    <div class="stat-label">Историй</div>
  </div>
</div>

<!-- Main Sections Grid -->
<section class="section-moma">
  <div class="container">
    <header class="section-header">
      <h2 class="section-title">Разделы</h2>
      <p class="section-subtitle">
        Исследуйте материалы о народе, сохранившем уникальный ойратский диалект и культуру в горах Тянь-Шаня.
      </p>
    </header>

    <div class="card-grid stagger-children">
      <!-- Featured Card: История -->
      <a href="{{ '/pages/istoriya.html' | relative_url }}" class="card-moma card-feature span-12">
        <div class="card-image">
          <img src="{{ '/photos/yudakhin/borubash/yurta.jpg' | relative_url }}" 
               alt="Юрта сарт-калмыков" />
        </div>
        <div class="card-content">
          <span class="card-tag">История</span>
          <h3 class="card-title">Исторические очерки</h3>
          <p class="card-excerpt">
            Этногенез, пути переселения из Джунгарии в XVIII веке, хозяйственные практики, взаимодействия с соседними народами, период Российской империи и советские трансформации.
          </p>
          <span class="card-link">Читать</span>
        </div>
      </a>

      <!-- Язык -->
      <a href="{{ '/pages/yazyk.html' | relative_url }}" class="card-moma span-6">
        <div class="card-content">
          <span class="card-tag">Язык</span>
          <h3 class="card-title">Лексика и структура</h3>
          <p class="card-excerpt">
            Словарь, фонетика, морфология, тексты: транскрипция и перевод. Уникальный ойратский диалект.
          </p>
          <span class="card-link">Изучить</span>
        </div>
      </a>

      <!-- Фотоархив -->
      <a href="{{ '/pages/fotoarhiv.html' | relative_url }}" class="card-moma span-6">
        <div class="card-image">
          <img src="{{ '/photos/yudakhin/borubash/semia.jpg' | relative_url }}" 
               alt="Семья сарт-калмыков" />
        </div>
        <div class="card-content">
          <span class="card-tag">Фото</span>
          <h3 class="card-title">Фотоархив</h3>
          <p class="card-excerpt">
            Оцифровка семейных альбомов и полевых снимков 1920-х годов.
          </p>
          <span class="card-link">Смотреть</span>
        </div>
      </a>

      <!-- Карты -->
      <a href="{{ '/pages/karty.html' | relative_url }}" class="card-moma span-4">
        <div class="card-content">
          <span class="card-tag">Карты</span>
          <h3 class="card-title">Пространственная память</h3>
          <p class="card-excerpt">
            Стоянки, сезонные маршруты, топонимика региона Каракол.
          </p>
          <span class="card-link">Открыть</span>
        </div>
      </a>

      <!-- Устные предания -->
      <a href="{{ '/pages/ustnye-predaniya.html' | relative_url }}" class="card-moma span-4">
        <div class="card-content">
          <span class="card-tag">Устное</span>
          <h3 class="card-title">Предания</h3>
          <p class="card-excerpt">
            Легенды, воспоминания, нарративы. Аудио, транскрипции, комментарии.
          </p>
          <span class="card-link">Слушать</span>
        </div>
      </a>

      <!-- Библиография -->
      <a href="{{ '/pages/bibliografiya.html' | relative_url }}" class="card-moma span-4">
        <div class="card-content">
          <span class="card-tag">Источники</span>
          <h3 class="card-title">Библиография</h3>
          <p class="card-excerpt">
            Печатные и архивные источники, полевые записи, указатели.
          </p>
          <span class="card-link">Читать</span>
        </div>
      </a>
    </div>
  </div>
</section>

<!-- Asymmetric Feature Block -->
<section class="asymmetric-block reverse">
  <div class="asymmetric-image">
    <img src="{{ '/photos/yudakhin/borubash/gruppa_zhenshin.jpg' | relative_url }}" 
         alt="Группа женщин сарт-калмыков" />
  </div>
  <div class="asymmetric-content">
    <span class="text-uppercase" style="color: var(--text-muted); margin-bottom: var(--space-4); display: block;">
      Происхождение
    </span>
    <h2 style="margin-bottom: var(--space-4);">
      Потомки джунгарских ойратов
    </h2>
    <p style="font-size: var(--text-lg); line-height: 1.6;">
      Сарт-калмыки — потомки ойратов Джунгарского ханства, переселившихся в долины Иссык-Куля в XVIII веке. Сохранив язык и традиции предков, они создали уникальную культуру на стыке кочевого и оседлого миров.
    </p>
    <a href="{{ '/pages/proiskhozhdenie.html' | relative_url }}" class="btn" style="margin-top: var(--space-6);">
      Подробнее
    </a>
  </div>
</section>

<!-- Photo Gallery Preview -->
<section class="section-moma" style="background: var(--bg-secondary);">
  <div class="container">
    <header class="section-header">
      <h2 class="section-title">Из архива</h2>
      <p class="section-subtitle">
        Фотографии из экспедиций К.К. Юдахина, 1928 год. Борубаш и окрестности.
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
      <a href="{{ '/pages/fotoarhiv.html' | relative_url }}" class="btn">
        Весь фотоархив
      </a>
    </div>
  </div>
</section>

<!-- Quote Block -->
<section class="quote-block">
  <blockquote class="quote-text">
    «Каждая единица материала проходит бережную атрибуцию и описывается с указанием источника»
  </blockquote>
  <cite class="quote-author">— Принципы проекта</cite>
</section>

<!-- CTA Section -->
<section class="cta-section">
  <h2 class="cta-title">Как помочь</h2>
  <p class="cta-text">
    Если у вас сохранились старые фотографии, записи рассказов, тетради со словарями или топонимические заметки — вы можете внести вклад в сохранение наследия.
  </p>
  <a href="{{ '/pages/kontakty.html' | relative_url }}" class="btn">
    Связаться с нами
  </a>
</section>

<!-- Additional Links -->
<section class="section-moma">
  <div class="container">
    <div class="card-grid">
      <a href="{{ '/pages/byt-i-kultura.html' | relative_url }}" class="card-moma span-3">
        <div class="card-content">
          <span class="card-tag">Культура</span>
          <h3 class="card-title">Быт</h3>
          <span class="card-link">→</span>
        </div>
      </a>
      <a href="{{ '/pages/hozyaystvo.html' | relative_url }}" class="card-moma span-3">
        <div class="card-content">
          <span class="card-tag">Экономика</span>
          <h3 class="card-title">Хозяйство</h3>
          <span class="card-link">→</span>
        </div>
      </a>
      <a href="{{ '/pages/religiya.html' | relative_url }}" class="card-moma span-3">
        <div class="card-content">
          <span class="card-tag">Духовность</span>
          <h3 class="card-title">Религия</h3>
          <span class="card-link">→</span>
        </div>
      </a>
      <a href="{{ '/pages/blog.html' | relative_url }}" class="card-moma span-3">
        <div class="card-content">
          <span class="card-tag">Новости</span>
          <h3 class="card-title">Блог</h3>
          <span class="card-link">→</span>
        </div>
      </a>
    </div>
  </div>
</section>
