import { useEffect, useState } from "react";
import "./Events.css";

function Eventos() {
  const [agendamentos, setAgendamentos] = useState([]);

  const fetchAgendamentos = async () => {
    try {
      const res = await fetch("http://localhost:3001/agendamentos");
      const data = await res.json();
      setAgendamentos(data);
    } catch (err) {
      console.error("Erro ao carregar eventos:", err);
    }
  };

  useEffect(() => {
    fetchAgendamentos();
  }, []);

  const handleSubscribe = async (agendamento) => {
    try {
      const inscricao = {
        eventId: agendamento.eventId,
        title: agendamento.title,
        date: agendamento.date,
        modality: agendamento.modality,
        startTime: agendamento.startTime,
        endTime: agendamento.endTime,
        local: agendamento.local,
        status: "INSCRITO"
      };

      // cria inscrição
      await fetch("http://localhost:3001/inscricoes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inscricao)
      });

      // remove evento disponível
      await fetch(`http://localhost:3001/agendamentos/${agendamento.id}`, {
        method: "DELETE"
      });

      // atualiza lista
      setAgendamentos(
        agendamentos.filter(a => a.id !== agendamento.id)
      );

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
        {agendamentos.length === 0 ? (
          <p>Nenhum evento disponível.</p>
        ) : (
          agendamentos.map((agendamento) => (
            <div key={agendamento.id} className="event-card">
              <div className="card-content">
                <h3 className="card-title">{agendamento.title}</h3>

                <p className="card-info">
                  <strong>Data:</strong> {agendamento.date}
                </p>

                <p className="card-info">
                  <strong>Horário:</strong> {agendamento.startTime} às {agendamento.endTime}
                </p>

                <p className="card-info">
                  <strong>Local:</strong> {agendamento.local}
                </p>

                <p className="card-info">
                  <strong>Modalidade:</strong> {agendamento.modality}
                </p>

                <div className="card-footer">
                  <button
                    className="btn-subscribe"
                    onClick={() => handleSubscribe(agendamento)}
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
