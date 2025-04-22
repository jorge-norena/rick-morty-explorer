// Header.jsx
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-green-600 text-white p-4 shadow">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Rick & Morty Explorer</Link>
        <span className="text-sm">by Jorge 🚀</span>
      </div>
    </header>
  );
}
