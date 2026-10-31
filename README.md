# 🌕 Happy Karwa Chauth — Complete Festival Companion

<p align="center">
  <img src="public/logo.png" alt="Happy Karwa Chauth Logo" width="120" style="border-radius: 50%; box-shadow: 0 4px 20px rgba(234, 179, 8, 0.4);" />
</p>

<h3 align="center">✨ Accurate Panchang Muhurat, City-Wise Moonrise Timings, Puja Vidhi, Vrat Katha & Festive Wishes Cards ✨</h3>

<p align="center">
  <a href="https://github.com/MRLIKHANROY"><img src="https://img.shields.io/badge/Developed%20By-MRLIKHANROY-795548?style=for-the-badge&logo=github&logoColor=white" alt="Developer" /></a>
  <img src="https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-7.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/TailwindCSS-v4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="MIT License" />
</p>

---

## 📖 Overview

**Happy Karwa Chauth** is an all-in-one festive web application dedicated to the auspicious Hindu festival of Karwa Chauth. Designed with a royal marigold and crimson Indian aesthetic, it provides devotees with **100% verified Vedic Drik Panchang timings**, **live moonrise countdowns across 40+ major cities**, **complete ritual guides (Vidhi, Katha, Aarti, Samagri)**, and an **interactive Wishes & Greeting Cards generator**.

The platform is engineered to remain **accurate and updated every year** automatically via astronomical synodic lunar calculations and verified panchang seeds.

---

## 🌟 Key Features

### ⏱️ 1. 100% Accurate Vedic Panchang & Dynamic Calendar
- **Lifetime Accuracy:** Powered by verified Drik Panchang seeds (2020–2045) and an astronomical synodic lunar calculation engine for lifetime date, tithi, and muhurat accuracy.
- **Auto-Updating Tithi & Muhurat:** Automatically recalculates Kartik Krishna Paksha Chaturthi start and end times, Pradosh Kaal Puja Muhurat, and Vrat fasting duration in Indian Standard Time (IST).

### 🏙️ 2. Real-Time City-Wise Moonrise Timings
- Live tracking and countdown timers for moonrise across **40+ prominent Indian and global cities** (Delhi, Mumbai, Bengaluru, Kolkata, Jaipur, Chandigarh, Lucknow, London, New York, Toronto, Dubai, etc.).
- City search and quick filter options with precise astronomical minute offsets.

### 💌 3. Wishes Cards & Greetings Generator
- Beautiful collection of festive wishes in English, Hindi, and regional languages.
- Customize with **Sender & Recipient names**.
- High-fidelity festive card design featuring traditional golden lotus artwork and decorative borders.
- One-click copy, download, and instant sharing to WhatsApp, Facebook, and Instagram.

### 📜 4. Comprehensive Rituals & Puja Guide
- **Puja Vidhi:** Step-by-step instructions from Sargi (pre-dawn meal) to Baya donation and evening Arghya.
- **Vrat Katha:** Authentic story of Queen Veeravati in full narrative text.
- **Samagri Checklist:** Interactive checklist of essential puja items (Karwa, Channi, Kalash, Sindoor, etc.).
- **Karwa Chauth Aarti & Mantras:** Complete devotional hymns with clear typography.

### 🌐 5. Multi-Language Support
- Full localized user experience across multiple languages:
  - English
  - हिन्दी (Hindi)
  - ਪੰਜਾਬੀ (Punjabi)
  - বাংলা (Bengali)
  - ગુજરાતી (Gujarati)

### 🎨 6. Premium Festive UI / UX
- Deep royal burgundy, gold, and festive saffron color palette.
- Responsive design tailored for mobile phones, tablets, and desktop displays.
- Floating quick-access navigation and clean, accessible typography.

---

## 🛠️ Tech Stack

- **Frontend Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Motion](https://motion.dev/)
- **Data Engine:** Client-side Astronomical Synodic Lunar Calculator & Verified Drik Panchang Tables

---

## 📁 Project Structure

```text
├── public/
│   ├── favicon.png                # Browser favicon & search icon
│   ├── logo.png                   # Brand emblem for header & footer
│   └── assets/                    # Optimized festive graphics & artwork
├── src/
│   ├── components/
│   │   └── FestiveIllustrations.tsx # SVG decorative elements & motifs
│   ├── data/
│   │   ├── festivalData.ts        # Astronomical calculator & city offsets
│   │   ├── localizedContent.ts    # Multilingual translations
│   │   └── translations.ts        # UI language strings
│   ├── App.tsx                    # Core app with routing & sections
│   ├── index.css                  # Tailwind CSS styling & custom utilities
│   └── main.tsx                   # React root entrypoint
├── index.html                     # HTML5 template with SEO & social tags
├── package.json                   # Dependencies & build scripts
├── tsconfig.json                  # TypeScript compiler configuration
└── vite.config.ts                 # Vite bundler configuration
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.0.0 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MRLIKHANROY/Happy-Karwa-Chauth.git
   cd Happy-Karwa-Chauth
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The compiled static files will be generated in the `dist/` directory.

---

## 🌐 Deployment

The build outputs clean, modern, static assets that can be hosted on any static hosting provider:

- **GitHub Pages:**
  ```bash
  npm run build
  # deploy dist/ directory to gh-pages branch
  ```
- **Vercel / Netlify / Cloudflare Pages:**
  - Build command: `npm run build`
  - Output directory: `dist`

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](https://github.com/MRLIKHANROY/Happy-Karwa-Chauth/issues).

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open-source and licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Developed By

<p align="left">
  <strong>Developed by:</strong> <a href="https://github.com/MRLIKHANROY" style="color: #795548; font-weight: bold; text-decoration: none;">
    <svg height="16" width="16" viewBox="0 0 16 16" style="vertical-align: text-bottom; fill: currentColor; display: inline-block; margin-right: 4px;">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
    </svg>
    MRLIKHANROY
  </a>
</p>