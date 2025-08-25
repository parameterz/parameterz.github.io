# Parameterz.github.io Portfolio Project Roadmap

## Project Overview
Create a portfolio website to showcase medical/echocardiography projects and tools, replacing the need to navigate through GitHub to find projects. The site will serve as both a discovery hub for users exploring individual tools and a convenient project index for the maintainer.

## Key Requirements

### User Experience Goals
- **Primary User Journey**: User discovers individual project → recognizes it's part of larger collection → visits root domain → explores other projects
- **Secondary Goal**: Convenient personal index to find projects without GitHub navigation
- **Future Extension**: Easy path to add blogging capability

### Content Organization
**Project Categories:**
- Normal Values
- Echo/Clinical Tools  
- Teaching
- Miscellaneous

**Project Information Required:**
- Title & description
- Category classification
- Featured status (for prominent display)
- Live project URL
- GitHub repository link
- Optional screenshot/image
- Tags (optional)
- Last updated date

### Visual Design Requirements
- Clean, professional aesthetic suitable for medical/clinical context
- Incorporate existing brand element: **(z)** - stylized "z" in parentheses
- Interesting banner/hero image
- Featured projects prominently displayed
- Project cards in categorized grid layout
- Graceful handling of projects without images (colored placeholders or elegant text-only cards)
- Responsive design

## Technical Architecture

### Technology Stack
- **Static Site Generator**: 11ty (Eleventy)
- **Deployment**: GitHub Pages
- **Content Management**: Data-driven approach using JSON files

### Data Structure
```
_data/
  projects.json    // All project metadata
  posts.json       // Future blog posts (extensible)

projects.json structure per item:
{
  "title": "Project Name",
  "description": "Brief description",
  "category": "Normal Values|Echo/Clinical Tools|Teaching|Miscellaneous",
  "featured": true/false,
  "url": "https://parameterz.github.io/project-name",
  "repo": "https://github.com/parameterz/project-name",
  "image": "optional-screenshot.png",
  "tags": ["tag1", "tag2"],
  "date": "2024-01-15",
  "status": "active|archived|beta"
}
```

### Site Structure
```
/
├── index.html                 // Main portfolio page
├── _includes/
│   ├── layouts/base.njk      // Base template
│   ├── components/
│   │   ├── project-card.njk  // Reusable project card
│   │   └── header.njk        // Site header with branding
├── _data/
│   └── projects.json         // Project metadata
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
└── .eleventy.js              // 11ty configuration
```

## Implementation Phases

### Phase 1: Foundation
- [ ] Set up 11ty project structure
- [ ] Create base layout and styling
- [ ] Implement project data structure
- [ ] Build project card component
- [ ] Create responsive grid layout

### Phase 2: Content & Features
- [ ] Add all existing projects to data file
- [ ] Implement category filtering/organization
- [ ] Create featured projects section
- [ ] Design and add banner/hero section
- [ ] Add parameterz (z) branding elements

### Phase 3: Enhancement
- [ ] Create project screenshots/images
- [ ] Implement search functionality (optional)
- [ ] Add "part of parameterz projects" badges for individual project sites
- [ ] Optimize for mobile and accessibility
- [ ] Set up automated deployment

### Phase 4: Future Extensibility
- [ ] Prepare blog template structure
- [ ] Create post layout templates
- [ ] Plan content management workflow for posts
- [ ] Consider RSS feed for future blog

## Content Audit Needed
- [ ] Inventory all existing projects across subdomains
- [ ] Categorize each project
- [ ] Identify 3-5 projects for "featured" status
- [ ] Write descriptions for each project
- [ ] Collect/create images for key projects

## Success Metrics
- Reduced time to find specific projects personally
- Increased cross-project discovery for users
- Clean, professional representation of work
- Easy maintenance workflow for adding new projects
- Solid foundation for future blog addition

## Technical Considerations
- Ensure GitHub Pages compatibility
- Plan for custom domain (parameterz.github.io) configuration
- Consider build/deployment automation
- Maintain fast loading times
- Ensure good SEO for medical/clinical searches

## Next Steps
1. Set up local development environment with 11ty
2. Create initial project inventory and data structure
3. Begin with minimal viable version focusing on core functionality
4. Iterate on design and user experience
5. Plan content creation (screenshots, descriptions)

---
*This roadmap serves as the foundation for developing a professional portfolio site that showcases medical and echocardiography projects while providing easy navigation and future extensibility for blogging.*