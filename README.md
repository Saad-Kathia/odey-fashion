# ODEY Fashion — e-commerce site

A complete front-end e-commerce site for ODEY Fashion, a Pakistani luxury
fashion house: menswear, womenswear, kidswear, jewelry, wristwatches,
perfumes and accessories.

## Run it locally

No build step, no dependencies to install. Any static file server works,
for example from this folder:

```bash
# Python
python3 -m http.server 8000

# Node (if you have npx)
npx serve .
```

Then open **http://localhost:8000**. Opening `index.html` directly by
double-clicking also works, with one caveat: some browsers restrict
`localStorage` on `file://` pages, which the cart/wishlist use to persist
between visits — use a local server if you want that to work while testing.

## Folder structure

```
odey-fashion/
├── index.html         entry point — page shell + <head>
├── css/
│   └── styles.css      full design system: tokens, layout, components
├── js/
│   └── app.js           product catalogue, all page templates, routing,
│                         cart/wishlist/checkout logic, event handling
├── assets/
│   └── README.md        where to drop real photography/logo, and how
├── docs/
│   └── BRAND.md          full brand spec: palette, type, photography brief
└── README.md            this file
```

## How the site works

- **Single-page app, hash-based routing.** No backend, no build tool.
  Every route (`#/`, `#/shop/men`, `#/product/p1`, `#/checkout`, etc.) is
  handled in `js/app.js`'s `route()` function, which returns an HTML string
  rendered into `#view`.
- **State** (cart, wishlist, signed-in user, order history, saved promo
  code) lives in `localStorage` under keys prefixed `odey:`, so it survives
  a refresh but stays private to whoever's browser it's in — there's no
  server, so nothing here is shared between devices or people.
- **Catalogue** is the `PRODUCTS` array in `js/app.js` — 34 seeded products
  across all categories. Add a product by adding an entry via the `P({...})`
  helper at the top of that file; every field (price, sizes, colors, fabric,
  the shalwar/kameez description, the photography brief) is documented by
  the existing entries.
- **Categories** are data-driven via the `CATEGORIES` array — adding
  "Footwear" later means adding one object there, not restructuring pages.

## What's real vs. placeholder

Everything is fully functional: cart, wishlist, filtering, sorting, search,
the four-step checkout, order tracking simulation, sign-in/sign-up,
account pages. The one thing this is *not* yet wired to is a payment
gateway or a backend — checkout is a convincing front-end simulation, laid
out so a real gateway (Stripe, a local Pakistani processor, etc.) can be
dropped into the same markup. See `docs/BRAND.md` and `assets/README.md`
for the image situation — illustrations stand in for photography for now.

## Deploying it for real

This is a static site — it can be hosted anywhere that serves static files:
Netlify, Vercel, GitHub Pages, Cloudflare Pages, or a plain Nginx/Apache
server. Point the host at this folder; `index.html` is the entry point.
