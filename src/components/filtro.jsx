
import React, { useState } from 'react'
import { useEffect } from 'react'

export default function Filtro() {
    const [PokemonFetch, setPokemonFetch] = useState(""); 
    const [PokeItem, setPokeItem] = useState([]); 

  useEffect(() => {
            fetch(`https://pokeapi.co/api/v2/pokemon/?limit=10`)
            .then(r => r.json())
            .then(allpokemon => {
             setPokemonFetch(allpokemon.results.forEach(function(pokemon){
             fetchPokemonData(pokemon); 
            }))
            })
    }, [])
    console.log(PokemonFetch);

    function fetchPokemonData(pokemon){
      let url = pokemon.url
        fetch(url)
        .then(response => response.json())
        .then(function(pokeData){
          setPokeItem(pokeData)
        })
      }

      const mostrarNombres = PokeItem.map((poke, i) => {
        return <div key={i}>
            <div className="divTableCell">{poke.name}</div>
            </div>
      });
      return (
        <div className="pokemons-filter">
 
            <h4>Hola mundo</h4>

        <div id="poke-container">
             {mostrarNombres}
        </div>
        </div>
      )
 }

    //   useEffect(() => {
//     const fetchPokemons = async () => {
//       const response = await fetch(url);
//       const data = await response.json();
//       setPokemonFetch(data.results);
//     };
//     fetchPokemons();
//   }, []);


 /*
      let mostrarNombres = PokeItem.map((pokemon, i) => {
        return <div key={i}>
            <div>{pokemon.name}</div>
            </div>
      });
     

      let mostrarNombres = PokemonFetch.map((pokemon, i) => {
        return <div key={i}>
            <div>{pokemon.name}</div>
            </div>
      });
      
       
     let mostrarPokemon = (pokeData) => {
      let pokeName = document.createElement('h4')
      pokeName.innerText = pokeData.name
     } 

    
     function renderPokemon(pokeData){
        let allPokemonContainer = document.getElementById('poke-container');
        let pokeContainer = document.createElement("div") //div will be used to hold the data/details for indiviual pokemon.{}
        let pokeName = document.createElement('h4')
        pokeName.innerText = pokeData.name
        let pokeNumber = document.createElement('p')
        pokeNumber.innerText = `#${pokeData.id}`
        let pokeTypes = document.createElement('ul') 
        //ul list will hold the pokemon types
        createTypes(pokeData.types, pokeTypes) 
        // helper function to go through the types array and create li tags for each one
        pokeContainer.append(pokeName, pokeNumber, pokeTypes);   
        //appending all details to the pokeContainer div
        allPokemonContainer.appendChild(pokeContainer);       
        //appending that pokeContainer div to the main div which will                                                             hold all the pokemon cards
        }
        function createTypes(types, ul){
          types.forEach(function(type){
          let typeLi = document.createElement('li');
          typeLi.innerText = type['type']['name'];
          ul.append(typeLi)
          })
        }

    const llamadoPok = PokemonFetch.forEach(pokemon => {
      fetchPokemonData(pokemon);
    });

    useEffect((pokemon) => {
        let url = pokemon.url // <--- this is saving the pokemon url to a      variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
          fetch(url)
          .then(response => response.json())
          .then(function(pokeData){
            setPokemonItem(pokeData.results)
          })
        }, [])

      console.log(PokemonItem)

    const llamadoPok = PokemonFetch.forEach(pokemon => {
      fetchPokemonData(pokemon); 
    });
   
    function fetchPokemonData(pokemon){
      let url = pokemon.url // <--- this is saving the pokemon url to a      variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
        fetch(url)
        .then(response => response.json())
        .then(function(pokeData){
        console.log(pokeData)
        })
      }
    */ 

    //  PokemonFetch.forEach(pokemon => {
    //    fetchPokemonData(pokemon); 
    //  });

    // useEffect((pokemon) => {
    //   let url = pokemon.url // <--- this is saving the pokemon url to a      variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
    //     fetch(url)
    //     .then(response => response.json())
    //     .then(function(pokeData){
    //       setPokemonItem(pokeData.results)
    //     })
    //   }, [])
