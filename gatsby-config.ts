// extended version of GatsbyConfig type:
import { GatsbyConfig } from "./src/types";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Michał Dziuba`,
    siteUrl: `https://michaldziuba.dev`,
    author: {
      firstName: 'Michał',
      secondName: 'Dziuba',
      skills: [
          'typescript', 'javascript', 'node', 'nest', 'react', 'preact', 'graphql',
          'docker', 'postgres', 'mongo', 'redis', 'nginx', 'kafka', 'git',
      ],
    }
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: false,
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  },"gatsby-plugin-sharp", "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          "gatsby-remark-prismjs",
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
              showCaptions: true
            },
          }
        ]
      }
    },
    {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/images`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/blog`,
        name: "blog"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/projects`,
        name: "projects"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/libs`,
        name: "libs"
      }
    }]
};

export default config;
