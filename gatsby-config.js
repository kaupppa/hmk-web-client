
module.exports = {

  siteMetadata: {
    siteUrl: "https://hieroja-minnakauppinen.fi",
    title: "Hieroja Minna Kauppinen",
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-theme-material-ui-top-layout",
    "gatsby-plugin-material-ui",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    }, {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Rekisteröity hieroja Minna Kauppinen',
        short_name: 'Hieroja Minna Kauppinen',
        start_url: '/',
        display: 'standalone',
        icon: 'src/images/favicon.png',
      },
    }, {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: false // (default: true) Enable/disable loading stylesheets via CDN
      }
    }
  ]
};
