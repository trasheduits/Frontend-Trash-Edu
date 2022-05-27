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
  Link,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { Image } from '@chakra-ui/react';
import Carousel from 'react-elastic-carousel';
import Item from './Helper/Item';
import './styles.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useRouter } from './Helper/Utils/useRouter';

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
      <Container py={1}>
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
      <Container py={1}>
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
          <Stack
            direction={'row'}
            textAlign={'center'}
            align={'center'}
            justify={'center'}
          >
            <Flex>
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
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

const MarketPlace = () => {
  const [show, setShow] = React.useState(false);
  const [value, setValue] = React.useState('');
  const handleSearch = () => {};
  const handleChange = event => {
    setValue(event.target.value);
  };
  const router = useRouter();
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
          <Spacer py={4} />
          <Flex>
            <Category />
            <Box py={4}>
              <CardSearchPromo />
              <CardCOD />
            </Box>
          </Flex>
        </Box>
      </main>
      <Footer />
    </div>
  );
};

export default MarketPlace;
