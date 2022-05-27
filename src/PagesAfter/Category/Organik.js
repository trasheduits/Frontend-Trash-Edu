import React from 'react';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import { Category } from './Core';
const Organik = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Category />
        <h1>Organik</h1>
      </main>
      <Footer />
    </div>
  );
};

export default Organik;
