import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function PrivateRoute({ children, allowedRoles }) {
  const { user } = useContext(UserContext);

  // não está logado → vai para login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // se houver restrição de tipo e o tipo não está na lista → acesso negado
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/acesso-negado" replace />;
  }

  return children;
}
