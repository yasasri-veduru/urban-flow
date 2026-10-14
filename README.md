# URBAN FLOW — AI-Powered Smart City Traffic Management

> **"Smarter Signals. Smoother Cities."**  
> AI-powered traffic management designed to optimize signal timings, prioritize emergency vehicles, and support sustainable urban mobility.  
> *Developed for the Wadhwani Student Venture Submission — Prototype Venture Stage.*

---

## 🚦 Venture Overview

**Urban Flow** is an early-stage civic technology startup venture designed to transform conventional static traffic intersections into responsive, adaptive mobility nodes. By using computer vision models to estimate vehicle queue density from standard camera feeds, Urban Flow proposes dynamically adjusting signal timings and preemptively clearing corridors for emergency first responders.

### Target Audiences & Stakeholders
- **Municipal Corporations:** Digital, non-invasive signal modernization.
- **Traffic Police Departments:** Bottleneck relief and emergency vehicle green wave assist.
- **Smart-City Authorities & SPVs:** Command center (ICCC) telemetry and intersection intelligence.
- **Commercial Complexes & Industrial Parks:** Campus entry gate and ring-road queue balancing.
- **Infrastructure Operators:** Toll plaza approach estimation and feeder corridor management.

---

## ✨ Key Features & Architecture

1. **Intelligent Traffic Analysis:** Real-time queue measurement and vehicle classification using CCTV camera feeds without destructive underground loop detectors.
2. **Adaptive Signal Management:** Dynamic calculation of green-light intervals proportional to lane queue density, curtailing empty red-light waiting.
3. **Emergency Vehicle Priority:** Automated emergency corridor preemption for ambulances, fire engines, and police responders.
4. **Sustainable Urban Mobility:** Targeted reduction of prolonged stationary engine idling and repetitive stop-and-go acceleration cycles.
5. **Interactive 4-Way Intersection Simulator:** A real-time front-end simulation allowing evaluators and stakeholders to test density adjustments, observe signal countdowns, and simulate emergency vehicle priority overrides.

---

## 🛠️ Tech Stack

- **Framework:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/) with a custom Dark Navy & Electric Cyan/Teal civic-tech palette
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** Plus Jakarta Sans & JetBrains Mono (via Google Fonts)
- **Deployment Ready:** Zero-backend required for presentation; includes interactive form validation, client-side registry, and native `mailto:` fallback.

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

### 1. Installation
Clone or navigate to the repository directory and install dependencies:
```bash
cd "c:\Users\yasas\Projects\Urban Flow"
npm install
```

### 2. Run Local Development Server
Start the Vite local development server:
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:3000
```

### 3. Production Build & Local Preview
To create an optimized production build:
```bash
npm run build
```
To preview the production build locally:
```bash
npm run preview
```

---

## 🌐 How to Publish Online for a Public Shareable URL

You can host this website online for free in under 3 minutes to share with mentors, evaluators, and pilot partners:

### Option A: Deploy to Vercel (Recommended — 2 Minutes)
1. Push this repository to **GitHub** (or [GitHub Desktop](https://desktop.github.com/)):
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Urban Flow landing site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/urban-flow.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com/) and sign in with your GitHub account.
3. Click **"Add New..."** > **"Project"**.
4. Import your `urban-flow` repository.
5. Vercel automatically detects **Vite**. Click **Deploy**.
6. Within 30 seconds, you will receive a public HTTPS URL (e.g., `https://urban-flow.vercel.app`).

### Option B: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com/) and log in.
2. Click **"Add new site"** > **"Import an existing project"** (or drag and drop the `dist/` folder directly to [app.netlify.com/drop](https://app.netlify.com/drop)).
3. If importing via Git, set:
   - **Build Command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **Deploy Site** to get an immediate live URL.

### Option C: Deploy to GitHub Pages
1. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
2. In `vite.config.js`, add `base: '/urban-flow/'`.
3. In `package.json`, add:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run `npm run deploy`.

---

## 📂 Project Structure

```
urban-flow/
├── public/                 # Static assets & icons
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Sticky navigation, logo, prototype badge, mobile drawer
│   │   ├── Hero.jsx              # Startup headline, value prop, CTA, live HUD graphic
│   │   ├── ProblemSection.jsx    # Real-world intersection challenges & root causes
│   │   ├── SolutionSection.jsx   # 5 core intended capabilities & venture disclaimer
│   │   ├── FeaturesSection.jsx   # 4 detailed feature cards with telemetry preview
│   │   ├── HowItWorks.jsx        # 4-step diagram with interactive data payload inspector
│   │   ├── PrototypeDemo.jsx     # Centerpiece: 4-way intersection simulation & telemetry
│   │   ├── BenefitsAndTarget.jsx # Intended benefits & 5 target customer profiles
│   │   ├── PilotCtaAndContact.jsx# Closing CTA, pilot form, and email fallback
│   │   └── Footer.jsx            # Links, venture acknowledgments, and back-to-top
│   ├── App.jsx                   # Main layout container
│   ├── main.jsx                  # Application entry point
│   └── index.css                 # Tailwind base styles, custom glow & animations
├── index.html              # HTML shell with Google Fonts & metadata
├── package.json            # Scripts & dependencies
├── postcss.config.js       # PostCSS plugins
├── tailwind.config.js      # Custom dark navy & electric cyan/teal theme
├── vite.config.js          # Vite configuration
└── README.md               # Project documentation & deployment guide
```

---

## 📋 Academic Venture Submission Disclaimer

*Urban Flow is a prototype-stage venture conceptualized and developed for the Wadhwani Student Venture Program. The simulations, telemetry, and metrics presented are for demonstration and proof-of-concept evaluation purposes and do not represent existing city-wide physical deployments or unverified historical claims.*
