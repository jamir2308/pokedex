import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  CircularProgress,
  Toolbar,
  AppBar,
  TextField,
} from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";

const Pokedex = (props) => {
  // const { history } = props;
  const [pokemonData, setPokemonData] = useState({});
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=25`)
      .then(function (response) {
        const { data } = response;
        const { results } = data;
        const newPokemonData = {};
        results.forEach((pokemon, index) => {
          newPokemonData[index + 1] = {
            id: index + 1,
            name: pokemon.name,
            sprite: `https://pokeres.bastionbot.org/images/pokemon/${
              index + 1
            }.png`,
          };
        });
        setPokemonData(newPokemonData);
      });
  }, []);

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  const getPokemonCard = (pokemonId) => {
    const { id, name, sprite } = pokemonData[pokemonId];

    return (
      <section className="pokedex" key={pokemonId}>
        <div className="container-card">
          <div className="card">
            <Link to={/pokemon/ + id}>
              <img src={sprite} alt={name} />
              <h3 className="name">{name}</h3>
              <h3 className="name">{`# ${id}`}</h3>
            </Link>
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      <h1>Bienvenido al Pokedex</h1>
      <AppBar position="static">
        <Toolbar>
          <div>
            <SearchIcon />
            <TextField
              onChange={handleSearchChange}
              label="Busca un pokemon"
              variant="standard"
            />
          </div>
        </Toolbar>
      </AppBar>
      {pokemonData ? (
        <div>
          {Object.keys(pokemonData).map(
            (pokemonId) =>
              pokemonData[pokemonId].name.includes(filter) &&
              getPokemonCard(pokemonId)
          )}
        </div>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};
export default Pokedex;
