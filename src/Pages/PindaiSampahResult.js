import React, { useState } from 'react';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  InputGroup,
  Container,
  Flex,
  Image,
  Circle,
  Input,
  Label,
} from '@chakra-ui/react';
import { Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { FiFile } from 'react-icons/fi';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

const PindaiSampahResult = () => {
  const [image, setImage] = useState('https://fakeimg.pl/350x200/');
  const [saveImage, setSaveImage] = useState(null);

  function handleUploadChange(e) {
    let uploaded = e.target.files[0];
    setImage(URL.createObjectURL(uploaded));
    setSaveImage(uploaded);
  }
  function handleSave() {
    if (saveImage) {
      // save image to backend
      let formData = new FormData();
      formData.append('photo', saveImage);

      fetch('http://127.0.0.1:5000/predict_sampah', {
        method: 'POST',
        body: formData,
      })
        .then(res => res.json())
        .then(data => {
          window.location.href = data.image;
        });
    } else {
      alert('Upload gambar dulu');
    }
  }

  return (
    <div>
      <Navbar />
      <main>
        <Container maxW={'7xl'}>
          <Center py={220} style={{ height: '80vh' }}>
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              w={{ sm: '100%', md: '540px' }}
              height={{ sm: '476px', md: '20rem' }}
              direction={{ base: 'column', md: 'row' }}
              bg={useColorModeValue('white', 'gray.900')}
              boxShadow={'2xl'}
              padding={4}
            >
              <Flex flex={1} bg="blue.200">
                <Image objectFit="cover" boxSize="100%" src={image} />
              </Flex>
              <Stack
                flex={1}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p={1}
                pt={2}
              >
                <Heading
                  fontSize={'2xl'}
                  fontFamily={'body'}
                  lineHeight={1.1}
                  fontWeight={600}
                >
                  <Text as={'span'} position={'relative'} color="#005A35">
                    Hasil Pemindaian
                  </Text>
                  <br />
                </Heading>

                <Stack
                  width={'100%'}
                  mt={'2rem'}
                  direction={'row'}
                  padding={2}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                >
                  <Box
                    flex={1}
                    fontSize={'sm'}
                    rounded={'full'}
                    _focus={{
                      bg: 'gray.200',
                    }}
                  >
                    <Button icon={<UploadOutlined />}>Tawarkan Sampah</Button>
                  </Box>
                  <Button
                    flex={1}
                    fontSize={'sm'}
                    rounded={'full'}
                    bg={'blue.400'}
                    color={'white'}
                    boxShadow={
                      '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                    }
                    _hover={{
                      bg: 'blue.500',
                    }}
                    _focus={{
                      bg: 'blue.500',
                    }}
                    onClick={handleSave}
                  >
                    Cari TPS
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Center>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default PindaiSampahResult;
