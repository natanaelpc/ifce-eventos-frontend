import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaPaintBrush } from "react-icons/fa";
import "./Profile.css";

const Perfil = () => {
  const navigate = useNavigate();

  return (
    <div className="perfil-wrapper">
      {/* Sidebar */}
      <aside className="perfil-sidebar">
        {/* Botão voltar */}
        <button
          className="perfil-back-icon"
          onClick={() => navigate("/home")}
          aria-label="Voltar para Home"
        >
          <FaArrowLeft />
        </button>

        <h2>Configurações de Conta</h2>
        <ul>
          <li className="active">Informações da conta</li>
          <li>Alterar e-mail</li>
          <li>Senha</li>
        </ul>
      </aside>

      {/* Conteúdo principal */}
      <main className="perfil-main">
        <h1>Informações da Conta</h1>

        {/* Foto de perfil */}
        <div className="perfil-photo-section">
          <div className="perfil-photo">
            <img
              src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
              alt="Foto de Perfil"
            />

            {/* Botão editar foto */}
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
              <label>Primeiro nome:</label>
              <input type="text" placeholder="Digite o primeiro nome" />
            </div>

            <div className="perfil-field">
              <label>Sobrenome:</label>
              <input type="text" placeholder="Digite o sobrenome" />
            </div>

          </section>

          <section>
            <h3>Informações para Contato</h3>
            <p className="perfil-note">
              Esses dados são privados e serão usados apenas para entrarmos em
              contato com você para fins de emissão de ingressos ou premiações.
            </p>

            <div className="perfil-field">
              <label>Número de telefone:</label>
              <input type="text" placeholder="Digite o número de telefone" />
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
