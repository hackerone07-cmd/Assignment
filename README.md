# PopX Mobile UI

A modern React-based mobile UI application built with Vite, Tailwind CSS, and React Router.

## Features

- Responsive mobile-first design
- Built with React 18
- Styled with Tailwind CSS
- Fast development with Vite
- Client-side routing with React Router

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hackerone07-cmd/Assignment.git
   cd Assignment
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Build

Build the application for production:
```bash
npm run build
```

### Preview

Preview the production build:
```bash
npm run preview
```

## Deployment

This project is configured for deployment on Vercel.

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the configuration and deploy

The `vercel.json` file ensures proper routing for the single-page application.

```
src/
├── components/     # Reusable UI components
├── context/        # React context providers
├── pages/          # Page components
├── App.jsx         # Main app component
├── main.jsx        # App entry point
└── styles.css      # Global styles
```

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is private and proprietary.