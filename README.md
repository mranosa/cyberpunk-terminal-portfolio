# Ken Ranosa - Cyberpunk Portfolio

A futuristic, terminal-based portfolio showcasing software engineering skills with a cyberpunk aesthetic.

## 🚀 Features

- **Interactive Terminal Interface** - Navigate the entire portfolio through command-line
- **Modular Architecture** - Clean, organized terminal commands and data structure
- **Cyberpunk Design** - Neon colors, glitch effects, and matrix rain animation
- **Professional Showcase** - Work experience, projects, skills, and recommendations
- **Responsive Design** - Works on desktop, tablet, and mobile devices
- **Performance Optimized** - Built with Next.js 15 and TypeScript
- **SEO Ready** - Complete metadata and sitemap configuration
- **Easy Customization** - Modular components for easy content updates

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
│   ├── terminal/          # Terminal module (modular architecture)
│   │   ├── commands/      # Terminal command components
│   │   │   ├── BlogCommand.tsx        # Blog list and read commands
│   │   │   ├── HelpCommand.tsx        # Help command display
│   │   │   ├── OtherCommands.tsx      # CV, thoughts, about, matrix
│   │   │   ├── ProjectsCommand.tsx    # Projects showcase
│   │   │   ├── RecommendationsCommand.tsx # Professional references
│   │   │   ├── SkillsCommand.tsx      # Skills matrix display
│   │   │   ├── WorkExperienceCommand.tsx # Career history
│   │   │   └── index.ts              # Command exports
│   │   └── data/          # Terminal data structures
│   │       ├── blogPosts.ts          # Blog post data
│   │       ├── projects.ts           # Project portfolio data
│   │       ├── recommendations.ts     # Professional recommendations
│   │       ├── skills.ts             # Technical skills data
│   │       ├── thoughts.ts           # Random thoughts/quotes
│   │       └── workExperience.ts     # Work history data
│   ├── CyberpunkAvatar.tsx    # Animated avatar with effects
│   ├── ContactDrawer.tsx      # Sliding contact form
│   ├── ErrorBoundary.tsx      # Error handling
│   ├── GlitchText.tsx         # Glitch text effect component
│   ├── LightBulbText.tsx      # Light bulb hover effect
│   ├── MatrixRain.tsx         # Background animation
│   ├── SplashScreen.tsx       # Loading animation
│   └── Terminal.tsx           # Main terminal interface
├── public/                # Static assets
│   ├── cv/               # Resume files
│   │   └── SOFTWARE_ENGINEER_CV.pdf
│   ├── images/           # Avatar images
│   │   └── avatar-original.jpeg
│   ├── robots.txt        # SEO robots file
│   └── manifest.json     # PWA manifest
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd cyberpunk-terminal-portfolio
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
- `ls` / `dir` - List all blog posts
- `read [number]` - Read a specific blog post
- `projects` - Show project repositories with tech stacks
- `work` - Display work experience and career history
- `recommendations` - View professional recommendations and references
- `skills [category]` - Display skills matrix (languages, frameworks, tools)
- `cv` / `resume` - Download curriculum vitae
- `thoughts` - Random developer quotes
- `about` - Personal information and bio
- `clear` - Clear terminal screen
- `matrix` - Enter the matrix (Easter egg)

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
- **Data Files** (in `components/terminal/data/`):
  - `blogPosts.ts` - Your blog posts and articles
  - `projects.ts` - Your project portfolio
  - `workExperience.ts` - Your work history and achievements
  - `skills.ts` - Your technical skills and proficiency levels
  - `recommendations.ts` - Professional references and testimonials
  - `thoughts.ts` - Personal quotes and thoughts
- **Metadata**: `app/layout.tsx` - SEO metadata and site info
- **Assets**: `public/` - Add your avatar images and favicons
- **Resume**: `public/cv/` - Add your CV/resume PDF

### Styling
- `app/globals.css` - Cyberpunk theme and animations
- `tailwind.config.ts` - Color scheme and custom classes

### Adding New Commands
- Create new command components in `components/terminal/commands/`
- Add data files in `components/terminal/data/`
- Export new commands in `components/terminal/commands/index.ts`
- Add command cases in `components/Terminal.tsx`
- Update help command in `components/terminal/commands/HelpCommand.tsx`

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