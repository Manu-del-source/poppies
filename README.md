# Poppies — Urban Dining Website

Poppies is a restaurant website concept for an urban dining experience in Nairobi. It is built as a client-side React application with Vite, Tailwind CSS, and Framer Motion.

The interface includes a cinematic landing section, featured dishes, a filterable menu, restaurant information, a gallery, reviews, contact details, and a reservation modal.

> **Status:** This repository currently contains a frontend prototype. The reservation form simulates submission in the browser; it does not send a booking to a backend or guarantee a table. Menu items, prices, contact details, reviews, and promotional content should be verified with the restaurant before the site is used commercially.

## Features

- Responsive, dark visual design with orange accents.
- Section-based navigation and animated scroll progress.
- Client-side menu category filtering.
- Animated reservation modal with date, time, and guest fields.
- Gallery, reviews, restaurant information, and contact sections.
- Motion effects built with Framer Motion and icons from Lucide React.

## Tech stack

- React 18
- Vite 5
- Tailwind CSS 3
- Framer Motion
- Lucide React

## Run locally

Requirements: Node.js and npm.

```bash
git clone https://github.com/Manu-del-source/poppies.git
cd poppies
npm install
npm run dev
```

Vite prints the local development URL in the terminal after the server starts.

## Production build

```bash
npm run build
npm run preview
```

The build output is generated in `dist/`.

## Project structure

```text
src/
  components/   Shared UI such as navigation and the reservation modal
  sections/     Page sections including hero, featured dishes, menu, gallery, and contact
  App.jsx       Page composition and shared booking-modal state
  index.css     Global styles
```

## Before using this as a live restaurant website

- Connect the reservation form to a real booking API or a monitored contact workflow.
- Replace prototype menu data, prices, imagery, reviews, and contact details with approved information.
- Test keyboard navigation, dialog focus handling, reduced-motion preferences, and mobile layouts.
- Add current screenshots or a short GIF of the running application to this README.
- Run the production build and manually verify the site in desktop and mobile browsers.

## License

No license file is currently included. Contact the repository owner before reusing this project.
