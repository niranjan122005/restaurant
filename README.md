# Delizioso — Restaurant Landing Page

A React + TypeScript implementation of the "Delizioso" restaurant Figma design, built with
Vite, Tailwind CSS v4, and React Router. Fully responsive (mobile → desktop).

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build      # type-check + production build
npm run preview    # preview the production build
```

## Pages implemented

| Route                     | Page                                   |
| -------------------------- | --------------------------------------- |
| `/`                         | Home                                     |
| `/menu`                     | Menu (filterable, paginated)             |
| `/about`                    | About us                                 |
| `/contact`                  | Contact us (form + map)                  |
| `/order`                    | Order online (menu + live cart sidebar)  |
| `/checkout`                 | Checkout (order data, payment, delivery) |
| `/reservation`              | Book a table (date/time/party size)      |
| `/reservation/confirm`      | Reservation detail form                  |
| `/reservation/confirmed`    | Confirmation + modify/cancel             |
| `/reservation/cancel`       | Cancel confirmation                      |
| `/login`                    | Login (split layout)                     |
| `/signup`                   | Sign up (split layout)                   |

## Project structure

```
src/
  components/   Reusable UI: Header, Footer, Button, FoodCard, CartPanel,
                CategoryTabs, Pagination, StarRating, Logo, Layout
  context/      CartContext — shared cart state (Order Online → Checkout)
  data/         Menu items, chefs, testimonials (extracted from the design)
  pages/        One file per route
  types.ts      Shared TypeScript types
```

## Notes

- The cart (add/remove/qty, subtotal, 4.5% tax, voucher code `FREETOEAT` for $5 off) is
  shared via React Context between **Order Online** and **Checkout**.
- The reservation flow (`Reservation` → `ReservationConfirm` → `ReservationConfirmed` →
  `ReservationCancel`) passes booking details through React Router state.
- A handful of photos (chefs, testimonials, hero backgrounds, login/signup side image)
  reference `images.unsplash.com` — swap these for your own asset pipeline/CDN if you'd rather
  not depend on an external host. The dish photos are the ones extracted from your uploaded
  design and live locally in `public/images`.
- Map embeds (`Contact`, `Checkout`) use a keyless Google Maps iframe embed. For production,
  consider swapping in a proper Maps API key/component.
- Tailwind v4 is wired up via the `@tailwindcss/vite` plugin (no `tailwind.config.js` needed —
  design tokens live in `src/index.css` under `@theme`).

## Tested

Build (`npm run build`) is clean with no TypeScript errors. All pages were smoke-tested with
Playwright at both desktop (1440px) and mobile (390px) viewports, including the cart
add/remove/quantity/voucher math, the full reservation booking → confirm → confirmed → cancel
flow, and the mobile hamburger navigation.
