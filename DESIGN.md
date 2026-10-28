---
name: Anh Như Ý
description: Fresh Vietnamese dragon fruit and coconut, grown, packed and exported from Bình Thuận.
colors:
  orchard-green: "#31a050"
  orchard-green-deep: "#1f7536"
  orchard-fill: "#23803c"
  orchard-fill-hover: "#1b6b32"
  on-orchard: "#ffffff"
  leaf-wash: "#eef8e8"
  sprout-lime: "#7ed957"
  sprout-lime-soft: "#a2e187"
  dragon-fruit-pink: "#e0447c"
  harvest-sun: "#f2c94c"
  harvest-sun-deep: "#b07d00"
  zalo-blue: "#0068ff"
  facebook-blue: "#1877f2"
  paper-white: "#ffffff"
  morning-mist: "#f5faf2"
  ink: "#1d1e20"
  stem-grey: "#555a57"
  dew-line: "#e4ebe1"
  night-field: "#0d141a"
  on-night: "#e9f0ea"
  on-night-muted: "#9aa8a0"
typography:
  display:
    fontFamily: "Montserrat, Be Vietnam Pro, system-ui, sans-serif"
    fontSize: "clamp(2rem, 3.6vw + 0.75rem, 3.5rem)"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Montserrat, Be Vietnam Pro, system-ui, sans-serif"
    fontSize: "clamp(1.625rem, 2vw + 0.85rem, 2.5rem)"
    fontWeight: 800
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Montserrat, Be Vietnam Pro, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0em"
  lead:
    fontFamily: "Be Vietnam Pro, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 0.4vw + 0.95rem, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.7
  body:
    fontFamily: "Be Vietnam Pro, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Be Vietnam Pro, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.06em"
rounded:
  card: "12px"
  lg: "20px"
  pill: "999px"
spacing:
  gutter: "24px"
  gutter-mobile: "16px"
  container: "1200px"
  section-y: "clamp(64px, 9vw, 112px)"
  header: "72px"
  header-mobile: "64px"
components:
  button-primary:
    backgroundColor: "{colors.orchard-fill}"
    textColor: "{colors.on-orchard}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.orchard-fill-hover}"
    textColor: "{colors.on-orchard}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
    height: "48px"
  button-ghost-hover:
    textColor: "{colors.orchard-green-deep}"
  button-light:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.night-field}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
    height: "48px"
  button-light-hover:
    backgroundColor: "{colors.sprout-lime-soft}"
  card:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "clamp(22px, 2.5vw, 32px)"
  card-highlight:
    backgroundColor: "{colors.orchard-fill}"
    textColor: "{colors.on-orchard}"
    rounded: "{rounded.card}"
  chip:
    backgroundColor: "{colors.leaf-wash}"
    textColor: "{colors.orchard-green-deep}"
    rounded: "{rounded.pill}"
    padding: "7px 14px"
  input:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "12px 16px"
    height: "50px"
  nav-link-active:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.orchard-green-deep}"
    rounded: "{rounded.pill}"
    padding: "8px 18px"
---

# Design System: Anh Như Ý

## Overview

**Creative North Star: "The Sunlit Orchard"**

The site should feel like walking a dragon fruit farm in Bình Thuận at mid-morning: bright, open, green, and alive. White and pale-leaf surfaces stand in for daylight. One confident orchard green carries every action. Real photography of fields, harvesters, packing halls and stacked cartons does the persuading, because the buyer is checking that the fruit and the operation are real.

Motion is part of the identity, not garnish. Headlines flip up word by word. Cards tilt in 3D under the cursor and catch a soft glare. Glossy fruit-colored orbs drift with the pointer in the hero. Photos parallax as they scroll past, and sections rise into place as they enter. All of it switches off under `prefers-reduced-motion`. Under the liveliness, the content stays plain and factual: specs, certifications and contact channels are always one glance away.

Density is generous: wide section padding, a 1200px container, and roomy line heights tuned so Vietnamese stacked diacritics never clip.

**Key Characteristics:**
- Daylight surfaces (white, pale leaf) with one orchard-green action color.
- Real farm and packing photography in large rounded frames.
- Montserrat ExtraBold headlines over Be Vietnam Pro body text.
- Pill-shaped actions and chips; 12px cards; 20px photo frames.
- Signature motion: word-flip headlines, 3D tilt cards with glare, drifting fruit orbs, scroll reveals, shimmer on the key headline phrase.
- Soft, green-tinted ambient shadows; a dark "night field" footer closes every page.

