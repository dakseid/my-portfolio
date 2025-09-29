# Motionfolio - Modern Interactive Portfolio

A stunning, modern portfolio website built with React, TypeScript, and Framer Motion. Features smooth animations, responsive design, and an engaging user experience.

## 🚀 Features

- **Modern Design**: Clean, minimalist interface with beautiful animations
- **Responsive**: Mobile-first design that works on all devices
- **Interactive**: Smooth animations and micro-interactions powered by Framer Motion
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Performance Optimized**: Lazy loading, code splitting, and optimized images
- **Accessible**: Built with accessibility best practices
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Forms**: React Hook Form + Yup validation
- **Icons**: Lucide React
- **Build Tool**: Vite

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── sections/        # Page sections (Hero, About, etc.)
│   └── ui/              # Reusable UI components
├── pages/               # Main pages (Home, Projects, About, Contact)
├── routes/              # Routing configuration
├── contexts/            # React contexts (Theme)
├── data/                # Portfolio data and types
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
└── styles/              # Global styles and Tailwind config
```

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#0ea5e9 to #0284c7)
- **Secondary**: Gray scale (#fafafa to #18181b)
- **Accent**: Purple gradient (#d946ef to #c026d3)

### Typography
- **Font Family**: Inter (primary), JetBrains Mono (code)
- **Weights**: 300, 400, 500, 600, 700, 800, 900

### Animations
- **Page Transitions**: Smooth fade and slide effects
- **Hover Effects**: Scale, rotate, and color transitions
- **Scroll Animations**: Fade-in and slide-up on scroll
- **Loading States**: Smooth loading animations

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd motionfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📱 Pages

### Home Page
- Hero section with animated text and CTA buttons
- About preview with stats and highlights
- Featured projects carousel
- Skills showcase
- Call-to-action section

### Projects Page
- Filterable project grid
- Project cards with hover effects
- Technology tags
- Live demo and source code links

### About Page
- Personal introduction
- Experience timeline
- Skills organized by category
- Personal interests and values

### Contact Page
- Interactive contact form with validation
- Contact information
- Social media links
- Availability status

## 🎯 Customization

### Updating Portfolio Data
Edit the data in `src/data/portfolio.ts`:
- Add/remove projects
- Update skills and experience
- Modify contact information

### Styling
- Colors: Update `tailwind.config.js`
- Global styles: Modify `src/index.css`
- Component styles: Use Tailwind classes

### Animations
- Page transitions: Modify `src/routes/AppRouter.tsx`
- Component animations: Update Framer Motion props
- Custom animations: Add to `tailwind.config.js`

## 📦 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 🔧 Configuration

### Environment Variables
Create a `.env` file for configuration:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Email Integration
The contact form is set up for EmailJS integration:
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Add your credentials to environment variables

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, feel free to reach out:
- Email: your.email@example.com
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

---

Built with ❤️ using React, TypeScript, and Framer Motion