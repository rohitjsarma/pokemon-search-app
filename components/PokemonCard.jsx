import Link from 'next/link';

export default function PokemonCard({ pokemon }) {
  return (
    <Link href={`/pokemon/${pokemon.name}`}>
      <div className="border rounded-lg p-4 hover:bg-gray-100 cursor-pointer">
        <img src={pokemon.image} alt={pokemon.name} className="w-24 h-24 mx-auto" />
        <h2 className="text-center mt-2 capitalize font-semibold">{pokemon.name}</h2>
      </div>
    </Link>
  );
}
