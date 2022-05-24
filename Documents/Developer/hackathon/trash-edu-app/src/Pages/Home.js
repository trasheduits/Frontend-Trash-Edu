import React from 'react';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import {
  Container,
  Stack,
  Flex,
  Heading,
  Text,
  Button,
  useColorModeValue,
  Box,
} from '@chakra-ui/react';

const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Container maxW={'7xl'}>
          <Stack
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: 'column', md: 'row' }}
          >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
              >
                <Text as={'span'} position={'relative'} color="#005A35">
                  Trash,
                </Text>
                <br />
                <Text as={'span'} color={'#005A35'}>
                  Education!
                </Text>
              </Heading>
              <Text color={'gray.500'}>
                Cari Tahu jenis sampahmu, jual dan dapatkan uang!!!
              </Text>
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={{ base: 'column', sm: 'row' }}
              >
                <Button
                  rounded={'full'}
                  size={'lg'}
                  fontWeight={'normal'}
                  px={6}
                  colorScheme={'#F56038'}
                  bg={'#F56038'}
                  _hover={{
                    textDecoration: 'none',
                    bg: useColorModeValue('gray.200', 'gray.700'),
                  }}
                >
                  Mulai Mencoba
                </Button>
                {/* <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6} leftIcon={<PlayIcon h={4} w={4} color={"gray.300"} />}>
                How It Works
              </Button> */}
              </Stack>
            </Stack>
            <Flex
              flex={1}
              justify={'center'}
              align={'center'}
              position={'relative'}
              w={'full'}
            >
              <img src={'Assets/Dashboard/HeroImage.svg'} alt="hero-image" />
            </Flex>
          </Stack>
          {/* <Work /> */}
          <Box p={4}>
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
              <Heading fontSize={'3xl'}>This is the headline</Heading>
              <Text color={'gray.600'} fontSize={'xl'}>
                Bagaimana TrashEdu dapat merubah sampah menjadi uang?
              </Text>
              <Container fontSize={'xl'}>
                <img src={'Assets/HowItWork/HowItWork.svg'} alt="how it work" />
              </Container>
            </Stack>
          </Box>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
