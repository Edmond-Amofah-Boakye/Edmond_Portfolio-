# Edmond Amofah Boakye - Portfolio Website

A modern, production-ready portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- 🌓 Dark/Light theme toggle
- ⚡ Fast and optimized with Vite
- 📱 Mobile-friendly
- 🎭 Smooth animations with Framer Motion
- 📧 Contact form
- 🎯 SEO optimized

## Tech Stack

- **Frontend:** React 18 with TypeScript
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Animations:** Framer Motion
- **Icons:** React Icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Personal Information

Edit `src/data/portfolioData.ts` to update:
- Personal information (name, email, phone, etc.)
- Education details
- Work experience
- Skills
- Projects (IMPORTANT: Replace placeholder projects with your actual projects)
- Achievements

### Update Projects

The projects section currently contains placeholder data. To add your real projects:

1. Open `src/data/portfolioData.ts`
2. Find the `projects` array
3. Replace each project with your actual project details:
   - Title
   - Description
   - Technologies used
   - Your role
   - GitHub URL
   - Live demo URL
   - Project highlights

### Add Your Resume

1. Place your CV PDF file in the `public` folder
2. Name it `EDMOND_AMOFAH_BOAKYE_CV.pdf` (or update the reference in `portfolioData.ts`)

### Customize Colors

Edit `tailwind.config.js` to change the color scheme.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## Project Structure

```
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   ├── context/          # React context (theme)
│   ├── data/             # Portfolio data
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## License

© 2026 Edmond Amofah Boakye. All rights reserved.

## Contact

- Email: edmondboakye1622@gmail.com
- GitHub: [Edmond-Amofah-Boakye](https://github.com/Edmond-Amofah-Boakye)
- LinkedIn: [edmond-amofah](https://www.linkedin.com/in/edmond-amofah)
