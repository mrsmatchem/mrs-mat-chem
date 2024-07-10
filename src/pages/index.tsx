import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/sections/header";
import Offers from "../components/sections/offers";
import Testimonials from "../components/sections/testimonials";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="bg-secondary text-white">
      <Header />
      <Offers />
      <Testimonials />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
