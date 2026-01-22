
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { ReactComponent as PanelIcon } from "../assets/icons/Panel.svg";
import { ReactComponent as ProfileIcon } from "../assets/icons/Profile.svg";
import { ReactComponent as LogoutIcon } from "../assets/icons/Logout.svg";
import { useUser } from "../context/UserContext";

function Header({ toggleSidebar }) {
  const { logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Tem certeza que deseja sair?"
    );

    if (confirmLogout) {
      logout();
      navigate("/login");
    }
  };

  return (
    <header className="header">
      {/* botão abrir/fechar sidebar */}
      <button className="sidebar-toggle-icon" onClick={toggleSidebar}>
        <PanelIcon width={20} height={20} />
      </button>

      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/profile">
              <ProfileIcon width={20} height={20} />
            </Link>
          </li>

          {/* botão loggout (somente ícone) */}
          <li>
            <button
              type="button"
              className="header-icon-button logout-icon"
              onClick={handleLogout}
              title="Sair"
            >
              <LogoutIcon width={20} height={20} />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
