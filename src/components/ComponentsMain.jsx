import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Toolbar, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
// usando yarn

export default function ComponentsMain() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=25")
      .then((r) => r.json())
      .then((allpokemon) => {
        setData(allpokemon.results);
      });
  }, []);

  const FetchPokemonData = data.map((pokemon, index) => {
    return (
      <div key={index} className="card" id="tarjeta">
        <Link to={/pokemon/ + (index + 1)}>
          <img
            src={`https://pokeres.bastionbot.org/images/pokemon/${
              index + 1
            }.png`}
            alt={pokemon.name}
          />
          <h3 className="name">{pokemon.name}</h3>
        </Link>
      </div>
    );
  });

  // const Busqueda = FetchPokemonData.filter((objeto) => {
  //   let buscar = document.getElementById("id").value;
  //   return objeto.map((name, index) => {});
  // });

  return (
    <section className="pokedex">
      <h1>Bienvenido al Pokedex</h1>
      {/* <form action="#" id="form">
        <input type="text" placeholder="busca un pokemon" id="valor" />
        <button>search</button>
      </form> */}
      <Toolbar>
        <div className="search">
          <SearchIcon />
          <TextField
            onChange={handleSearchChange}
            label="Busca un pokemon"
            variant="standard"
          />
        </div>
      </Toolbar>
      <div className="container-card">{FetchPokemonData}</div>
    </section>
  );
}
