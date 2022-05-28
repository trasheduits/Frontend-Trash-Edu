import React, { useRef, useState, useEffect, useContext } from 'react';
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

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleClickLogin = () => {
    let item = { username, password };
    let result = fetch('https://trashedu.ewatery.tech/trashedu/public/Login', {
      method: 'POST',
      body: JSON.stringify(item),
      redirect: 'follow',
    });
    result = result.json();
    localStorage.setItem('user-info', JSON.stringify(result));
  };
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      // history.push('/');
    }
  }, []);

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
                  onClick={handleClickLogin}
                >
                  Masuk
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

export default Login;
