import React from "react";
import "./App.css";
import ComponentsMain from "./components/ComponentsMain";
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import Pokemon from "./components/pokemon";

const App = () => (
<div className="App">
  <BrowserRouter>
     
      <Switch>
      <Route path="/pokemon/:id">
      <Pokemon />
      </Route>
      <Route path="/">
         <ComponentsMain />
      </Route>
    </Switch>    
  </BrowserRouter>
  </div>
);

export default App;