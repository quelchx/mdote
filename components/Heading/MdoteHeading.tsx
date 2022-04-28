import {
  Text,
  useBreakpointValue,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import AnimateSection from "../AnimateSection/AnimateSection";

const MdoteHeading = ({ children }: { children?: React.ReactNode }) => {
  const underline = useColorModeValue("blue.400", "blue.500");

  return (
    <AnimateSection animation="fade-right" delay={400} duration={500}>
      <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
        <Text
          as={"span"}
          _hover={{
            cursor: "pointer",
          }}
          position={"relative"}
          _after={{
            content: "''",
            width: "full",
            height: useBreakpointValue({ base: "20%", md: "30%" }),
            position: "absolute",
            bottom: 0,
            left: 0,
            bg: underline,
            zIndex: -1,
          }}
        >
          Mdote
        </Text>
        <br />
        {children}
      </Heading>
    </AnimateSection>
  );
};

export default MdoteHeading;
