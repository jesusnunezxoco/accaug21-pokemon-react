import React, { useState, useEffect } from "react";
import axios from "axios"
import { useParams } from "react-router-dom";
function PokemonPage() {
  const [pokemon, setPokemon] = useState({
    name: "bulbasaur",
    id: 1,
    image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    height: "10"
  });
  const params = useParams();
  
  useEffect(() => {
    let url = `https://pokeapi.co/api/v2/pokemon/${params.pokemon_id}`
    axios.get(url)
    .then((response) => {
      // let data = response.data
      let {data} = response
      console.log(data)
      setPokemon({
        name: data.name,
        id: data.id,
        image: data.sprites.front_default,
        height: data.height
      })
    })
    .catch(err => console.log(err))


  }, [])

  
  return (
    <div>
      <img src={pokemon.image} alt={pokemon.name} />
      <h1>
        {pokemon.name} #{pokemon.id}
      </h1>
      <ul>
        <li>Height: {pokemon.height}</li>
        <li>Height: {pokemon.height}</li>
      </ul>
    </div>
  );
}

export default PokemonPage;
