import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [token, setToken] = useState(null);
  const [userType, setUserType] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      const decoded = jwtDecode(storedToken);

      setToken(storedToken);
      setUserType(decoded.tipoUsuario); 
      setIsAuthenticated(true);
    }
  }, []);

  const login = (jwtToken) => {
    const decoded = jwtDecode(jwtToken);

    localStorage.setItem("token", jwtToken);

    setToken(jwtToken);
    setUserType(decoded.tipoUsuario);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUserType(null);
    setIsAuthenticated(false);
  };

  return (
    <UserContext.Provider
      value={{
        token,
        userType,
        isAuthenticated,
        login,
        logout
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
