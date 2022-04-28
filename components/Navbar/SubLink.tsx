import React from "react";
import NextLink from "next/link";

import {
  Box,
  Flex,
  Icon,
  Text,
  Link,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";
import { NavItem } from "../../routes/navbar";

const SubLink = ({ label, href, subLabel }: NavItem) => {
  return (
    <NextLink href={href} passHref>
      <Link
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        _hover={{ bg: useColorModeValue("green.100", "gray.900") }}
      >
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text
              transition={"all .3s ease"}
              _groupHover={{ color: "green.400" }}
              fontWeight={500}
            >
              {label}
            </Text>
            <Text fontSize={"sm"}>{subLabel}</Text>
          </Box>
          <Flex
            transition={"all .5s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"green.400"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    </NextLink>
  );
};

export default SubLink;
