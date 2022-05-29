import React from 'react';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import { useEffect, useState } from 'react';
import Faq from 'react-faq-component';
import {
  Button,
  Box,
  Grid,
  GridItem,
  Container,
  Stack,
  Heading,
  Text,
  Flex,
  Wrap,
  WrapItem,
  VStack,
  HStack,
  IconButton,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md';

const data = {
  title: 'FAQ (How it works)',
  rows: [
    {
      title: 'Lorem ipsum dolor sit amet,',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
            Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      title: 'Nunc maximus, magna at ultricies elementum',
      content:
        'Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.',
    },
    {
      title: 'Curabitur laoreet, mauris vel blandit fringilla',
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
          Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
          Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
          Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
    {
      title: 'What is the package version',
      content: <p>current version is 1.2.1</p>,
    },
  ],
};
const styles = {
  bgColor: 'white',
  titleTextColor: 'grey',
  rowTitleColor: 'grey',
  rowContentColor: 'grey',
  arrowColor: 'green',
};

const config = {
  animate: true,
  arrowIcon: 'V',
  tabFocus: true,
};

const Contact = () => {
  return (
    <Flex>
      <Wrap spacing={{ base: 10, sm: 3, md: 5, lg: 10 }}>
        <WrapItem>
          <Box bg="white" borderRadius="lg">
            <Box m={8} color="#0B0E3F">
              <VStack spacing={5}>
                <FormControl id="name">
                  <FormLabel>Your Name</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement
                      pointerEvents="none"
                      children={<BsPerson color="gray.800" />}
                    />
                    <Input type="text" size="md" />
                  </InputGroup>
                </FormControl>
                <FormControl id="name">
                  <FormLabel>Mail</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement
                      pointerEvents="none"
                      children={<MdOutlineEmail color="gray.800" />}
                    />
                    <Input type="text" size="md" />
                  </InputGroup>
                </FormControl>
                <FormControl id="name">
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    borderColor="gray.300"
                    _hover={{
                      borderRadius: 'gray.300',
                    }}
                    placeholder="message"
                  />
                </FormControl>
                <FormControl id="name" float="right">
                  <Button variant="solid" bg="grey" color="white" _hover={{}}>
                    Send Message
                  </Button>
                </FormControl>
              </VStack>
            </Box>
          </Box>
        </WrapItem>
      </Wrap>
    </Flex>
  );
};
const Bantuan = () => {
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
                  Frequently Asked Questions
                </Text>
                <br />
              </Heading>
              <Text
                fontSize={{ base: 'xl', sm: 'xl', lg: 'xl' }}
                as={'span'}
                color={'#005A35'}
              >
                Still Have any Questions? Don't Hasitates to reach us
              </Text>
              <Flex>
                <Contact />
              </Flex>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
          >
            <Faq data={data} styles={styles} config={config} />
          </Flex>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Bantuan;
