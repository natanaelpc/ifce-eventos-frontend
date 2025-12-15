// src/pages/Login.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import LogoIf from "../assets/logoif.png";
import "./Auth.css";
import { useUser } from "../context/UserContext";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();
  const { login } = useUser();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !senha) {
      setErro("Preencha e-mail e senha.");
      return;
    }

    // Regra de EXEMPLO para papéis:
    // se o e-mail tiver "admin", considera admin, senão participante
    const role = email.toLowerCase().includes("admin")
      ? "admin"
      : "participantes";

    // Aqui entraria o retorno da sua API. Por enquanto, simulando:
    login({
      name: email.split("@")[0],
      email,
      role, // "admin" ou "participantes"
    });

    // Redireciona para a Home após login
    navigate("/home");
  };

  return (
    <div className="auth-container login">
      <img src={LogoIf} alt="Logo IFCE" className="ifce-logo" />

      <div className="auth-card">
        <img
          src={Logo}
          alt="Login"
          className="auth-title-image"
        />

        <h2 className="auth-title">Entrar</h2>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">E-mail institucional</label>
            <input
              id="email"
              type="email"
              placeholder="seuemail@ifce.edu.br"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="senha">Senha</label>
            <input
              id="senha"
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          {erro && <p className="auth-error">{erro}</p>}

          <button type="submit" className="btn-primary">
            Entrar
          </button>
        </form>
      </div>

      <footer className="login-footer">
        <p>
          Não tem uma conta? <Link to="/register">Inscreva-se</Link>
        </p>
      </footer>
    </div>
  );
}

export default Login;
