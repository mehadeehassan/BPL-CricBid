# 🏏 BPL CricBid — Dream 11 Player Auction

A React + TypeScript web app that lets fans build their own **Dream 11 Bangladesh Premier League (BPL)** squad through a virtual coin-based player auction. Browse real BPL players, "bid" on them with a limited coin budget, manage your squad, and swap players in and out — all in a fast, modern UI built with Vite, Tailwind CSS, and daisyUI.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss&logoColor=white)

---

## ✨ Features

- **Player marketplace** — Browse a roster of international BPL stars with photo, role, rating, batting/bowling style, and price.
- **Coin-based bidding** — Start with a fixed coin budget (1500) and "purchase" players; the app validates you have enough coins before letting a purchase go through.
- **Squad management** — Switch between **Available** and **Selected** tabs to review your picks.
- **Remove & refund** — Drop a player from your squad and get your coins refunded instantly.
- **Live toast notifications** — Success, error, and info toasts (via `react-toastify`) for every purchase, removal, or failed bid.
- **Responsive, modern UI** — Built with Tailwind CSS v4 and daisyUI components, featuring a dark hero banner and clean card-based layouts.

## 🖥️ Tech Stack

| Layer            | Technology                          |
|------------------|--------------------------------------|
| Framework        | React 19 (with `use()` + Suspense)   |
| Language         | TypeScript                           |
| Build Tool       | Vite 8                               |
| Styling          | Tailwind CSS 4 + daisyUI             |
| Icons            | react-icons                          |
| Notifications    | react-toastify                       |
| Linting          | ESLint + typescript-eslint           |

## 📂 Project Structure

```
BPL-CricBid/
├── public/
│   ├── data.json          # Player dataset (name, image, type, origin, rating, price, etc.)
│   └── logo.png
├── src/
│   ├── assets/             # Images: logo, banner, backgrounds
│   ├── components/
│   │   ├── Navbar.tsx           # Top nav bar with live coin balance
│   │   ├── Banner.tsx           # Hero section
│   │   ├── Footer.tsx
│   │   ├── PromoSignup.tsx
│   │   └── Players/
│   │       ├── Players.tsx            # Tab controller (Available / Selected)
│   │       ├── AvailablePlayers.tsx    # Grid of all players
│   │       ├── PlayersCard.tsx         # Single player card + "Choose Player" action
│   │       ├── SelectedPlayers.tsx     # Grid of squad players
│   │       └── SelectedplayerCard.tsx  # Single squad player + remove action
│   ├── Types/
│   │   └── playerTypes.ts   # `Iplayers` interface shared across components
│   ├── App.tsx               # Root component, coin & squad state, data fetching
│   ├── main.tsx               # App entry point
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig*.json
└── eslint.config.js
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** (or your preferred package manager)

### Installation

```bash
git clone <repository-url>
cd BPL-CricBid
npm install
```

### Run in development mode

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (default Vite port).

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Lint the codebase

```bash
npm run lint
```

## 🗃️ Data Model

Player data is served from `public/data.json` and typed via `Iplayers`:

```ts
interface Iplayers {
  PlayerName: string;
  PlayerImg: string;
  PlayerType: string;      // e.g. "Batsman" | "Bowler" | "All-Rounder"
  Origin: string;          // Country of origin
  Rating: number;
  BowlingStyle: string;
  BattingStyle: string;
  price: number;           // Coin cost to acquire the player
}
```

To add or update players, simply edit the array in `public/data.json` — no code changes required.

## 🧠 How It Works

1. `App.tsx` fetches the player list from `data.json` and holds two pieces of shared state: the user's remaining **coin balance** and their **selected squad**.
2. The **Available** tab renders every player as a `PlayersCard`. Clicking **Choose Player** deducts the player's price from the coin balance (if sufficient) and adds them to the squad.
3. The **Selected** tab lists the current squad via `SelectedplayerCard`, where each player can be removed — refunding their price back to the coin balance.
4. All state changes trigger toast notifications for instant user feedback.

## 🗺️ Roadmap Ideas

- [ ] Persist squad & coin balance (localStorage or backend)
- [ ] Enforce squad composition rules (e.g. max batsmen/bowlers, budget cap per role)
- [ ] Player search & filtering (by role, origin, price range)
- [ ] User authentication and saved teams leaderboard
- [ ] Live BPL fixtures & schedule integration

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo, create a feature branch, and open a pull request.

## 📄 License

This project is currently unlicensed. Add a license of your choice before public distribution.