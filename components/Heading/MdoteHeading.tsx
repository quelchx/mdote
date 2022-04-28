import {
  Text,
  useBreakpointValue,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const MdoteHeading = ({ children }: { children?: React.ReactNode }) => {
  const underline = useColorModeValue("green.400", "green.500");

  return (
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
  );
};

export default MdoteHeading;
