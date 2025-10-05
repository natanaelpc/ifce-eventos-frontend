// src/App.js
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Events from "./pages/Events"
import CreateEvent from "./pages/CreateEvent"
import Doubts from "./pages/Doubts";
import Certificates from "./pages/Certificates";
import Help from "./pages/Help";
import Layout from "./components/Layout";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Routes>
        {/* Páginas sem Header/Sidebar */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Páginas com Header/Sidebar */}
        <Route path="/home" element={
          <Layout isOpen={isOpen} toggleSidebar={toggleSidebar}> <Home /> </Layout>
        } />

        <Route path="/events" element={
          <Layout isOpen={isOpen} toggleSidebar={toggleSidebar}> <Events /> </Layout>
        } />
        
        <Route path="/create-event" element={
          <Layout isOpen={isOpen} toggleSidebar={toggleSidebar}> <CreateEvent /> </Layout>
        } />
        
        <Route path="/doubts" element={
          <Layout isOpen={isOpen} toggleSidebar={toggleSidebar}> <Doubts /> </Layout>
        } />
        
        <Route path="/certificates" element={
          <Layout isOpen={isOpen} toggleSidebar={toggleSidebar}> <Certificates /> </Layout>
        } />
        
        <Route path="/help-feedback" element={
          <Layout isOpen={isOpen} toggleSidebar={toggleSidebar}> <Help /> </Layout>
        } />




      </Routes>

    </Router>
  );
}

export default App;
