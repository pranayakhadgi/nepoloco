# Event Schedule & Menu WebApp

A single-page, mobile-first web application designed to display an event schedule and food menu through an engaging scroll-driven experience. Built with React, Framer Motion, and Tailwind CSS.

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

Builds the app for production to the `build` folder.

## 📁 Project Structure

```
event-webapp/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── WelcomeSection.jsx
│   │   ├── ScheduleSection.jsx
│   │   ├── MenuItem.jsx
│   │   ├── MenuSection.jsx
│   │   └── FooterSection.jsx
│   ├── data/
│   │   ├── schedule.js
│   │   └── menu.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🎨 Features

- **Mobile-First Design**: Optimized for mobile devices accessed via QR code
- **Scroll-Triggered Animations**: Smooth, progressive reveals using Framer Motion
- **Event Schedule**: Beautiful timeline visualization with staggered animations
- **Food Menu**: Elegant menu cards grouped by category
- **Social Links**: Instagram, Discord, and feedback form integration
- **Accessibility**: Respects reduced motion preferences and follows best practices

## 🛠️ Tech Stack

- **React 18**: Component-based architecture
- **Framer Motion**: Declarative animations
- **Tailwind CSS**: Utility-first styling

## 📝 Customization

### Update Schedule

Edit `src/data/schedule.js`:

```javascript
export const schedule = [
  {
    time: "7:00 PM",
    performer: "Your Performer",
    description: "Performance description"
  }
];
```

### Update Menu

Edit `src/data/menu.js`:

```javascript
export const menuItems = [
  {
    name: "Dish Name",
    category: "Category",
    description: "Professional description..."
  }
];
```

### Update Social Links

Edit `src/components/FooterSection.jsx` and update the href attributes for:
- Instagram link
- Discord link
- Google Form link

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically on push

### Netlify

1. Push code to GitHub
2. Connect repository in Netlify
3. Configure build settings (build command: `npm run build`, output: `build`)
4. Deploy

### Generate QR Code

Once deployed, generate a QR code from your live URL using:
- [QR Code Generator](https://www.qr-code-generator.com/)
- [QR Code Monkey](https://www.qrcode-monkey.com/)

## 📱 Mobile Optimization

- Smooth scroll behavior
- Touch-friendly button sizes (min 44x44px)
- Optimized animations (60fps)
- Fast loading on 3G/4G networks
- Responsive design for all screen sizes

## ♿ Accessibility

- Semantic HTML structure
- Keyboard navigation support
- WCAG AA color contrast
- Reduced motion support
- Screen reader friendly

## 📄 License

This project is created for the Dashain and Tihar Night 2025 event.
