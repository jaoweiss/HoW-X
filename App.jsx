import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contato from './pages/Contato'
import Avisos from './pages/Avisos'
import Navbar from './components/navbar'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/avisos" element={<Avisos />} />
      </Routes>
    </Router>
  )
}