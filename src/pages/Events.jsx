import { useEffect, useState } from "react";
import "./Events.css";

function Eventos() {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const res = await fetch("http://localhost:3001/eventos?status=APROVADO");
      const data = await res.json();
      setEvents(data);
    } catch (err) {
      console.error("Erro ao carregar eventos:", err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleSubscribe = (id) => {
    alert(`Inscrito no evento ID: ${id}`);
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
                <p className="card-author">Autor: {event.author}</p>

                <p className="card-desc">{event.description}</p>
                <p className="card-info"><strong>Data:</strong> {event.date}</p>
                <p className="card-info"><strong>Modalidade:</strong> {event.modality}</p>

                <div className="card-footer">
                  <button
                    className="btn-subscribe"
                    onClick={() => handleSubscribe(event.id)}
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
