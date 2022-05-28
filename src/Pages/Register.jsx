import React, { useEffect, useState } from 'react';
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
import { useHistory } from 'react-router-dom';

const Register = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const history = useHistory();

  const handleClickRegister = () => {
    let item = { firstName, lastName, username, password, confirmPassword };
    let result = fetch(
      'https://trashedu.ewatery.tech/trashedu/public/Register',
      {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );
    result = result.json();
    localStorage.setItem('user-info', JSON.stringify(result));
    history.push('/marketplace');
  };

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
              <FormControl id="firstName">
                <FormLabel>Nama Depan</FormLabel>
                <Input
                  type="firstName"
                  value={firstName}
                  onChange={event => setFirstName(event.target.value)}
                />
              </FormControl>
              <FormControl id="lastName">
                <FormLabel>Nama Belakang</FormLabel>
                <Input
                  type="lastName"
                  value={lastName}
                  onChange={event => setLastName(event.target.value)}
                />
              </FormControl>
              <FormControl id="username">
                <FormLabel>Username</FormLabel>
                <Input
                  type="username"
                  value={username}
                  onChange={event => setUsername(event.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={event => setPassword(event.target.value)}
                />
              </FormControl>
              <FormControl id="confirm-password">
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  type="password"
                  value={confirmPassword}
                  onChange={event => setConfirmPassword(event.target.value)}
                />
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
                <Button
                  colorScheme={'blue'}
                  variant={'solid'}
                  onClick={handleClickRegister}
                >
                  Daftar
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
