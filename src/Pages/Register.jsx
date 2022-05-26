import React from 'react';
import Navbar from '../Layout/Navbar';
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
} from '@chakra-ui/react';
import Footer from '../Layout/Footer';

const Register = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}
          >
            <Image alt={'Login Image'} src={'Assets/Login/Login.svg'} />
          </Flex>
          <Flex p={8} flex={1} align={'center'} justify={'center'}>
            <Stack spacing={4} w={'full'} maxW={'md'}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={6}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.500'}>Forgot password?</Link>
                </Stack>
                <Button colorScheme={'blue'} variant={'solid'}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Flex>
        </Stack>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
