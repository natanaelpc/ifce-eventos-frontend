// src/pages/CreateEvent.jsx
import "./CreateEvent.css";

function CreateEvent() {
  return (
    <div className="create-event-container">
      <h2 className="page-title">Criar Evento</h2>

      <form className="event-form">
        {/* Linha 1 - Título e Tipo */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="title">Título</label>
            <input id="title" type="text" placeholder="Digite o título do evento" required />
          </div>

          <div className="form-group small">
            <label htmlFor="type">Tipo</label>
            <select id="type" required>
              <option value="presencial">Palestra</option>
              <option value="online">Minicurso</option>
              <option value="híbrido">Workshop</option>
              <option value="híbrido">Oficina</option>
            </select>
          </div>
        </div>

        {/* Linha 2 - Descrição, Horário e Data */}
        <div className="form-row">
          <div className="form-group flex-2">
            <label htmlFor="description">Descrição</label>
            <input id="description" type="text" placeholder="Descreva o evento brevemente" required />
          </div>

          <div className="form-group">
            <label htmlFor="time">Horário</label>
            <input id="time" type="time" required />
          </div>

          <div className="form-group">
            <label htmlFor="date">Data</label>
            <input id="date" type="date" required />
          </div>
        </div>

        {/* Linha 3 - Categoria */}
        <div className="form-row">
          <div className="form-group full">
            <label htmlFor="category">Categoria</label>
            <div className="category-list">
              <button type="button" className="category">Tecnologia</button>
              <button type="button" className="category">Literatura</button>
              <button type="button" className="category">Esportes</button>
              <button type="button" className="category">Lazer</button>
              <button type="button" className="category">Outros</button>
            </div>
          </div>
        </div>

        {/* Linha 4 - Localidade */}
        <div className="form-row">
          <div className="form-group full">
            <label htmlFor="location">Localidade</label>
            <input id="location" type="text" placeholder="Informe o local do evento" required />
          </div>
        </div>

        {/* Linha 5 - Botão */}
        <div className="form-row center">
          <button type="submit" className="btn-primary">Criar Evento</button>
        </div>
      </form>
    </div>
  );
}

export default CreateEvent;
