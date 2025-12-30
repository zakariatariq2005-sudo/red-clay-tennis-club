# Quick Setup Guide

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   The app will be available at `http://localhost:5173`

## Next Steps

### 1. Add Video Background
Replace the placeholder image in `src/components/Hero.jsx` with an actual video element:

```jsx
<video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover opacity-30"
>
  <source src="/videos/clay-court-video.mp4" type="video/mp4" />
</video>
```

### 2. Update Contact Information
- Update WhatsApp links in `src/components/Booking.jsx`
- Add real address in `src/components/Location.jsx`
- Replace map placeholder with Google Maps embed

### 3. Replace Placeholder Images
All components use Unsplash placeholder images. Replace with:
- Actual club photography
- Clay court close-ups
- Facility images
- Coaching moments

### 4. Customize Content
- Edit membership pricing in `src/components/Membership.jsx`
- Update coaching programmes in `src/components/Coaching.jsx`
- Modify FAQ questions in `src/components/FAQ.jsx`

### 5. Production Build
```bash
npm run build
```

The built files will be in the `dist/` directory, ready to deploy.

## Design Customization

### Colors
Edit `tailwind.config.js` to adjust the color palette.

### Typography
Fonts are loaded from Google Fonts (Inter). To change, update:
- `index.html` - Google Fonts link
- `tailwind.config.js` - fontFamily settings

### Animations
Framer Motion animations can be adjusted in each component file. All animations are subtle and performance-optimized.

## Notes

- The old HTML/CSS/JS files have been renamed to `.old` extensions
- All components are modular and can be easily customized
- The design follows the exact specifications: elite, architectural, cinematic, performance-driven
- Mobile-first responsive design is built-in

