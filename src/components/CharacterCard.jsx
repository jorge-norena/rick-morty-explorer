import { Link, useSearchParams } from 'react-router-dom';

export default function CharacterCard({ character }) {
  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get('page') || 1;

  return (
    <Link to={`/character/${character.id}?page=${currentPage}`} className="block border rounded shadow hover:shadow-lg p-2 bg-white">
      <img src={character.image} alt={character.name} className="rounded w-full" />
      <h2 className="mt-2 text-center font-semibold">{character.name}</h2>
    </Link>
  );
}