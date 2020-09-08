import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import axios from "axios";

export default function ComponentsMain() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredPokes, setFilteredPokes] = useState([]);
  
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?limit=25`)
      .then(response => response.json())
      .then(allpokemon => {
        setData(allpokemon.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data);

  useEffect(() => {
    setFilteredPokes(
      data.filter((pokes) =>
      pokes.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, data]);

  const FetchPokemonData = {filteredPokes.map((pokemon, index) => {
    <div key={index} className="card" >
      <Link to ={ /pokemon/+(index+1)}>
        <img
          src={`https://pokeres.bastionbot.org/images/pokemon/${index + 1}.png`}
          alt={pokemon.name}
        />  
        <h3 className="name">{pokemon.name}</h3>
        </Link>
        
    </div>
    })
 }
  
  return (
    <section className="pokedex">
    <h1>Bienvenido al Pokedex</h1>
    <input
        type="text"
        placeholder="Filtra un Poke"
        onChange={(e) => setSearch(e.target.value)}
      />
    

     
       
    </section>
      );
    }

    // const PokesDetail = (props) => {
    //   const { name,index } = props;
    
    //   return (
    //     <>
    //       <div className="container-card" >
    //       <Link to ={ /pokemon/+(index)}>
    //         <img src={`https://pokeres.bastionbot.org/images/pokemon/${index + 1}.png`} alt={name} />
    //       <h3 className="name">{name}</h3>
    //       </Link>
    //       </div>
    //     </>
    //   );
    // };

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

//   const FetchPokemonData = data.map((pokemon, index) => {
   
//       <div key={index} className="card" >
//         <Link to ={ /pokemon/+(index+1)}>
//           <img
//             src={`https://pokeres.bastionbot.org/images/pokemon/${index + 1}.png`}
//             alt={pokemon.name}
//           />  
//           <h3 className="name">{pokemon.name}</h3>
//           </Link>
//       </div>
     
//     );
//   });
  
//   return (<section className="pokedex">
//     <h1>Bienvenido al Pokedex</h1>
//   <div className="container-card" >{FetchPokemonData}</div>
//   </section>
//   )
// }