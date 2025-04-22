export default function CharacterCard({ character, onSelect }) {
    return (
      <div
        className="border rounded shadow hover:shadow-lg p-2 cursor-pointer bg-white"
        onClick={() => onSelect(character)}
      >
        <img src={character.image} alt={character.name} className="rounded w-full" />
        <h2 className="mt-2 text-center font-semibold">{character.name}</h2>
      </div>
    );
  }
  