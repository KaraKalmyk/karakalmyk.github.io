# Сайт: Сарт-калмыки Иссык-Куля

Статический сайт (Jekyll + GitHub Pages) для документирования и сохранения культурного наследия сарт-калмыков (сарт-ойратов) в районе г. Каракол (Иссык-Куль, Кыргызстан).

## Разделы
- История
- Язык
- Фотоархив
- Карты
- Устные предания
- Библиография
- О проекте
- Контакты

## Быстрый запуск локально
Требуется установленный Ruby (рекомендуется >= 3.1) и Bundler.
```bash
ruby -v
# при необходимости:
gem install bundler
bundle install
bundle exec jekyll serve --livereload
```
Откройте: http://127.0.0.1:4000

## Развёртывание на GitHub Pages
1. Создайте репозиторий (например `KaraKalMykWebsite`).
2. Скопируйте/загрузите файлы этого проекта.
3. Закоммитьте и отправьте:
```bash
git init
git add .
git commit -m "Initial site scaffold"
git branch -M main
git remote add origin git@github.com:USERNAME/KaraKalMykWebsite.git
git push -u origin main
```
4. В настройках репозитория (Settings → Pages) выберите Branch: `main`, папка `/ (root)`.
5. Дождитесь билда. Сайт будет доступен по адресу:
   - Либо: https://USERNAME.github.io/KaraKalMykWebsite
   - Для пользовательского (user/organization) сайта (если репо называется USERNAME.github.io): https://USERNAME.github.io

## Настройка `_config.yml`
Обновите поля:
- `url`: базовый URL (например `https://username.github.io`)
- `baseurl`: `/KaraKalMykWebsite` (если репозиторий проектный)
- `social.image`: добавьте реальное изображение превью

После изменений перезапустите локальный сервер.

## Добавление контента
- Страницы: папка `pages/` (Markdown с фронт-маттером)
- Данные: `_data/` (YAML/JSON/CSV) можно использовать для словаря, фото, карт
- Изображения: `assets/images/`
- Аудио: `assets/audio/` (создать при необходимости)
- Карты/GeoJSON: `assets/data/geo/`

## Галерея (план)
Создать `_data/photos.yml` и сгенерировать список на странице `Фотоархив` циклом Liquid.

## Интерактивные карты (план)
Добавить Leaflet:
```html
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
```
Вставить контейнер `<div id="map"></div>` и инициализировать карту в отдельном JS.

## Поиск (план)
Подключить Lunr.js и сгенерировать JSON индекс (например `search.json`).

## Лицензирование
Рекомендуется:
- Текст: CC BY-NC-SA 4.0
- Фото: индивидуальные условия (указать владельцев)
- Код: MIT (если будет собственный JS/CSS)

## Структура
```
_config.yml
_layouts/
assets/
  css/
  images/
  data/geo/
_data/
pages/
index.md
Gemfile
```

## Улучшения (todo)
- [ ] Стилизация и адаптивный дизайн
- [ ] Переключение светлая/тёмная тема
- [ ] Генерация словаря из `_data/vocabulary.yml`
- [ ] Скрипт проверки отсутствующих метаданных у фотографий
- [ ] Добавить favicons разных размеров
- [ ] Настроить SEO (описания на страницах)

## Обратная связь
См. раздел "Контакты" на сайте.

---
Черновая версия. Обновляйте по мере развития проекта.

