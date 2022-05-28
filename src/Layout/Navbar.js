import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/layout';
import { VStack, Spacer } from '@chakra-ui/layout';
import { FaSun, FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiMedium } from 'react-icons/si';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <>
      <Box
        bg={useColorModeValue('gray.100', 'gray.900')}
        px={4}
        style={{ position: 'fixed', top: 0, width: '100%' }}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Heading ml="8" size="md" fontWeight="semibold" color="green.400">
                <Link
                  px={2}
                  py={1}
                  rounded={'md'}
                  _hover={{
                    textDecoration: 'none',
                    bg: useColorModeValue('gray.200', 'gray.700'),
                  }}
                  href="/"
                >
                  TrashEdu
                </Link>
              </Heading>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              <Link px={2} py={1} rounded={'md'} href="/bantuan">
                Bantuan
              </Link>
              <Link px={2} py={1} rounded={'md'} href="/pindai-sampah">
                Pindai sampah
              </Link>
              <Link px={2} py={1} rounded={'md'} href="/login">
                Masuk
              </Link>
              <Link px={2} py={1} rounded={'md'} href="/signup">
                Daftar
              </Link>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <VStack p={9}>
                <Flex w="100%">
                  <Spacer />
                  <IconButton
                    ml={8}
                    icon={isDark ? <FaSun /> : <FaMoon />}
                    isRound="true"
                    onClick={toggleColorMode}
                  ></IconButton>
                </Flex>
              </VStack>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <Link px={2} py={1} rounded={'md'} href="/bantuan">
                Bantuan
              </Link>
              <Link px={2} py={1} rounded={'md'} href="/pindai-sampah">
                Pindai sampah
              </Link>
              <Link px={2} py={1} rounded={'md'} href="/bantuan">
                Masuk
              </Link>
              <Link px={2} py={1} rounded={'md'} href="/bantuan">
                Daftar
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
