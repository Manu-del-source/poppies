# Poppies

Poppies is a restaurant website concept for an urban dining spot in Nairobi, built as a single-page React app. It is a frontend prototype: the content is placeholder-level and the reservation form does not send anything to a backend.

## What is on the page

- Hero section, featured dishes, a filterable menu, specials, about, gallery, reviews, contact and footer.
- A reservation modal (date, time, guests). It simulates submission in the browser only.
- Animated scroll progress, a custom cursor (disabled under reduced-motion preferences), and a navbar that works with keyboard navigation.

## Stack

- React 18 (`react`, `react-dom`)
- Vite 5 (dev server and build)
- Tailwind CSS 3 with PostCSS and Autoprefixer
- Framer Motion 11 for animation
- Lucide React for icons

## Run locally

Requires Node.js and npm.

    git clone https://github.com/Manu-del-source/poppies.git
    cd poppies
    npm install
    npm run dev

Vite prints the local URL (usually http://localhost:5173) when the server starts.

To build and preview the production bundle:

    npm run build
    npm run preview

Output goes to `dist/`.

## Project structure

    src/
      main.jsx          entry point
      App.jsx           page composition and shared reservation-modal state
      index.css         global styles
      components/       Navbar, ReservationModal, CustomCursor, OptimizedImage, SpecialWidget
      sections/         Hero, Featured, Specials, About, Gallery, Reviews, Contact, Footer

`README.md.bak` and `index.html.bak` are leftover backup copies and are not used by the app.

## Screenshots

[SCREENSHOT PLACEHOLDER: hero section, desktop 1440px wide]

[SCREENSHOT PLACEHOLDER: menu section with category filter, mobile 390px wide]

[SCREENSHOT PLACEHOLDER: reservation modal open]

[GIF PLACEHOLDER: scroll through the page]

## Known limitations

- The reservation form does not send bookings anywhere. A real booking API or a monitored contact workflow is needed before use.
- Menu items, prices, reviews, imagery (currently Unsplash URLs in the hero) and contact details are placeholders and must be replaced with information approved by the restaurant.
- Keyboard focus handling in the modal, reduced-motion behaviour and mobile layouts should be tested by hand. No automated tests are included.

## License

No license file is included in this repository. Ask the owner before reusing the code.
