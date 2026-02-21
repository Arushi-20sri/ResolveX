# RESOLVEX Frontend

A modern React application built with Vite.

## Project Structure

```
frontend/
├── public/              # Static assets (images, fonts, etc.)
├── src/
│   ├── main.jsx        # React app entry point
│   ├── App.jsx         # Root React component
│   ├── App.css         # App component styles
│   └── index.css       # Global styles
├── index.html          # HTML entry point
├── vite.config.js      # Vite build configuration
├── package.json        # Project metadata and dependencies
└── .gitignore          # Git ignore rules
```

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The app will open automatically at `http://localhost:5173`

### Production Build

Create an optimized production build:
```bash
npm run build
```

Output files will be in the `dist/` folder.

### Preview Production Build

Test your production build locally:
```bash
npm run preview
```

## Key Technologies

- **React 18**: UI library for building components
- **Vite 5**: Lightning-fast build tool and dev server
- **JavaScript (ES6+)**: Modern JavaScript with import/export
- **CSS3**: Styling with flexbox and CSS Grid

## Development Workflow

1. Edit files in `src/`
2. Vite automatically reloads changes in the browser (Hot Module Replacement)
3. Check browser console for errors
4. Test your changes
5. Run `npm run build` to create production bundle

## Customization

- **Port**: Change `server.port` in `vite.config.js`
- **Bundle Output**: Modify `build.outDir` in `vite.config.js`
- **Global Styles**: Edit `src/index.css`
- **App Styles**: Edit `src/App.css`

## Adding Dependencies

To add new packages:
```bash
npm install <package-name>
```

For dev-only packages:
```bash
npm install --save-dev <package-name>
```

## Troubleshooting

- **Port 5173 already in use?** Change it in `vite.config.js`
- **Modules not found?** Run `npm install` to ensure dependencies are installed
- **Hot reload not working?** Restart `npm run dev`

---

Ready to build something amazing! 🚀
