import React from 'react';
import './App.css'
import HomePage from "./componants/HomePage";
import Beers from "./componants/Beers";
import BeerDetails from "./componants/BeerDetails";
import RandomBeer from "./componants/RandomBeer";

import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/beers/:id" component={BeerDetails} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/" component={HomePage} /> 
      </Switch>
    </div>
  );
}

export default App;
