import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaPaintBrush } from "react-icons/fa";
import "./Profile.css";
import api from "../services/APIService";

const Perfil = () => {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        setLoading(true);

        const res = await api.get("/api/usuario");

        setUsuario(res.data);
      } catch (error) {
        console.error("Erro ao carregar perfil:", error);
        alert("Não foi possível carregar os dados do usuário.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsuario();
  }, []);

  if (loading) {
    return (
      <div className="perfil-wrapper">
        <p>Carregando perfil...</p>
      </div>
    );
  }

  if (!usuario) {
    return (
      <div className="perfil-wrapper">
        <p>Usuário não encontrado.</p>
      </div>
    );
  }

  return (
    <div className="perfil-wrapper">
      {/* Sidebar */}
      <aside className="perfil-sidebar">
        <button
          className="perfil-back-icon"
          onClick={() => navigate("/home")}
          aria-label="Voltar para Home"
        >
          <FaArrowLeft />
        </button>

        <h2>Informações de Conta</h2>
      </aside>

      {/* Conteúdo principal */}
      <main className="perfil-main">
        {/* Foto de perfil */}
        <div className="perfil-photo-section">
          <div className="perfil-photo">
            <img
              src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
              alt="Foto de Perfil"
            />

            <button
              type="button"
              className="perfil-photo-edit"
              aria-label="Editar foto de perfil"
            >
              <FaPaintBrush />
            </button>
          </div>

          <p className="perfil-photo-label">Foto de Perfil</p>
        </div>

        {/* Formulário */}
        <form className="perfil-form">
          <section>
            <h3>Informações do perfil</h3>

            <div className="perfil-field">
              <label>Nome:</label>
              <input type="text" value={usuario.nome || ""} disabled />
            </div>

            <div className="perfil-field">
              <label>Email:</label>
              <input type="email" value={usuario.email || ""} disabled />
            </div>

            <div className="perfil-field">
              <label>Tipo de usuário:</label>
              <input type="text" value={usuario.tipoUsuario || ""} disabled />
            </div>
          </section>

        </form>
      </main>
    </div>
  );
};

export default Perfil;
