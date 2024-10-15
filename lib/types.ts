import { ImageDataLike } from "gatsby-plugin-image";

export interface DataProps<T> {
  allMdx: {
    nodes: {
      frontmatter: T;
      id: string;
    }[];
  };
}

export interface HeaderDataProps {
  type: string;
  title: string;
  description: string;
  text: string;
  image: string;
}
