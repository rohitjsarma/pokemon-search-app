// app/page.jsx
'use client';

import { useState } from 'react';
import SearchForm from '../components/SearchForm';
import PokemonCard from '../components/PokemonCard';
import usePokemon from '../hooks/usePokemon';

export default function HomePage() {
  const { types, pokemons, filterPokemons } = usePokemon();
  const [search, setSearch] = useState('');
  const [type, setType] = useState('');

  const filtered = filterPokemons(type, search);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Pokémon Search</h1>
      <SearchForm types={types} search={search} setSearch={setSearch} type={type} setType={setType} />
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        {filtered.map(pokemon => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}
