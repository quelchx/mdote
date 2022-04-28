import NextLink from "next/link";

import { Box, Heading, Text, Button, chakra, Link } from "@chakra-ui/react";
import { NextPage } from "next";

const PageNotFound: NextPage = () => {
  return (
    <chakra.div display="grid" height="100vh" placeItems={"center"}>
      <Box textAlign="center" py={10} px={6}>
        <Heading
          display="inline-block"
          as="h2"
          size="3xl"
          bgGradient="linear(to-r, green.400, green.600)"
          backgroundClip="text"
        >
          404
        </Heading>
        <Text fontSize="20px" mt={3} mb={2}>
          Page Not Found
        </Text>
        <Text color={"gray.500"} mb={6}>
          The page you're looking for does not seem to exist
        </Text>

        <Button
          colorScheme="green"
          bgGradient="linear(to-r, green.400, green.500, green.600)"
          color="white"
          variant="solid"
        >
          <NextLink href="/" passHref>
            <Link>Go Back Home</Link>
          </NextLink>
        </Button>
      </Box>
    </chakra.div>
  );
};
export default PageNotFound;
