import { Routes, Route } from 'react-router-dom';

import HemPage from './pages/HemPage';
import WorkPage from './pages/WorkPage';
import NotesPage from './pages/NotesPage';

import Nav from './components/Nav';
import Title from './components/Title';
import Footer from './components/Footer';

import './index.css';

function App() {
  return (
    <div
      id="main"
      className="flex flex-col items-center gap-9 md:gap-0"
    >
      
      <div className="flex flex-col items-center gap-2 md:gap-4">
        <Title />
        <Nav />
      </div>

      <div className="flex flex-col w-full items-center">
        <Routes>
          <Route path="/" element={<HemPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/notes" element={<NotesPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
