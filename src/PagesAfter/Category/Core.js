import React from 'react';
import {
  Box,
  Flex,
  Container,
  useColorModeValue,
  Stack,
  Text,
  Button,
} from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { useRouter } from '../Helper/Utils/useRouter';

const Core = () => {
  return (
    <div>
      <Category />
    </div>
  );
};

export const Category = () => {
  const router = useRouter();
  const currentLink = '/category';
  return (
    <Container maxW="100%">
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'xl'}
        w={'full'}
        rounded={'md'}
      >
        <Box px={100} py={100}>
          <Text fontSize={'xl'} fontWeight={800}>
            KATEGORI
          </Text>
          {/* <Stack
            direction={'row'}
            textAlign={'center'}
            align={'center'}
            justify={'center'}
          > */}
          <Flex
            direction={'row'}
            textAlign={'center'}
            align={'center'}
            justify={'center'}
          >
            <Box
              p={10}
              as="button"
              onClick={() => router.push(`${currentLink}/plastik`)}
            >
              <Image src={'/Assets/Kategori/Plastik.svg'} alt="plastik" />
              <Text>Plastik</Text>
            </Box>
            <Box
              p={10}
              as="button"
              onClick={() => router.push(`${currentLink}/kayu`)}
            >
              <Image src={'/Assets/Kategori/Kayu.svg'} alt="kayu" />
              <Text>Kayu</Text>
            </Box>
            <Box
              p={10}
              as="button"
              onClick={() => router.push(`${currentLink}/b3`)}
            >
              <Image src={'/Assets/Kategori/B3.svg'} alt="b3" />
              <Text>B3</Text>
            </Box>
            <Box
              p={10}
              as="button"
              onClick={() => router.push(`${currentLink}/kain`)}
            >
              <Image src={'/Assets/Kategori/Kain.svg'} alt="kain" />
              <Text>Kain</Text>
            </Box>
            <Box
              p={10}
              as="button"
              onClick={() => router.push(`${currentLink}/organik`)}
            >
              <Image src={'/Assets/Kategori/Organik.svg'} alt="organik" />
              <Text>Organik</Text>
            </Box>
            <Box
              p={10}
              as="button"
              onClick={() => router.push(`${currentLink}/kertas`)}
            >
              <Image src={'/Assets/Kategori/Kertas.svg'} alt="kertas" />
              <Text>Kertas</Text>
            </Box>
          </Flex>
          {/* </Stack> */}
          <Box>
            <Button onClick={() => router.push(`/marketplace`)}>Kembali</Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Core;
