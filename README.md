# MGA Associates React Website

This is a modern React-based implementation of the MGA Associates website, designed to be hosted on GitHub Pages.

## Setup and Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/mga.git
cd mga
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Build for production:
```bash
npm run build
```

## Deployment to GitHub Pages

1. Deploy to GitHub Pages:
```bash
npm run deploy
```

## Project Structure

```
mga-react/
├── public/               # Static files
│   ├── img/              # Images from original site
│   ├── index.html        # HTML entry point
│   └── manifest.json     # Web manifest
├── src/
│   ├── components/       # Reusable components
│   │   ├── common/       # Header, Footer, etc.
│   │   ├── home/         # Homepage components
│   │   └── ...
│   ├── pages/            # Page components
│   ├── styles/           # CSS and styling
│   ├── App.js            # Main app component
│   └── index.js          # Entry point
└── package.json          # Project configuration
```

## Features

- **Responsive Design**: Fully responsive website that works on all devices
- **Modern React Implementation**: Uses React Router v6, React Bootstrap, and other modern tools
- **Reusable Components**: Modular architecture with reusable components
- **Easy Deployment**: Configured for GitHub Pages deployment

## Credits

- Original Design: MGA & Associates
- React Implementation: Mukesh Bansal

## License

This project is licensed under the MIT License - see the LICENSE file for details.