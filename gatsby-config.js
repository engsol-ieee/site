module.exports = {
  pathPrefix: "/site",
  siteMetadata: {
    title: `Engenharia Solidária`,
    description: `Gatsby starter styled with Tailwind`,
    author: `@taylorbryant`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#9561e2`,
        display: `minimal-ui`,
        icon: `src/images/logo-icon.png`
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css"]
      }
    }
  ]
};