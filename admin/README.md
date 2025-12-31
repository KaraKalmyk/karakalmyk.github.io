# Admin Panel Setup (Decap CMS)

This site includes an admin panel powered by [Decap CMS](https://decapcms.org/) (formerly Netlify CMS).

## ⚠️ Important: Use Netlify URL

**The admin panel only works when accessed via the Netlify URL**, not the GitHub Pages URL.

If you see the error:
> "Нет доступа к настройкам. Если используете git-gateway, убедитесь, что включили Identity service и Git Gateway."

This means you're accessing the site via GitHub Pages. **Solution:** Open the admin panel at your Netlify URL:
```
https://YOUR-SITE.netlify.app/admin/
```

## Security

**Important:** The admin panel requires authentication to function. Without proper OAuth setup:
- Users can visit `/admin/` but will see an error or login prompt
- **No one can make changes** to the site without being authenticated
- The backend will reject all unauthorized requests

To restrict who can access the admin panel:
1. Set up Netlify Identity (see below)
2. Set registration to **"Invite only"** in Netlify Identity settings
3. Only invite trusted users via email

## Access

- **Netlify URL (CMS works here):** `https://YOUR-SITE.netlify.app/admin/`
- **GitHub Pages URL (CMS doesn't work here):** `https://karakalmyk.github.io/admin/`

## Setup Instructions

Since GitHub Pages is a static host, you need Netlify for the CMS to work.

### Option 1: Use Netlify (Recommended - Free)

1. Create a free account at [Netlify](https://netlify.com)
2. Connect your GitHub repository to Netlify
3. Go to **Site settings** → **Identity** → **Enable Identity**
4. **IMPORTANT:** Go to **Identity** → **Settings** → **Registration** → Set to **"Invite only"**
   - This prevents random people from signing up to your admin panel!
5. Go to **Settings** → **Identity** → **Services** → **Enable Git Gateway**
6. Update `admin/config.yml` (already configured):
   ```yaml
   backend:
     name: git-gateway
     branch: main
   ```
7. Invite yourself: **Identity** → **Invite users** → Enter your email
8. Access the admin at: **https://YOUR-SITE.netlify.app/admin/**
9. Only invited users will be able to log in and edit content

### Option 2: Use External OAuth Provider

Use a free OAuth proxy service like [Sveltia CMS Auth](https://github.com/sveltia/sveltia-cms-auth) or set up your own OAuth app.

1. Create a GitHub OAuth App:
   - Go to GitHub Settings → Developer settings → OAuth Apps → New OAuth App
   - Application name: `Sart-Kalmyk CMS`
   - Homepage URL: `https://karakalmyk.github.io`
   - Authorization callback URL: (depends on your OAuth proxy)

2. Deploy an OAuth proxy (e.g., on Netlify Functions, Vercel, or Cloudflare Workers)

3. Update `admin/config.yml` with your OAuth endpoint:
   ```yaml
   backend:
     name: github
     repo: karakalmyk/karakalmyk.github.io
     branch: main
     base_url: https://your-oauth-proxy.netlify.app
     auth_endpoint: /api/auth
   ```

### Option 3: Local Development Only

For local testing without authentication:

1. Run Jekyll locally: `bundle exec jekyll serve`
2. Use [Decap CMS local backend](https://decapcms.org/docs/local-backend/):
   ```bash
   npx decap-server
   ```
3. Update `admin/config.yml`:
   ```yaml
   local_backend: true
   ```

## Features

The admin panel allows you to:

- ✍️ **Write blog posts** in Russian, English, or Kyrgyz
- 📄 **Edit pages** in all three languages
- 📷 **Manage photo archive** metadata
- 📚 **Edit vocabulary** entries
- ⚙️ **Update site settings** and translations

## Content Structure

| Collection | Folder | Description |
|------------|--------|-------------|
| Blog | `_posts/` | Blog articles with date-based URLs |
| Pages (RU) | `pages/` | Russian content pages |
| Pages (EN) | `en/pages/` | English content pages |
| Pages (KY) | `ky/pages/` | Kyrgyz content pages |
| Photos | `_data/photos.yml` | Photo archive metadata |
| Vocabulary | `_data/vocabulary.yml` | Dictionary entries |

## Writing Content

### Markdown Support

The editor supports full Markdown including:
- Headers, paragraphs, lists
- Bold, italic, links
- Images (uploaded to `/photos/uploads/`)
- Code blocks
- Blockquotes
- Tables

### Front Matter

Each page requires front matter:

```yaml
---
layout: moma
title: "Page Title"
lang: ru  # or en, ky
permalink: /pages/page-name.html
---
```

## Troubleshooting

- **Can't log in?** Make sure OAuth is properly configured
- **Changes not appearing?** GitHub Pages may take 1-2 minutes to rebuild
- **Images not uploading?** Check the `media_folder` path in config

