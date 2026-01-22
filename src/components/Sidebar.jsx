import { Link } from "react-router-dom";
import { ReactComponent as UserIcon } from "../assets/icons/User.svg";
import { ReactComponent as RequestEventIcon } from "../assets/icons/RequestEvent.svg";
import { ReactComponent as AvailableEventsIcon } from "../assets/icons/AvailableEvents.svg";
import { ReactComponent as CertificateIcon } from "../assets/icons/Certificate.svg";
import { ReactComponent as FeedbackIcon } from "../assets/icons/Feedback.svg";
import { ReactComponent as ApproveIcon } from "../assets/icons/Approve.svg";
import { ReactComponent as SchedulingIcon } from "../assets/icons/Scheduling.svg";
import { ReactComponent as RegisterProfessorIcon } from "../assets/icons/RegisterProfessor.svg";
import "./Sidebar.css";
import { useUser } from "../context/UserContext";

export default function Sidebar({ isOpen }) {
  const { userType } = useUser();

  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <ul>
        <li>
          <Link to="/home">
            <UserIcon width={20} height={20} />
            <span>Meus Eventos</span>
          </Link>
        </li>

        {(userType === "PROFESSOR" || userType === "ADMIN") && (
          <li>
            <Link to="/request-event">
              <RequestEventIcon width={20} height={20} />
              <span>Solicitar Evento</span>
            </Link>
          </li>
        )}

        {userType === "ADMIN" && (
          <>
            <li>
              <Link to="/approve-event">
                <ApproveIcon width={20} height={20} />
                <span>Aprovar Eventos</span>
              </Link>
            </li>

            <li>
              <Link to="/scheduling">
                <SchedulingIcon width={20} height={20} />
                <span>Criar Agendamentos</span>
              </Link>
            </li>
          </>
        )}

        <li>
          <Link to="/events">
            <AvailableEventsIcon width={20} height={20} />
            <span>Agendamentos Disponíveis</span>
          </Link>
        </li>

        <li>
          <Link to="/certificates">
            <CertificateIcon width={25} height={25} />
            <span>Certificados</span>
          </Link>
        </li>
      </ul>

      {userType === "ADMIN" && (
          <>
            <li>
              <Link to="/register-professor">
                <RegisterProfessorIcon width={20} height={20} />
                <span>Cadastrar Professor</span>
              </Link>
            </li>
          </>
        )}

      {/* Footer */}
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
