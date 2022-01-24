import React, {useState, useEffect} from 'react';
import axios from "axios"

import PokeCard from "../components/PokeCard"

function HomePage() {
  const [pokecards, setPokecards] = useState([
    {
      name: "bulbasaur",
      id: 1,
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    },
    {
      name: "ivysaur",
      id: 2,
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
    },
    {
      name: "venusaur",
      id: 3,
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
    }
  ])

  useEffect(() => {
    let url = `https://pokeapi.co/api/v2/pokemon/`

      axios.get(url)
      .then(response => {
       
        let newPokemon = response.data.results.map((p) => {
          // convert url to
          let pokeUrl = p.url.split("/");
          // extract pokemon id from the url from response
          let id = Number(pokeUrl[pokeUrl.length - 2]);
          // return an object
          return {
            id: id,
            name: p.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
          };
        });
        setPokecards(newPokemon)
      })
      .catch(err => console.log(err))
      
  }, [])

    let gridStyle = {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr"
    }
  const cards = pokecards.map(card => (
    <PokeCard 
      name={card.name}
      id={card.id}
      key={card.id}
      image={card.image}
    />
  ))
  return (<div>
    <h1>HomePage</h1>
    <div style={gridStyle}>
    {cards}
    </div>
  </div>)
}

export default HomePage;
