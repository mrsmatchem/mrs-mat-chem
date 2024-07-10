export interface DataProps<T> {
  allMdx: {
    nodes: {
      frontmatter: T;
      id: string;
    }[];
  };
}