## Colors

A sunlit green palette: one orchard green for action, a lime sprout for highlights, pale leaf washes for quiet surfaces, and two small fruit accents that only appear as decoration.

### Primary
- **Orchard Green** (`--color-primary`): The brand green inherited from anhnhuy.com. It draws the scroll progress bar, focus rings, input focus and icons next to facts (phone, badge ticks). It is too light to carry white text.
- **Orchard Fill / Fill Hover / On Orchard** (`--color-primary-fill`, `--color-primary-fill-hover`, `--color-on-primary`): Every filled green surface that carries text: primary buttons, product labels, the highlight card, the CTA band, the call button and the open FAQ toggle. White on the fill measures about 5:1, and the same values hold in dark mode.
- **Orchard Green Deep** (`--color-primary-strong`): Green text on light grounds (eyebrows, active nav link, chip text), where the lighter green would miss contrast.
- **Leaf Wash** (`--color-primary-soft`): Tinted fill behind chips and card icon tiles.

### Secondary
- **Sprout Lime** (`--color-accent`): The highlight voice. It draws the eyebrow rule, forms the second stop of the progress bar and shimmer gradient, and serves as the accent color on the dark footer (titles, icons, link hover).
- **Sprout Lime Soft** (`--color-accent-soft`): Glow in page-hero gradients and the hover fill of the light button.

### Tertiary
- **Dragon Fruit Pink** (`--color-fruit`) and **Harvest Sun** (`--color-sun`, deep `--color-sun-strong`): Decorative only. They tint the floating hero orbs, the orbiting ring dot, the floating badge icon and the testimonial stars. They never carry text, actions or meaning.

### Platform
- **Zalo Blue** and **Facebook Blue**: only on the floating Zalo and Facebook buttons, so visitors recognise those channels instantly. Nowhere else.

### Neutral
- **Paper White** (`--color-bg`, `--color-surface`): Page and card ground.
- **Morning Mist** (`--color-bg-alt`): Alternate section band and page-hero ground.
- **Ink** (`--color-text`): Headings and body text.
- **Stem Grey** (`--color-muted`): Leads, card body, secondary text and inactive nav.
- **Dew Line** (`--color-border`): Card borders, input strokes, dividers.
- **Night Field** (`--color-dark`): Footer ground and the dark text on light buttons.
- **On Night / On Night Muted** (`--color-on-dark`, `--color-on-dark-muted`): Text on the footer.

Dark mode (`prefers-color-scheme: dark`) remaps the same roles. The green lifts to `#4cbb68` with lime `#7ed957` as its strong state, surfaces drop to deep green-blacks (`#0d141a`, `#111b20`, `#151f25`), and text becomes `#eef3ef` / `#a3b0a8`.

### Named Rules
**The Filled-Green Contrast Rule.** Text never sits on `--color-primary`; filled green surfaces use `--color-primary-fill` with `--color-on-primary` (≥4.5:1 in both themes). Glows layered over the fill stay at 20% lime or less.

**The One Green Voice Rule.** Every clickable call to action is Orchard Fill, or white on dark bands. Lime highlights and fruit tones decorate; they never become a button.

**The Token-Only Green Rule.** The brand green changes only through `--color-primary*` / `--color-accent*` in `src/styles/global.css`. No component hard-codes a green hex.

**The Fruit-As-Garnish Rule.** Dragon Fruit Pink and Harvest Sun appear only in decorative orbs, rings and icon washes, never as text or a filled surface.

## Typography

**Display Font:** Montserrat 700/800 (falls back to Be Vietnam Pro, system-ui)
**Body Font:** Be Vietnam Pro 400/500/600 (with system-ui, -apple-system, Segoe UI, Roboto)

**Character:** Montserrat ExtraBold gives headlines a sturdy, export-label confidence. Be Vietnam Pro, drawn for Vietnamese, keeps body text warm and fully legible with stacked diacritics.

### Hierarchy
- **Display** (800, clamp 2rem → 3.5rem, line-height 1.25, -0.01em): page h1. The home hero splits it into three runs, and the middle phrase carries the green-to-lime shimmer.
- **Headline** (800, clamp 1.625rem → 2.5rem, 1.3): section h2, balanced wrapping.
- **Title** (700, 1.25rem, 1.3): card, product and channel h3.
- **Lead** (400, clamp 1.0625rem → 1.1875rem, 1.7, Stem Grey, max 60ch): the paragraph under a section head.
- **Body** (400, 1rem, 1.7): running text, with `text-wrap: pretty`.
- **Label / Eyebrow** (600, 0.875rem, 0.06em, uppercase, Orchard Green Deep): eyebrows before section heads, preceded by a 20px lime rule; also footer column titles and the brand subline.

