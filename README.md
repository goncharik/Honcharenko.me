# Hugo Blog Cheatsheet

## Create New Post
```bash
# Create new post (hugo will use archetype template)
hugo new posts/my-post-title.md

# Or with current date in filename
hugo new posts/$(date +%Y-%m-%d)-my-post-title.md
```

## Create Post with Page Bundle (for posts with images)
```bash
# Hugo creates the directory structure automatically
hugo new posts/my-post-title/index.md

# Add images to the same directory
# content/posts/my-post-title/
# ├── index.md
# └── image.jpg
```

Then reference images in markdown as:
```markdown
![Alt text](image.jpg)  # Just the filename, no path prefix
```

## Local Development
```bash
# Start local server with drafts
hugo server -D

# Start server without drafts (production preview)
hugo server

# Access at: http://localhost:1313
```

## Front Matter Essentials
```yaml
---
title: "Your Post Title"
date: 2024-12-26T10:00:00+01:00
draft: true  # Remove or set to false before deploying
---
```

## Build & Deploy
```bash
# Build site (creates /public directory)
hugo

# Build with minification
hugo --minify

# Git deployment to Cloudflare Pages
git add .
git commit -m "New post: your title"
git push origin main
```

## Quick Checks
```bash
# List all content
hugo list all

# List draft posts
hugo list drafts

# Check Hugo version
hugo version
```

## Notes
- Cloudflare Pages auto-deploys on git push
- Build command in CF Pages: `hugo --minify`
- Output directory in CF Pages: `public`
- Remove `draft: true` before publishing!
