import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import CharacterCard from '../components/CharacterCard';

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page')) || 1;

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
      .then(res => {
        setCharacters(res.data.results);
        setPageInfo(res.data.info);
      });
  }, [currentPage]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {characters.map(char => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>

      <div className="flex justify-between items-center mt-6">
        <button
          onClick={() => setSearchParams({ page: currentPage - 1 })}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded disabled:opacity-50"
        >
          ← Anterior
        </button>

        <span className="font-semibold">
          Página {currentPage} de {pageInfo.pages ?? '...'}
        </span>

        <button
          onClick={() => setSearchParams({ page: currentPage + 1 })}
          disabled={!pageInfo.next}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded disabled:opacity-50"
        >
          Siguiente →
        </button>
      </div>
    </div>
  );
}