<<<<<<< HEAD
import React from 'react';
import './App.css';
import PokemonsList from './components/PokemonsList';
import { useContext } from 'react';
import { PokemonContext } from './PokemonContext';
=======
import React from "react";

import "./App.css";
import ComponentsMain from "./components/ComponentsMain";
>>>>>>> df0099ba996dfdb6310755a672837175a60c63d9

useContext(PokemonContext); // returns the context provider value we created

const App = () => (
  <PokemonProvider>
    <div className="App">
<<<<<<< HEAD
      <PokemonsList />
      <Pokedex />
=======
      <ComponentsMain />
>>>>>>> df0099ba996dfdb6310755a672837175a60c63d9
    </div>
  </PokemonProvider>
);

export default App;