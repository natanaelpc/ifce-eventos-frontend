import { useEffect, useState } from "react";

function Home() {
  const [myEvents, setMyEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/inscricoes")
      .then((res) => res.json())
      .then((data) => setMyEvents(data))
      .catch((err) => console.error("Erro ao carregar inscrições:", err));
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
