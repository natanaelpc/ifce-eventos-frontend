// src/components/Sidebar.jsx
import { Link } from "react-router-dom";
import { ReactComponent as UserIcon } from "../assets/icons/User.svg";
import { ReactComponent as RequestEventIcon } from "../assets/icons/RequestEvent.svg";
import { ReactComponent as AvailableEventsIcon } from "../assets/icons/AvailableEvents.svg";
import { ReactComponent as DoubtsIcon } from "../assets/icons/Doubts.svg";
import { ReactComponent as FiltersIcon } from "../assets/icons/Filters.svg";
import { ReactComponent as CertificateIcon } from "../assets/icons/Certificate.svg";
import { ReactComponent as FeedbackIcon } from "../assets/icons/Feedback.svg";
import "./Sidebar.css";

export default function Sidebar({ isOpen }) {
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
          <Link to="/events">
            <AvailableEventsIcon width={20} height={20} />
            <span>Eventos Disponíveis</span>
          </Link>
        </li>

        <li>
          <Link to="/doubts">
            <DoubtsIcon width={20} height={20} />
            <span>Dúvidas</span>
          </Link>
        </li>

        <li>
          <Link to="/filters">
            <FiltersIcon width={20} height={20} />
            <span>Filtros</span>
          </Link>
        </li>

        <li>
          <Link to="/certificates">
            <CertificateIcon width={20} height={20} />
            <span>Certificados</span>
          </Link>
        </li>
      </ul>

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
