import type { GatsbyConfig } from "gatsby";
import dotenv from 'dotenv';

dotenv.config();

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Michał Dziuba`,
    siteUrl: process.env['GATSBY_SITE_URL'], // `https://michaldziuba.dev`,
    siteName: 'Michał Dziuba',
    author: {
      firstName: "Michał",
      secondName: "Dziuba",
      bio: "19 y.o. programming enjoyer and OSS enthusiast. I started with programming in 2018." // short description for blog
    },
    links: [
      { icon: "github", url: "https://github.com/mchldziuba" },
      { icon: "twitter", url: "https://twitter.com/michaldziuba03" },
      { icon: "linkedin", url: "https://www.linkedin.com/in/micha%C5%82-dziuba-74b29a244" },
      { icon: "dev", url: "https://dev.to/michaldziuba" }
    ]
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", 
  {
    resolve: "gatsby-plugin-mdx",
    options: {
      gatsbyRemarkPlugins: [
        "gatsby-remark-prismjs",
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 1200,
            showCaptions: true
          },
        }
      ]
    }
  },{
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
  }, {
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
  }]
};

export default config;
