/* eslint-disable react-hooks/rules-of-hooks */
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
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import { Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { FiFile } from 'react-icons/fi';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { useRouter } from '../PagesAfter/Helper/Utils/useRouter';
import { InboxOutlined } from '@ant-design/icons';
import axios from 'axios';

const { Dragger } = Upload;
const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',

  onChange(info) {
    const { status } = info.file;

    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }

    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },

  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const PindaiSampah = () => {
  const [image, setImage] = useState('https://fakeimg.pl/350x200/');
  const [saveImage, setSaveImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const [imgStatus, setImgStatus] = useState('');
  const [CaraPengelolaan, setCaraPengelolaan] = useState('');
  const [CatatanTambahan, setCatatanTambahan] = useState('');
  const [LamaWaktu, setLamaWaktu] = useState('');
  const [tipe, setTipe] = useState('');

  const router = useRouter();
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

      fetch('https://trashedu.herokuapp.com/predict_sampah', {
        method: 'POST',
        body: formData,
      })
        .then(res => res.json())
        .then(data => {
          window.location.href = data.image;
        });
      router.push('/pindai-sampah-result');
    } else {
      alert('Upload gambar dulu');
    }
  }

  const fileSelectedHandle = event => {
    if (event.target.files && event.target.files[0]) {
      console.log(event.target.files[0]);
      setSelectedFile(event.target.files[0]);
    }
  };

  const fileUploadHandle = () => {
    // console.log(event.target.files[0]);
    const file = new FormData();
    file.append('file', selectedFile, selectedFile.name);

    axios
      .post('https://trashedu.herokuapp.com/predict_sampah', file, {
        onUploadProgress: progressEvent => {
          console.log(
            'Upload Progress : ' +
              Math.round(progressEvent.loaded / progressEvent.total) * 100 +
              '%'
          );
        },
      })
      .then(response => {
        if (response.status === 200) {
          console.log('response :', response);
          console.log('status: ', response.status);
          console.log(response.data.success);
          // alert('response :', response);
          setImgStatus(response.data.success);
          setCaraPengelolaan(response.data.data['Cara Pengelolahan sampah']);
          setTipe(response.data.data.tipe);
          setLamaWaktu(response.data.data['lama waktu terurai']);
          setCatatanTambahan(response.data.data['Catatan Tambahan']);
        }
      })
      .then(result => {
        console.log('result : ', result.success);
      })
      .catch(error => {
        console.log('error : ', error);
      });
  };
  return (
    <>
      <Navbar />
      <main>
        <Container maxW={'7xl'}>
          {/* <Center py={60}> */}

          {/* </Center> */}
          <Center boxShadow={'xl'} py={120} style={{ height: '80vh' }}>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={fileSelectedHandle}
            />
            <Button onClick={fileUploadHandle}>Mulai Pindai</Button>
          </Center>
          <Stack py={20} pacing={3}>
            <Alert
              status="success"
              variant="subtle"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              height="200px"
            >
              {/* <AlertTitle mt={4} mb={1} fontSize="lg">
                <Flex>
                  <Text px={2}>Akurasi : </Text>{' '}
                  {<Text px={2}>{imgStatus}</Text>}
                </Flex>
              </AlertTitle> */}
              <AlertDescription>
                <Flex>{<Text px={1}>{imgStatus}</Text>}</Flex>
                <Flex>
                  <Text px={1}>Pengelolaan : </Text>
                  {<Text px={1}>{CaraPengelolaan}</Text>}
                </Flex>
                <Flex>
                  <Text px={1}>Note : </Text>
                  {<Text px={1}>{CatatanTambahan}</Text>}
                </Flex>
                <Flex>
                  <Text px={1}>Lama Terurai : </Text>
                  {<Text px={1}>{LamaWaktu}</Text>}
                </Flex>
              </AlertDescription>
            </Alert>
            {/*  */}
          </Stack>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default PindaiSampah;
