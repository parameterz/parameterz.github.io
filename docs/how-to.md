# How To Add Projects to Your Portfolio

**File:** `HOWTO.md`  
**Location:** Root directory

This guide walks you through adding new projects to your Parameter(z) portfolio website step-by-step.

## Table of Contents
1. [Quick Start Checklist](#quick-start-checklist)
2. [Step-by-Step Guide](#step-by-step-guide)
3. [Understanding Project Fields](#understanding-project-fields)
4. [Common Scenarios](#common-scenarios)
5. [Troubleshooting](#troubleshooting)

---

## Quick Start Checklist

Before you begin, gather this information about your project:
- [ ] Project name and brief description (1-2 sentences)
- [ ] Which category it belongs to
- [ ] Whether it should be featured
- [ ] Live project URL
- [ ] GitHub repository URL (if public)
- [ ] Screenshot image (optional but recommended)
- [ ] Tags/keywords
- [ ] Current status

---

## Step-by-Step Guide

### Step 1: Open the Projects Data File

Navigate to and open: `_data/projects.ts`

This TypeScript file contains all your project data in a structured format.

### Step 2: Locate the Projects Array

Find the `const projects: Project[] = [` line. This is where all projects are defined.

### Step 3: Add Your New Project

Add a new project object to the array. Here's the basic template:

```typescript
{
  title: "Your Project Name",
  description: "Brief description of what this project does",
  category: "Normal Values", // or one of the other categories
  featured: false, // true if you want it highlighted
  url: "https://your-project-url.com",
  publicRepo: "https://github.com/parameterz/your-repo", // Optional
  image: "your-screenshot.png", // Optional
  tags: ["tag1", "tag2", "tag3"],
  lastUpdated: "2024-11-01", // YYYY-MM-DD format
  status: "active" // active, beta, suspended, deprecated, or archived
},
```

**Important:** Don't forget the comma at the end!

### Step 4: Choose the Right Category

Your project must fit into one of these four categories:

```typescript
category: "Normal Values"           // Normal value calculators/references
category: "Echo/Clinical Tools"     // Clinical tools and calculators
category: "Teaching"                // Educational resources
category: "Miscellaneous"          // Everything else
```

### Step 5: Decide on Featured Status

Featured projects appear in a special section at the top of the portfolio:

```typescript
featured: true   // Shows in "Featured Projects" section with red accent
featured: false  // Shows only in category section
```

**Recommendation:** Feature 3-5 of your best/most important projects.

### Step 6: Handle Repository Visibility

**If your project has a PUBLIC GitHub repository:**
```typescript
publicRepo: "https://github.com/parameterz/your-repo"
```
Result: GitHub button will appear on the project card.

**If your project does NOT have a public repository:**
```typescript
// Simply omit the publicRepo field entirely
// Or you can explicitly set it undefined, but omitting is cleaner
```
Result: Only the "View Project" button will appear (full width).

### Step 7: Add a Screenshot (Optional but Recommended)

If you have a screenshot:

1. Save your image file to: `assets/images/`
2. Name it something descriptive: `my-project-screenshot.png`
3. Reference it in your project:
   ```typescript
   image: "my-project-screenshot.png"
   ```

**Image recommendations:**
- Size: Around 400x300px works well (any aspect ratio is fine)
- Format: PNG, JPG, or WebP
- Keep file size reasonable (< 500KB)

**If you don't have a screenshot:**
- Omit the `image` field
- An emoji placeholder will appear based on category:
  - 📊 Normal Values
  - 🩺 Echo/Clinical Tools  
  - 📚 Teaching
  - 🔧 Miscellaneous

### Step 8: Choose the Right Status

Status affects both the visual appearance and user understanding:

```typescript
status: "active"       // 🟢 Actively maintained (default look)
status: "beta"         // 🟡 Works but still in development (yellow border)
status: "suspended"    // 🟠 Works but no longer maintained (orange border)
status: "deprecated"   // 🔴 Works but deprecated (red border, slight fade)
status: "archived"     // ⚫ No longer functional
```

**When to use each status:**
- **active**: Your go-to for most projects that are working and maintained
- **beta**: New projects you're still developing/testing
- **suspended**: Projects that work fine but you're not actively updating
- **deprecated**: Old versions or projects replaced by newer ones
- **archived**: Projects that are completely offline or non-functional

### Step 9: Add Meaningful Tags

Tags help users understand what your project does:

```typescript
tags: ["echocardiography", "z-scores", "pediatric", "calculator"]
```

**Tag best practices:**
- Use lowercase
- Use hyphens for multi-word tags: `"left-ventricle"` not `"left ventricle"`
- Be specific: `"fetal-echo"` is better than just `"echo"`
- Keep to 3-6 tags per project
- Reuse tags across similar projects for consistency

### Step 10: Set the Last Updated Date

Use ISO date format (YYYY-MM-DD):

```typescript
lastUpdated: "2024-11-01"
```

This displays as "Updated November 2024" on the card.

### Step 11: Write a Good Description

Keep descriptions concise but informative:

✅ **Good:**
```typescript
description: "Calculates LV mass via the ASE formula then looks at various normal values for both pediatric and adults."
```

❌ **Too vague:**
```typescript
description: "A calculator for hearts."
```

❌ **Too long:**
```typescript
description: "This comprehensive tool provides detailed calculations for left ventricular mass using the American Society of Echocardiography formula with extensive validation and comparison across multiple normal value datasets from various published studies including pediatric and adult populations with percentile distributions..."
```

**Pro tip:** You can include HTML in descriptions:
```typescript
description: "Uses various publications to provide <strong>fetal cardiac z-scores</strong> based on EGA or other biometric measurements."
```

### Step 12: Build and Test

After adding your project:

```bash
# Build the data files
npm run build:data

# Start the development server
npm start
```

Visit `http://localhost:8080` and verify:
- [ ] Your project appears in the correct category
- [ ] Featured status is correct (if applicable)
- [ ] Screenshot displays properly (or placeholder shows)
- [ ] Both buttons work (or only View Project if no repo)
- [ ] Status badge displays correctly
- [ ] Tags appear properly

### Step 13: Commit and Deploy

```bash
git add _data/projects.ts
git add assets/images/your-screenshot.png  # if you added an image
git commit -m "Add [Your Project Name] to portfolio"
git push
```

GitHub Actions will automatically build and deploy your updated portfolio!

---

## Understanding Project Fields

### Required Fields

These fields **must** be present for every project:

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Project name as it appears on the card |
| `description` | string | Brief explanation (1-2 sentences) |
| `category` | string | One of the four categories |
| `featured` | boolean | `true` or `false` |
| `url` | string | Live project URL |
| `tags` | string[] | Array of keyword tags |
| `lastUpdated` | string | ISO date format (YYYY-MM-DD) |
| `status` | string | One of five status options |

### Optional Fields

| Field | Type | Description |
|-------|------|-------------|
| `publicRepo` | string | GitHub repository URL (omit for private projects) |
| `image` | string | Filename of screenshot in `assets/images/` |

---

## Common Scenarios

### Scenario 1: Adding a Featured Project with Screenshot

```typescript
{
  title: "Amazing Echo Tool",
  description: "Revolutionary approach to measuring cardiac function with real-time feedback.",
  category: "Echo/Clinical Tools",
  featured: true,  // ← Featured!
  url: "https://amazing-echo.parameterz.com",
  publicRepo: "https://github.com/parameterz/amazing-echo",
  image: "amazing-echo-screenshot.png",  // ← Has screenshot
  tags: ["echocardiography", "real-time", "ai-assisted"],
  lastUpdated: "2024-11-01",
  status: "active"
},
```

### Scenario 2: Private Project (No Public Repo)

```typescript
{
  title: "Internal Research Tool",
  description: "Proprietary calculator for advanced cardiac metrics.",
  category: "Echo/Clinical Tools",
  featured: false,
  url: "https://internal-tool.parameterz.com",
  // ← No publicRepo field at all
  image: "internal-tool.png",
  tags: ["research", "internal", "advanced"],
  lastUpdated: "2024-10-15",
  status: "active"
},
```

### Scenario 3: Beta Project Without Screenshot

```typescript
{
  title: "Experimental Valve Calculator",
  description: "New approach to valve area calculations (currently in beta testing).",
  category: "Echo/Clinical Tools",
  featured: false,
  url: "https://valve-beta.parameterz.com",
  publicRepo: "https://github.com/parameterz/valve-calculator",
  // ← No image field - will show 🩺 placeholder
  tags: ["valve", "experimental", "beta"],
  lastUpdated: "2024-11-01",
  status: "beta"  // ← Yellow border indicator
},
```

### Scenario 4: Deprecated/Legacy Project

```typescript
{
  title: "Legacy Z-Score Calculator v1",
  description: "Original z-score calculator. Now replaced by v2 with improved accuracy.",
  category: "Normal Values",
  featured: false,
  url: "https://zscore-v1.parameterz.com",
  publicRepo: "https://github.com/parameterz/zscore-legacy",
  tags: ["legacy", "deprecated", "z-scores"],
  lastUpdated: "2020-03-15",
  status: "deprecated"  // ← Red border, slight fade
},
```

### Scenario 5: Teaching Resource

```typescript
{
  title: "Understanding PISA Method",
  description: "Interactive tutorial explaining proximal isovelocity surface area with animations and quizzes.",
  category: "Teaching",
  featured: true,
  url: "https://learn-pisa.parameterz.com",
  publicRepo: "https://github.com/parameterz/pisa-tutorial",
  image: "pisa-tutorial.png",
  tags: ["education", "tutorial", "PISA", "mitral-regurgitation"],
  lastUpdated: "2024-09-20",
  status: "active"
},
```

---

## Troubleshooting

### Problem: TypeScript compilation errors

**Error message:** `Type 'X' is not assignable to type 'Y'`

**Solution:** Check that:
- `category` is one of the four exact strings
- `status` is one of the five exact values
- `featured` is `true` or `false` (not `"true"` or `"false"`)
- `tags` is an array: `["tag1", "tag2"]` not `"tag1, tag2"`
- `lastUpdated` is in quotes: `"2024-11-01"` not `2024-11-01`

### Problem: Project doesn't appear on site

**Checklist:**
1. Did you run `npm run build:data`?
2. Did you save `_data/projects.ts`?
3. Is there a comma after your project object?
4. Is your project inside the `projects` array?
5. Check the browser console for JavaScript errors

### Problem: Image doesn't show

**Checklist:**
1. Is the image file in `assets/images/`?
2. Is the filename spelled exactly right (including extension)?
3. Did you include quotes around the filename?
4. Is the image format supported (PNG, JPG, WebP)?

### Problem: GitHub button appears for private project

**Solution:** Remove or omit the `publicRepo` field entirely:

```typescript
// ❌ Don't do this for private projects
publicRepo: ""

// ✅ Do this instead - just omit it
// No publicRepo field at all
```

### Problem: Status badge not showing correctly

**Solution:** Check the exact spelling. Must be one of:
- `"active"` (not `"Active"` or `"ACTIVE"`)
- `"beta"` (not `"Beta"`)
- `"suspended"` (not `"Suspended"`)
- `"deprecated"` (not `"Deprecated"`)
- `"archived"` (not `"Archived"`)

### Problem: Featured project not appearing in Featured section

**Checklist:**
1. Is `featured: true` (not `"true"` or `1`)?
2. Is the value `true` not `false`?
3. Did you rebuild with `npm run build:data`?

### Problem: Build fails after adding project

**Common causes:**
1. Missing comma after previous project object
2. Missing comma after your project object  
3. Extra comma after the last project in array
4. Unclosed quotes or brackets
5. Wrong field names (check capitalization)

**Quick fix:** Copy a working project and modify it instead of typing from scratch.

---

## Quick Reference: Complete Project Template

```typescript
{
  // === REQUIRED FIELDS ===
  title: "Project Name Here",
  description: "One or two sentence description of what this project does.",
  category: "Normal Values", // or "Echo/Clinical Tools", "Teaching", "Miscellaneous"
  featured: false, // or true
  url: "https://your-project-url.com",
  tags: ["tag1", "tag2", "tag3"],
  lastUpdated: "2024-11-01", // YYYY-MM-DD
  status: "active", // or "beta", "suspended", "deprecated", "archived"
  
  // === OPTIONAL FIELDS ===
  publicRepo: "https://github.com/parameterz/repo-name", // Omit if private
  image: "screenshot.png", // Omit if no screenshot
},
```

---

## Need Help?

- Check existing projects in `_data/projects.ts` for examples
- Review the [README.md](README.md) for additional context
- Check [design documentation](docs/style.md) for visual guidelines
- Test locally before pushing: `npm start`

Happy building! 🎉