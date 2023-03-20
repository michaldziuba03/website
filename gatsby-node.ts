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
