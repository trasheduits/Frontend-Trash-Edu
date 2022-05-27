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
import AuthContext from '../context/AuthProvider';
import axios from '../api/axios';
import Footer from '../Layout/Footer';

const LOGIN_URL = '/auth';
const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser('');
      setPwd('');
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }
  };

  return (
    <div>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="#">Go to Home</a>
          </p>
        </section>
      ) : (
        <>
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
              <section>
                <p
                  ref={errRef}
                  className={errMsg ? 'errmsg' : 'offscreen'}
                  aria-live="assertive"
                >
                  {errMsg}
                </p>
                <form onSubmit={handleSubmit}>
                  <Flex p={8} flex={1} align={'center'} justify={'center'}>
                    <Stack spacing={4} w={'full'} maxW={'md'}>
                      <Heading fontSize={'2xl'}>
                        Silahkan Masukkan data berikut
                      </Heading>
                      <FormControl id="email">
                        <FormLabel>Email address</FormLabel>
                        <Input
                          type="email"
                          ref={userRef}
                          onChange={e => setUser(e.target.value)}
                          value={user}
                          required
                        />
                      </FormControl>
                      <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input
                          type="password"
                          onChange={e => setPwd(e.target.value)}
                          value={pwd}
                          required
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
                        <Button variant={'solid'}>Sign in</Button>
                      </Stack>
                    </Stack>
                  </Flex>
                </form>
              </section>
            </Stack>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Login;
