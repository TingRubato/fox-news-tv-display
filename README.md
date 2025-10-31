# Fox News TV Display

A Pen created on CodePen.

Original URL: [https://codepen.io/TimothiTsui/pen/LEGgRvv](https://codepen.io/TimothiTsui/pen/LEGgRvv).

The TV display you would see on Fox News. Since the interface has many different versions (e.g. one for The O'Reilly Factor, America's Election HQ, etc.), I chose to base this Pen on the America's Newsroom one from this year (see URL in the Sass). By the way, the ticker at the bottom is not a marquee element.

## GitHub Pages Deployment

This site is deployed via GitHub Actions to GitHub Pages. The site will be available at:
**https://tingrubato.github.io/fox-news-tv-display/**

### Video Background

The video file (`video1.MP4`) is too large (110MB) for GitHub's file size limit. To add the video background:

1. **Option 1: Host on GitHub Releases**
   - Go to your repository's Releases section
   - Create a new release and upload `video1.MP4`
   - Update `dist/index.html` to reference the release URL

2. **Option 2: Use a CDN**
   - Upload `video1.MP4` to a CDN (e.g., Cloudinary, Imgur, or similar)
   - Update the `src` attribute in `dist/index.html` to point to the CDN URL

3. **Option 3: Self-host locally**
   - Keep the video file in the `dist` folder locally
   - The site will work when served from your local `dist` folder

Currently, the video reference points to `./video1.MP4` which will work when the video is present in the same directory as `index.html`.