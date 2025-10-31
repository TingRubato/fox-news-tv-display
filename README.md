# Fox News TV Display

A Pen created on CodePen.

Original URL: [https://codepen.io/TimothiTsui/pen/LEGgRvv](https://codepen.io/TimothiTsui/pen/LEGgRvv).

The TV display you would see on Fox News. Since the interface has many different versions (e.g. one for The O'Reilly Factor, America's Election HQ, etc.), I chose to base this Pen on the America's Newsroom one from this year (see URL in the Sass). By the way, the ticker at the bottom is not a marquee element.

## GitHub Pages Deployment

This site is deployed via GitHub Actions to GitHub Pages. The site will be available at:
**https://tingrubato.github.io/fox-news-tv-display/**

### Video Background

The video file has been compressed using ffmpeg from 110MB to 4.4MB and is now included in the repository. The compressed video (`dist/video1.MP4`) uses H.264 encoding with CRF 28 for a good balance between quality and file size.

The original uncompressed video (`video1.MP4`) is excluded from the repository via `.gitignore` but can be used locally if needed.