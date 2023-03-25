import path from 'path';

import type { GatsbyNode } from "gatsby"
// @ts-ignore
import readingTime from "reading-time";

export const onCreateNode: GatsbyNode<any>['onCreateNode'] = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if (node.internal.type === 'Mdx') {
        const parent = getNode(node.parent);

        createNodeField({
            node,
            name: 'readingTime',
            value: readingTime(node.body).text,
        });

        createNodeField({
            node,
            name: 'collection',
            value: parent!.sourceInstanceName
        });
    }
}

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const result = await graphql<any>(`
      query {
        posts: allMdx (
          filter:{fields: { collection: { eq: "blog" } }}
          sort: { frontmatter: { date: DESC }},
          limit: 3000
        ) {
          nodes {
            id
            fields {
              readingTime
            }
            frontmatter {
              date(formatString: "DD MMM, YYYY")
              slug
            }
            body
            internal {
              contentFilePath
            }
          }
        }
        tags: allMdx {
          group(field: { frontmatter: { tags: SELECT }}) {
            fieldValue
          }
        }
      }
    `);

    if (result.errors) {
        reporter.panicOnBuild('Error loading MDX result', result.errors)
    }

    const posts = result.data.posts.nodes;
    const postsPerPage = 15;
    const numPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/blog` : `/blog/${i + 1}`,
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
            path: `/posts/${node.frontmatter.slug}`,
            component: `${path.resolve(`./src/templates/BlogPost.tsx`)}?__contentFilePath=${node.internal.contentFilePath}`,
            context: {
                readingTime: node.fields.readingTime,
                formattedDate: node.frontmatter.date,
            },
        })
    })

    const tags = result.data.tags.group.map((tag: any) => tag.fieldValue);

    for (const tag of tags) {
        const postsByTagResult = await graphql<any>(`
      query($tag: String) {
        allMdx(
          sort: {frontmatter: {date: DESC}}, 
          limit: 3000
          filter: { 
            frontmatter: { 
              tags: { eq: $tag}
            },
            fields: { 
              collection: { eq: "blog" } 
            }
          }
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
      `, { tag });

        const postsByTag = postsByTagResult.data.allMdx.nodes;
        Array.from({ length: Math.ceil(postsByTag.length / postsPerPage) }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/blog/tags/${tag}` : `/blog/tags/${tag}/${i + 1}`,
                component: path.resolve("./src/templates/PostsByTag.tsx"),
                context: {
                    limit: postsPerPage,
                    skip: i * postsPerPage,
                    numPages,
                    currentPage: i + 1,
                    tag
                },
            })
        });
    }

}
