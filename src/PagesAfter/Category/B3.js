import React from 'react';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import { Category } from '../MarketPlace';
import { Box, Flex } from '@chakra-ui/react';

const B3 = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Box py={20}>
          <Flex>
            <Category />
          </Flex>
        </Box>
      </main>
      <Footer />
    </div>
  );
};

export default B3;
