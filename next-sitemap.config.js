// module.exports = {
//   siteUrl: process.env.SITE_URL || "https://www.yourdomain.com",
//   generateRobotsTxt: true, // Generate `robots.txt`
//   sitemapSize: 7000,
//   additionalPaths: async (config) => {
//     const response = await fetch(
//       `http://13.201.236.191:3001/api/blogposts/getAllBlogPostUrls`
//     );
//     const posts = await response.json();

//     return posts.map((post) => ({
//       // loc: `/blog/${post}`, // Define the location of the dynamic content
//       loc: `/blog/${post}`, // Define the location of the dynamic content
//     }));
//   },
// };

module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.yourdomain.com",
  generateRobotsTxt: true, // Generate `robots.txt`
  sitemapSize: 7000,
  additionalPaths: async (config) => {
    // Fetch dynamic paths from your API
    const response = await fetch(
      `http://13.201.236.191:3001/api/blogposts/getAllBlogPostUrls`
    );
    const posts = await response.json();
    const dynamicPaths = posts.map((post) => ({
      loc: `/blog/${post}`, // Define the location of the dynamic content
    }));

    // Define your static paths here
    const staticPaths = [
      { loc: "/" },
      { loc: "/about" },
      { loc: "/service/tax-advisory" },
      { loc: "/service/company-service" },
      { loc: "/service/gst-service" },
      { loc: "/service/valuation-service" },
      { loc: "/blog" },
      { loc: "/contact" },
      { loc: "/terms-condition" },
      { loc: "/privacy-policy" },
      { loc: "/thank-you" },
    ];

    // Merge static and dynamic paths
    return [...staticPaths, ...dynamicPaths];
  },
};
