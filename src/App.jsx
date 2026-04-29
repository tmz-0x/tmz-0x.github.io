import Bugs from './pages/Bugs.jsx'
import Home from './pages/Home.jsx'   
import Projects from './pages/Projects.jsx'
import Skills from './pages/Skills.jsx'
import CTF from './pages/CTF.jsx'
import Sidebar from './Component/Sidebar.jsx'
import './App.css'; 
import { HashRouter, Routes, Route } from 'react-router-dom'

function App() {
  

  return (
   <HashRouter>
      <div className="page">
          <div class="bg-grid"></div>
  <div class="bg-glow1"></div>
  <div class="bg-glow2"></div>
  <div class="scan"></div>


        <Sidebar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/ctf" element={<CTF />} />
            <Route path="/bugs" element={<Bugs />} />          
          </Routes>
        </main>
      </div>
    </HashRouter>
  )
}

export default App
