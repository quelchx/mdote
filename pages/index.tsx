import { NextPage } from "next";

import { HomeHero, LayoutWrapper } from "../components";
import Navigation from "../components/Navbar/Navbar";

const HomePage: NextPage = () => {
  return (
    <LayoutWrapper title='Home Page'>
      <HomeHero />
    </LayoutWrapper>
  );
};

export default HomePage;
