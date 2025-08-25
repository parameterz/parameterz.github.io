// .eleventy.js
// 11ty configuration file for parameterz.github.io portfolio

module.exports = function(eleventyConfig) {
  
  // Copy static assets
  eleventyConfig.addPassthroughCopy("assets");
  
  // Add collection for featured projects
  eleventyConfig.addCollection("featuredProjects", function(collection) {
    const projects = collection.getAll()[0]?.data?.projects || [];
    return projects.filter(project => project.featured);
  });
  
  // Add collection for projects by category
  eleventyConfig.addCollection("projectsByCategory", function(collection) {
    const projects = collection.getAll()[0]?.data?.projects || [];
    const categories = {};
    
    projects.forEach(project => {
      if (!categories[project.category]) {
        categories[project.category] = [];
      }
      categories[project.category].push(project);
    });
    
    return categories;
  });
  
  // Date filter for project cards
  eleventyConfig.addFilter("dateFormat", function(date) {
    return new Date(date).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    });
  });
  
  // Status badge filter
  eleventyConfig.addFilter("statusBadge", function(status) {
    const badges = {
      'active': '🟢 Active',
      'beta': '🟡 Beta',
      'archived': '⚫ Archived'
    };
    return badges[status] || badges.active;
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