### Named Rules
**The Diacritic Headroom Rule.** No text below 14px (`--text-xs`). Body line-height 1.7 and heading line-height of at least 1.25 are minimums, so marks like ễ, ậ and Ể never clip or touch the line above. Background-clipped text (shimmer) gets extra block padding for the same reason.

**The Eyebrow-Head-Lead Rule.** Every section opens with the same trio: uppercase eyebrow with lime rule, Montserrat headline, Stem Grey lead.

## Layout

- **Container:** 1200px content width plus a 24px gutter each side (16px at ≤640px), centred.
- **Section rhythm:** vertical padding `clamp(64px, 9vw, 112px)`. Sections alternate Paper White and Morning Mist bands. The section head sits max 720px wide with `clamp(32px, 5vw, 56px)` below it, left-aligned or centred.
- **Header:** sticky, 72px (64px mobile), frosted translucent background, border and faint shadow once scrolled, 3px green-to-lime reading-progress bar along its bottom edge.
- **Grids:** text/photo splits on the home hero, about and product pages; three-column card grids for reasons and testimonials; a four-up stats strip; footer columns at 1.4 / 0.8 / 1.2.
- **Breakpoints:** 1080px hides the header phone number; 960px collapses split layouts to one column; 860px swaps desktop nav and CTA for the menu button and full-screen mobile menu, and footer goes 2-up; 560px stacks everything to one column.
- **Floating actions:** call, Zalo, Facebook and back-to-top buttons stay pinned bottom-right on every page. At ≤640px only Zalo and Call remain (Facebook stays in the footer, back-to-top is left to the OS), and the dock hides while a form field has focus. The Zalo button shows Zalo's wordmark, not a generic chat icon.

## Elevation & Depth

Depth is soft and ambient, tinted by the Night Field ink, and it responds to the pointer. Cards rest on a faint two-layer shadow. On hover they lift 6px, deepen the shadow and tilt in 3D, with icons and titles pushed forward on the Z axis. Primary buttons cast a green-tinted glow. Photos sit flat inside rounded frames and gain depth from parallax rather than shadow. Dark mode swaps the shadows to pure black at higher opacity.

### Shadow Vocabulary
- **Card rest** (`--shadow-card`: `0 1px 2px rgb(13 20 26 / 0.04), 0 8px 24px rgb(13 20 26 / 0.06)`): every Card, quote and channel tile at rest.
- **Card lift** (`--shadow-lift`: `0 2px 4px rgb(13 20 26 / 0.05), 0 16px 40px rgb(13 20 26 / 0.1)`): the same surfaces on hover.
- **Green glow** (`0 6px 18px` Orchard Green at 30%): primary button at rest; on hover it becomes a 2px darker base edge plus a `0 14px 30px` glow at 40%.
- **Pill inset** (`0 1px 3px rgb(13 20 26 / 0.08)`): active nav link and active language toggle.
- **Header scrolled** (`0 4px 20px rgb(13 20 26 / 0.04)`).

### Named Rules
**The Lift-On-Touch Rule.** Surfaces are calm at rest. Lift, tilt, glare and deeper shadow appear only in response to the pointer or scroll.

## Shapes

Gently rounded everywhere, with three steps: **12px** (`--radius-card`) for cards, inputs, icon tiles and the menu button; **20px** (`--radius-lg`) for photo frames, the hero stage, the CTA band and the form card; **pill** (`--radius-pill`) for buttons, chips, tags, nav and the language switch. Circles are reserved for social icons and the decorative orbs. Borders are 1px Dew Line on surfaces and 1.5px on buttons and inputs.

## Components

### Buttons
Rounded, sunny and tactile: pills that shine and press.
- **Shape:** full pill, minimum height 48px, 12px × 24px padding, 600 weight at 15px.
- **Primary:** Orchard Fill with white text and the green glow; hover deepens to Orchard Fill Hover.
- **Ghost:** transparent with a Dew Line border and Ink text; hover turns border Orchard Green and text Orchard Green Deep.
- **Light:** white with Night Field text, for use on green or dark bands; hover fills Sprout Lime Soft.
- **Behaviour:** every variant sweeps a white sheen across on hover, nudges its trailing arrow 3px right, scales to 0.98 on press, and is magnetic to the pointer (`data-magnetic`). Disabled is 55% opacity.

