import React from "react";

import "./App.css";
import ComponentsMain from "./components/ComponentsMain";

useContext(PokemonContext); // returns the context provider value we created

const App = () => (
  <PokemonProvider>
    <div className="App">
      <ComponentsMain />
    </div>
  </PokemonProvider>
);

export default App;