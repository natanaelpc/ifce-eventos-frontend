import { Link } from 'react-router-dom';
import "./Login.css"; // usa o mesmo CSS do login por enquanto

function Register() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Criar uma conta</h2>

        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input 
              id="name"
              type="text" 
              placeholder="Digite seu nome" 
              required 
            />
          </div>

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
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmar senha</label>
            <input 
              id="confirmPassword"
              type="password" 
              placeholder="Confirme sua senha" 
              required 
            />
          </div>

          <button type="submit" className="btn-primary">
            Criar Conta
          </button>

          <button type="button" className="btn-google">
            Continuar com o Google
          </button>
        </form>
      </div>

        <footer className="login-footer">
          <p>Já tem uma conta? <Link to="/">Entre agora</Link></p>
        </footer>

    </div>
  );
}

export default Register;
