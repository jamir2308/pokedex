import React, { useState, useEffect } from "react";

export default function ComponentsMain() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=25  ?{id}")
      .then((r) => r.json())
      .then((allpokemon) => {
        setData(allpokemon.results);
      });
  }, []);

  // console.log(
  //   data.map((pokemon, index) => {
  //     return pokemon.name + "  " + index;
  //   })
  // );
console.log(data)
  const FetchPokemonData = data.map((pokemon, index) => {
    return (
      <div key={index} className="card" >
        
          <img
            src={`https://pokeres.bastionbot.org/images/pokemon/${
              index + 1
            }.png`}
            alt={pokemon.name}
          />  
          <h3 className="name">{pokemon.name}</h3>
      </div>
      
    );
  });
  return (<section className="pokedex">
    <h1>Bienvenido al Pokedex</h1>
  <div className="container-card" >{FetchPokemonData}</div>
  </section>
  )
}