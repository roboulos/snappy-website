# 🚀 Snappy MCP Website - CLAUDE.md

## 🎯 Project Overview

**What is Snappy?**  
Snappy is a world-class MCP (Model Context Protocol) integration consultancy website that surpasses even the official Pulse MCP site. This project demonstrates the pinnacle of modern web development, combining cutting-edge tech with exceptional design and user experience.

**Current State**: Production-ready, world-class website featuring:

- Stunning interactive animations and visualizations
- Enterprise-grade design system
- Comprehensive service offerings and case studies
- Perfect responsive design across all devices
- Performance-optimized with Next.js 15 and React 19

**Tech Stack**:

- **Framework**: Next.js 15.4.6 (App Router)
- **UI Library**: React 19.1.0
- **Styling**: Tailwind CSS 3.4.17 + shadcn/ui components
- **Animations**: Framer Motion 12.23.12
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Fonts**: Inter (sans) + Merriweather (serif)
- **Development**: TypeScript 5, ESLint 9, Turbopack

## 🧠 CRITICAL Development Methodology

### The Golden Rules That Made This Exceptional

1. **ALWAYS Use Subagents for Complex Tasks**

   ```bash
   # When building new features or analyzing code
   mcp__consult7__consultation --model "openai/gpt-5-chat" --query "Analyze and improve this component"
   ```

2. **ALWAYS Use GPT-5 for Code Analysis**
   - Model: `"openai/gpt-5-chat"` via consult7
   - Use for architecture decisions, optimization, and best practices
   - Never settle for "good enough" - iterate until exceptional

3. **ALWAYS Verify Visual Results with Playwright**

   ```bash
   # Take screenshots during development
   mcp__playwright__browser_navigate --url "http://localhost:3000"
   mcp__playwright__browser_take_screenshot --fullPage true
   ```

4. **Multiple Iteration Approach**
   - First pass: Basic structure and functionality
   - Second pass: Polish animations and interactions
   - Third pass: Performance optimization
   - Fourth pass: Accessibility and SEO
   - Continue until world-class

5. **Component-First Development**
   - Build atomic components first
   - Compose into sections
   - Animate thoughtfully
   - Test at every level

## 🎨 Design System

### Color Palette (CSS Variables)

```css
/* Premium Color System */
--primary: 197 37% 24%;        /* Deep Teal */
--secondary: 215 20% 25%;      /* Sophisticated Slate */
--accent: 42 85% 55%;          /* Gold Accent */
--brand-gold: 42 85% 55%;      /* Pure Gold */
--brand-copper: 28 67% 47%;    /* Copper Accent */

/* Backgrounds */
--background: 0 0% 98%;        /* Near White */
--foreground: 210 15% 13%;     /* Rich Black */
--muted: 210 5% 96%;           /* Light Gray */
--muted-foreground: 210 8% 40%; /* Medium Gray */
```

### Typography System

```css
/* Font Families */
--font-sans: 'Inter', system-ui, -apple-system, sans-serif;
--font-serif: 'Merriweather', serif;

/* Type Scale */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
--text-6xl: 3.75rem;   /* 60px */
```

### Spacing Scale

```css
--space-xs: 0.25rem;   /* 4px */
--space-sm: 0.5rem;    /* 8px */
--space-md: 1rem;      /* 16px */
--space-lg: 1.5rem;    /* 24px */
--space-xl: 2rem;      /* 32px */
--space-2xl: 3rem;     /* 48px */
--space-3xl: 4rem;     /* 64px */
--space-4xl: 6rem;     /* 96px */
```

### Animation Timings

```css
--anim-fast: 150ms;
--anim-medium: 300ms;
--anim-slow: 500ms;
--easing-smooth: cubic-bezier(0.4, 0, 0.2, 1);
--easing-bounce: cubic-bezier(0.68, -0.55, 0.27, 1.55);
```

### Custom Utility Classes

- `hover-glow`: Adds glowing shadow on hover
- `hover-elevate`: Lifts element with shadow
- `underline-gold`: Animated gold underline effect
- `gradient-primary`: Primary to secondary gradient
- `gradient-gold`: Gold to copper gradient
- `gradient-text`: Text gradient effect
- `card-premium`: Premium card styling
- `btn-gold`: Gold gradient button

## 📁 Project Structure

```text
snappy-site/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page composition
│   ├── globals.css          # Global styles & design tokens
│   │
│   ├── components/          # Page-level components
│   │   ├── Banner.tsx       # Top announcement banner
│   │   ├── Navbar.tsx       # Responsive navigation
│   │   ├── Hero.tsx         # Interactive hero with MCP visualization
│   │   ├── ClientLogos.tsx  # Trust indicators
│   │   ├── ServicesSection.tsx # Service cards grid
│   │   ├── AboutSection.tsx # Company overview
│   │   ├── Newsletter.tsx   # Email capture
│   │   └── Footer.tsx       # Site footer
│   │
│   ├── about/              # About page
│   │   └── page.tsx        # Team, values, timeline
│   │
│   ├── services/           # Services pages
│   │   ├── page.tsx        # Services listing
│   │   ├── ServicesClient.tsx # Client component
│   │   └── [slug]/         # Dynamic service pages
│   │
│   ├── case-studies/       # Success stories
│   │   └── page.tsx        # Case study showcase
│   │
│   ├── contact/            # Contact form
│   │   └── page.tsx        # Form with validation
│   │
│   └── blog/               # Blog (placeholder)
│       └── resources/      # Resources (placeholder)
│
├── components/             # shadcn/ui components
│   └── ui/                # Reusable UI primitives
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       ├── input.tsx
│       ├── form.tsx
│       └── ...
│
├── lib/                    # Utilities
│   └── utils.ts           # Helper functions
│
└── hooks/                  # Custom React hooks
    └── use-toast.ts       # Toast notifications
```

