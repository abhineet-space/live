# Abhineet Kumar - Personal Portfolio

A modern, interactive personal portfolio website built with React, TypeScript, and Vite. Features a stunning glass-morphism design with particle animations and responsive layout.

## Features

- **Glass-morphism Design**: Modern frosted glass effect with beautiful visual aesthetics
- **Particle Canvas**: Dynamic animated background particles
- **Interactive Elements**: Hover effects, smooth transitions, and micro-interactions
- **Responsive Design**: Optimized for all screen sizes (mobile, tablet, desktop)
- **Real-time Clock**: Live time display in the footer
- **Contact Integration**: Click-to-copy email functionality
- **Social Links**: Direct links to LinkedIn and Instagram profiles
- **Resume Download**: One-click resume download functionality
- **Hire Mode**: Special view for recruitment purposes

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite 8
- **Styling**: TailwindCSS 4
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Code Quality**: ESLint, Prettier, Knip

## Project Structure

```
src/
  components/
    Clock.tsx          # Real-time clock component
    GlassCard.tsx      # Glass-morphism card container
    ParticleCanvas.tsx # Animated particle background
  pages/
    HomePage.tsx       # Main portfolio page
  App.tsx              # Main application with routing
  main.tsx             # Application entry point
  index.css            # Global styles and TailwindCSS
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm/yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd live

# Install dependencies
pnpm install
```

### Development

```bash
# Start development server
pnpm dev

# The app will be available at http://localhost:3000
```

### Build

```bash
# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Available Scripts

- `pnpm dev` - Start development server on port 3000
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting
- `pnpm knip` - Find unused dependencies and exports

## Routes

- `/` - Main portfolio page
- `/hire` - Portfolio with hiring focus
- `/hire-me` - Alternative hiring route

## Key Components

### HomePage

The main component that displays:

- Personal information and status
- Downloadable resume (in hire mode)
- Contact information with copy-to-clipboard
- Social media links
- Real-time clock

### GlassCard

A reusable glass-morphism container with:

- Tilt effect on mouse movement
- Customizable blur and transparency
- Responsive design

### ParticleCanvas

Animated background featuring:

- Dynamic particle movement
- Mouse interaction
- Performance optimized rendering

### Clock

Simple real-time clock displaying:

- Current time
- Date information
- Clean, minimal design

## Styling

The project uses TailwindCSS with custom configurations for:

- Glass-morphism effects
- Gradient backgrounds
- Custom animations
- Responsive breakpoints
- Dark theme optimization

## Performance

- React Compiler enabled for optimized rendering
- Lazy loading for better performance
- Optimized bundle size with Vite
- Efficient particle animation system

## Deployment

The application is ready for deployment to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- AWS S3

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is private and proprietary.

---

**Built with passion by Abhineet Kumar**
