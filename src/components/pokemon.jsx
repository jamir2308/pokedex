import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function Pokemon() {
  const [poke, setPoke] = useState([]);
  const [pokemonType, setPokemonType] = useState([]);
  const [pokemonAbilities, setPokemonAbilities] = useState("");
  const { id } = useParams();
  //console.log(id);

  useEffect(() => {
    getData();
  }, []);
  for (var index = 0; index < 3; index++) {}
  const getData = async () => {
    let response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${id}?limit=25`
    );
    let pokeData = await response.json();
    setPoke(pokeData);
    setPokemonType(pokeData.types[0].type.name);
    setPokemonAbilities(pokeData.abilities[0].ability.name);
    console.log(pokeData);
  };

  console.log(pokemonType);

  return (
    <div>
      <Link to="/">Volver</Link>
      <h3>Nombre: {poke.name} </h3>
      <h3>Tipo: {pokemonType}</h3>
      <h3>Altura: {poke.height} cm</h3>
      <h3>Peso: {poke.weight} lbs</h3>
      <h3>Habilidad principal: {pokemonAbilities}</h3>
      <img
        src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
        alt={poke.name}
      />
    </div>
  );
}
