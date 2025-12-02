import { useState } from "react";
import "./RequestEvent.css";

function RequestEvent() {
  const [eventList, setEventList] = useState(() => {
    // carrega do localStorage ao iniciar (modo de simulação)
    const saved = localStorage.getItem("eventList");
    return saved ? JSON.parse(saved) : [];
  });
  const [selectedModality, setSelectedModality] = useState(null);

  const handleModalitySelect = (mod) => {
    setSelectedModality(mod);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const newEvent = {
      title: formData.get("title"),
      type: formData.get("type"),
      description: formData.get("description"),
      date: formData.get("date"),
      time: formData.get("time"),
      category: selectedModality,
      location: formData.get("location"),
    };

    try {
      // =======================================================
      // integração com o backend (Spring Boot)
      /*
      const response = await fetch("http://localhost:8080/api/eventos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
      });

      if (!response.ok) throw new Error("Erro ao criar evento");
      const savedEvent = await response.json();

      setEventList((prev) => [...prev, savedEvent]);
      */

      // =======================================================
      // simulação local (sem backend)
      const simulatedEvent = { id: Date.now(), ...newEvent };
      setEventList((prev) => {
        const updated = [...prev, simulatedEvent];
        localStorage.setItem("eventList", JSON.stringify(updated));
        return updated;
      });

      // =======================================================
      // limpa formulário
      e.target.reset();
      setSelectedModality(null);
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
            <label htmlFor="type">Tipo</label>
            <select id="type" name="type" required>
              <option value="">Selecione...</option>
              <option value="Palestra">Palestra</option>
              <option value="Minicurso">Minicurso</option>
              <option value="Workshop">Workshop</option>
              <option value="Oficina">Oficina</option>
            </select>
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
                  className={`category ${selectedModality === mod ? "selected" : ""}`}
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
            Criar Evento
          </button>
        </div>
      </form>
    </div>
  );


}

export default RequestEvent;
