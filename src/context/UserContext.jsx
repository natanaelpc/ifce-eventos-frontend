import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  // executa ao carregar a aplicação
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser({
          email: decoded.sub,
          role: decoded.role // ALUNO | PROFESSOR | ADMIN
        });
      } catch (error) {
        console.error("Erro ao decodificar token:", error);
        localStorage.removeItem("token");
      }
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
