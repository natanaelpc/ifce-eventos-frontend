import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="auth-container">
      <h2>Criar uma conta</h2>
      <form>
        <label>
          Nome:
          <input type="text" placeholder="Digite seu nome" />
        </label>
        <label>
          Email:
          <input type="email" placeholder="Digite seu email" />
        </label>
        <label>
          Senha:
          <input type="password" placeholder="Digite sua senha" />
        </label>
        <label>
          Confirmar Senha:
          <input type="password" placeholder="Digite sua senha" />
        </label>
        <button type="submit">Criar Conta</button>
        <button type="submit">Continuar com o Google</button>
      </form>
      <p>
        Já tem uma conta? <Link to="/login">Entrar agora</Link>
      </p>
    </div>
  );
}

export default Register;
