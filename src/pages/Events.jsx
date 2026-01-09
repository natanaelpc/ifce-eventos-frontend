import { useEffect, useState } from "react";
import "./Events.css";

function Eventos() {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const res = await fetch(
        "http://localhost:3001/eventos?status=APROVADO"
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

  const handleSubscribe = async (event) => {
    try {
      const inscricao = {
        eventId: event.id,
        title: event.title,
        date: event.date,
        modality: event.modality,
        status: "INSCRITO"
      };

      await fetch("http://localhost:3001/inscricoes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inscricao)
      });

      alert("Inscrição realizada com sucesso!");
    } catch (err) {
      console.error("Erro ao se inscrever:", err);
      alert("Erro ao se inscrever no evento");
    }
  };

  return (
    <div className="eventos-page">
      <h2 className="eventos-title">Eventos Disponíveis</h2>

      <div className="event-grid">
        {events.length === 0 ? (
          <p>Nenhum evento disponível.</p>
        ) : (
          events.map((event) => (
            <div key={event.id} className="event-card">
              <div className="card-content">
                <h3 className="card-title">{event.title}</h3>

                <p className="card-desc">{event.description}</p>

                <p className="card-info">
                  <strong>Data:</strong> {event.date}
                </p>

                <p className="card-info">
                  <strong>Modalidade:</strong> {event.modality}
                </p>

                <div className="card-footer">
                  <button
                    className="btn-subscribe"
                    onClick={() => handleSubscribe(event)}
                  >
                    Inscrever-se
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Eventos;
