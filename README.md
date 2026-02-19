# New Life School Website

A production-quality, responsive school website built with **Next.js 14** (App Router), **TypeScript**, and **Tailwind CSS**.

## 🎯 Features

- ✅ **Responsive Design**: Mobile-first, works perfectly on all devices
- ✅ **9 Complete Pages**: Home, About, Academics, Admissions, Gallery, News (list & detail), Contact, Privacy
- ✅ **Modern UI Components**: Header with mobile menu, Footer, Cards, Buttons, Accordion, Modal
- ✅ **SEO Optimized**: Meta tags, Open Graph support, clean structure
- ✅ **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- ✅ **Performance**: Optimized images with Next.js Image component
- ✅ **Mock Data**: Pre-built news data system that's easy to extend
- ✅ **Contact Form**: Client-side validation, success message simulation
- ✅ **Gallery with Lightbox**: Image filtering and modal preview
- ✅ **News System**: Search, category filtering, detailed article pages
- ✅ **No Backend Required**: Fully static/semi-static site

## 📁 Project Structure

```
sch-web/
├── app/
│   ├── layout.tsx              # Root layout with Header & Footer
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles & Tailwind imports
│   ├── about/page.tsx          # About page
│   ├── academics/page.tsx      # Academics page
│   ├── admissions/page.tsx     # Admissions page with FAQ
│   ├── gallery/page.tsx        # Gallery with lightbox
│   ├── news/page.tsx           # News listing page
│   ├── news/[slug]/page.tsx    # News detail page
│   ├── contact/page.tsx        # Contact form page
│   └── privacy/page.tsx        # Privacy policy page
├── components/
│   ├── Header.tsx              # Navigation with mobile menu
│   ├── Footer.tsx              # Footer with links & social
│   ├── Button.tsx              # Button variants (primary, secondary, outline)
│   ├── Card.tsx                # Reusable card component
│   ├── Container.tsx           # Max-width container wrapper
│   ├── SectionHeading.tsx      # Section title component
│   ├── Breadcrumbs.tsx         # Breadcrumb navigation
│   ├── Accordion.tsx           # Collapsible accordion
│   ├── Modal.tsx               # Accessible modal/lightbox
│   └── NewsCard.tsx            # News card component
├── lib/
│   └── news.ts                 # Mock news data & utilities
├── public/
│   └── placeholder-*.jpg       # Placeholder images (10 total)
├── package.json                # Dependencies & scripts
├── tsconfig.json               # TypeScript config
├── next.config.ts              # Next.js config
├── tailwind.config.ts          # Tailwind CSS config
├── postcss.config.mjs          # PostCSS config
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm installed on your system
- Windows PowerShell or Command Prompt

### Installation

1. **Navigate to the project directory:**
   ```powershell
   cd c:\Users\PRAISE\Documents\sch-web
   ```

2. **Install dependencies:**
   ```powershell
   npm install
   ```

3. **Start the development server:**
   ```powershell
   npm run dev
   ```

4. **Open your browser:**
   Navigate to **http://localhost:3000** to see the site live.

## 🎨 Customization Guide

### Changing School Information

1. **Header/Footer** - Edit `components/Header.tsx` and `components/Footer.tsx`
2. **School Name & Colors** - Update Tailwind class names (change `blue-900` to your preferred color)
3. **Contact Info** - Update phone, email, address in `components/Footer.tsx` and `app/contact/page.tsx`
4. **Home Page Content** - Edit `app/page.tsx` to change hero text, features, stats

### Adding Your Logo

Replace the text logo in `components/Header.tsx`:
```tsx
// Current:
<Link href="/" className="text-2xl font-bold text-blue-900">
  New Life School
</Link>

// With your logo image:
<Link href="/">
  <Image src="/logo.png" alt="Logo" width={150} height={50} />
