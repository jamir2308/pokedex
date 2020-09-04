
import React, { useState } from 'react'
import { useEffect } from 'react'
const url = "https://pokeapi.co/api/v2/pokemon?limit=25"

export default function Filtro() {
    const [PokemonFilter, setPokemonFilter] = useState([]);
  useEffect(() => {
            fetch(url)
            .then(r => r.json())
            .then(data => {
             setPokemonFilter(data.results)
            })
    }, [])
    console.log( PokemonFilter )
    const mostrarNombres = PokemonFilter.map((pokemon, i) => {
      return <div key={i}>
          <div>{pokemon.name}</div>
          <div>
            <a href={pokemon.url}>Enlace</a></div>
          </div>
    });
  console.log( PokemonFilter )
      return (
        <div className="pokemons-filter">
             {mostrarNombres}
        </div>
      )
 }

    //   useEffect(() => {
//     const fetchPokemons = async () => {
//       const response = await fetch(url);
//       const data = await response.json();
//       setPokemonFilter(data.results);
//     };
//     fetchPokemons();
//   }, []);