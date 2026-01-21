import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaPaintBrush } from "react-icons/fa";
import "./Profile.css";

const Perfil = () => {
  const navigate = useNavigate();

  const [nome, setNome] = useState("Usuário");
  const [email, setEmail] = useState("Email");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return;

    const fetchUsuario = async () => {
      try {
        const response = await fetch("/api/usuario", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Erro ao buscar dados do usuário");
        }

        const data = await response.json();

        setNome(data.nome || "Usuário");
        setEmail(data.email || "Email");
      } catch (error) {
        console.error("Erro ao carregar perfil:", error);
      }
    };

    fetchUsuario();
  }, []);

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

        <h2>Configurações de Conta</h2>
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
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite seu nome"
              />
            </div>
          </section>

          <section>
            <h3>Informações para Contato</h3>
            <p className="perfil-note">
              Esses dados são privados e serão usados apenas para entrarmos em
              contato com você para fins de emissão de ingressos ou premiações.
            </p>

            <div className="perfil-field">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu email"
              />
            </div>

            <div className="perfil-field">
              <label>Cidade/Município:</label>
              <input type="text" placeholder="Digite a cidade" />
            </div>

            <div className="perfil-field">
              <label>País:</label>
              <input type="text" placeholder="Digite o país" />
            </div>
          </section>

          <button type="button" className="perfil-save-btn">
            Salvar meu perfil
          </button>
        </form>
      </main>
    </div>
  );
};

export default Perfil;
