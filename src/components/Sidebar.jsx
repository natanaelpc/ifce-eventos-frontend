// src/components/Sidebar.jsx
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

import { ReactComponent as UserIcon } from "../assets/icons/User.svg";
import { ReactComponent as CreateEventIcon } from "../assets/icons/CreateEvent.svg";
import { ReactComponent as AvailableEventsIcon } from "../assets/icons/AvailableEvents.svg";
import { ReactComponent as DoubtsIcon } from "../assets/icons/Doubts.svg";
import { ReactComponent as CertificateIcon } from "../assets/icons/Certificate.svg";
import { ReactComponent as FeedbackIcon } from "../assets/icons/Feedback.svg";

import "./Sidebar.css";

export default function Sidebar({ isOpen }) {
  const { user } = useContext(UserContext);

  if (!user) return null;

  const role = user.role; // ALUNO | PROFESSOR | ADMIN

  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <ul>

        {/* ================= ALUNO ================= */}
        {role === "ALUNO" && (
          <>
            <li>
              <Link to="/meus-eventos">
                <UserIcon width={20} height={20} />
                <span>Meus Eventos</span>
              </Link>
            </li>

            <li>
              <Link to="/eventos-disponiveis">
                <AvailableEventsIcon width={20} height={20} />
                <span>Eventos Disponíveis</span>
              </Link>
            </li>

            <li>
              <Link to="/duvidas">
                <DoubtsIcon width={20} height={20} />
                <span>Dúvidas</span>
              </Link>
            </li>

            <li>
              <Link to="/certificados">
                <CertificateIcon width={20} height={20} />
                <span>Certificados</span>
              </Link>
            </li>
          </>
        )}

        {/* ================= PROFESSOR ================= */}
        {role === "PROFESSOR" && (
          <>
            <li>
              <Link to="/criar-evento">
                <CreateEventIcon width={20} height={20} />
                <span>Criar Evento</span>
              </Link>
            </li>

            <li>
              <Link to="/visualizar-eventos">
                <AvailableEventsIcon width={20} height={20} />
                <span>Visualizar Eventos</span>
              </Link>
            </li>

            <li>
              <Link to="/editar-evento">
                <CreateEventIcon width={20} height={20} />
                <span>Editar Evento</span>
              </Link>
            </li>
          </>
        )}

        {/* ================= ADMIN ================= */}
        {role === "ADMIN" && (
          <>
            <li>
              <Link to="/criar-evento">
                <CreateEventIcon width={20} height={20} />
                <span>Criar Evento</span>
              </Link>
            </li>

            <li>
              <Link to="/eventos-criados">
                <AvailableEventsIcon width={20} height={20} />
                <span>Eventos Criados</span>
              </Link>
            </li>

            {/* ADMIN tem acesso a todas as funções da plataforma */}
            <li>
              <Link to="/visualizar-eventos">
                <AvailableEventsIcon width={20} height={20} />
                <span>Visualizar Eventos</span>
              </Link>
            </li>

            <li>
              <Link to="/editar-evento">
                <CreateEventIcon width={20} height={20} />
                <span>Editar Evento</span>
              </Link>
            </li>
          </>
        )}

      </ul>

      {/* ========= FOOTER — aparece para todos ========= */}
      <div className="sidebar-footer">
        <div className="footer-divider"></div>
        <Link to="/ajuda-feedback" className="sidebar-footer-link">
          <FeedbackIcon width={16} height={16} />
          <span>Ajuda e Feedback</span>
        </Link>
      </div>
    </aside>
  );
}
