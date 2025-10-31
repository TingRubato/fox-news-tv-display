# GitHub Pages Deployment Instructions

## Step 1: Create a GitHub Repository

1. Go to https://github.com/new
2. Create a new repository (e.g., `fox-news-tv-display`)
3. **DO NOT** initialize it with a README, .gitignore, or license (we already have these)
4. Click "Create repository"

## Step 2: Push Your Code

After creating the repository, GitHub will show you commands. Use these instead:

```bash
cd /Users/tingxu/Downloads/fox-news-tv-display

# Add the remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/fox-news-tv-display.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** (in the left sidebar)
4. Under **Source**, select:
   - **Branch:** `main`
   - **Folder:** `/dist`
5. Click **Save**
6. GitHub will provide you with a URL like: `https://YOUR_USERNAME.github.io/fox-news-tv-display`

Your site will be live in a few minutes!

