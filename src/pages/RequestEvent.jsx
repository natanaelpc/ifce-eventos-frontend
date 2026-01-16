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

    const newEvent = {
      title: formData.get("title"),
      description: formData.get("description"),
      date: formData.get("date"),
      modality: selectedModality,
      status: "PENDENTE"
    };

    try {
      await api.post("/evento", newEvent);

      // limpa formulário
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
            <label htmlFor="modality">Modalidade</label>
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
