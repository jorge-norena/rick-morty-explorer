import { useEffect, useState } from "react";
import axios from "axios";

export default function CharacterDetail({ character, onBack }) {
  const [firstEpisode, setFirstEpisode] = useState(null);

  useEffect(() => {
    if (character.episode.length > 0) {
      const firstEpisodeUrl = character.episode[0];
      axios.get(firstEpisodeUrl).then(res => setFirstEpisode(res.data));
    }
  }, [character]);

  return (
    <div className="bg-white p-4 rounded shadow space-y-4">
      <button
        onClick={onBack}
        className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
      >
        ← Volver
      </button>

      <div className="flex flex-col md:flex-row items-center gap-4">
        <img src={character.image} alt={character.name} className="rounded w-48" />
        <div>
          <h2 className="text-2xl font-bold">{character.name}</h2>
          <p><strong>Estado:</strong> {character.status}</p>
          <p><strong>Especie:</strong> {character.species}</p>
          <p><strong>Género:</strong> {character.gender}</p>
          <p><strong>Ubicación:</strong> {character.location.name}</p>
          {firstEpisode && (
            <p><strong>Primer episodio:</strong> {firstEpisode.name} ({firstEpisode.episode})</p>
          )}
        </div>
      </div>
    </div>
  );
}
