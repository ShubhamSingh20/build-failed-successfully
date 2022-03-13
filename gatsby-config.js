require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `#define BUILD_FAILED_SUCCESSFULLY -1`,
    siteTitleAlt: `Build Failed Successfully`,
    siteHeadline: `Software, Programming & stuff`,
    siteUrl: `http://build-failed-successfully.com`,
    siteDescription: `Blog related to programming, hacking & software development`,
    siteLanguage: `en`,
    siteImage: `/banner.png`,
    author: `Shubham Singh`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `About`,
            slug: `/about`,
          },
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `Projects`,
            slug: `/tags/project`
          }
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/@this_shubham_/`,
          },
          {
            name: `Github`,
            url: `https://www.github.com/ShubhamSingh20/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Build Failed Successfully - Shubham Singh`,
        short_name: `Build Failed Successfully`,
        description: `Blog related to programming, hacking & software development`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#2d3748`,
        display: `standalone`,
        icons: [
          {
            src: `/android-icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
