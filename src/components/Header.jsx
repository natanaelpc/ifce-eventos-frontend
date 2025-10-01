// src/components/Header.jsx
import { Link } from 'react-router-dom';
import './Header.css';
import { ReactComponent as PanelIcon } from "../assets/icons/PanelIcon.svg";
import { ReactComponent as NotificationsIcon } from "../assets/icons/NotificationsIcon.svg";
import { ReactComponent as HelpIcon } from "../assets/icons/HelpIcon.svg";
import { ReactComponent as SettingsIcon } from "../assets/icons/SettingsIcon.svg";
import { ReactComponent as ProfileIcon } from "../assets/icons/ProfileIcon.svg";

function Header({ toggleSidebar }) {
  return (
    <header className="header">
      {/* Botão para abrir/fechar sidebar */}
      <Link to="/" className="sidebar-toggle-icon" onClick={toggleSidebar}>
        <PanelIcon width={20} height={20} />
      </Link>

      <nav>
        <ul className="nav-list">
          <li><Link to="/"><NotificationsIcon width={20} height={20} /></Link></li>
          <li><Link to="/help"><HelpIcon width={20} height={20} /></Link></li>
          <li><Link to="/settings"><SettingsIcon width={20} height={20} /></Link></li>
          <li><Link to="/profile"><ProfileIcon width={20} height={20} /></Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
