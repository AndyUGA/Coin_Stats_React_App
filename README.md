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

## Built with AI

This app was scaffolded entirely from a single Claude Code prompt. The prompt below was used to generate the full project — including component structure, API integration, design system, and routing — with no placeholder data.

<details>
<summary>View the original prompt</summary>

```
Create a production-grade React + Vite + Tailwind CSS cryptocurrency dashboard app with the following specifications:

Project Setup
Scaffold with Vite using the React template
Install and configure Tailwind CSS v3
Use React Router v6 for navigation between pages
Use fetch (no axios) for API calls


Design Aesthetic

Dark theme with a sleek, data-terminal feel — deep navy/slate backgrounds (#0a0f1e, #0d1424), with electric cyan (#00e5ff) and lime (#a3e635) as sharp accent colors
Typography: Use Google Fonts — "Syne" for headings (bold, geometric) and "IBM Plex Mono" for data/numbers
Subtle animated gradient mesh in the background (CSS keyframes)
Cards with glassmorphism: backdrop-blur, semi-transparent borders, and soft glow on hover
Micro-animations on card hover (translateY, glow pulse) and a skeleton loading state while data fetches
A sticky header with a glowing logo and nav links


Page 1 — Coins (/)
Fetch from: GET https://openapiv1.coinstats.app/coins?limit=15&skip={skip}

Display a paginated grid of cryptocurrency cards (15 per page)
Each card shows: coin icon, name, symbol, current price (USD), 24h price change % (green if positive, red if negative), market cap, volume, and rank badge
Pagination controls at the bottom: Previous / Next buttons + current page indicator
skip = (currentPage - 1) * 15, passed as a query param
Include a search/filter input that filters the currently loaded coins by name or symbol
Show a loading skeleton (animated pulse placeholder cards) while fetching
Show a friendly error state if the API call fails
The API requires an X-API-KEY header — read it from an .env variable: import.meta.env.VITE_COINSTATS_API_KEY


Page 2 — News (/news)
Fetch from: GET https://openapiv1.coinstats.app/news?limit=20

Display a grid of news cards, each showing: article title, source name, thumbnail image (with fallback), published date formatted as relative time (e.g. "3 hours ago"), and a short description/excerpt
Each card links to the original article (opens in new tab)
Include a "trending topics" tag cloud extracted from the news titles
Show skeleton loaders while fetching


Additional Requirements

Create a .env.example file with VITE_COINSTATS_API_KEY=your_key_here
Create a README.md with setup instructions: clone, install, add .env, run npm run dev
All API calls should include the header: { "X-API-KEY": import.meta.env.VITE_COINSTATS_API_KEY }
Componentize properly: CoinCard, NewsCard, Pagination, SkeletonCard, Header, TagCloud
Use Tailwind utility classes throughout — no separate CSS files except for the global background gradient animation
The app must be fully functional with no placeholder data — all content comes from live API calls
```

</details>
