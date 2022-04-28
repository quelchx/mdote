import React from "react";
import Navigation from "../Navbar/Navbar";
import MetaContainer, { MetaProps } from "./MetaContainer";

const LayoutWrapper = ({ children, ...overrides }: MetaProps) => {
  return (
    <MetaContainer {...overrides}>
      <Navigation />
      {children}
    </MetaContainer>
  );
};

export default LayoutWrapper;
