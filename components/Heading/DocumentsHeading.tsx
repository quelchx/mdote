import React from "react";

import {
  Box,
  Flex,
  Divider,
  chakra,
  Container,
  Heading,
} from "@chakra-ui/react";
import {} from "@chakra-ui/react";

export interface FeatureProps {
  heading: string;
  text: string;
}

const DocumentsHeading = () => {
  return (
    <Box as={Container} width="100%" mt={14} p={4}>
      <Heading as="h2" size={"2xl"} pb={8}>
        Mdote Documents
      </Heading>
      <Flex>
        <chakra.p>
          Mdote is a lightweight markdown based note editor intended to allow
          users to quickly markup notes on the go.
        </chakra.p>
      </Flex>
      <Divider mt={12} mb={12} />
    </Box>
  );
};

export default DocumentsHeading;
