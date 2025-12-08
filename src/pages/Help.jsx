// src/pages/Help.jsx
import "./Help.css";

function Help() {
  return (
    <div className="help-container">
      <h1 className="help-title">Ajuda & Feedbacks</h1>

      <p className="help-description">
        Aqui você pode tirar suas dúvidas, relatar problemas ou enviar sugestões
        para melhorar nosso sistema de eventos.
      </p>

      <div className="help-card">
        <h2>Enviar Feedback</h2>
        <form className="help-form">
          <label>
            Seu nome:
            <input type="text" placeholder="Digite seu nome" />
          </label>

          <label>
            Seu e-mail:
            <input type="email" placeholder="email@exemplo.com" />
          </label>

          <label>
            Tipo de mensagem:
            <select>
              <option value="duvida">Dúvida</option>
              <option value="problema">Relatar Problema</option>
              <option value="sugestao">Sugestão</option>
            </select>
          </label>

          <label>
            Mensagem:
            <textarea placeholder="Descreva sua mensagem aqui..." rows={5}></textarea>
          </label>

          <button type="submit" className="help-button">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Help;
