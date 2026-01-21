import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function ProtectedRoute({ children, allowedRoles }) {
  const { isAuthenticated, userType } = useUser();

  // não logado = login
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // Logado mas sem permissão
  if (allowedRoles && !allowedRoles.includes(userType)) {
    return <Navigate to="/home" replace />;
  }

  return children;
}
