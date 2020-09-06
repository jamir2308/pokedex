import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ComponentsMain() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=25")
      .then((r) => r.json())
      .then((allpokemon) => {
        setData(allpokemon.results);
      });
  }, []);

  // let fetchData = async(pokemon) => {
  //   let url = pokemon.url
  //     let response = await fetch(url)
  //     let pokeData = await response.json()
  //     return pokeData
  //   }
  // const verDetallePokemon = async(e) => {
  //   e.preventDefault()
  //   let data = await fetchData({url:e.target.href})
  //   console.log(data)
  // }

  const FetchPokemonData = data.map((pokemon, index) => {
    return (
      <div key={index} className="card">
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

  return (
    <section className="pokedex">
      <h1>Bienvenido al Pokedex</h1>
      <div className="container-card">{FetchPokemonData}</div>
    </section>
  );
}
