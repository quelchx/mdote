import React from "react";
import NextLink from "next/link";
import { Flex, FlexProps, Icon, Link } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface EditorSidebarProps extends FlexProps {
  path: string;
  icon: IconType;
  children: string | number; // ReactText -> deprecated
}

const EditorSidebarLink = ({
  icon,
  path,
  children,
  ...rest
}: EditorSidebarProps) => {
  return (
    <NextLink href={path} passHref>
      <Link
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
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: "white",
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Link>
    </NextLink>
  );
};

export default EditorSidebarLink;
