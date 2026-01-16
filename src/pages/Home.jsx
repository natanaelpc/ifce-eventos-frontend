import { useEffect, useState } from "react";
import api from "../services/APIService";

function Home() {
  const [myEvents, setMyEvents] = useState([]);

  useEffect(() => {
    const fetchMyEvents = async () => {
      try {
        const res = await api.get("/api/usuario/me/agendamentos");
        setMyEvents(res.data);
      } catch (err) {
        console.error("Erro ao carregar inscrições:", err);
      }
    };

    fetchMyEvents();
  }, []);

  return (
    <div>
      <h1>Meus Eventos</h1>

      {myEvents.length === 0 ? (
        <p>Você ainda não se inscreveu em nenhum evento.</p>
      ) : (
        myEvents.map((event) => (
          <div key={event.id} style={{ marginBottom: "16px" }}>
            <h3>{event.title}</h3>

            <p>
              <strong>Data:</strong> {event.date}
            </p>

            <p>
              <strong>Horário:</strong> {event.startTime} às {event.endTime}
            </p>

            <p>
              <strong>Local:</strong> {event.local}
            </p>

            <p>
              <strong>Modalidade:</strong> {event.modality}
            </p>

            <span>Status: {event.status}</span>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
