import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Events from "./pages/Events";
import RequestEvent from "./pages/RequestEvent";
import ApproveEvents from "./pages/ApproveEvents";
import Scheduling from "./pages/Scheduling";
import Doubts from "./pages/Doubts";
import Certificates from "./pages/Certificates";
import Help from "./pages/Help";
import Profile from "./pages/Profile";
import CertificateView from "./pages/CertificateView";

import Layout from "./components/Layout";
import ProtectedRoute from "./routes/ProtectedRoute";

import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Routes>

        {/* rotas públicas */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* rotas privadas */}

        {/* home */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Layout isOpen={isOpen} toggleSidebar={toggleSidebar}>
                <Home />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* perfil */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
                <Profile />
            </ProtectedRoute>
          }
        />

        {/* eventos disponíveis */}
        <Route
          path="/events"
          element={
            <ProtectedRoute>
              <Layout isOpen={isOpen} toggleSidebar={toggleSidebar}>
                <Events />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* ADMIN e PROFESSOR */}
        <Route
          path="/request-event"
          element={
            <ProtectedRoute allowedRoles={["ADMIN", "PROFESSOR"]}>
              <Layout isOpen={isOpen} toggleSidebar={toggleSidebar}>
                <RequestEvent />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* ADMIN */}
        <Route
          path="/approve-event"
          element={
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <Layout isOpen={isOpen} toggleSidebar={toggleSidebar}>
                <ApproveEvents />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* ADMIN */}
        <Route
          path="/scheduling"
          element={
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <Layout isOpen={isOpen} toggleSidebar={toggleSidebar}>
                <Scheduling />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* dúvidas */}
        <Route
          path="/doubts"
          element={
            <ProtectedRoute>
              <Layout isOpen={isOpen} toggleSidebar={toggleSidebar}>
                <Doubts />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* certificados */}
        <Route
          path="/certificates"
          element={
            <ProtectedRoute>
              <Layout isOpen={isOpen} toggleSidebar={toggleSidebar}>
                <Certificates />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* visualização de certificado */}
        <Route
          path="/certificate/:id"
          element={
            <ProtectedRoute>
              <Layout isOpen={isOpen} toggleSidebar={toggleSidebar}>
                <CertificateView />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/help-feedback"
          element={
            <ProtectedRoute>
              <Layout isOpen={isOpen} toggleSidebar={toggleSidebar}>
                <Help />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/home" replace />} />

      </Routes>
    </Router>
  );
}

export default App;
