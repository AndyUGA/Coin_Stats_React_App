# CoinStats — Crypto Dashboard

A production-grade cryptocurrency dashboard built with React + Vite + Tailwind CSS v3. Features a dark data-terminal aesthetic with live data from the CoinStats API.

## Features

- **Coins page** — Paginated grid of 15 coins per page with live prices, 24h change, market cap, volume, and rank. Includes client-side search/filter and skeleton loading states.
- **News page** — Latest crypto news with thumbnails, relative timestamps, source attribution, and a trending topic tag cloud.
- Glassmorphism cards with micro-animations on hover
- Animated gradient mesh background
- Sticky header with glowing logo and active nav links
- Google Fonts: Syne (headings) + IBM Plex Mono (data)

## Setup

1. **Clone the repo**

   ```bash
   git clone <repo-url>
   cd Coin_Stats_React_App
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Add your API key**

   Copy `.env.example` to `.env` and fill in your CoinStats API key:

   ```bash
   cp .env.example .env
   ```

   Then edit `.env`:

   ```
   VITE_COINSTATS_API_KEY=your_actual_key_here
   ```

   Get a free API key at [coinstats.app](https://coinstats.app/api).

4. **Run the dev server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173).

5. **Build for production**

   ```bash
   npm run build
   ```

## Tech Stack

- React 19 + Vite 6
- Tailwind CSS v3
- React Router v6
- CoinStats API (via `fetch`)
