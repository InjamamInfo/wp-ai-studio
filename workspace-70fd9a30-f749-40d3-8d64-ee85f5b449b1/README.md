# WordPress AI Theme Generator

A cutting-edge AI-powered WordPress theme generator built with Next.js 15, TypeScript, and Tailwind CSS. Create production-ready WordPress themes with intelligent workflows.

## 🚀 Features

- **AI-Powered Theme Generation**: Create complete WordPress themes with AI assistance
- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful UI
- **Production Ready**: Optimized for deployment on Netlify

## 📊 Project Stats

- **Total Files**: 20+ (optimized for deployment)
- **Project Size**: ~1MB
- **Build Time**: ~1 minute
- **Deployment**: Netlify ready

## 🛠️ Installation

### Local Development
```bash
# Clone the repository
git clone https://github.com/InjamamInfo/wp-ai-studio.git
cd wp-ai-studio

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Production Build
```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🚀 Deployment

### Netlify Deployment

#### Build Settings:
```
Branch to deploy: main

Base directory: (leave blank)

Build command: npm run build

Publish directory: out

Functions directory: (leave blank)
```

#### Environment Variables:
```bash
Name: NEXT_PUBLIC_APP_URL
Value: https://wpai.netlify.app

Name: NEXT_PUBLIC_APP_NAME
Value: WordPress AI Theme Generator
```

## 📁 Project Structure

```
wp-ai-studio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # Homepage
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   └── ui/                # UI components
│   ├── lib/                   # Utility libraries
│   └── middleware.ts          # Middleware
├── public/                    # Static assets
├── netlify.toml              # Netlify configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── next.config.ts            # Next.js configuration
└── package.json              # Dependencies and scripts
```

## 🎯 Usage

1. **Start the Application**: Navigate to the homepage
2. **View Features**: Explore the AI-powered theme generator interface
3. **Deploy**: Use the provided Netlify configuration for easy deployment

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for local development:

```bash
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME="WordPress AI Theme Generator"
```

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- **Next.js Team**: For the excellent React framework
- **Tailwind CSS**: For the utility-first CSS framework
- **Netlify**: For hosting and deployment platform

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**