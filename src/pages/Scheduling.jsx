import { useEffect, useState } from "react";
import "./Scheduling.css";

function Scheduling() {
  const [showForm, setShowForm] = useState(false);
  const [events, setEvents] = useState([]);

  const [formData, setFormData] = useState({
    eventId: "",
    local: "",
    date: "",
    startTime: "",
    endTime:""
  });

  useEffect(() => {
    fetch("http://localhost:3001/eventos?status=APROVADO")
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(err => console.error("Erro ao carregar eventos:", err));
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("http://localhost:3001/agendamentos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      alert("Agendamento criado com sucesso!");
      setShowForm(false);
      setFormData({
        eventId: "",
        local: "",
        date: "",
        startTime: "",
        endTime: ""
      });
    } catch (err) {
      console.error(err);
      alert("Erro ao criar agendamento");
    }
  };

  return (
    <div className="scheduling-page">
      <h2>Criar Agendamento</h2>

      {!showForm && (
        <button className="btn-primary" onClick={() => setShowForm(true)}>
          Criar agendamento
        </button>
      )}

      {showForm && (
        <form className="scheduling-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Evento</label>
            <select
              name="eventId"
              value={formData.eventId}
              onChange={handleChange}
              required
            >
              <option value="">Selecione um evento</option>
              {events.map(event => (
                <option key={event.id} value={event.id}>
                  {event.title}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Local</label>
            <select
              name="local"
              value={formData.local}
              onChange={handleChange}
              required
            >
              <option value="">Selecione o local</option>
              <option value="Auditório">Auditório</option>
              <option value="Laboratório">Laboratório</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
            <label>Data</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group small">
              <label>Hora início</label>
              <input
                type="time"
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group small">
              <label>Hora fim</label>
              <input
                type="time"
                name="endTime"
                value={formData.endTime}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-primary">
              Criar
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Scheduling;
