"use client";

import { useState } from "react";
import Pokeball from "./components/Pokeball";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";

const API_BASE = "https://pokeapi.co/api/v2/pokemon/";

export default function Home() {
  const [query, setQuery]     = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState(false);

  const spriteSrc = pokemon
    ? pokemon.sprites?.other?.["official-artwork"]?.front_default || pokemon.sprites?.front_default || ""
    : "";

  const pokeName = loading ? "..." : error ? "ERR" : pokemon
    ? pokemon.name.toUpperCase().slice(0, 9)
    : "---";

  const pokeAbout = loading ? "Loading..." : error ? "Not found!" : pokemon
    ? `Ht:${(pokemon.height / 10).toFixed(1)}m Wt:${(pokemon.weight / 10).toFixed(1)}kg`
    : "Height: -- Weight: --";

  const pokeType = pokemon
    ? pokemon.types.map((t) => t.type.name.toUpperCase()).join(" / ")
    : "---";

  const pokeId = pokemon
    ? "#" + String(pokemon.id).padStart(3, "0")
    : "---";

  async function searchPokemon() {
    const q = query.trim().toLowerCase();
    if (!q) return;
    setLoading(true);
    setError(false);
    setPokemon(null);
    try {
      const res = await fetch(API_BASE + q);
      if (!res.ok) throw new Error("Not found");
      const data = await res.json();
      setPokemon(data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="w-full h-[20vh] flex justify-center items-center">
        <svg viewBox="0 0 500 100" width="80%" height="80%">
          <text x="250" y="78" textAnchor="middle"
            fontFamily="'Press Start 2P', cursive"
            fontSize="52" fill="#FFCB05"
            stroke="#2a6db5" strokeWidth="7"
            paintOrder="stroke fill" letterSpacing="1">
            POKEMON
          </text>
        </svg>
      </div>

      <div className="w-full h-[80px] flex justify-center items-center gap-2">
        <input
          type="text"
          placeholder="Name / id"
          className="font-pixel text-xs text-center h-10 rounded border border-gray-400 px-2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && searchPokemon()}
        />
        <Pokeball onClick={searchPokemon} />
      </div>

      <div className="flex rounded-[10px]" style={{ height: "342px", width: "456px" }}>
        <LeftPanel spriteSrc={spriteSrc} loading={loading} pokeName={pokeName} />
        <RightPanel pokeAbout={pokeAbout} pokeType={pokeType} pokeId={pokeId} />
      </div>
    </>
  );
}