# Fox News TV Display

A Pen created on CodePen.

Original URL: [https://codepen.io/TimothiTsui/pen/LEGgRvv](https://codepen.io/TimothiTsui/pen/LEGgRvv).

The TV display you would see on Fox News. Since the interface has many different versions (e.g. one for The O'Reilly Factor, America's Election HQ, etc.), I chose to base this Pen on the America's Newsroom one from this year (see URL in the Sass). By the way, the ticker at the bottom is not a marquee element.

## 🌐 Live Site

**https://tingrubato.github.io/fox-news-tv-display/**

The site is automatically deployed via GitHub Actions when changes are pushed to the `main` branch.

## 📁 Project Structure

```
fox-news-tv-display/
├── dist/              # Production build (deployed to GitHub Pages)
│   ├── videos/        # Compressed videos for web
│   └── ...
├── src/               # Source files
│   ├── videos/        # Source videos for development
│   └── ...
├── assets/            # Original assets (gitignored)
│   └── original-videos/
├── docs/              # Documentation
└── .github/workflows/ # Deployment configuration
```

See [docs/STRUCTURE.md](docs/STRUCTURE.md) for detailed structure documentation.

## ✨ Features

- **Video Background Rotation**: Automatically rotates through videos in the `dist/videos/` folder
- **Real-time Clock**: Displays current time in the bottom left corner
- **Animated Logo**: 3D rotating Fox News logo
- **News Ticker**: Scrolling ticker at the bottom
- **Responsive Design**: Works on various screen sizes

## 🎬 Adding Videos

1. **Compress your video** (keep under 100MB):
   ```bash
   ffmpeg -i your-video.MP4 -vcodec libx264 -crf 28 -preset slow \
     -vf scale=-2:1080 -movflags +faststart -y dist/videos/your-video.MP4
   ```

2. **Update the videos array** in `dist/script.js`:
   ```javascript
   var videos = [
     'video1.MP4',
     'your-video.MP4'
   ];
   ```

3. **Commit and push** - the site will automatically update!

## 🚀 Development

- Source files are in `/src`
- Production files are in `/dist`
- Videos should be compressed and placed in `dist/videos/`
- Original uncompressed videos go in `assets/original-videos/` (gitignored)

## 📚 Documentation

- [Structure Documentation](docs/STRUCTURE.md)
- [Deployment Guide](docs/DEPLOY.md)

## 📄 License

See [LICENSE.txt](LICENSE.txt) for license information.