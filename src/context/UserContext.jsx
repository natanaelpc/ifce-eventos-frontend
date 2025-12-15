import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);

  // Carrega token e role do localStorage ao iniciar o app
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedRole = localStorage.getItem("role");

    if (savedToken && savedRole) {
      setToken(savedToken);
      setRole(savedRole);
    }
  }, []);

  // Função chamada no login
  const login = (jwt, userRole) => {
    setToken(jwt);
    setRole(userRole);

    localStorage.setItem("token", jwt);
    localStorage.setItem("role", userRole);
  };

  // Função chamada no logout
  const logout = () => {
    setToken(null);
    setRole(null);

    localStorage.removeItem("token");
    localStorage.removeItem("role");
  };

  return (
    <UserContext.Provider value={{ token, role, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
