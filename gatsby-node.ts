import { sectionsList } from "./data/sections/sections.json";

import { GatsbyNode, NodePluginArgs } from "gatsby";

// exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
//   sectionsList.forEach((section, index) => {
//     const node = {
//       ...section,
//       id: createNodeId(index),
//       internal: {
//         type: "SectionsElements",
//         contentDigest: createContentDigest(section),
//       },
//     };

//     actions.createNode(node);
//   });
// };

export const sourceNodes: GatsbyNode[`sourceNodes`] = async (gatsbyApi) => {
  const mdxNodes = gatsbyApi.getNodesByType("Mdx");

  mdxNodes.forEach((node) => {
    const object = node.frontmatter as any;
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        if (typeof element === "object" && Array.isArray(element)) {
          element.forEach((item, index) => {
            const newNode = {
              ...item,
              index: index,
              id: gatsbyApi.createNodeId(`${typeof item}${index}`),
              internal: {
                type: `${key}ListItems`,
                contentDigest: gatsbyApi.createContentDigest(item),
                contentFilePath: node.internal.contentFilePath,
              },
              parent: node.parent,
            };

            gatsbyApi.actions.createNode(newNode);
          });
        }
      }
    }
  });
};
