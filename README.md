# Abhijay L G — Technical Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

A modern, high-performance developer portfolio built specifically for technical recruiters and engineering hiring managers. Tailored for **Abhijay L G**, Software Developer and AI Solutions Engineer, highlighting systems concurrency (Java 21 LTS), deep learning computer vision (ONNX / OpenCV), and production full-stack engineering (Next.js, React, Node.js, Python).

---

## 🌟 Key Highlights & Architecture

- **Role-Engineered for Systems & AI**: Spotlights tangible engineering bottlenecks solved (e.g. bypassing Python GIL locks via a Java 21 EventBus, 60 FPS JavaFX HUD, sub-millisecond in-browser algorithmic telemetry).
- **Recruiter-Friendly UX**: Clear visual hierarchy, scannable metric pills, categorized technical skills, verified certifications (Avodha 95%, AWS GenAI), and one-click recruiter contact links.
- **Modern Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS, Lucide Icons, and fully responsive layouts.
- **Zero Heavy Bloat**: Optimized dark aesthetic without excessive gradients, fake testimonials, or bloated animation packages.
- **Instant Deployment Ready**: Pre-configured for seamless 1-click deployment to Vercel or any modern hosting platform.

---

## 🛠️ Technology Stack

| Domain | Technologies |
|---|---|
| **Framework & Runtime** | [Next.js 14](https://nextjs.org/) (App Router), [React 18](https://react.dev/), [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling & Design** | [Tailwind CSS 3](https://tailwindcss.com/), PostCSS, Autoprefixer |
| **Iconography** | [Lucide React](https://lucide.dev/) |
| **Fonts** | Inter & JetBrains Mono via `next/font/google` |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 📁 Project Folder Structure

```plaintext
abhijay-developer-portfolio/
├── app/
│   ├── globals.css         # Global Tailwind styles & dark mode scrollbars
│   ├── layout.tsx          # Root layout with fonts, metadata & SEO OpenGraph
│   └── page.tsx            # Composition page importing all sections
├── components/
│   ├── Navbar.tsx          # Responsive navigation bar with mobile sheet & status pill
│   ├── Hero.tsx            # Hero section with headline, bio, CTAs & code terminal card
│   ├── Metrics.tsx         # Engineering metric cards (60 FPS, Sub-ms, 20+ Workflows, 95%)
│   ├── Projects.tsx        # Filterable flagship project case studies & demo links
│   ├── Experience.tsx      # Professional timeline with verified achievements & tech stack
│   ├── Skills.tsx          # Categorized arsenal (Languages, AI, Backend, Frontend, DBs, Cloud)
│   ├── Education.tsx       # Degrees, industry certifications, hackathon awards & languages
│   ├── Contact.tsx         # Recruiter line, 1-click email copy & direct message form
│   └── Footer.tsx          # Clean footer with quick links, back-to-top & copyright
├── data/
│   └── portfolio-data.ts   # Central single-source-of-truth configuration file
├── public/                 # Static assets (favicons, images)
├── .gitignore              # Standard git ignore definitions
├── next.config.mjs         # Next.js configuration
├── package.json            # Node dependencies and npm scripts
├── postcss.config.mjs      # PostCSS Tailwind plugin configuration
├── tailwind.config.ts      # Tailwind color palette and design tokens
├── tsconfig.json           # TypeScript configuration with @/* path aliases
└── README.md               # Project documentation
```

---

## 🚀 Local Installation & Setup

### Prerequisites
- Node.js (v18.17.0 or higher recommended)
- npm, pnpm, or yarn

### 1. Clone the repository
```bash
git clone https://github.com/abhijaylg09/abhijay-developer-portfolio.git
cd abhijay-developer-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the portfolio live.

### 4. Build for production
```bash
npm run build
npm run start
```

---

## 🎨 How to Customize the Portfolio Content

All personal information, projects, work experience, certifications, and skills are maintained in a **single data configuration file**:

👉 `data/portfolio-data.ts`

### 1. Update Personal & Contact Info
Open `data/portfolio-data.ts` and modify the `personal` object:
```typescript
export const PORTFOLIO_DATA = {
  personal: {
    name: "Abhijay L G",
    role: "Software Developer & AI Solutions Engineer",
    headline: "Building High-Performance Real-Time Systems, Multimodal AI...",
    bio: "...",
    email: "abhijaylg09@gmail.com",
    phone: "+91 7736086163",
    github: "https://github.com/abhijaylg09",
    linkedin: "https://www.linkedin.com/in/abhijay-l-g-a38ba5324",
    portfolioUrl: "https://abhijays-portfolio.vercel.app",
    status: "Open to Software Engineer & AI Developer Roles",
  },
  // ...
};
```

### 2. Update Projects
Add or edit project entries in `PORTFOLIO_DATA.projects`:
```typescript
{
  id: "project-nexus",
  title: "Project N.E.X.U.S — Multimodal AI Assistant",
  category: "AI & Systems", // "AI & Systems" | "Web & Full Stack" | "Algorithms"
  badge: "Flagship Systems Architecture",
  problem: "...",
  solution: "...",
  technologies: ["Java 21 LTS", "Python", "OpenCV", "ONNX Runtime", ...],
  highlights: ["...", "..."],
  demoUrl: "https://...",
  githubUrl: "https://github.com/abhijaylg09/...",
}
```

### 3. Add or Modify Skills
Update `PORTFOLIO_DATA.skills` across categories:
- `languages`: Programming languages (Python, Java 21 LTS, Go, TypeScript, etc.)
- `ai_vision`: AI, LLM & Computer Vision tools (LangChain, ONNX Runtime, OpenCV, etc.)
- `backend`: Backend & systems frameworks (Node.js, FastAPI, EventBus, etc.)
- `frontend`: Frontend UI libraries (Next.js, React, Tailwind CSS, JavaFX)
- `databases`: Storage layers (MongoDB, PostgreSQL, MySQL, SQLite)
- `cloud_tools`: Cloud & DevOps (AWS EC2/S3, Git, GitHub, Vercel, Postman)

---

## 🚢 Deploying to Vercel

1. Push your project to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Abhijay LG developer portfolio"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/abhijay-developer-portfolio.git
   git push -u origin main
   ```
2. Navigate to [Vercel](https://vercel.com/) and click **Add New... > Project**.
3. Import your `abhijay-developer-portfolio` GitHub repository.
4. Keep the default Next.js framework preset and click **Deploy**.
5. Your portfolio will be live with automatic global SSL and CI/CD!

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).

