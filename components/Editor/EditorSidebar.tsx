import React from 'react'

import {
  Box,
  Text,
  BoxProps,
  useColorModeValue,
  Flex,
  CloseButton,
  Link,
} from "@chakra-ui/react";

import MdoteHeading from '../Heading/MdoteHeading';
import EditorSidebarLink from './EditorSidebarLink'

import routes from '../../routes';

interface EditorSidebarProps extends BoxProps {
  onClose: () => void;
}

const EditorSidebar = ({onClose, ...rest}: EditorSidebarProps) => {
  return (
    <Box
    transition="3s ease"
    bg={useColorModeValue("white", "gray.900")}
    borderRight="1px"
    borderRightColor={useColorModeValue("gray.200", "gray.700")}
    w={{ base: "full", md: 60 }}
    pos="fixed"
    h="full"
    {...rest}
  >
    <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
      <Box fontSize="2xl" fontFamily="monospace" fontWeight="bold">
        <Link as={Link} href='/'>
          <MdoteHeading/>
        </Link>
      </Box>
      <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
    </Flex>
    {routes.map((link) => (
      <EditorSidebarLink path={link.path} key={link.name} icon={link.icon}>
        {link.name}
      </EditorSidebarLink>
    ))}
  </Box>
  )
}

export default EditorSidebar