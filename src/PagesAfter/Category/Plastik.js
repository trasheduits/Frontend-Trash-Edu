import React from 'react';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import { Category } from './Core';
const Plastik = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Category />
        <h1>Plastik</h1>
      </main>
      <Footer />
    </div>
  );
};

export default Plastik;
