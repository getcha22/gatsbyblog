module.exports = {
    pathPrefix: `/gatsbydeploy`,
    siteMetadata: {
        title: 'HAO羊羽',
        nav: ['resume', 'project', 'archive']
    },
    plugins: [
      `gatsby-transformer-remark`,
        {
          resolve: `gatsby-plugin-typography`,
          options: {
            pathToConfigModule: `src/utils/typography`,
          },
        },
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `src`,
            path: `${__dirname}/src/pages/posts`,
          }
        },
    ],
  };
  