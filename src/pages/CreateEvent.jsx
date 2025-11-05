// src/pages/CreateEvent.jsx
import { useState } from "react";
import "./CreateEvent.css";

function CreateEvent() {
  const [eventList, setEventList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const newEvent = {
      id: Date.now(),
      title: formData.get("title"),
      type: formData.get("type"),
      description: formData.get("description"),
      time: formData.get("time"),
      date: formData.get("date"),
      category: selectedCategory,
      location: formData.get("location"),
    };

    try {
      // =======================================================
      // Integração com o back-end:
      /*
      const response = await fetch("http://localhost:5000/api/eventos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
      });

      if (!response.ok) {
        throw new Error("Erro ao criar evento");
      }

      const savedEvent = await response.json(); // evento salvo no banco
      setEventList((prev) => [...prev, savedEvent]);
      */

      // =======================================================
      // Simulação local (sem backend)
      setEventList((prev) => [...prev, newEvent]);

      // =======================================================
      // Limpa o formulário
      e.target.reset();
      setSelectedCategory(null);
    } catch (error) {
      console.error("Erro ao criar evento:", error);
      alert("Não foi possível criar o evento. Tente novamente.");
    }
  };

  return (
    <div className="create-event-container">
      <h2 className="page-title">Criar Evento</h2>

      <form className="event-form" onSubmit={handleSubmit}>
        {/* Linha 1 - Título e Tipo */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="title">Título</label>
            <input id="title" name="title" type="text" placeholder="Digite o título do evento" required />
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

        {/* Linha 2 - Descrição, Horário e Data */}
        <div className="form-row">
          <div className="form-group flex-2">
            <label htmlFor="description">Descrição</label>
            <input id="description" name="description" type="text" placeholder="Descreva o evento brevemente" required />
          </div>

          <div className="form-group">
            <label htmlFor="time">Horário</label>
            <input id="time" name="time" type="time" required />
          </div>

          <div className="form-group">
            <label htmlFor="date">Data</label>
            <input id="date" name="date" type="date" required />
          </div>
        </div>

        {/* Linha 3 - Categoria */}
        <div className="form-row">
          <div className="form-group full">
            <label htmlFor="category">Categoria</label>
            <div className="category-list">
              {["Tecnologia", "Literatura", "Esportes", "Lazer", "Outros"].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`category ${selectedCategory === cat ? "selected" : ""}`}
                  onClick={() => handleCategorySelect(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Linha 4 - Localidade */}
        <div className="form-row">
          <div className="form-group full">
            <label htmlFor="location">Localidade</label>
            <input id="location" name="location" type="text" placeholder="Informe o local do evento" required />
          </div>
        </div>

        {/* Linha 5 - Botão */}
        <div className="form-row center">
          <button type="submit" className="btn-primary">Criar Evento</button>
        </div>
      </form>

      {/* Exibição dos cards */}
      <div className="event-cards-container">
        {eventList.map((ev) => (
          <div className="event-card" key={ev.id}>
            <h3>{ev.title}</h3>
            <p><strong>Tipo:</strong> {ev.type}</p>
            <p><strong>Descrição:</strong> {ev.description}</p>
            <p><strong>Data:</strong> {ev.date}</p>
            <p><strong>Horário:</strong> {ev.time}</p>
            <p><strong>Categoria:</strong> {ev.category}</p>
            <p><strong>Local:</strong> {ev.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateEvent;