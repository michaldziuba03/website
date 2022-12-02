import path from 'path';
const postTemplate = path.resolve(`./src/templates/BlogPost.tsx`)

import type { GatsbyNode } from "gatsby"

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
  
    const result = await graphql<any>(`
      query {
        allMdx {
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
  
    const posts = result.data.allMdx.nodes
  
    posts.forEach((node: any) => {
      createPage({
        path: `/blog/${node.frontmatter.slug}`,
        component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
        context: { id: node.id },
      })
    })
  }