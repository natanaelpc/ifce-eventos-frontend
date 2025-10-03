// src/App.js
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      {/* Passamos a função pro Header */}
      <Header toggleSidebar={toggleSidebar} />

      <div className="app-container">
        {/* Sidebar à esquerda */}
        <Sidebar isOpen={isOpen} />

        {/* Conteúdo principal que se ajusta */}
        <main className={`content ${isOpen ? "content-shift" : ""}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/sobre" element={<About />} /> */}
            {/* <Route path="/contato" element={<Contact />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
