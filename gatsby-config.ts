import type { GatsbyConfig } from "gatsby";
import dotenv from 'dotenv';

dotenv.config();

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Michał Dziuba`,
    siteUrl: `https://michaldziuba.dev`,
    author: {
      firstName: "Michał",
      secondName: "Dziuba",
    },
    links: [
      { icon: "github", url: "https://github.com/mchldziuba" },
      { icon: "facebook", url: "https://www.facebook.com/michaldziuba03" },
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
      gatsbyRemarkPlugins: ["gatsby-remark-prismjs"]
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
      path: `${__dirname}/content`
    }
  },]
};

export default config;
