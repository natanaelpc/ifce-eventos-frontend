// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Header /> {/* Cabeçalho visível em todas as páginas */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/sobre" element={<About />} /> */}
        {/* <Route path="/contato" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
