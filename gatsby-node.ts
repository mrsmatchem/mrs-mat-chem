import { GatsbyNode } from "gatsby";

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
