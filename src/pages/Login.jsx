import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import "./Login.css";

function Login() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <img
          src={Logo}
          alt="Login"
          className="auth-title-image"
        />

        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              required
            />

            <a href="/recuperar-senha" className="forgot-password">Esqueceu a Senha?</a>

          </div>

          <button type="submit" className="btn-primary">
            Entrar
          </button>

          <button type="button" className="btn-google">
            Continuar com o Google
          </button>
        </form>

      </div>

      <footer className="login-footer">
        <p>Não tem uma conta? <Link to="/register">Inscreva-se</Link></p>
      </footer>

    </div>
  );
}

export default Login;
