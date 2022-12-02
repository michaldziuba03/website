import path from 'path';

import type { GatsbyNode } from "gatsby"
import readingTime from 'reading-time';

export const onCreateNode: GatsbyNode<any>['onCreateNode'] = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {

    createNodeField({
      node,
      name: 'readingTime',
      value: readingTime(node.body),
    });
  }
}

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
  
    const result = await graphql<any>(`
      query {
        allMdx (
          sort: { frontmatter: { date: DESC }},
          limit: 3000
        ) {
          nodes {
            id
            frontmatter {
              slug
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    `);
  
    if (result.errors) {
      reporter.panicOnBuild('Error loading MDX result', result.errors)
    }
  
    const posts = result.data.allMdx.nodes;
    const postsPerPage = 15;
    const numPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog/page/${i + 1}`,
        component: path.resolve("./src/templates/PostsList.tsx"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    });
  
    posts.forEach((node: any) => {
      createPage({
        path: `/blog/${node.frontmatter.slug}`,
        component: `${path.resolve(`./src/templates/BlogPost.tsx`)}?__contentFilePath=${node.internal.contentFilePath}`,
        context: { id: node.id },
      })
    })
  }
