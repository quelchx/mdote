import React from "react";
import NextLink from "next/link";

import {
  Box,
  Button,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

import SubLink from "./SubLink";

import links from "../../routes/navbar";

const DesktopLinks = () => {
  const linkColor = useColorModeValue("white", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "green.200");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {links.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            {/* @ts-ignore */}
            <PopoverTrigger>
              <Button
                p={4}
                fontSize={"sm"}
                fontWeight={700}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                <NextLink href={navItem.href ?? "#"} passHref>
                  <Link>{navItem.label}</Link>
                </NextLink>
              </Button>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <SubLink key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

export default DesktopLinks;
