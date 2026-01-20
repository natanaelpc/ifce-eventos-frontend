import { useEffect, useState } from "react";
import api from "../services/APIService";
import "./Events.css";

function Home() {
  const [meusAgendamentos, setMeusAgendamentos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Funções utilitárias para formatar o que vem do Java
  const formatarData = (dataISO) => {
    if (!dataISO) return "";
    return dataISO.split('-').reverse().join('/');
  };

  const formatarHora = (horaString) => {
    if (!horaString) return "";
    return horaString.substring(0, 5);
  };

  useEffect(() => {
    const fetchMeusAgendamentos = async () => {
      try {
        setLoading(true);
        const res = await api.get("/api/usuario/me/agendamentos");
        setMeusAgendamentos(res.data);
      } catch (err) {
        console.error("Erro ao carregar inscrições:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMeusAgendamentos();
  }, []);

  if (loading) {
    return <div className="eventos-page"><p>Carregando eventos...</p></div>;
  }

return (
  <div className="eventos-page">
    <h1 className="eventos-title">Meus Eventos</h1>

    {meusAgendamentos.length === 0 ? (
      <p>Você ainda não se inscreveu em nenhum agendamento de evento.</p>
    ) : (
      <div className="event-grid">
        {meusAgendamentos.map((agendamento) => (
          <div key={agendamento.id} className="event-card">
            <div className="card-content">
              <h3 className="card-title">
                {agendamento.evento.titulo}
              </h3>

              <p className="card-info">
                <strong>Data:</strong>{" "}
                {formatarData(agendamento.data)}
              </p>

              <p className="card-info">
                <strong>Horário:</strong>{" "}
                {formatarHora(agendamento.horaInicio)} às{" "}
                {formatarHora(agendamento.horaFim)}
              </p>

              <p className="card-info">
                <strong>Local:</strong>{" "}
                {agendamento.lugar?.nome || "Local não informado"}
              </p>

              <p className="card-info">
                <strong>Modalidade:</strong>{" "}
                {agendamento.evento.remote ? "Remoto" : "Presencial"}
              </p>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);

}

export default Home;
