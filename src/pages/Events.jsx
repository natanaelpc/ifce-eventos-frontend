import { useEffect, useState } from "react";
import api from "../services/APIService";
import "./Events.css";

function Eventos() {
  const [agendamentos, setAgendamentos] = useState([]);

  // retorna todos os agendamentos que ainda vão acontecer
  const fetchAgendamentos = async () => {
    try {
      const res = await api.get("/api/agendamento/listar");

      const agendamentosComInfos = await Promise.all(
        res.data.map(async (agendamento) => {
          const eventoInfos = await api.get(`/api/avento/${agendamento.idEvento}`)
          const LugarInfos = await api.get(`/api/lugar/${agendamento.idLugar}`)

          return {
            ...agendamento,
            tituloEvento: eventoInfos.data.titulo,
            modalidade: eventoInfos.data.remote,
            nomeLugar: lugarRes.data.nome
          };
        })
      );

      setAgendamentos(agendamentosComInfos);
    } catch (err) {
      console.error("Erro ao carregar eventos:", err);
    }
  };

  useEffect(() => {
    fetchAgendamentos();
  }, []);

  const handleSubscribe = async (agendamento) => {
    try {
      const inscricao = { agendamentoId: agendamento.id };

      // cria inscrição
      await api.post("/api/inscricao", inscricao);

      // remove agendamento disponível
      //await api.delete(`/agendamentos/${agendamento.id}`);

      // atualiza lista local
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
                <h3 className="card-title">{agendamento.tituloEvento}</h3>

                <p className="card-info">
                  <strong>Data:</strong> {agendamento.data}
                </p>

                <p className="card-info">
                  <strong>Horário:</strong>{" "}
                  {agendamento.horaInicio} às {agendamento.horaFim}
                </p>

                <p className="card-info">
                  // local.nome
                  <strong>Local:</strong> {agendamento.nomeLugar}
                </p>

                <p className="card-info">
                  // evento.remote
                  <strong>Modalidade:</strong> {agendamento.modalidade}
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
