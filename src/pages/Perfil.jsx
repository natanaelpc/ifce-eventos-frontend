import React from "react";
import "./Perfil.css";

const Perfil = () => {
  return (
    <div className="perfil-wrapper">
      {/* Sidebar */}
      <aside className="perfil-sidebar">
        <h2>Configurações de Conta</h2>
        <ul>
          <li className="active">Informações da conta</li>
          <li>Alterar e-mail</li>
          <li>Senha</li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="perfil-main">
        <h1>Informações da Conta</h1>

        {/* Foto de perfil */}
        <div className="perfil-photo-section">
          <div className="perfil-photo">
            <img
              src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
              alt="Foto de Perfil"
            />
            <div className="perfil-photo-overlay">
              <span role="img" aria-label="camera">
                📷
              </span>
            </div>
          </div>
          <p className="perfil-photo-label">Foto de Perfil</p>
        </div>

        {/* Formulário */}
        <form className="perfil-form">
          <section>
            <h3>Informações do perfil</h3>
            <div className="perfil-field">
              <label>Primeiro nome:</label>
              <input type="text" placeholder="Enter first name" />
            </div>
            <div className="perfil-field">
              <label>Sobrenome:</label>
              <input type="text" placeholder="Enter last name" />
            </div>
            <div className="perfil-field">
              <label>Site:</label>
              <input type="text" placeholder="Enter website" />
            </div>
            <div className="perfil-field">
              <label>Empresa:</label>
              <input type="text" placeholder="Enter company name" />
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
              <input type="text" placeholder="Enter phone number" />
            </div>
            <div className="perfil-field">
              <label>Endereço:</label>
              <input type="text" placeholder="Enter address" />
            </div>
            <div className="perfil-field">
              <label>Cidade/Município:</label>
              <input type="text" placeholder="Enter city" />
            </div>
            <div className="perfil-field">
              <label>País:</label>
              <input type="text" placeholder="Enter country" />
            </div>
          </section>

          <button type="button" className="perfil-save-btn">
            Save My Profile
          </button>
        </form>
      </main>
    </div>
  );
};

export default Perfil;
