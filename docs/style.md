# Design System & Visual Guidelines

## CSS Framework Decision
**Selected: Pico CSS v2.0** 
- ✅ Actively maintained (updated March 2025)
- ✅ Semantic HTML-first approach (< 10 classes total)
- ✅ Zero dependencies, no build step required
- ✅ Professional, clean aesthetic perfect for medical/clinical context
- ✅ 11.3kb lightweight framework
- ✅ Built-in responsive design and dark/light mode support
- ✅ 130+ CSS variables for customization

## Color Palette Strategy
**Theme: "Clinical Grayscale with Cardiac Accents"**

Inspired by cardiac ultrasound imaging and professional medical interfaces:

### Primary Palette
- **Charcoal Grey** (#333333) - Main text (avoids harsh pure black)
- **Medium Grey** (#666666) - Secondary text
- **Light Grey** (#F5F5F5) - Card/section backgrounds  
- **Off-White** (#FAFAFA) - Main background (avoids eye strain of pure white)

### Accent Colors
- **Cardiac Red** (#C53030) - CTAs, featured projects, important actions
- **Hover Red** (#B02A2A) - Interactive states
- **Border Grey** (#E2E8F0) - Subtle separations

### Rationale
- Connects to ultrasound "shades of grey" professional context
- Off-black on off-white reduces eye strain for extended viewing
- Cardiac red provides medical relevance and clear visual hierarchy
- Professional credibility for medical audience

## Typography Guidelines
**Philosophy: "Good typography is invisible"**

- **Font Stack**: Pico's default system fonts (Inter, SF Pro Display, etc.)
- **Hierarchy**: Clear H1/H2/body differentiation without decoration
- **Approach**: Simple, readable, professional
- **Emphasis**: Strategic use of weight, not color or fancy fonts

## Implementation Notes
- Customize Pico via CSS custom properties
- Maintain semantic HTML structure
- No build step complexity
- Easy maintenance and updates
- Graceful handling of projects without images using colored placeholders

## Design Validation
- Professional medical aesthetic ✓
- Separation of concerns maintained ✓ 
- Lightweight and performant ✓
- Accessible and readable ✓
- Brand-appropriate for cardiac ultrasound field ✓