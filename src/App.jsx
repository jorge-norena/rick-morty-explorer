import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CharacterPage from './pages/CharacterPage';
import Layout from './Layout';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="character/:id" element={<CharacterPage />} />
      </Route>
    </Routes>
  );
}
