# Dashain & Tihar Night 2025

A beautiful, galaxy-themed website for the Dashain and Tihar Night 2025 event. This single-page web app showcases the event schedule, live performances, dance performances, and a mouth-watering menu — all wrapped in a cosmic design that'll make you feel like you're floating through the stars.

## What's This About?

Think of this as your digital invitation to one of the most vibrant celebrations of the year. We've built a smooth, scroll-driven experience that takes you through everything you need to know about the event. From the warm welcome with a traditional namaste to the detailed performance schedule and a menu that'll make your taste buds dance, it's all here.

## Quick Start

First things first, get the project running:

```bash
npm install
npm start
```

That's it! Open up [http://localhost:3000](http://localhost:3000) and you're good to go. The app will automatically reload when you make changes.

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized production build in the `build` folder, ready to ship.

## What You'll See

The website flows through several sections, each with its own personality:

- **Welcome Section**: A warm greeting with traditional elements that sets the tone
- **Dashain & Tihar Info**: Learn about the cultural significance of these festivals
- **Event Schedule**: Clean, minimalist album-style displays for live performances and dance shows
- **Food & Drinks**: A beautiful slideshow of dishes with detailed descriptions that'll make you hungry
- **Footer**: Social links and a feedback form, plus a credits section

## The Tech Stuff

Built with React and powered by Framer Motion for those smooth animations. Tailwind CSS handles the styling, keeping everything responsive and looking great on any device. The code is organized into modular components and styles, making it easy to customize and maintain.

## Screenshots

Here's what the website looks like in action:

![Welcome Section](public/screenshots/Screen%20Shot%202025-11-05%20at%205.30.17%20PM.png)

![Dashain & Tihar Section](public/screenshots/Screen%20Shot%202025-11-05%20at%205.30.33%20PM.png)

![Schedule Section](public/screenshots/Screen%20Shot%202025-11-05%20at%205.30.43%20PM.png)

![Menu Section](public/screenshots/Screen%20Shot%202025-11-05%20at%205.30.55%20PM.png)

![Footer Section](public/screenshots/Screen%20Shot%202025-11-05%20at%205.31.03%20PM.png)

## Customizing Things

Want to update the schedule? Head to `src/data/schedule.js` and tweak the performance listings. Need to change the menu? `src/data/menu.js` is your friend. Social links live in `src/components/FooterSection.jsx`. Everything is pretty straightforward once you poke around.

## Project Structure

```
welcome/
├── public/          # Static assets and images
├── src/
│   ├── components/  # React components
│   ├── data/        # Menu and schedule data
│   ├── styles/      # Modular CSS files
│   └── App.jsx      # Main app component
└── package.json
```

## Deployment

Once you're happy with everything, push it to GitHub and deploy. Vercel and Netlify both work great with React apps. The build process is straightforward, and you'll have a live site in minutes.

For events, consider generating a QR code from your deployed URL so people can scan and access the site easily on their phones.

## Accessibility

We've made sure the site works well for everyone. It respects reduced motion preferences, uses semantic HTML, and maintains good color contrast. Keyboard navigation works smoothly, and screen readers can navigate the content easily.

---

Built with love for the Dashain and Tihar Night 2025 celebration. Enjoy the event!
