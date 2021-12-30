
module.exports = {

  siteMetadata: {
    siteUrl: "https://hieroja-minnakauppinen.fi",
    title: "Hieroja Minna Kauppinen",
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-helmet",
    "gatsby-theme-material-ui",
    "gatsby-plugin-image",
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
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      }
    }
  ]
};
