import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function Pokemon() {
  const [poke, setPoke] = useState([]);
  const [pokemonType, setPokemonType] = useState([]);
  const [pokemonAbilities, setPokemonAbilities] = useState("");
  const [pokemonSprites, setPokemonSprites] = useState("");
  const [pokemonAnterior, setPokemonAnterior] = useState("");
  const [pokemoSucesor, setPokemonSucesor ] = useState("");
  const { id } = useParams();
  //console.log(id);

  useEffect(() => {
    async function getData() {
      let response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      let pokeData = await response.json();
      setPoke(pokeData);
      setPokemonType(pokeData.types[0].type.name);
      setPokemonAbilities(pokeData.abilities[0].ability.name);
      setPokemonSprites(pokeData.sprites.back_default);
    }

    getData()
}, [id])


useEffect(() => {
  async function getEvo() {
    let r = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${id}`
    );  
    let specieData = await r.json();
    let evoChain =  await fetch(specieData.evolution_chain.url)
    let evoData = await evoChain.json();
    let anteriorDe = evoData.chain.evolves_to[0].evolves_to[0].species;
    // let sucesorDe  = specieData.evolves_from_species;
    setPokemonAnterior(anteriorDe.name);
    // if (sucesorDe.name !== '') setPokemonSucesor('');
    
  }
  getEvo()

}, [id])
// console.log(pokemonEvo)
  return (
    <div className="container-detail">
      <Link to="/">Volver</Link>
      <h3 >{poke.name}</h3>
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
          <h3>Habilidad principal: <i>{pokemonAbilities}</i></h3>
          <h3>Evolución máxima: <i>{pokemonAnterior}</i></h3>
        </section>
      </div>
    </div>
    
  );

  }