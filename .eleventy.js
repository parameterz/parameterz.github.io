// .eleventy.js - Updated for new field names
// Eleventy configuration file for parameterz.github.io portfolio

module.exports = function(eleventyConfig) {
  
  // Copy static assets
  eleventyConfig.addPassthroughCopy("assets");
  
  // Watch TypeScript files and recompile data
  eleventyConfig.addWatchTarget("./_data/**/*.ts");
  
  // Date filter for project cards (works with lastUpdated field)
  eleventyConfig.addFilter("dateFormat", function(date) {
    return new Date(date).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    });
  });
  
  // Status badge filter with expanded options
  eleventyConfig.addFilter("statusBadge", function(status) {
    const badges = {
      'active': '🟢 Active',
      'beta': '🟡 Beta',
      'suspended': '🟠 Suspended',
      'deprecated': '🔴 Deprecated',
      'archived': '⚫ Archived'
    };
    return badges[status] || badges.active;
  });
  
  // Filter for featured projects
  eleventyConfig.addFilter("featured", function(projects) {
    return projects.filter(project => project.featured);
  });
  
  // Filter for projects by category
  eleventyConfig.addFilter("byCategory", function(projects, category) {
    return projects.filter(project => project.category === category);
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    templateFormats: ["njk", "html", "md"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};