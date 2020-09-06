import React, { useState, useEffect } from "react";
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
export default function Pokemon() {
const [poke, setPoke] = useState([]);
const [pokemonType, setPokemonType] = useState("");
const [pokemonAbilities, setPokemonAbilities] = useState("");
const [pokemonSpecies, setPokemonSpecies] = useState("");
const [pokemonSprites, setPokemonSprites] = useState("");
const {id} = useParams()
console.log (id)

    useEffect(() => {
        getData() 
    }, [])
    
  const getData = async() => {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}?limit=25`)
    let pokeData = await response.json()
    setPoke(pokeData)
    setPokemonType(pokeData.types[0].type.name);
    setPokemonAbilities(pokeData.abilities[0].ability.name);
    setPokemonSprites(pokeData.sprites.back_default);
    console.log(pokeData)
  }

  useEffect(() => {
    getSpecies() 
}, [])

const getSpecies = async() => {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id.text}`)
    let especies = await response.json()
    // setPokemonSpecies(species.name)
    console.log(especies)
  }
    return (
     <div className="container-detail" >
      <Link to ="/">
       Volver
      </Link>
      <h3>{poke.name}</h3>   
     <div className="card detail" >
            
        <section>
           <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt={poke.name} />
        <img src={pokemonSprites}/>
         </section>
        <section> 
           <h3>Tipo: {pokemonType}</h3>
           <h3>Altura: {poke.height} cm</h3>
           <h3>Peso: {poke.weight} lbs</h3>
           <h3>Habilidad principal: {pokemonAbilities}</h3>
           <h3>Especies: {pokemonSpecies}</h3>
           
        </section>
    </div>
    </div>
    )
}