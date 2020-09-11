import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function Pokemon() {
  const [poke, setPoke] = useState([]);
  const [pokemonType, setPokemonType] = useState([]);
  const [pokemonAbilities, setPokemonAbilities] = useState("");
  const [pokemonSprites, setPokemonSprites] = useState("");
  const [pokemon1, setPokemon1] = useState("");
  const [pokemon2, setPokemon2] = useState("");
  const [pokemon3, setPokemon3] = useState("");
  const { id } = useParams();
  //console.log(id);

  useEffect(() => {
    async function getData() {
      let response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      let pokeData = await response.json();
      setPoke(pokeData);
      setPokemonType(pokeData.types.map((t) => t.type.name).join(', '));
      setPokemonAbilities(pokeData.abilities.map((h) => h.ability.name).join(', '));
      setPokemonSprites(pokeData.sprites.back_default);
    }

    getData()
}, [id])


useEffect(() => {
  async function getEvo() {
    let r = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${id}`);  
    let specieData = await r.json();
    let evoChain =  await fetch(specieData.evolution_chain.url)
    let evoData = await evoChain.json();
    setPokemon1(evoData.chain.species.name);
    setPokemon2(evoData.chain.evolves_to[0].species.name); 
    let trompas= evoData.chain.evolves_to[0].evolves_to[0]===undefined?"no tiene":evoData.chain.evolves_to[0].evolves_to[0].species.name;
    setPokemon3(trompas);
  }
  getEvo()

}, [id])


// console.log(pokemonEvo)
  return (
    <div className="container-detail">
      <Link to="/">Volver</Link>
      <h3>{poke.name}</h3>
      <div className="card detail">
        <section>
          <img
            src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
            alt={poke.name}
          />
          <img src={pokemonSprites} alt={poke.name} />
        </section>
        <section>
          <h3>Tipo: <i>{pokemonType}</i></h3>
          <h3>Altura: <i>{poke.height}</i> pulgadas</h3>
          <h3>Peso: <i>{poke.weight}</i> lbs</h3>
          <h3>Habilidades: <i>{pokemonAbilities}</i></h3>
          <h3>Evolución 1: <i> {pokemon1}  </i></h3>
          <h3>Evolución 2: <i> {pokemon2} </i></h3>
          <h3>Evolución 3: <i> {pokemon3}</i></h3> 
        </section>
      </div>
    </div>
    
  );

  }