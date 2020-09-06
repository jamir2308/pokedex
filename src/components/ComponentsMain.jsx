import React, { useState, useEffect } from "react";

export default function ComponentsMain() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=25")
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

  const FetchPokemonData = data.map((pokemon, index) => {
    return (
      <div className="" key={index}>
        <div className="">
          <div className="">
            <img
              src={`https://pokeres.bastionbot.org/images/pokemon/${
                index + 1
              }.png`}
              className=""
              alt={pokemon.name}
            />
          </div>
          <div className="info">
            <span className="number">#{pokemon.name}</span>
            <h3 className="name">{pokemon.name}</h3>
            {/* <small className="type">Type: <span>${type}</span></small> */}
          </div>
        </div>
      </div>
    );
  });

  return <div className="row">{FetchPokemonData}</div>;
}
