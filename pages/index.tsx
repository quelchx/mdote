import { NextPage } from "next";

import LayoutWrapper from "../layout/MetaContainer";
import { HomeHero } from "../components";

const HomePage: NextPage = () => {
  return (
    <LayoutWrapper>
      <HomeHero />
    </LayoutWrapper>
  );
};

export default HomePage;
