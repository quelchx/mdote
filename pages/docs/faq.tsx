import React from "react";
import { NextPage } from "next";
import NextLink from "next/link";

import { Box, Link, Heading, Text, chakra, SimpleGrid } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

import { LayoutWrapper, Questions } from "../../components";
import { meta } from "../../constants";

const FrequentlyAskedQuestionsPage: NextPage = () => {
  const { title, desc } = meta.faq;

  return (
    <LayoutWrapper title={title} desc={desc}>
      <Box pt={10} pb={20}>
        <chakra.div px={[8, 10, 16]} mx='auto' maxWidth='7xl'>
          <Box textAlign="center" py={4} px={6}>
            <InfoIcon boxSize={"50px"} color={"blue.500"} />
            <Heading as="h2" size="xl" mt={6} mb={2}>
              Frequently Asked Questions
            </Heading>
            <Text>
              Have a question? Check out our FAQ and you might find some help.
              If you have a question and can not find it within our FAQ section
              please contact us{" "}
              <chakra.span color={'green.500'}>
                <NextLink href="/contact">
                  <Link>here</Link>
                </NextLink>
              </chakra.span>
            </Text>
          </Box>
          <SimpleGrid columns={[1, 2]} spacing={[4, 12]}>
            <chakra.div>
              <Questions method="odd" />
            </chakra.div>
            <chakra.div>
              <Questions method="even" />
            </chakra.div>
          </SimpleGrid>
        </chakra.div>
      </Box>
    </LayoutWrapper>
  );
};

export default FrequentlyAskedQuestionsPage;
