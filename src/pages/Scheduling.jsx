import { useEffect, useState } from "react";
import api from "../services/APIService";
import "./Scheduling.css";

function Scheduling() {
  const [showForm, setShowForm] = useState(false);
  const [events, setEvents] = useState([]);
  const [lugares, setLugares] = useState([]);
  const [salvando, setSalvando] = useState(false);

  const [formData, setFormData] = useState({
    eventoId: "",
    lugarId: "",
    data: "",
    horaInicio: "",
    horaFim: "",
  });

  // puxa os eventos aprovados
  const fetchEvents = async () => {
    try {
      const res = await api.get("/api/evento/aprovados");
      setEvents(res.data);
    } catch (err) {
      console.error("Erro ao carregar eventos:", err);
    }
  };

  // puxar todos os lugares cadastrados do sistema
  const fetchLugares = async () => {
    try {
      const res = await api.get("/api/lugar/listar");
      setLugares(res.data);
    } catch (err) {
      console.error("Erro ao carregar lugares:", err);
    }
  };

  useEffect(() => {
    fetchEvents();
    fetchLugares();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEventoChange = (e) => {
    const eventoId = e.target.value;

    const eventoSelecionado = events.find((event) => event.id === eventoId);

    setFormData((prev) => ({
      ...prev,
      eventoId,
      data: eventoSelecionado?.dataPrevista || "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.eventoId) {
      alert("Selecione um evento!");
      return;
    }

    if (!formData.lugarId) {
      alert("Selecione um lugar!");
      return;
    }

    // novo agendamento a ser criado
    const novoAgendamento = {
      eventoId: formData.eventoId,
      lugarId: formData.lugarId,
      data: formData.data,
      horaInicio: formData.horaInicio,
      horaFim: formData.horaFim,
    };

    try {
      setSalvando(true);

      await api.post("/api/agendamento", novoAgendamento);

      alert("Agendamento criado com sucesso!");

      setShowForm(false);
      setFormData({
        eventoId: "",
        lugarId: "",
        data: "",
        horaInicio: "",
        horaFim: "",
      });

      // remove evento já agendado da lista
      // setEvents((prev) =>
      //   prev.filter((event) => event.id !== formData.eventoId),
      // );
    } catch (err) {
      console.error("Erro ao criar agendamento:", err);
      alert("Erro ao criar agendamento");
    } finally {
      setSalvando(false);
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
              name="eventoId"
              value={formData.eventoId}
              onChange={handleEventoChange}
              required
            >
              <option value="">Selecione um evento</option>

              {events.map((event) => (
                <option key={event.id} value={event.id}>
                  {event.titulo}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Local</label>
            <select
              name="lugarId"
              value={formData.lugarId}
              onChange={handleChange}
              required
            >
              <option value="">Selecione o local</option>

              {lugares.map((lugar) => (
                <option key={lugar.id} value={lugar.id}>
                  {lugar.nome}
                </option>
              ))}
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Data</label>
              <input
                type="date"
                name="data"
                value={formData.data}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group small">
              <label>Hora início</label>
              <input
                type="time"
                name="horaInicio"
                value={formData.horaInicio}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group small">
              <label>Hora fim</label>
              <input
                type="time"
                name="horaFim"
                value={formData.horaFim}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-primary" disabled={salvando}>
              {salvando ? "Criando..." : "Criar"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Scheduling;
