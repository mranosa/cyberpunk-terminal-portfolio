# Ken Ranosa - Cyberpunk Portfolio

A futuristic, terminal-based portfolio showcasing software engineering skills with a cyberpunk aesthetic.

## 🚀 Features

- **Interactive Terminal Interface** - Navigate the entire portfolio through command-line
- **Cyberpunk Design** - Neon colors, glitch effects, and matrix rain animation
- **Responsive Design** - Works on desktop, tablet, and mobile devices
- **Performance Optimized** - Built with Next.js 15 and TypeScript
- **SEO Ready** - Complete metadata and sitemap configuration

## 🛠 Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Deployment Ready:** Vercel/Netlify compatible

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and cyberpunk theme
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main page with splash screen
│   └── sitemap.ts         # SEO sitemap
├── components/            # Reusable components
│   ├── CyberpunkAvatar.tsx    # Animated avatar with effects
│   ├── ContactDrawer.tsx      # Sliding contact form
│   ├── ErrorBoundary.tsx      # Error handling
│   ├── MatrixRain.tsx         # Background animation
│   ├── SplashScreen.tsx       # Loading animation
│   └── Terminal.tsx           # Interactive terminal
├── public/                # Static assets
│   ├── images/           # Avatar images
│   ├── robots.txt        # SEO robots file
│   └── manifest.json     # PWA manifest
└── lib/                  # Utility functions
    └── utils.ts          # Helper functions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd claude-code-test-opus
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Available Commands

### Terminal Commands (in the portfolio)
- `help` - Show all available commands
- `about` - Personal information
- `skills` - Display skills matrix
- `projects` - Show project repositories  
- `cv` - Download resume
- `thoughts` - Random developer quotes
- `clear` - Clear terminal
- `matrix` - Easter egg

### Development Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎨 Customization

### Personal Information
Update these files with your information:
- `components/Terminal.tsx` - Skills, projects, about section
- `app/layout.tsx` - SEO metadata
- `public/` - Add your avatar images and favicons

### Styling
- `app/globals.css` - Cyberpunk theme and animations
- `tailwind.config.ts` - Color scheme and custom classes

### Content
- `components/Terminal.tsx` - Projects, skills, blog posts
- `.env.example` - Configuration variables

## 🚢 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder

### Custom Server
1. Build: `npm run build`
2. Start: `npm run start`

## 📱 Features

### Performance
- ✅ Static generation for fast loading
- ✅ Optimized images with Next.js Image
- ✅ Minimal JavaScript bundle
- ✅ Excellent Core Web Vitals

### SEO
- ✅ Complete metadata configuration
- ✅ Open Graph and Twitter cards
- ✅ Sitemap and robots.txt
- ✅ Structured data ready

### Accessibility
- ✅ Semantic HTML structure
- ✅ Keyboard navigation support
- ✅ Screen reader friendly
- ✅ High contrast design

## 🔧 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_NAME=Ken Ranosa - Software Engineer
NEXT_PUBLIC_CONTACT_EMAIL=hello@your-domain.com
NEXT_PUBLIC_GITHUB_URL=https://github.com/yourusername
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/yourprofile
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

- **Email:** [Your Email]
- **LinkedIn:** [Your LinkedIn]
- **GitHub:** [Your GitHub]

---

*Built with ❤️ and lots of cyberpunk aesthetics*