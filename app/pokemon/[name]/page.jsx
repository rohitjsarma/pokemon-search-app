// app/pokemon/[name]/page.jsx

export default async function PokemonDetailPage({ params }) {
  const { name } = params;

  if (!name) {
    return <div className="p-6">Pokémon name not found.</div>;
  }

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
  if (!res.ok) {
    return <div className="p-6">Failed to load Pokémon details.</div>;
  }

  const data = await res.json();

  return (
    <div className="p-6">
      <nav className="mb-4 text-sm text-gray-600">
        <span>Home</span> &gt; <span className="capitalize font-semibold">{data.name}</span>
      </nav>

      <h1 className="text-2xl font-bold capitalize mb-4">{data.name}</h1>
      <img src={data.sprites.front_default} alt={data.name} className="w-32 h-32 mb-4" />

      <div className="text-sm space-y-2">
        <p><strong>Height:</strong> {data.height}</p>
        <p><strong>Weight:</strong> {data.weight}</p>
        <p><strong>Types:</strong> {data.types.map(t => t.type.name).join(', ')}</p>
        <p><strong>Abilities:</strong> {data.abilities.map(a => a.ability.name).join(', ')}</p>
      </div>
    </div>
  );
}