### Chips and Tags
- **Chip:** Leaf Wash pill with Orchard Green Deep text, 500 weight. Used for variety and market lists.
- **Label:** solid Orchard Fill pill, white 14px 600 text, used for "flagship" / "new" product labels.
- **Photo tag:** frosted white pill (92% opacity, 6px blur) pinned top-left on product photos.

### Cards / Containers
- **Corner Style:** 12px (`--radius-card`); every card goes through the shared `Card` component.
- **Background:** Paper White with a Dew Line border; the **highlight** variant is solid Orchard Fill with a faint (20%) lime radial glow in its top-right corner and white text.
- **Shadow Strategy:** Card rest → Card lift on hover (see Elevation & Depth).
- **Internal Padding:** `clamp(22px, 2.5vw, 32px)`.
- **Behaviour:** 3D pointer tilt with a cursor-following glare. The 48px Leaf Wash icon tile floats forward and twists on hover.

### Inputs / Fields
- **Style:** 1.5px Dew Line stroke, Paper White fill, 12px radius, min height 50px (textarea 140px), 16px text so iOS never zooms. The label sits above in 500 weight at 15px. Selects share the field style with a drawn chevron. The quote form runs two columns, one below 560px.
- **After submit:** a Leaf Wash status panel confirms the mail app opened and offers the address to copy plus Zalo and phone as fallbacks.
- **Hover:** border mixes 40% toward Orchard Green.
- **Focus:** border goes Orchard Green with a 4px Orchard Green halo at 18%; no outline.
- **Required:** asterisk in Orchard Green Deep.

### Navigation
- **Desktop:** links sit inside a pill track (Morning Mist at 80%, Dew Line border). Inactive links are Stem Grey 500; the active link becomes a white pill with Orchard Green Deep 600 text and the pill-inset shadow. The language toggle (VI / EN) uses the same pattern at 14px.
- **Mobile (≤860px):** a 44px menu button opens a full-height panel of large Montserrat 700 links (1.375rem) separated by Dew Line rules, followed by the phone number.

### Section Blocks (signature)
- **Page hero:** Morning Mist band with a lime radial glow and a slowly drifting blurred blob behind the title.
- **Stats strip:** large animated count-up numbers with labels, divided by hairlines.
- **Testimonials:** quote cards with the quote alone, no stars or per-quote author; the section lead states once that partners are kept anonymous at their request.
- **CTA band:** 20px-radius Orchard Fill panel with a faint lime glow, light and ghost actions, and the hotline.
- **FAQ:** native `<details>` rows with a plus that rotates into a minus, and smooth height animation.

### Home Hero Stage (signature)
A 20px-radius photo frame that tilts with the pointer. An orbiting ring carries a glowing fruit dot, glossy pink, sun and green orbs drift at different depths, and frosted floating cards ("6 market regions", "export standard") hover over the photo.

## Do's and Don'ts

### Do:
- **Do** put text on green only via `--color-primary-fill` + `--color-on-primary`.
- **Do** write phone numbers in international format (+84 …) and give hours with the timezone (GMT+7).
- **Do** take every color from the `--color-*` tokens in `src/styles/global.css`, and change the brand green only there.
- **Do** build every card with the shared `Card` component on the 12px `--radius-card`.
- **Do** open sections with eyebrow → headline → lead, and alternate Paper White and Morning Mist bands.
- **Do** use real farm, packing and carton photography in 20px-radius frames.
- **Do** carry the signature motion (word-flip headlines, tilt + glare cards, scroll reveals, parallax photos) onto new pages, and keep every hidden state behind `prefers-reduced-motion: no-preference`.
- **Do** keep text at 14px or larger with the established line heights so Vietnamese diacritics have room.
- **Do** design every string at both Vietnamese and English lengths.

### Don't:
- **Don't** hard-code green hex values in components or introduce a second action color.
- **Don't** use Dragon Fruit Pink or Harvest Sun for text, buttons or filled surfaces.
- **Don't** let one-shot reveal animations fill `forwards`/`both`; use `backwards`, or Safari paints the 3D layers blank while scrolling.
- **Don't** set text below 14px or tighten heading line-height under 1.25.
- **Don't** use square corners on actions; buttons, chips and tags are always pills.
