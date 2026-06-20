# Deployment Guide

Made by Aryan Singh Sikarwar.

## Best option: GitHub Pages

FleetFlow is a static app, so GitHub Pages is the easiest free deployment.

```bash
git init
git add .
git commit -m "Initial commit: FleetFlow transport manager"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/fleetflow-transport-manager.git
git push -u origin main
```

Then open GitHub:

1. Repository Settings
2. Pages
3. Deploy from a branch
4. Branch: `main`
5. Folder: `/root`
6. Save

Final URL:

```text
https://YOUR_USERNAME.github.io/fleetflow-transport-manager/
```

## Vercel

Import the GitHub repository into Vercel.

- Framework preset: Other
- Build command: empty
- Output directory: `.`

## Netlify

Import the GitHub repository into Netlify.

- Build command: empty
- Publish directory: `.`
