# TSP360 - Falcon Fleet 360° Logistics Platform

## Overview
This is a modern Astro-based migration of the Falcon Fleet 360° logistics platform, configured for GitHub Pages deployment.

## Technology Stack
- **Astro** - Static site generator with island architecture
- **CSS** - Custom CSS with CSS variables for theming
- **Vanilla JavaScript** - Client-side interactivity
- **Font Awesome** - Icon library

## Project Structure
```
TSP360/
├── astro.config.mjs          # Astro configuration with GitHub Pages settings
├── package.json              # Dependencies and scripts
├── public/                   # Static assets
├── src/
│   ├── layouts/
│   │   └── Layout.astro      # Base layout component
│   ├── pages/
│   │   ├── index.astro       # Main gateway/landing page
│   │   ├── tsp-admin/
│   │   │   └── admin-dashboard.astro
│   │   ├── fleet-manager/
│   │   │   └── dashboard.astro
│   │   ├── fleet-owner/
│   │   │   └── index.astro
│   │   └── shipper/
│   │       └── dashboard.astro
│   └── styles/
│       └── global.css        # Global styles and CSS variables
└── README.md
```

## Features
- **Multi-Persona Dashboard**: Different interfaces for Admin, Fleet Owner, Fleet Manager, and Shipper roles
- **Responsive Design**: Mobile-friendly layouts with modern CSS
- **Static Generation**: Optimized for performance and security
- **GitHub Pages Ready**: Pre-configured for deployment to GitHub Pages

## Deployment Configuration
The project is configured for GitHub Pages deployment with:
- **Site URL**: `https://thevikramsinha.github.io`
- **Base Path**: `/tsp360`
- **Output**: Static generation
- **Build Format**: File-based routing

## Development Commands
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to GitHub Pages
1. Push the code to your GitHub repository
2. Enable GitHub Pages in repository settings
3. Select the `gh-pages` branch (or main branch as needed)
4. The site will be available at: `https://thevikramsinha.github.io/tsp360`

## CSS Variables
The project uses CSS custom properties for consistent theming:
- `--brand-primary`: #3F9AAE
- `--brand-secondary`: #2C7A8B
- `--success`: #10B981
- `--danger`: #EF4444
- `--bg-body`: #F5F7FA
- `--bg-card`: #FFFFFF
- `--text-main`: #0F172A
- `--text-muted`: #64748B

## Navigation Structure
- **Gateway**: Main persona selection interface
- **Admin Dashboard**: System administration and monitoring
- **Fleet Manager Dashboard**: Operations and fleet management
- **Shipper Dashboard**: Shipment tracking and logistics
- **Fleet Owner Dashboard**: Business metrics and asset management
