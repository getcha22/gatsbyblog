module.exports = {
    pathPrefix: `/gatsbydeploy`,
    siteMetadata: {
        title: 'HAO羊羽',
        nav: ['resume', 'archive'],
        links: ['http://resume.haoxiang.tech', '/archive'],
    },
    plugins: [
      `gatsby-plugin-react-helmet`,
      {
          resolve: `gatsby-transformer-remark`,
          options: {
            plugins: [
              {
                resolve: `gatsby-remark-prismjs`,
                options: {
                  // Class prefix for <pre> tags containing syntax highlighting;
                  // defaults to 'language-' (eg <pre class="language-js">).
                  // If your site loads Prism into the browser at runtime,
                  // (eg for use with libraries like react-live),
                  // you may use this to prevent Prism from re-processing syntax.
                  // This is an uncommon use-case though;
                  // If you're unsure, it's best to use the default value.
                  classPrefix: "language-",
                },
              },
            ],
          },
        },
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
  