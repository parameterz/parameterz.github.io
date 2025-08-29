// _data/projects.ts - TypeScript data file with improved interface

// Improved interface - much cleaner logic
interface Project {
  title: string;
  description: string;
  category:
    | "Normal Values"
    | "Echo/Clinical Tools"
    | "Teaching"
    | "Miscellaneous";
  featured: boolean;
  url: string;
  publicRepo?: string; // Optional - if present, shows GitHub button
  image?: string;
  tags: string[];
  lastUpdated: string; // Much clearer than "date"
  status: "active" | "beta" | "suspended" | "deprecated" | "archived";
}

// Projects with the improved structure
const projects: Project[] = [
  {
    title: "Cardiac Scaling",
    description:
      "Explores various methods of scaling cardiac dimensions to body size, including allometric scaling. This is the companion site to a <a href='https://onlinejase.com/article/S0894-7317(25)00457-2/fulltext'> letter to the editors in JASE (2025)</a>.",
    category: "Teaching",
    featured: true,
    url: "https://parameterz.github.io/cardiac-scaling/",
    publicRepo: "https://github.com/parameterz/cardiac-scaling", // Has repo = show button
    image: "scaling.png",
    tags: [
      "echocardiography",
      "scaling",
      "indexed-values",
      "normal-values",
      "theory",
      "Guidelines",
    ],
    lastUpdated: "2025-08-06",
    status: "active",
  },
  {
    title: "Fetal Echo Z-scores",
    description:
      "Uses various publications to provide fetal cardiac z-scores based on EGA or other biometric measurements.",
    category: "Normal Values",
    featured: false,
    url: "http://fetal.parameterz.com",
    // No publicRepo = no GitHub button (much simpler!)
    tags: ["echocardiography", "fetal", "z-scores", "normal-values"],
    lastUpdated: "2019-02-19",
    status: "suspended",
  },
  {
    title: "PISA Thing",
    description:
      "Interactive calculator for proximal isovelocity surface area (PISA) and regurgitant flow. Also has a related calculator for <a href='https://parameterz.github.io/PISA-Thing/rf-thing.html'>MR RF via the volumetric method.</a>",
    category: "Teaching",
    featured: false,
    url: "https://parameterz.github.io/PISA-Thing/",
    publicRepo: "https://github.com/parameterz/PISA-Thing",
    image: "pisa-thing.png",
    tags: ["education", "physics", "tutorial", "mitral-regurgitation", "PISA"],
    lastUpdated: "2023-09-05",
    status: "active",
  },
  {
    title: "LV Mass Calculator",
    description:
      "Calculates LV mass via the ASE formula then looks at various normal values for both pediatric and adults.",
    category: "Normal Values",
    featured: false,
    url: "http://lvmass.parameterz.com",
    // No repo to share
    tags: ["echocardiography", "LV-Mass", "normal-values"],
    lastUpdated: "2023-09-15",
    status: "suspended",
  },
  {
    title: "Dilated Aorta Finder (Dilated AF)",
    description:
      "Uses both the 2015 ASE GLs and the newer NORRE height-indexed data to identify dilated aortic dimensions in adults.",
    category: "Normal Values",
    featured: true,
    url: "https://parameterz.github.io/dilated-af/",
    publicRepo: "https://github.com/parameterz/dilated-af",
    image: "dilated-af.png",
    tags: ["echocardiography", "aorta", "normal-values"],
    lastUpdated: "2024-02-28",
    status: "active",
  },
  {
    title: "Prosthetic Heart Valves Normal Values",
    description:
      "Based on the 2024 JASE Guidelines; values for surgical and trans-catheter valves in all positions.",
    category: "Normal Values",
    featured: true,
    url: "https://phv.parameterz.com/",
    publicRepo: "https://github.com/parameterz/avr-mvr",
    image: "phv.png",
    tags: [
      "echocardiography",
      "prosthetic",
      "valves",
      "aortic",
      "mitral",
      "normal-values",
    ],
    lastUpdated: "2024-11-17",
    status: "active",
  },
  {
    title: "Borderline LV Calculations",
    description:
      "Calculates various scores (Rhodes, CHSS1 & 2, Discriminant) for the prediction of biventricular vs. uni-ventricular repair in the borderline LV.",
    image: "borderline.png",
    category: "Echo/Clinical Tools",
    featured: false,
    url: "http://dev.parameterz.com/borderline",
    tags: ["echocardiography", "borderline-LV", "congenital", "clinical-tools"],
    lastUpdated: "2024-11-17",
    status: "suspended",
  },
  {
    title: "Diastology",
    description:
      "Algorithm navigator for the assessment of diastolic function according to numerous guidelines.",
    category: "Echo/Clinical Tools",
    featured: true,
    url: "https://parameterz.github.io/diastology/",
    publicRepo: "https://github.com/parameterz/diastology",
    tags: ["echocardiography", "diastology", "clinical-tools", "guidelines"],
    lastUpdated: "2025-03-05",
    status: "active",
  }


];

// Export using CommonJS format (what 11ty expects)
module.exports = {
  projects: projects,
};
