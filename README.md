# Brainwave - Explore the Possibilities of AI Chatting

A modern AI chatting application built with Next.js 14, TypeScript, and Tailwind CSS, featuring sleek animations powered by Framer Motion.

## Screenshots

### Full Website View

![Full Website View](./readme-images/brainwave-website-full-size.png)

### Large Device View

![Large Device View](./readme-images/brainwave-website-on-large-devices.png)

### Mobile Responsive Design

<div style="display: flex; gap: 20px;">
  <img src="./readme-images/brainwave-website-on-small-devices.png" alt="Mobile View" width="48%">
  <img src="./readme-images/brainwave-website-on-small-devices-navbar.png" alt="Mobile Navigation" width="48%">
</div>

## Features

- **Hero Section** - Eye-catching introduction with animated elements
- **Sponsors Showcase** - Display of partner companies and organizations
- **Benefits Section** - Highlighting the advantages of using Brainwave
- **Collaboration Features** - Integration with popular tools like Discord, Figma, Slack, and more
- **How-to-Use Guide** - Step-by-step instructions for getting started
- **Pricing Plans** - Transparent pricing options for different user needs
- **Product Roadmap** - Future development plans and upcoming features

## Tech Stack

- **Next.js 14** - React framework for production
- **TypeScript** - Static type checking
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Radix UI** - Unstyled, accessible components
- **tsParticles** - Particle animations

## Installation and Setup

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Getting Started

1. Clone the repository

```bash
git clone https://github.com/yourusername/brainwave.git
cd brainwave
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Run the development server

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application

### Building for Production

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm run start
# or
yarn start
```

## Project Structure

```
brainwave/
├── app/                 # Next.js app directory (pages and layouts)
├── assets/              # Static assets (images, SVGs)
├── components/          # React components
│   ├── layout/          # Layout components (Header, Footer, etc.)
│   └── ui/              # Reusable UI components
├── constants/           # Constant data used throughout the app
├── lib/                 # Utility functions and shared code
├── public/              # Public assets served from root
└── utils/               # Helper functions and types
```

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to a GitHub repository
2. Import the project to Vercel
3. Configure your environment variables if needed
4. Deploy

Alternatively, you can deploy to any platform that supports Next.js applications.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
