import React, { useState, useEffect } from 'react';
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';
import {
  Box,
  Button,
  Spacer,
  Flex,
  VStack,
  Container,
  useColorModeValue,
  Stack,
  Text,
  HStack,
  Link,
  useBreakpointValue,
  Center,
  IconButton,
  Heading,
  Grid,
  GridItem,
  SimpleGrid,
  InputGroup,
  Input,
  InputRightElement,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

import axios from 'axios';

const RekomendasiHarda = () => {
  const [rekomHarga, setRekomHarga] = useState('');
  const [harga, setHarga] = useState('');

  const RekomHandleChange = event => {
    setRekomHarga(event.target.value);
  };
  const RekomHarga = () => {
    const word = new FormData();
    word.append('word', 'laptop asus');
    axios
      .post('https://trashedu.herokuapp.com/range_harga', word)
      .then(response => {
        if (response.status === 200) {
          console.log('response : ', response.data.success);
          setHarga(response.data.success);
        }
      })

      .catch(error => {
        console.log('error : ', error);
      });
  };
  console.log('Harga', harga);
  return (
    <div>
      <Navbar />
      <main>
        <Container maxW={'7xl'}>
          <Center p={40}>
            <Heading>Rekomendasi Harga</Heading>
          </Center>

          <Center flex={2} p={40}>
            <InputGroup>
              <Input
                type="text"
                placeholder="Masukkan Nama Barang"
                onChange={event => event.target.value}
              />
              <Spacer p={2} />
              <Button p={2} w={100} onClick={RekomHarga}>
                Harga
              </Button>
            </InputGroup>
          </Center>
          <Stack spacing={3}>
            <Alert status="success">Rekomendasi Harga : {harga}</Alert>
          </Stack>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default RekomendasiHarda;
