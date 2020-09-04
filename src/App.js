import React from 'react';
import './App.css';
import PokemonsList from './components/PokemonsList';
import { useContext } from 'react';
import { PokemonContext } from './PokemonContext';

useContext(PokemonContext); // returns the context provider value we created

const App = () => (
  <PokemonProvider>
    <div className="App">
      <PokemonsList />
      <Pokedex />
    </div>
  </PokemonProvider>
);

export default App;