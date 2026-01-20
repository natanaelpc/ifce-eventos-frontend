import { useEffect, useState } from "react";
import api from "../services/APIService";

function Home() {
  const [meusAgendamentos, setMeusAgendamentos] = useState([]);

  useEffect(() => {
    const fetchMeusAgendamentos = async () => {
      try {
        const res = await api.get("/api/usuario/me/agendamentos");
        fetchMeusAgendamentos(res.data);
      } catch (err) {
        console.error("Erro ao carregar inscrições:", err);
      }
    };

    fetchMeusAgendamentos();
  }, []);

  return (
    <div>
      <h1>Meus Eventos</h1>

      {meusAgendamentos.length === 0 ? (
        <p>Você ainda não se inscreveu em nenhum agendamento de evento.</p>
      ) : (
        meusAgendamentos.map((agendamento) => (
          <div key={agendamento.id} style={{ marginBottom: "16px" }}>
            {/* puxar titulo do evento do agendamento */}
            <h3>{agendamento.title}</h3>

            <p>
              <strong>Data:</strong> {agendamento.data}
            </p>

            <p>
              <strong>Horário:</strong> {agendamento.horaInicio} às {agendamento.horaFim}
            </p>

            <p>
              {/* puxar local pelo agendamento */}
              <strong>Local:</strong> {agendamento.local}
            </p>

            <p>
              {/* puxar do evento */}
              <strong>Modalidade:</strong> {agendamento.modality}
            </p>
            
            {/* puxar do evento */}
            <span>Status: {agendamento.status}</span>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
