import { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import axios from 'axios';

export default function CharacterPage() {
  const { id } = useParams();
  const location = useLocation();
  const page = new URLSearchParams(location.search).get('page') || 1;

  const [character, setCharacter] = useState(null);
  const [episode, setEpisode] = useState(null);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => {
        setCharacter(res.data);
        return axios.get(res.data.episode[0]);
      })
      .then(res => setEpisode(res.data));
  }, [id]);

  if (!character) return <p className="text-center">Cargando personaje...</p>;

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded shadow space-y-4">
      <Link to={`/?page=${page}`} className="text-purple-600 hover:underline">← Volver</Link>

      <div className="flex flex-col md:flex-row gap-4 items-center">
        <img src={character.image} alt={character.name} className="rounded w-48" />
        <div>
          <h2 className="text-2xl font-bold">{character.name}</h2>
          <p><strong>Estado:</strong> {character.status}</p>
          <p><strong>Especie:</strong> {character.species}</p>
          <p><strong>Género:</strong> {character.gender}</p>
          <p><strong>Ubicación:</strong> {character.location.name}</p>
          {episode && (
            <p><strong>Primer episodio:</strong> {episode.name} ({episode.episode})</p>
          )}
        </div>
      </div>
    </div>
  );
}