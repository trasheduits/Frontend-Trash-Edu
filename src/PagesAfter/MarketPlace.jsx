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
  useBreakpointValue,
  Center,
  IconButton,
  Heading,
  Grid,
  GridItem,
  SimpleGrid,
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { CheckIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { Image } from '@chakra-ui/react';
import Carousel from 'react-elastic-carousel';
import Item from './Helper/Item';
import './styles.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useRouter } from './Helper/Utils/useRouter';
import Slider from 'react-slick';

// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 2 },
//   { width: 768, itemsToShow: 3 },
//   { width: 1200, itemsToShow: 4 },
// ];
// const settings = {
//   dots: true,
//   arrows: false,
//   fade: true,
//   infinite: true,
//   autoplay: true,
//   speed: 500,
//   autoplaySpeed: 5000,
//   slidesToShow: 1,
//   slidesToScroll: 1,
// };

// const CorouselSlide = () => {
//   const [slider, setSlider] = React.useState(null);
//   const top = useBreakpointValue({ base: '90%', md: '50%' });
//   const side = useBreakpointValue({ base: '30%', md: '40px' });
//   const cards = [
//     {
//       title: 'Design Projects 1',
//       text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
//       image:
//         'https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
//     },
//     {
//       title: 'Design Projects 2',
//       text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
//       image:
//         'https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80',
//     },
//     {
//       title: 'Design Projects 3',
//       text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
//       image:
//         'https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
//     },
//   ];
//   return (
//     <Box
//       position={'relative'}
//       height={'80%'}
//       width={'full'}
//       overflow={'hidden'}
//     >
//       {/* CSS files for react-slick */}
//       <link
//         rel="stylesheet"
//         type="text/css"
//         charSet="UTF-8"
//         href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
//       />
//       <link
//         rel="stylesheet"
//         type="text/css"
//         href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
//       />
//       {/* Left Icon */}
//       <IconButton
//         aria-label="left-arrow"
//         variant="ghost"
//         position="absolute"
//         left={side}
//         top={top}
//         transform={'translate(0%, -50%)'}
//         zIndex={2}
//         onClick={() => slider?.slickPrev()}
//       >
//         <BiLeftArrowAlt size="40px" />
//       </IconButton>
//       {/* Right Icon */}
//       <IconButton
//         aria-label="right-arrow"
//         variant="ghost"
//         position="absolute"
//         right={side}
//         top={top}
//         transform={'translate(0%, -50%)'}
//         zIndex={2}
//         onClick={() => slider?.slickNext()}
//       >
//         <BiRightArrowAlt size="40px" />
//       </IconButton>
//       {/* Slider */}
//       <Slider {...settings} ref={slider => setSlider(slider)}>
//         {cards.map((card, index) => (
//           <Image
//             key={index}
//             height={'sm'}
//             position="relative"
//             backgroundPosition="center"
//             backgroundRepeat="no-repeat"
//             backgroundSize="cover"
//             backgroundImage={`url(${card.image})`}
//           />
//         ))}
//       </Slider>
//     </Box>
//   );
// };

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
    <Container maxW="100%" py={10}>
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'lg'}
        // w={'full'}
        rounded={'md'}
      >
        <Box>
          <Text textAlign={'center'} fontSize={'xl'} fontWeight={800}>
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

const CardSampah = ({ data }) => {
  return (
    <Box>
      <SimpleGrid columns={3} spacing={5}>
        {data &&
          data?.map((item, index) => (
            <div key={index}>
              <Box
                maxW="xl"
                boxShadow={'xl'}
                p={5}
                borderRadius={20}
                as="article"
              >
                <Image
                  boxShadow={'xl'}
                  style={{ height: '350px', objectFit: 'fill', width: '100%' }}
                  src={item.item_filename}
                  alt={item.item_name}
                />
                <Heading>{item.item_name}</Heading>
                <Heading>Rp.{item.item_price}</Heading>
              </Box>
            </div>
          ))}
      </SimpleGrid>
    </Box>
  );
};

// <Heading>{item[index].item_name}</Heading>
const CardImageShop = () => {
  const [data, setData] = React.useState([]);
  const GetData = () => {
    fetch('https://trashedu.ewatery.tech/trashedu/public/all_item', {
      methpd: 'GET',
      redirect: 'follow',
    })
      .then(response => response.json())
      .then(result => {
        setData(result);
        console.log(result);
        // console.log(result[0].item_filename);
        // console.log(result[1].item_name);
        // console.log(result[2].item_createdat);
      })
      .catch(error => console.log('error', error));
  };

  React.useEffect(() => {
    GetData();
  }, []);

  return (
    <Flex px="4" py="4" justify="space-between">
      <Grid emplateColumns="repeat(5, 1fr)" gap={6}>
        {data && <CardSampah data={data} />}
      </Grid>
    </Flex>
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
      {/* <Container p={20}>
        <Flex>
          <CorouselSlide />
        </Flex>
      </Container> */}
      <main>
        <Box py={20}>
          <Flex>
            <Category />
          </Flex>
          <Flex py={4} gap={2} style={{ align: 'left' }}>
            <CardSearchPromo />
            <CardCOD />
          </Flex>
          <Flex gap={3}>
            <CardImageShop />
          </Flex>
        </Box>
      </main>
      <Footer />
    </div>
  );
};

export default MarketPlace;
