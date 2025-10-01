// src/components/Sidebar.jsx
import { Link } from "react-router-dom";
import { ReactComponent as UserIcon } from "../assets/icons/UserIcon.svg";
import { ReactComponent as CreateEventIcon } from "../assets/icons/CreateEvent.svg";
import { ReactComponent as AvailableEventsIcon } from "../assets/icons/AvailableEvents.svg";
import "./Sidebar.css";

export default function Sidebar({ isOpen }) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <ul>

        <li>
          <Link to="/">
            <UserIcon width={20} height={20} />
            <span>Meus Eventos</span>
          </Link>
        </li>

        <li>
          <Link to="/">
            <CreateEventIcon width={20} height={20} />
            <span>Criar Evento</span>
          </Link>
        </li>
        
        <li>
          <Link to="/">
            <AvailableEventsIcon width={20} height={20} />
            <span>Eventos Disponíveis</span>
          </Link>
        </li>
        
      </ul>
    </aside>
  );
}
