// src/components/Sidebar.jsx
import { Link } from "react-router-dom";
import { ReactComponent as UserIcon } from "../assets/icons/User.svg";
import { ReactComponent as RequestEventIcon } from "../assets/icons/RequestEvent.svg";
import { ReactComponent as AvailableEventsIcon } from "../assets/icons/AvailableEvents.svg";
// import { ReactComponent as DoubtsIcon } from "../assets/icons/Doubts.svg"; // removido
// import { ReactComponent as FiltersIcon } from "../assets/icons/Filters.svg"; // removido
import { ReactComponent as CertificateIcon } from "../assets/icons/Certificate.svg";
import { ReactComponent as FeedbackIcon } from "../assets/icons/Feedback.svg";
import { ReactComponent as PanelIcon } from "../assets/icons/Panel.svg"; // ícone para Aprovações
import { ReactComponent as ApproveIcon } from "../assets/icons/Approve.svg"; // ícone para Aprovações
import "./Sidebar.css";
import { useUser } from "../context/UserContext";

export default function Sidebar({ isOpen }) {
  const { user } = useUser();

  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <ul>
        <li>
          <Link to="/home">
            <UserIcon width={20} height={20} />
            <span>Meus Eventos</span>
          </Link>
        </li>

        <li>
          <Link to="/request-event">
            <RequestEventIcon width={20} height={20} />
            <span>Solicitar Evento</span>
          </Link>
        </li>
        
        <li>
          <Link to="/approve-event">
            <ApproveIcon width={20} height={20} />
            <span>Aprovar Eventos</span>
          </Link>
        </li>

        <li>
          <Link to="/events">
            <AvailableEventsIcon width={20} height={20} />
            <span>Eventos Disponíveis</span>
          </Link>
        </li>

        {/* Card "Aprovações" visível apenas para admin */}
        {user?.role === "admin" && (
          <li>
            <Link to="/approvals">
              <PanelIcon width={20} height={20} />
              <span>Aprovações</span>
            </Link>
          </li>
        )}

        {/* Dúvidas e Filtros REMOVIDOS */}

        <li>
          <Link to="/certificates">
            <CertificateIcon width={25} height={25} />
            <span>Certificados</span>
          </Link>
        </li>
      </ul>

      {/* Card de ajuda/feedback que você comentou que já fica abaixo da sidebar */}
      <div className="sidebar-footer">
        <div className="footer-divider"></div>
        <Link to="/help-feedback" className="sidebar-footer-link">
          <FeedbackIcon width={16} height={16} />
          <span>Ajuda e Feedback</span>
        </Link>
      </div>
    </aside>
  );
}
