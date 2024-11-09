# React + SCSS Starter

A modern React starter template with SCSS support, built with Vite. This template provides a structured foundation for building React applications with organized styles using SCSS.

## Features

- ⚡️ Vite for fast development and building

- ⚛️ React 18

- 🎨 SCSS with organized architecture

- 🎯 Basic components showcase

- 🔧 CSS reset included

## Project Structure

```
src/styles/
├── abstracts/ # Variables, mixins, functions
├── base/ # Reset, typography, base styles
│ ├── index.scss
│ ├── reset.scss
│ └── typography.scss
├── components/ # Component styles
│ ├── index.scss
│ └── button.scss
├── layouts/ # Layout styles
├── pages/ # Page-specific styles
│ └── home.scss
└── app.scss # Main stylesheet
```

## Getting Started

### Prerequisites

- Node.js (version 12 or higher)

- npm or yarn

### Installation

1.  Clone the repository:

```bash

git clone https://github.com/SeadSabanovic/react-scss-starter.git

```

2.  Install dependencies:

```bash

npm  install

# or

yarn

```

3.  Start the development server:

```bash

npm  run  dev

# or

yarn  dev

```

## Available Scripts

- `npm run dev` - Starts the development server

- `npm run build` - Builds the app for production

- `npm run preview` - Preview the production build locally

## SCSS Architecture

The project follows the 7-1 pattern (modified) for SCSS organization:

- **abstracts/** - Project variables, mixins, and functions

- **base/** - Reset and typography rules

- **components/** - Individual component styles

- **layouts/** - Layout-related styles

- **pages/** - Page-specific styles

## Components

### Buttons

The starter includes a comprehensive button system with:

- Multiple variants (primary, secondary, accent, success, error, warning)

- Three sizes (sm, md, lg)

- Disabled state support

- Hover effects

Example usage:

```jsx

<button class="button button--primary button--md">

Primary Button

</button>

```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
