import React from "react";
import {Routes, Route} from "react-router-dom"

import "bulma/css/bulma.min.css"

import Navbar from "./components/Navbar"

import HomePage from "./pages/HomePage"
import FavoritesPage from "./pages/FavoritesPage"
import PokemonPage from "./pages/PokemonPage"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={< FavoritesPage />} />
        <Route path="/pokemon/:pokemon_id/" element={<PokemonPage />} />
      </Routes>
    </div>
  );
}

export default App;
