import { useEffect, useState } from "react";
import api from "../services/APIService";
import "./Events.css";

function Eventos() {
  const [agendamentos, setAgendamentos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inscrevendoId, setInscrevendoId] = useState(null);

  // funções utilitárias para formatar o que vem do Java
  const formatarData = (dataISO) => {
    if (!dataISO) return "";
    return dataISO.split('-').reverse().join('/');
  };

  const formatarHora = (horaString) => {
    if (!horaString) return "";
    return horaString.substring(0, 5);
  };

  // retorna todos os agendamentos que ainda vão acontecer
   useEffect(() => {
     const fetchAgendamentos = async () => {
       try {
         setLoading(true);
         const res = await api.get("/api/agendamento/listar");
         
         setAgendamentos(res.data); 
       } catch (err) {
         console.error("Erro ao carregar eventos:", err);
         alert("Não foi possível carregar os eventos.");
       } finally {
         setLoading(false);
       }
     };
 
     fetchAgendamentos();
   }, []);

  const handleSubscribe = async (agendamento) => {
    try {
      setInscrevendoId(agendamento.id); // ativa loading no botão específico
      
      await api.post("/api/inscricao", { agendamentoId: agendamento.id });

      // remove o evento da lista localmente para não precisar recarregar a tela
      setAgendamentos((prev) => prev.filter((a) => a.id !== agendamento.id));

      alert("Inscrição realizada com sucesso!");
    } catch (err) {
      console.error("Erro ao se inscrever:", err);
      alert("Erro ao se inscrever no evento. Tente novamente.");
    } finally {
      setInscrevendoId(null); // libera o botão
    }
  };

  // renderização condicional de carregamento
  if (loading) {
    return <div className="eventos-page"><p>Carregando eventos...</p></div>;
  }

  return (
    <div className="eventos-page">
      <h2 className="eventos-title">Eventos Disponíveis</h2>

      <div className="event-grid">
        {agendamentos.length === 0 ? (
          <p>Nenhum evento disponível no momento.</p>
        ) : (
          agendamentos.map((agendamento) => (
            <div key={agendamento.id} className="event-card">
              <div className="card-content">
                {/* Acessando direto do DTO aninhado */}
                <h3 className="card-title">
                  {agendamento.evento.titulo || "Evento sem título"}
                </h3>

                <p className="card-info">
                  <strong>Data:</strong> {formatarData(agendamento.data)}
                </p>

                <p className="card-info">
                  <strong>Horário:</strong>{" "}
                  {formatarHora(agendamento.horaInicio)} às {formatarHora(agendamento.horaFim)}
                </p>

                <p className="card-info">
                  <strong>Local:</strong>{" "}
                  {agendamento.lugar?.nome || "Local não informado"}
                </p>

                <p className="card-info">
                  <strong>Modalidade:</strong>{" "}
                  {agendamento.evento.remote ? "Remoto" : "Presencial"}
                </p>

                <div className="card-footer">
                  <button
                    className="btn-subscribe"
                    onClick={() => handleSubscribe(agendamento)}
                    disabled={inscrevendoId === agendamento.id} // desabilita se estiver clicado
                  >
                    {inscrevendoId === agendamento.id ? "Inscrevendo..." : "Inscrever-se"}
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
