# A Little Place for You — static website

A mobile-first, navy-blue × baby-pink digital friendship letter. Built with plain HTML, CSS and JavaScript; no build tools or packages required.

## Folder structure

```text
for_you_letter/
├── index.html
├── pages/
│   ├── letter.html
│   └── memories.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── main.js
│   │   ├── letter.js
│   │   └── gallery.js
│   └── images/
│       └── photos/
│           ├── photo-01.svg
│           ├── photo-02.svg
│           └── ... photo-09.svg
└── README.md
```

## Add your own photos (including SVG)

1. Put your image files in `assets/images/photos/`.
2. Easiest option: keep the filenames `photo-01.svg` through `photo-09.svg` and replace the placeholder SVG files with your own SVG images.
3. You can use JPG, PNG, WebP or SVG too. If you use a different filename or extension, update the matching `src` in the HTML.
4. Keep the `alt` text descriptive, for example `alt="Us at the school fair"`.

**Important:** SVG files are vector graphics, so ordinary phone photos are usually JPG, PNG or WebP. If you have a photo and want to use it as an SVG, you need to convert/embed it into SVG first; simply renaming `.jpg` to `.svg` will not work. For photos, JPG or WebP is generally the better choice.

## Write your own messages

The letter text is deliberately blank. Open the HTML files and replace the comments:
- `index.html`: cover intro and polaroid captions.
- `pages/letter.html`: greeting, message paragraphs, photo note and sign-off.
- `pages/memories.html`: scrapbook captions and closing message.

Search for `<!--` to find editable placeholders quickly. Keep the HTML tags around your text so the layout stays intact.

## Run it

- Open `index.html` in a browser, or
- Use a local static server / VS Code Live Server if available.

No backend, API key, database, or installation is needed. Google Fonts are loaded online; fallback fonts are provided if offline.

## Customise the colours

At the top of `assets/css/styles.css`, edit the CSS variables inside `:root`. Main colours:
- Navy: `--navy: #101c3a`
- Baby pink: `--pink: #f7d5e1`
- Pale pink background: `--pink-pale: #fff4f7`

## Before sharing

- Test the three pages on a phone.
- Check every image path after replacing files.
- Only use photos you have permission to share.
- This is a static site: it does not collect or upload messages or images.