## 🔥 Key Features & Implementations

### 1. Interactive Hero Visualization

The Hero component features a stunning MCP network visualization:

- **Mouse-reactive orbs**: Using `useMotionValue`, `useSpring`, and `useTransform`
- **Orbiting nodes**: Infinite rotation with different icons
- **Animated connections**: SVG lines with pathLength animation
- **Floating gradient orbs**: Background depth effect
- **Animated grid**: Subtle background pattern

### 2. Animation Patterns

```tsx
// Standard reveal animation
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>

// Staggered children
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

// Hover interactions
whileHover={{ scale: 1.02, y: -4 }}
transition={{ type: "spring", stiffness: 300 }}
```

### 3. Component Patterns

```tsx
// Data-driven components
const services = [
  { icon: Code2, title: "...", description: "..." },
  // ...
]

services.map((service, index) => (
  <motion.div
    key={service.title}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
  >
    <ServiceCard {...service} />
  </motion.div>
))
```

### 4. Form Handling

```tsx
// React Hook Form + Zod validation
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company is required"),
  // ...
})

const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: { name: "", email: "", ... }
})
```

## 🛠 Development Workflow

### Starting Development

```bash
# Install dependencies
npm install

# Start development server with Turbopack
npm run dev

# Open browser
open http://localhost:3000
```

### Making Changes Effectively

1. **Plan with Subagents**

   ```bash
   # Analyze existing patterns
   mcp__consult7__consultation \
     --path ./app/components \
     --pattern "*.tsx" \
     --query "What patterns are used here?" \
     --model "openai/gpt-5-chat"
   ```

2. **Implement Following Patterns**
   - Match existing animation timings
   - Use consistent spacing scale
   - Follow data-driven component pattern
   - Maintain semantic color usage

3. **Test Visually**

   ```bash
   # Screenshot current state
   mcp__playwright__browser_navigate --url "http://localhost:3000"
   mcp__playwright__browser_take_screenshot --fullPage true
   
   # Compare after changes
   mcp__playwright__browser_navigate --url "http://localhost:3000"
   mcp__playwright__browser_take_screenshot --filename "after-changes.png"
   ```

4. **Optimize Performance**
   - Check bundle size: `npm run build`
   - Verify animations are smooth
   - Ensure images are optimized
   - Test on mobile devices

### Deployment Process

```bash
# Build for production
npm run build

# Test production build
npm run start

# Deploy to Vercel (automatic with git push)
git add .
git commit -m "feat: description"
git push origin main
```

## ✨ Success Patterns

### What Made This Project Exceptional

1. **Attention to Detail**
   - Every animation has purpose
   - Consistent spacing throughout
   - Thoughtful color usage
   - Micro-interactions enhance UX

2. **Performance First**
   - Animations use GPU-accelerated properties
   - Images lazy-loaded
   - Code-split by route
   - Minimal JavaScript bundle

3. **Scalable Architecture**
   - Components are truly reusable
   - Data separated from presentation
   - Clear file organization
   - TypeScript for type safety

4. **Premium Feel**
   - Custom utility classes for brand consistency
   - Gradient accents used sparingly
   - High-quality typography
   - Professional color palette

### Specific Techniques

1. **Framer Motion Best Practices**

   ```tsx
   // Always use viewport once
   viewport={{ once: true }}
   
   // Prefer transform over position
   animate={{ x: 100 }} // Good
   animate={{ left: 100 }} // Avoid
   
   // Use motion values for performance
   const x = useMotionValue(0)
   const opacity = useTransform(x, [0, 100], [1, 0])
   ```

2. **Component Composition**

   ```tsx
   // Compose, don't inherit
   <Card className="hover-elevate">
     <CardHeader>
       <Badge>New</Badge>
       <CardTitle>Title</CardTitle>
     </CardHeader>
   </Card>
   ```

3. **Responsive Design**

   ```tsx
   // Mobile-first approach
   className="text-4xl md:text-5xl lg:text-6xl"
   className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
   ```

## 🚀 Next Steps

### Immediate Enhancements

1. **Xano Integration**
   - Set up Xano backend for dynamic content
   - Create API endpoints for form submissions
   - Add CMS capabilities for case studies
   - Implement newsletter subscription

2. **Custom Domain Setup**
   - Configure DNS for snappy.consulting
   - Set up SSL certificates
   - Configure email forwarding

3. **Performance Optimizations**
   - Add image optimization with next/image
   - Implement ISR for case studies
   - Add sitemap generation
   - Set up monitoring

### Future Enhancements

1. **Advanced Features**
   - Blog with MDX support
   - Interactive MCP playground
   - Client portal with authentication
   - Real-time chat support

2. **Enhanced Animations**
   - Page transitions
   - Scroll-triggered animations
   - 3D visualizations with Three.js
   - Interactive demos

3. **Content Expansion**
   - More case studies
   - Technical documentation
   - Video testimonials
   - Webinar integration

## 🎯 Key Takeaways

**Remember**: This project achieved excellence through:

1. Using subagents (GPT-5) for every decision
2. Never settling for "good enough"
3. Testing visually with Playwright
4. Following established patterns religiously
5. Focusing on user experience above all

**The Secret**: Multiple iterations + AI assistance + attention to detail = World-class results

---

> "The difference between good and great is the last 10% of effort" - This project embodies that philosophy.
