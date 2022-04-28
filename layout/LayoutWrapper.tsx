import React from "react";
import MetaContainer, { MetaProps } from "./MetaContainer";

// import Navigation from "../components/Navigation/Navigation";
// import Footer from "../components/Footer/Footer";

const LayoutWrapper = ({ children, ...overrides }:MetaProps) => {
  return (
    <MetaContainer {...overrides}>
      {children}
    </MetaContainer>
  );
};

export default LayoutWrapper;
