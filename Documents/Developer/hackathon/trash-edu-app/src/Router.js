import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Bantuan from './Pages/Bantuan';
import PindaiSampah from './Pages/PindaiSampah';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/bantuan">
        <Bantuan />
      </Route>
      <Route exact path="/pindai-sampah">
        <PindaiSampah />
      </Route>
    </Switch>
  );
};

export default Router;
