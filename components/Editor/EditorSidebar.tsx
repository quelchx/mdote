import React from "react";
import NextLink from "next/link";

import {
  Box,
  BoxProps,
  useColorModeValue,
  Flex,
  CloseButton,
  Link,
  Icon,
} from "@chakra-ui/react";

import { FiBookOpen, FiInfo, FiGithub } from "react-icons/fi";

import MdoteHeading from "../Heading/MdoteHeading";
import EditorSidebarLink from "./EditorSidebarLink";

import routes from "../../routes/sidebar";

interface EditorSidebarProps extends BoxProps {
  onClose: () => void;
}

const EditorSidebar = ({ onClose, ...rest }: EditorSidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Box fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          <NextLink href="/" passHref>
            <Link>
              <MdoteHeading />
            </Link>
          </NextLink>
        </Box>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {routes.map((link) => (
        <EditorSidebarLink path={link.path} key={link.name} icon={link.icon}>
          {link.name}
        </EditorSidebarLink>
      ))}
      <Link
        as={"a"}
        href="https://github.com/quelchx/mdote"
        target='_blank'
        referrerPolicy="origin"
        style={{ textDecoration: "none" }}
        _focus={{ boxShadow: "none" }}
      >
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "green.400",
            color: "white",
          }}
        >
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={FiGithub}
          />
          View Repository
        </Flex>
      </Link>
    </Box>
  );
};

export default EditorSidebar;
