import React from 'react';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import { Category } from './Core';

const B3 = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Category />
        <h1>B3</h1>
      </main>
      <Footer />
    </div>
  );
};

export default B3;