</Link>
```

### Replacing Placeholder Images

1. Add your actual images to the `public/` folder
2. Update image paths in pages from `/placeholder-X.jpg` to your image names

### Updating Colors

The site uses a blue color scheme. To change:
- Replace `blue-900` with your preferred Tailwind color (e.g., `purple-900`, `indigo-900`)
- Also update `green-600` for secondary actions in relevant components

### Managing News Content

Edit `lib/news.ts` to add/modify news items:

```typescript
export const newsItems: NewsItem[] = [
  {
    slug: 'unique-slug',
    title: 'Article Title',
    date: '2024-03-20',
    excerpt: 'Short preview text...',
    content: '<p>Full HTML content here...</p>',
    coverImage: '/your-image.jpg',
    category: 'announcement',
  },
  // Add more items...
];
```

The site automatically:
- Generates routes for each news item (`/news/unique-slug`)
- Shows previews on the News page with search functionality
- Calculates reading time based on word count
- Suggests related articles on detail pages

## 📄 Page Descriptions

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, curriculum highlights, features, stats, principal's message, gallery preview, latest news |
| About | `/about` | School story, mission/vision, core values, leadership team, facilities |
| Academics | `/academics` | Nursery, Primary, Secondary programs with curriculum highlights |
| Admissions | `/admissions` | Step-by-step admission process, requirements, FAQ accordion, download forms |
| Gallery | `/gallery` | Filterable image gallery with lightbox modal preview |
| News | `/news` | Searchable news listing with pagination |
| News Detail | `/news/[slug]` | Full article with reading time, related posts |
| Contact | `/contact` | Contact form with validation, office hours, map placeholder |
| Privacy | `/privacy` | Privacy policy template |

## 🔧 Building & Deploying

### Development Build
```powershell
npm run dev  # Runs on http://localhost:3000
```

### Production Build
```powershell
npm run build
npm start    # Runs production-optimized version
```

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Click "Deploy" - your site is live!

### Deploy to Netlify
1. Push code to GitHub
2. Connect repository on [netlify.com](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

### Deploy to GitHub Pages
```powershell
npm run build
# Export to static HTML then push to gh-pages branch
```

## 📧 Contact Form Setup

The contact form is currently client-side with a success message simulation. To make it functional:

### Option 1: Use Formspree (Free)
1. Visit [formspree.io](https://formspree.io)
2. Create account and get your form endpoint
3. Update `app/contact/page.tsx`:
   ```tsx
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Option 2: Use Netlify Forms (If hosting on Netlify)
1. Add `netlify` attribute to form: `<form netlify>`
2. Form submissions appear in Netlify dashboard

### Option 3: Use EmailJS (Client-side)
1. Install: `npm install emailjs-com`
2. Add JavaScript to handle form submission and send emails

## 🎨 Styling

The site uses **Tailwind CSS v4** for all styling. Key design tokens:

- **Primary Color**: Blue (`blue-900` / `#1e3a8a`)
- **Secondary Color**: Green (`green-600` / `#16a34a`)
- **Text**: Gray (`gray-900` / `gray-700`)
- **Background**: White with gray accents (`gray-50` / `gray-100`)
- **Spacing**: Tailwind default scale (px, 4, 6, 8, 12, 16, 20, 24...)

To change the color scheme globally, find and replace colors in the components.

## 🔒 Security Notes

- Form submissions show a success message but aren't actually sent
- No sensitive data is stored on the client
- All API calls should be made server-side (create API routes if needed)
- Validate all user inputs server-side before processing

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Component API Reference

### Button Component
```tsx
<Button variant="primary" | "secondary" | "outline">
  Click Me
</Button>
```

### Card Component
```tsx
<Card className="additional-classes">
  Your content here
</Card>
```

### Modal Component
```tsx
<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
  Modal content
</Modal>
```

### Accordion Component
```tsx
<Accordion items={[
  { title: 'Question', content: 'Answer' },
  // ...
]} />
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vercel Deploy Guide](https://vercel.com/docs)

## 📝 License

This project is created for educational use. Feel free to customize and use for your school.

## 🆘 Troubleshooting

**Port 3000 already in use?**
```powershell
npm run dev -- --port 3001
```

**Build errors after changes?**
```powershell
rm -r .next    # Delete build cache
npm run dev    # Rebuild
```

**Images not showing?**
- Check image paths in `public/` folder
- Ensure image filenames match exactly (case-sensitive)
- Use relative paths: `/image.jpg` not `./image.jpg`

## 🚀 Next Steps

1. Replace placeholder images with actual school photos
2. Add real news articles in `lib/news.ts`
3. Connect contact form to a backend service
4. Add FAQ content specific to your school
5. Deploy to Vercel or Netlify for live access
6. Set up Google Analytics (optional)
7. Get SSL certificate if self-hosting

---

**Built with ❤️ using Next.js, React, TypeScript, and Tailwind CSS**

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
