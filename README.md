# M&M Cooking - Food Ordering Web App

A modern, responsive Next.js web application for M&M Cooking restaurant. Features a beautiful design inspired by homemade Pakistani food, complete with menu browsing, item selection, and order summary functionality.

## Features

✨ **Responsive Design** - Mobile-first, works perfectly on all devices
🍽️ **Complete Menu** - Lunch, dinner, frozen items, cooked dishes, and Italian favourites
✅ **Order Management** - Add/remove items, calculate totals
📋 **Copy to WhatsApp** - Export orders in formatted text ready for messaging
🎨 **Beautiful UI** - Warm beige paper texture background with golden branding
⚡ **TypeScript** - Fully typed for reliability
🚀 **Vercel Ready** - Deploy with zero configuration

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── MenuItem.tsx
│   ├── MenuSection.tsx
│   └── OrderSummary.tsx
├── data/
│   └── menu.ts
├── types/
│   └── index.ts
└── utils/
    └── formatting.ts
```

## Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Open browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## Build & Production

Build the project for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Deployment

### Deploy to Vercel

1. Push the project to GitHub:
```bash
git push origin main
```

2. Go to [Vercel](https://vercel.com) and sign up
3. Click "New Project" and import your GitHub repository
4. Vercel will auto-detect it's a Next.js app and configure automatically
5. Click "Deploy"

The app will be live at your Vercel URL!

### Environment Variables

No environment variables are required for the basic deployment.

## Customization

### Edit Menu Items

Modify `src/data/menu.ts` to update prices, items, or categories.

### Change Styling

- **Colors**: Update Tailwind classes in components
- **Background**: Edit the color in `src/app/globals.css`
- **Font sizes**: Modify Tailwind classes (e.g., `text-5xl`, `text-2xl`)

### Update Business Info

Edit the header content in `src/components/Header.tsx`:
- Restaurant name
- Tagline
- Address
- Phone number

## Tech Stack

- **Framework**: Next.js 16+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks (useState, useMemo)
- **Deployment**: Vercel

## Performance

- Fast page loads with Next.js optimization
- CSS-in-JS with Tailwind for minimal bundle size
- Client-side state for instant interactions
- No external API calls required

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Created for M&M Cooking

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
