import { useEffect, useState } from 'react';

const usePokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      // Fetch Pokémon types
      const typesRes = await fetch('https://pokeapi.co/api/v2/type');
      const typesData = await typesRes.json();
      setTypes(typesData.results);

      // Fetch Pokémon list
      const pokemonsRes = await fetch('https://pokeapi.co/api/v2/pokemon?limit=30');
      const pokemonsData = await pokemonsRes.json();
      const detailedPokemons = await Promise.all(
        pokemonsData.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          const data = await res.json();
          return {
            name: pokemon.name,
            image: data.sprites.front_default,
            types: data.types.map(type => type.type.name),
          };
        })
      );
      setPokemons(detailedPokemons);
    };

    fetchPokemonData();
  }, []);

  const filterPokemons = (type, search) => {
    return pokemons.filter(pokemon => {
      const matchesType = type ? pokemon.types.includes(type) : true;
      const matchesSearch = pokemon.name.toLowerCase().includes(search.toLowerCase());
      return matchesType && matchesSearch;
    });
  };

  return { types, pokemons, filterPokemons };
};

export default usePokemon;
