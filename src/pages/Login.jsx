import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form>
        <label>
          Email:
          <input type="email" placeholder="Digite seu email" />
        </label>
        <label>
          Senha:
          <input type="password" placeholder="Digite sua senha" />
        </label>
        <button type="submit">Entrar</button>
        <button type="submit">Entrar com o Google</button>
      </form>
      <p>
        Não tem uma conta? <Link to="/register">Crie uma aqui</Link>
      </p>
    </div>
  );
}

export default Login;
