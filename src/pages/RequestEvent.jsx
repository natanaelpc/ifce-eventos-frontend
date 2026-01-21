import { useState } from "react";
import api from "../services/APIService";
import "./RequestEvent.css";

function RequestEvent() {
  const [selectedModality, setSelectedModality] = useState(null);

  const handleModalitySelect = (mod) => {
    setSelectedModality(mod);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedModality) {
      alert("Selecione uma modalidade");
      return;
    }

    const formData = new FormData(e.target);

    // converte modalidade em boolean
    const isRemote = selectedModality === "Remota";

    const newEvent = {
      titulo: formData.get("title"),
      descricao: formData.get("description"),
      remote: isRemote,
      dataPrevista: formData.get("date"),
    };

    try {
      await api.post("/api/evento", newEvent);

      e.target.reset();
      setSelectedModality(null);

      alert("Evento solicitado com sucesso!");
    } catch (error) {
      console.error("Erro ao criar evento:", error);
      alert("Não foi possível criar o evento. Tente novamente.");
    }
  };

  return (
    <div className="request-event-container">
      <h2 className="page-title">Solicitar Evento</h2>

      <form className="event-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="title">Título</label>
            <input id="title" name="title" type="text" required />
          </div>

          <div className="form-group small">
            <label htmlFor="date">Data</label>
            <input id="date" name="date" type="date" required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group full">
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              name="description"
              rows="4"
              required
            ></textarea>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group full">
            <label>Modalidade</label>
            <div className="category-list">
              {["Presencial", "Remota"].map((mod) => (
                <button
                  key={mod}
                  type="button"
                  className={`category ${
                    selectedModality === mod ? "selected" : ""
                  }`}
                  onClick={() => handleModalitySelect(mod)}
                >
                  {mod}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="form-row center">
          <button type="submit" className="btn-primary">
            Solicitar Evento
          </button>
        </div>
      </form>
    </div>
  );
}

export default RequestEvent;
