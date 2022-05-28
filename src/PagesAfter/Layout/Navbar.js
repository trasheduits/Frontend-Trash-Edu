/* eslint-disable react-hooks/rules-of-hooks */
import React, { ReactNode, useState } from 'react';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
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
  Heading,
  VStack,
  Spacer,
} from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';

export default function withAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const [value, setValue] = React.useState('');
  const handleSearch = () => {};
  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
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
              {/* {Links.map(link => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
              <Link px={2} py={1} rounded={'md'} href="/bantuan">
                Bantuan
              </Link>
              <Link px={2} py={1} rounded={'md'} href="/pindai-sampah">
                Pindai sampah
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
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <VStack p={50} />
              <InputGroup w="35%">
                <Input
                  ml={8}
                  p={4}
                  pr="4.5rem"
                  placeholder="Apa yang kamu cari ?"
                  value={value}
                  onChange={handleChange}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleSearch}>
                    Cari
                  </Button>
                </InputRightElement>
              </InputGroup>
              <MenuList>
                <MenuItem>Edit Profile</MenuItem>
                {/* <MenuItem>Link 2</MenuItem> */}
                <MenuDivider />
                <MenuItem>
                  <a href="/">Keluar</a>
                </MenuItem>
              </MenuList>
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
              {/* {Links.map(link => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </>
  );
}
