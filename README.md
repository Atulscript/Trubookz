# Trubookz Landing Page

A modern, responsive landing page for Trubookz bookkeeping services built with React and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations using Framer Motion
- Interactive components like testimonial carousel and FAQ accordion
- Contact form for lead generation
- Blog section for content marketing
- Optimized for performance and SEO

## Prerequisites

- Node.js 14.0.0 or later
- npm 6.0.0 or later

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd trubookz-landing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`.

## Project Structure

```
src/
  ├── components/         # React components
  │   ├── HeroSection.js
  │   ├── TrustedBrands.js
  │   ├── OurServicesSection.js
  │   ├── WhyOutsourcedBookkeeping.js
  │   ├── BookkeepingStepsSection.js
  │   ├── StonesIndustrySection.js
  │   ├── AccountingSoftwareSection.js
  │   ├── TestimonialsSection.js
  │   ├── ContactAndBenefitsSection.js
  │   ├── BlogSection.js
  │   └── FAQSection.js
  ├── App.js             # Main application component
  ├── index.js           # Application entry point
  └── index.css          # Global styles and Tailwind imports
```

## Built With

- [React](https://reactjs.org/) - Frontend library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [React Fast Marquee](https://www.react-fast-marquee.com/) - Marquee component

## Customization

### Colors
The primary colors can be customized in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#1E40AF',
        light: '#3B82F6',
      },
    },
  },
}
```

### Images
Replace the placeholder images in each component with your own images. The image URLs are stored at the top of each component file.

### Content
Update the text content in each component to match your business needs. The content is stored in constants at the top of each component file.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 