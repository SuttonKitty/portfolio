import { Routes, Route } from 'react-router-dom'

import HemPage from './pages/HemPage'
import WorkPage from './pages/WorkPage'
import NotesPage from './pages/NotesPage'

import Nav from './components/Nav'
import Title from './components/Title'
import Footer from './components/Footer'

import './index.css'

function App() {
  return (
    <div id="main" className='flex flex-col gap-9 md:gap-0'>
      {/* <div id="loader">
            <div class="spinner"></div>
            <div class="loading-text">finding the stuck pixels…</div>
        </div> */}

      <div>
        <Title />

        <Nav />
      </div>  

      <Routes>
        <Route path="/" element={<HemPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/notes" element={<NotesPage />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App