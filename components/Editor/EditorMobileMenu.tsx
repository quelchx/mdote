import React from "react";

import {
  useColorModeValue,
  Box,
  Flex,
  FlexProps,
  HStack,
  IconButton,
  chakra,
} from "@chakra-ui/react";

import { FiMenu } from "react-icons/fi";
import ThemeSwitch from "../ToggleTheme/Switch";
import AnimateSection from "../AnimateSection/AnimateSection";

interface EditorMobileMenuProps extends FlexProps {
  onOpen: () => void;
}

const EditorMobileMenu = ({ onOpen, ...rest }: EditorMobileMenuProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("green.600", "green.800")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Box display={{ base: "flex", md: "none" }}>
        <chakra.p fontSize="3xl">Mdote</chakra.p>
      </Box>
      <AnimateSection animation="fade-down" delay={400} duration={400}>
        <HStack spacing={{ base: "0", md: "6" }}>
          <ThemeSwitch />
        </HStack>
      </AnimateSection>
    </Flex>
  );
};

export default EditorMobileMenu;
