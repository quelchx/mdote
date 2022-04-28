import Link from "next/link";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  chakra,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import DesktopLinks from "./DesktopLinks";
import MobileNavigation from "./MobileNavigation";
import ThemeSwitch from "../ToggleTheme/Switch";
import MdoteHeading from "../Heading/MdoteHeading";

export default function Navigation() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box>
      <Flex
        bg={useColorModeValue("#259712", "#1c2a1f")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 3 }}
        px={{ base: 5 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            color={"white"}
            _hover={{
              color: "green.700",
            }}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontWeight={500}
            mt={1}
            ml={2}
            color={useColorModeValue("white", "white")}
          >
            <Link href="/">
              <chakra.span fontSize={'xl'} cursor='pointer' fontWeight={'extrabold'} color='green-200'>
                Mdote
              </chakra.span>
            </Link>
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopLinks />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <ThemeSwitch />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNavigation />
      </Collapse>
    </Box>
  );
}
