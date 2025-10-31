# Repository Structure

```
fox-news-tv-display/
├── .github/
│   └── workflows/
│       └── pages.yml          # GitHub Actions deployment workflow
├── assets/
│   └── original-videos/       # Original uncompressed video files (gitignored)
├── dist/                      # Production build output (deployed to GitHub Pages)
│   ├── index.html
│   ├── script.js
│   ├── style.css
│   └── videos/                # Compressed videos for production
│       └── video1.MP4
├── docs/
│   ├── DEPLOY.md              # Deployment instructions
│   └── STRUCTURE.md           # This file
├── src/                       # Source files
│   ├── index.html
│   ├── script.js
│   ├── style.sass
│   └── videos/                # Source videos (for local development)
│       └── video1.MP4
├── .gitattributes             # Git LFS configuration
├── .gitignore                 # Git ignore rules
├── LICENSE.txt                # License file
└── README.md                  # Main project documentation
```

## Directory Descriptions

### `/dist`
Production build directory. This is what gets deployed to GitHub Pages.
- Contains compiled/processed files
- Videos should be compressed (under 100MB)
- Files here are served directly to users

### `/src`
Source files directory.
- Development source files
- SASS files that compile to CSS
- Source videos (can be uncompressed for local development)

### `/assets`
Asset files that are not included in the repository.
- Original uncompressed videos
- Large media files
- Files here are gitignored

### `/docs`
Documentation files.
- Deployment guides
- Structure documentation
- Development notes

### `/.github/workflows`
GitHub Actions workflows.
- Automated deployment configuration
- CI/CD pipeline definitions

## Adding New Videos

1. **For Development**: Place uncompressed videos in `src/videos/`
2. **For Production**: 
   - Compress the video using ffmpeg
   - Place compressed video in `dist/videos/`
   - Update the `videos` array in `dist/script.js`

## Build Process

The repository uses GitHub Actions to automatically:
1. Copy files from `dist/` to deployment root
2. Deploy to GitHub Pages
3. Update the live site at https://tingrubato.github.io/fox-news-tv-display/

