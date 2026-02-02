# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, Vite, and Tailwind CSS.

## Features

- **Home Section**: Personal photo and professional summary
- **Skills Section**: Showcase of programming languages, frameworks, libraries, and tools
- **Experience Section**: Professional work history
- **Projects Section**: Portfolio of personal and professional projects
- **Contact Section**: Email contact form for inquiries
- **Social Links**: Quick access to LinkedIn, GitHub, and Resume

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Customization

Before deploying, update the following placeholders with your information:

1. **Navbar.jsx**: Update LinkedIn, GitHub, and Resume URLs
2. **Home.jsx**: Add your photo, name, title, and summary
3. **Skills.jsx**: List your programming languages, frameworks, and tools
4. **Experience.jsx**: Add your work experience
5. **Projects.jsx**: Showcase your projects with descriptions and links
6. **Contact.jsx**: Update your email address

## Project Structure

```
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Home.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Deployment

This site can be deployed to various platforms:

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use `gh-pages` package for deployment
- **AWS S3**: Upload the `dist` folder to an S3 bucket

## License

This project is open source and available under the MIT License.
