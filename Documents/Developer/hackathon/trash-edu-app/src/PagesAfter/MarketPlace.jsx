import React from 'react';
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
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { Image } from '@chakra-ui/react';
import Carousel from 'react-elastic-carousel';
import Item from './Helper/Item';
import './styles.css';
import { AiOutlineArrowRight } from 'react-icons/ai';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const CorouselSlide = () => {
  return (
    <div className="App">
      <Carousel breakPoints={breakPoints}>
        <Item>
          <Image src={'Assets/Gambar/Corosel1.png'} alt="Corosel1" />
        </Item>
        <Item>
          <Image src={'Assets/Gambar/Corosel2.png'} alt="Corosel2" />
        </Item>
        <Item>
          <Image src={'Assets/Gambar/Corosel3.png'} alt="Corosel3" />
        </Item>
        <Item>
          <Image src={'Assets/Gambar/Corosel4.png'} alt="Corosel4" />
        </Item>
        <Item>
          <Image src={'Assets/Gambar/Corosel5.png'} alt="Corosel5" />
        </Item>
      </Carousel>
    </div>
  );
};

const CardSearchPromo = () => {
  const [value, setValue] = React.useState('');
  const handleSearch = () => {};
  const handleChange = event => {
    setValue(event.target.value);
  };
  return (
    <>
      <Container py={6}>
        <Box
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}
        >
          <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
            <Stack direction={'row'} align={'center'} justify={'center'}>
              <Text fontSize={'xl'} fontWeight={800}>
                Punya Kode Promo ?
              </Text>
            </Stack>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                placeholder="Masukkan Kode Promo"
                value={value}
                onChange={handleChange}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm">
                  <AiOutlineArrowRight />
                </Button>
              </InputRightElement>
            </InputGroup>
            <Spacer p={4} />
            <Box size="md">
              <Text align={'center'} justify={'center'}>
                <a href="#">Lihat semua kode promo</a>
              </Text>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

const CardCOD = () => {
  return (
    <>
      <Container py={6}>
        <Box
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}
        >
          <Stack textAlign={'center'} p={6} align={'center'}>
            <Image src={'Assets/Cod.svg'} alt="logo-cod" />
            <Text fontSize={'xl'} fontWeight={800}>
              Cash On Delivery (COD)
            </Text>
            <p>Ambil barangmu sendiri</p>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

const MarketPlace = () => {
  const [show, setShow] = React.useState(false);
  const [value, setValue] = React.useState('');
  const handleSearch = () => {};
  const handleChange = event => {
    setValue(event.target.value);
  };
  return (
    <div>
      <Navbar />
      <main>
        <Box p={4}>
          <Flex alignItems={'center'} justifyContent={'space-between'}>
            <VStack p={10} />
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
          </Flex>
          <Spacer p={4} />
          <CorouselSlide />
          <Spacer p={4} />
          <HStack spacing={4}>
            <CardSearchPromo />
            <CardCOD />
          </HStack>
        </Box>
      </main>
      <Footer />
    </div>
  );
};

export default MarketPlace;
