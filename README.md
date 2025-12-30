# Red Clay Tennis Club | The Red Clay Code

A premium, cinematic landing page for a high-end tennis club built on the identity of red clay courts. This site embodies elite, architectural, performance-driven design with a sports documentary / luxury sports brand aesthetic.

## Brand Identity

**"The Red Clay Code"** — Red clay is not a surface, it's a training philosophy.

The design reinforces:
- Endurance
- Movement intelligence
- Longer rallies
- Tactical tennis
- Reduced impact vs hard courts
- Elite European training heritage

## Visual Direction

### Color Palette
- Near-black / charcoal (#1a1a1a, #0f0f0f) for drama and contrast
- Deep terracotta / baked clay red (#8B4513, #A0522D, #7A3A1F) — NOT bright orange
- Warm off-white / sand (#F5F1E8, #FAF8F3) for readability
- Muted olive or forest green (#556B2F, #2F4F2F) as subtle secondary accent
- Optional subtle gold/bronze micro-accents (#CD7F32, #D4AF37) — VERY minimal

### Texture & Material
- Clay dust grain overlays (5–12% opacity)
- Earthy textures used as section dividers
- Rough edges, angled cuts, layered panels
- Nothing flat or overly clean — it must feel physical

### Typography
- Headings: Bold, modern grotesk (Inter, wide, confident)
- Body: Clean sans-serif (Inter)
- Occasional small uppercase "club stamp" labels (FOUNDING MEMBERS, PERFORMANCE, RECOVERY)

## Tech Stack

- **React 18** with Vite
- **Tailwind CSS** for styling
- **Framer Motion** for subtle animations
- **Mobile-first, fully responsive**
- **Performance-optimized**

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
project/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx          # Sticky nav with logo, links, CTAs
│   │   ├── Hero.jsx                # Cinematic hero with video background
│   │   ├── CredibilityStrip.jsx    # Trust indicators
│   │   ├── RedClayCode.jsx         # Signature philosophy section
│   │   ├── Facilities.jsx          # Bento grid facilities overview
│   │   ├── CourtsSection.jsx       # Surface philosophy cards
│   │   ├── Coaching.jsx            # Coaching & programmes
│   │   ├── TrainRecover.jsx        # Performance ecosystem
│   │   ├── Membership.jsx          # Pricing cards
│   │   ├── Booking.jsx             # Conversion section
│   │   ├── Gallery.jsx             # Curated image gallery
│   │   ├── Location.jsx            # Map & access info
│   │   ├── FAQ.jsx                 # Accordion FAQ
│   │   └── FinalCTA.jsx            # Final call-to-action
│   ├── App.jsx                     # Main app component
│   ├── main.jsx                    # React entry point
│   └── index.css                   # Global styles & utilities
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Page Sections (In Order)

1. **Sticky Navigation** - Logo, anchor links, CTAs
2. **Hero Section** - Full-viewport cinematic with video background
3. **Credibility Strip** - Horizontal trust indicators
4. **The Red Clay Code** - Signature philosophy section
5. **Facilities Overview** - Bento grid layout
6. **Courts Section** - Surface philosophy (Clay & Grass)
7. **Coaching & Programmes** - Structured training offerings
8. **Train + Recover System** - Performance ecosystem loop
9. **Membership Plans** - Pricing cards with Founding Member highlight
10. **Booking & Conversion** - Tour booking, assessment, WhatsApp
11. **Gallery** - Curated moments (clay, courts, recovery, coaching)
12. **Location & Access** - Map, parking, hours, landmarks
13. **FAQ Section** - Accordion with common questions
14. **Final CTA** - Big, emotional closing

## Customization

### Update Content

- Edit component files in `src/components/` to update copy
- Replace placeholder images with actual club photography
- Update contact information and WhatsApp links
- Modify membership pricing and features

### Add Video Background

Replace the placeholder in `Hero.jsx` with an actual video element:

```jsx
<video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/path-to-video.mp4" type="video/mp4" />
</video>
```

### Google Maps Integration

In `Location.jsx`, replace the placeholder with:

```jsx
<iframe
  src="YOUR_GOOGLE_MAPS_EMBED_URL"
  width="100%"
  height="500"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
/>
```

### Color Adjustments

Edit `tailwind.config.js` to adjust the color palette:

```js
colors: {
  'charcoal': '#1a1a1a',
  'clay-red': '#A0522D',
  // ... adjust as needed
}
```

## Design Principles

- **Elite & Architectural** - Strong negative space, bold typography
- **Cinematic** - Large hero, video backgrounds, smooth scroll animations
- **Performance-Driven** - Focus on training, recovery, results
- **Physical Texture** - Clay grain overlays, angled cuts, layered panels
- **No Generic Templates** - Custom, purpose-built design

## Tone

- Confident
- Calm
- Premium
- No hype words
- No emojis
- No exclamation marks

This should feel like a private performance club, not a public gym.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Free to use and modify for your project.
