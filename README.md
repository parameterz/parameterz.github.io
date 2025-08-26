# Parameter(z) Portfolio Website

Professional portfolio showcasing medical and echocardiography projects, tools, and educational resources.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```
   Site will be available at `http://localhost:8080`

3. **Build for production:**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
parameterz.github.io/
├── _data/
│   └── projects.json          # Your project data
├── _includes/
│   ├── layouts/
│   │   └── base.njk          # Base HTML template
│   └── components/
│       └── project-card.njk   # Reusable project card
├── assets/
│   └── images/               # Project screenshots
├── _site/                    # Generated site (ignored)
├── .eleventy.js              # 11ty configuration
├── index.njk                 # Main portfolio page
└── package.json
```

## 🔧 Customizing Your Portfolio

### Adding Your Projects

Edit `_data/projects.json` with your actual projects:

```json
{
  "projects": [
    {
      "title": "Your Project Name",
      "description": "Brief description of what this project does",
      "category": "Normal Values", // or "Echo/Clinical Tools", "Teaching", "Miscellaneous"
      "featured": true, // true for prominent display
      "url": "https://your-live-project-url.com",
      "repo": "https://github.com/your-username/repo-name", // can be empty string if no public repo
      "hasPublicRepo": true, // false to hide GitHub button
      "image": "screenshot.png", // optional, place in assets/images/
      "tags": ["tag1", "tag2"],
      "date": "2024-01-15", // last updated
      "status": "active" // "active", "beta", "suspended", "deprecated", or "archived"
    }
  ]
}
```

### Project Status Options

- **`active`** 🟢 - Actively maintained and updated
- **`beta`** 🟡 - Functional but still in development (yellow left border)
- **`suspended`** 🟠 - Functional but no longer maintained (orange left border)  
- **`deprecated`** 🔴 - Still works but deprecated, use alternatives (red left border, slight opacity)
- **`archived`** ⚫ - No longer functional or available

### Private Repository Handling

For projects without public repositories:
- Set `"hasPublicRepo": false`
- Leave `"repo"` as empty string `""`
- GitHub button will be automatically hidden
- "View Project" button will expand to full width

### Adding Project Images

1. Place screenshots in `assets/images/`
2. Reference them in your project data: `"image": "your-screenshot.png"`
3. Projects without images will show category-based emoji placeholders

### Customizing Design

The site uses **Pico CSS v2.0** with a custom clinical theme. Key colors:

- **Background**: Off-white (#FAFAFA) - reduces eye strain
- **Text**: Charcoal grey (#333333) - professional readability  
- **Accent**: Cardiac red (#C53030) - medical relevance
- **Cards**: Light grey (#F5F5F5) - subtle contrast

To customize colors, edit the CSS variables in `_includes/layouts/base.njk`:

```css
:root {
    --pico-background-color: #FAFAFA;
    --pico-color: #333333;
    --brand-red: #C53030;
    /* ... more variables */
}
```

## 🎨 Design Features

- **Clinical Theme**: Professional grayscale with cardiac red accents
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Semantic HTML**: Clean, accessible markup using Pico CSS
- **Project Categories**: Organized sections for easy navigation
- **Featured Projects**: Highlight your most important work
- **Status Badges**: Visual indicators for project status
- **No Build Complexity**: Simple static site generation

## 🚀 Deployment

The site auto-deploys to GitHub Pages when you push to the `main` branch via GitHub Actions.

### First-time GitHub Pages Setup:

1. Push your code to the `main` branch
2. Go to your repo Settings > Pages
3. Set Source to "GitHub Actions"
4. The site will be available at `https://parameterz.github.io`

## 📋 Content Checklist

Before going live, update:

- [ ] Replace sample projects in `_data/projects.json` with your actual projects
- [ ] Set correct `hasPublicRepo` values for projects with/without public repos
- [ ] Choose appropriate status for each project (active/beta/suspended/deprecated/archived)
- [ ] Add project screenshots to `assets/images/`
- [ ] Update hero section text in `index.njk` if desired
- [ ] Verify all URLs and GitHub repo links work (where applicable)
- [ ] Test responsive design on mobile devices
- [ ] Check that featured projects showcase your best work

## 🛠 Development Commands

- `npm start` - Start development server with live reload
- `npm run build` - Build production site
- `npm run clean` - Remove generated files

## 💡 Tips

- **Project Images**: 400x300px works well, but any aspect ratio is fine
- **Descriptions**: Keep them concise but informative (1-2 sentences)
- **Categories**: Stick to the four defined categories for consistency
- **Featured Projects**: Choose 3-5 of your best projects to feature
- **Tags**: Use lowercase, hyphenated tags for consistency

## 🤝 Built With

- **11ty (Eleventy)** - Static site generator
- **Pico CSS v2.0** - Semantic CSS framework
- **GitHub Pages** - Free hosting
- **GitHub Actions** - Automated deployment

---

**Parameter(z)** - Professional tools for healthcare professionals