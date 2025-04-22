import { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './components/CharacterCard';
import CharacterDetail from './components/CharacterDetail';

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [selected, setSelected] = useState(null);
  const [pageInfo, setPageInfo] = useState({});
const [currentPage, setCurrentPage] = useState(1);

useEffect(() => {
  axios.get(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
    .then(res => {
      setCharacters(res.data.results);
      setPageInfo(res.data.info);
    })
    .catch(err => console.error(err));
    window.scrollTo(0, 0);
}, [currentPage]);

  const handleSelect = (character) => {
    setSelected(character);
  };

  const handleBack = () => {
    setSelected(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 border">
      <h1 className="text-3xl font-bold text-center mb-4 text-green-600">Rick & Morty Explorer</h1>

      {!selected ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {characters.map((char) => (
            <CharacterCard key={char.id} character={char} onSelect={handleSelect} />
          ))}
        </div>
      ) : (
        <CharacterDetail character={selected} onBack={handleBack} />
      )}

{!selected && (
  <div className="flex justify-between items-center mt-6">
    <button
      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
      disabled={!pageInfo.prev}
      className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded disabled:opacity-50"
    >
      ← Anterior
    </button>
    <span>Página {currentPage} de {pageInfo.pages}</span>
    <button
      onClick={() => setCurrentPage(prev => prev + 1)}
      disabled={!pageInfo.next}
      className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded disabled:opacity-50"
    >
      Siguiente →
    </button>
  </div>
)}
    </div>
    
  );
}
