# Assets

This folder is where real brand assets go once you have them. Nothing here
yet is a photograph — every image position in the site currently renders a
hand-drawn SVG illustration (defined inline in `js/app.js`, see `ILLUS` and
`slot()`), not a placeholder graphic file, so there's nothing to unzip here
until you're ready to swap in real photography.

## What to drop in here

| File (suggested name)     | Used for                                                   |
|----------------------------|-------------------------------------------------------------|
| `logo.svg`                 | The real ODEY hanger emblem + wordmark                      |
| `og-image.jpg`              | Social share preview (1200×630)                             |
| `campaign/*.jpg`            | Hero, category and editorial photography                    |
| `products/<product-id>/*.jpg` | Product gallery photography, named by the product `id`   |
| `packaging/*.jpg`           | "The ODEY Experience" packaging section                     |

## Swapping in the real logo

The logo is built once, as a function, in `js/app.js`:

```js
const hangerSVG = `<svg viewBox="0 0 120 78" ...>`;
const logo = (cls='') => `<a href="#/" class="logo ${cls}">${hangerSVG}<span class="lw">...`;
```

Replace `hangerSVG` with an `<img src="assets/logo.svg" ...>` (or inline your
real SVG markup) and every header, footer, auth page and favicon location
updates from that one place.

## Swapping in real photography

Every image position is rendered by one function, `slot(tone, label, note,
extra, icon)`, in `js/app.js`. Each product in the `PRODUCTS` array (also in
`js/app.js`) carries a `shot` field describing exactly what photograph
belongs there — camera angle, styling, mood — written so a photographer or
an image-generation tool can brief straight from it.

To go live with real photos:
1. Add the image files to this folder (or your CDN).
2. In `slot()`, replace the illustration `<div class="slot__mark">` output
   with `<img src="assets/...">` sized to fill the slot (`object-fit:cover`
   is already set up for it via the `.slot` container).
3. Remove or repurpose the `.slot__note` caption — it exists to flag
   "photography to follow" and won't be needed once real images are in.

See `docs/BRAND.md` for the full color/typography/photography brief this
site was built against.
