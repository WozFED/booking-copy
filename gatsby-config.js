require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Booking.com`,
    author: `Patryk Woźniak`,
    description: `Gatsby project`
  },

  plugins: [
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        duration: 2500,
      },
    },
    

    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en`, `pl`],
        defaultLanguage: `pl`,
        redirect: true,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "lbkyug7ubuiw",
        accessToken: "zdzqGlPONWEG2xtTIHwkZBIDsYQj4_eJkaX07LGk9Mg",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        footnotes: true,
        gfm: true,
        plugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: true,
      },
    },
    `gatsby-plugin-perf-budgets`,
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-transformer-json`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-sass`,
  ],
}
