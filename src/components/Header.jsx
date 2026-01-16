// src/components/Header.jsx
import { Link } from 'react-router-dom';
import './Header.css';
import { ReactComponent as PanelIcon } from "../assets/icons/Panel.svg";
//import { ReactComponent as NotificationsIcon } from "../assets/icons/Notifications.svg";
//import { ReactComponent as HelpIcon } from "../assets/icons/Help.svg";
//import { ReactComponent as SettingsIcon } from "../assets/icons/Settings.svg";
import { ReactComponent as ProfileIcon } from "../assets/icons/Profile.svg";

function Header({ toggleSidebar }) {
  return (
    <header className="header">
      {/* Botão para abrir/fechar sidebar */}
      <button className="sidebar-toggle-icon" onClick={toggleSidebar}>
        <PanelIcon width={20} height={20} />
      </button>

      <nav>
        <ul className="nav-list">
          <li><Link to="/profile"><ProfileIcon width={20} height={20} /></Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
