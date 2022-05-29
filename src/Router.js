import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Bantuan from './Pages/Bantuan';
import PindaiSampah from './Pages/PindaiSampah';
import PindaiSampahResult from './Pages/PindaiSampahResult';
import Login from './Pages/Login';
import Register from './Pages/Register';
import {
  B3,
  Kain,
  Kayu,
  Kertas,
  Organik,
  Plastik,
} from './PagesAfter/Category/index';
import ProductDetail from './PagesAfter/ProductDetail';

// After Login
import MarketPlace from './PagesAfter/MarketPlace';
import RekomendasiHarga from './PagesAfter/RekomendasiHarda';

const categoryLink = `/category`;
const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/bantuan">
        <Bantuan />
      </Route>
      <Route path="/pindai-sampah">
        <PindaiSampah />
      </Route>
      <Route path="/pindai-sampah-result">
        <PindaiSampahResult />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Register />
      </Route>
      <Route exact path="/marketplace">
        <MarketPlace />
      </Route>
      <Route exact path="/product-detail">
        <ProductDetail />
      </Route>
      <Route exact path="/rekomendasi-harga">
        <RekomendasiHarga />
      </Route>
      {/* Category */}
      <Route exact path={`${categoryLink}/plastik`}>
        <Plastik />
      </Route>
      <Route exact path={`${categoryLink}/kayu`}>
        <Kayu />
      </Route>
      <Route exact path={`${categoryLink}/b3`}>
        <B3 />
      </Route>
      <Route exact path={`${categoryLink}/kain`}>
        <Kain />
      </Route>
      <Route exact path={`${categoryLink}/organik`}>
        <Organik />
      </Route>
      <Route exact path={`${categoryLink}/kertas`}>
        <Kertas />
      </Route>
      <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
    </Switch>
  );
};

export default Router;
