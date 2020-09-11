import React from "react";
import "./App.css";
import Pokedex from "./components/Pokedex";
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Pokemon from "./components/Pokemon";


let Compo = () => <Pokedex />;
let Poke = () => <Pokemon />;
const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition key={location.key} classNames="slide" timeout={1000}>
      <Switch location={location}>
        <Route path="/pokemon/:id" component={Poke} exact />
        <Route path="/" component={Compo} exact />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AnimatedSwitch />
      </BrowserRouter>
    </div>
  );
}
