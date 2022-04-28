import React from "react";
import { Stack, useColorModeValue } from "@chakra-ui/react";
import MobileNavLink from "./MobileNavLink";
import links from "../../routes/navbar";

const MobileNavigation = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {links.map((navItem) => (
        <MobileNavLink key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

export default MobileNavigation;
