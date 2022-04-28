import React from "react";
import { Button, Flex, Image, Link, Stack, Text } from "@chakra-ui/react";
import MdoteHeading from "../Heading/MdoteHeading";

import NextLink from "next/link";

const HomeHero = () => {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={2} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <MdoteHeading>
            <Text fontSize={"4xl"} color={"green.500"}>
              Your Markdown Note Editor
            </Text>
          </MdoteHeading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Mdote is a simplistic markdown based note taking editor. Leverage
            the powers of markdown on the fly and save to your local machine.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"green.400"}
              color={"white"}
              _hover={{
                bg: "green.800",
              }}
            >
              <NextLink href="/app" passHref>
                <Link>Try It</Link>
              </NextLink>
            </Button>
            <Button rounded={"full"}>
              <NextLink href="/docs" passHref>
                <Link>How It Works</Link>
              </NextLink>
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} display={{ base: "none", md: "flex" }}>
        <Image
          alt={"Heading"}
          objectFit={"cover"}
          src={"/images/indexhero.jpg"}
        />
      </Flex>
    </Stack>
  );
};

export default HomeHero;
