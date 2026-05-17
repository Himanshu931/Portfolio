# Himanshu Prusty — Portfolio

My personal portfolio. Built from scratch because every template I tried felt wrong.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

---

## What is this

A single-page portfolio I built to showcase my work. Wanted something that felt alive — not just a list of projects with a headshot. So I spent way too much time on animations.

The whole thing is scroll-driven. The hero section has a parallax background, a photo that slides out while an about card rises in behind it, and a GSAP floating loop on the image. The navbar tracks your scroll position and expands the active item to show the label. It's the kind of thing that's overkill for a portfolio but genuinely fun to build.

---

## Stack

- **React 19 + Vite** — nothing fancy, just fast
- **Framer Motion** — scroll animations, layout transitions, the expanding navbar
- **GSAP** — the floating image animation in the hero
- **Lenis** — smooth scrolling that actually feels good
- **Tailwind CSS v4** — with a few custom tokens for the color palette
- **Lucide React** — icons in the navbar
- **react-github-calendar** — the contribution graph in the stats section

---

## Sections

**Hero** — big name, scroll-driven parallax, photo reveals an about card as you scroll down

**Skills** — tech stack laid out in a grid

**Projects** — 3D hover cards for each project

**Stats** — GitHub contribution graph + some dev metrics

**Contact / Footer** — email, LinkedIn, social links

---

## Running it locally

```bash
git clone https://github.com/himanshu-prusty/portfolio.git
cd portfolio
npm install
npm run dev
```

That's it. Opens at `localhost:5173`.

---

## Folder structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx          # scroll-aware, expanding nav
│   │   ├── Footer.jsx          # contact + socials
│   │   └── ScrollIndicator.jsx # thin progress bar at the top
│   └── sections/
│       ├── Hero.jsx            # the scroll-driven hero
│       ├── Skills.jsx
│       ├── Projects.jsx
│       └── Stats.jsx
├── App.jsx                     # Lenis setup lives here
└── index.css                   # color tokens, base styles
```

---

## Color palette

The whole site uses three colors and their variations:

| | Hex | Where |
|---|---|---|
| Deep violet | `#320A6B` | headings, active nav |
| Royal blue | `#065084` | links, borders, accents |
| Teal | `#0F828C` | glows, highlights |

---

## Contact

himanshuprusty931@gmail.com
