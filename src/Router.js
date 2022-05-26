import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Bantuan from './Pages/Bantuan';
import PindaiSampah from './Pages/PindaiSampah';
import Login from './Pages/Login';
import Register from './Pages/Register';

// After Login
import MarketPlace from './PagesAfter/MarketPlace';

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
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Register />
      </Route>
      <Route exact path="/marketplace">
        <MarketPlace />
      </Route>
    </Switch>
  );
};

export default Router;
