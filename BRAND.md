# ODEY Fashion — Brand Reference

## Name
**ODEY Fashion** — spelled exactly this way everywhere. Not ODAY, not ODE.

## Color palette

| Name              | Hex       | Use                                                        |
|--------------------|-----------|-------------------------------------------------------------|
| Brand Deep Navy    | `#1A2A47` | Header, primary text, navigation, major buttons, footer     |
| Polished Gold      | `#B3915F` | CTA accents, highlights, borders, icons, hover states       |
| Matte Bronze       | `#8A7353` | Supporting accents, secondary decorative elements           |
| Charcoal Slate     | `#363636` | Secondary text, subtle borders                              |
| Clean White        | `#FFFFFF` | Main background, product backgrounds                        |
| Soft Ivory         | `#FCF5E8` | Section differentiation, editorial sections, cards          |

All six are defined as CSS custom properties at the top of `css/styles.css`
(`--navy`, `--gold`, `--bronze`, `--charcoal`, `--white`, `--ivory`), plus a
small set of derived tones (`--navy-deep`, `--ivory-2`, etc.) for hover and
layering states. Change the six source values there and the whole site
follows.

## Typography

- **Headings:** Marcellus (serif, editorial)
- **Body:** Jost (clean modern sans)
- **Accent/quotes:** Cormorant Garamond italic

Loaded from Google Fonts in `index.html`'s `<head>`.

## Visual identity

Luxury · Pakistani heritage · authenticity · elegance · modern fashion ·
quality · sophistication. Deep Navy + Polished Gold + Soft Ivory as the core
combination. No neon, no heavy gradients, no marketplace-template layouts,
restrained animation only.

## Product categories

Men's fashion, women's fashion, kids' fashion, jewelry, wristwatches,
perfumes, fashion accessories — defined in `js/app.js` as the `CATEGORIES`
array, so a new category is one entry, not a restructure.

## Photography brief — the critical rule

All Pakistani clothing imagery must show **authentic shalwar kameez**:
a full-length kameez with proper side slits, worn over a loose, traditionally
proportioned shalwar. **Not** kurta pajama, not a kurta-only outfit, not
generic Indian kurta styling.

Every product in `js/app.js` carries a `shot` field with a specific,
photographer-ready brief for that exact piece (angle, styling, lighting,
what must be visible), written with this rule baked in. See any product's
`shot` field for the pattern, e.g.:

> "Pakistani male model, full length, ivory shalwar kameez — long kameez
> over loose straight shalwar with correct break at the ankle. Studio, warm
> key light, plain ivory backdrop."

Follow the same pattern for any new product you add.

## What ships today instead of photography

Every image slot currently renders a hand-drawn line illustration (in the
brand palette) rather than a photograph or a blank placeholder — see
`assets/README.md` for how to swap in real photography once you have it.
