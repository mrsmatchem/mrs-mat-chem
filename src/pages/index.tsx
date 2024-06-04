import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/sections/header";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className=" bg-secondary">
      <Header />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
