import { useEffect, useState } from "react";
import "./ApproveEvents.css";

function ApproveEvents() {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const res = await fetch(
        "http://localhost:3001/eventos?status=PENDENTE"
      );
      const data = await res.json();
      setEvents(data);
    } catch (err) {
      console.error("Erro ao carregar eventos:", err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const approveEvent = async (id) => {
    try {
      await fetch(`http://localhost:3001/eventos/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "APROVADO" })
      });

      fetchEvents();
    } catch (err) {
      console.error("Erro ao aprovar evento:", err);
    }
  };

  const rejectEvent = async (id) => {
    try {
      await fetch(`http://localhost:3001/eventos/${id}`, {
        method: "DELETE"
      });

      fetchEvents();
    } catch (err) {
      console.error("Erro ao rejeitar evento:", err);
    }
  };

  return (
    <div className="approve-page">
      <h2 className="approve-title">Aprovar Eventos</h2>

      <div className="approve-list">
        {events.length === 0 ? (
          <p>Nenhum evento pendente.</p>
        ) : (
          events.map((event) => (
            <div key={event.id} className="approve-card">
              <h3>{event.title}</h3>

              <p>
                <strong>Data:</strong> {event.date}
              </p>

              <p>
                <strong>Modalidade:</strong> {event.modality}
              </p>

              <p className="approve-desc">{event.description}</p>

              <div className="approve-actions">
                <button
                  onClick={() => approveEvent(event.id)}
                  className="approve-btn approve-btn-yes"
                >
                  Aprovar
                </button>

                <button
                  onClick={() => rejectEvent(event.id)}
                  className="approve-btn approve-btn-no"
                >
                  Rejeitar
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ApproveEvents;
