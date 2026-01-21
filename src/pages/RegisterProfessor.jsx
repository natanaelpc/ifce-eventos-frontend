import { Link, useNavigate } from 'react-router-dom';
import "./Auth.css";
import LogoIf from '../assets/logoif.png';
import { FaArrowLeft, FaPaintBrush } from "react-icons/fa";
import { useUser } from "../context/UserContext";
import api from "../services/APIService";
import { useState } from 'react';

function Register() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [nome, setNome] = useState("");
    const [erro, setErro] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErro("");

        if (!email || !senha) {
            setErro("Preencha e-mail, senha e nome.");
            return;
        }

        if (senha !== confirmPassword) {
            setErro("As senhas não coincidem.");
            return;
        }

        try {
            const res = await api.post("/admin/register/professor", {
                "email": email,
                "senha": senha,
                "nome": nome
            });

            alert('Professor cadastrado com sucesso!')

        } catch (err) {
            if (err.response) {
                setErro("E-mail, senha ou nome inválidos.");
            } else {
                setErro("Erro ao conectar o servidor");
            }
        }
    };

    return (
        <div className='page'>
            <button
                className="register-back-icon"
                onClick={() => navigate("/home")}
                aria-label="Voltar para Home"
            >
                <FaArrowLeft />
            </button>
            <div className="auth-container register">
                <img src={LogoIf} alt="LogoIf" className="ifce-logo" />
                <div className="auth-card">
                    <h2 className="auth-title">Cadastrar Professor</h2>

                    <form className="auth-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Nome</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Digite seu nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Digite seu e-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Senha</label>
                            <input
                                id="senha"
                                type="password"
                                placeholder="Digite sua senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirmar senha</label>
                            <input
                                id="confirmPassword"
                                type="password"
                                placeholder="Confirme sua senha"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" className="btn-primary-auth">
                            Criar Conta
                        </button>
                    </form>

                </div>

                <footer className="login-footer">
                    <p>Já tem uma conta? <Link to="/login">Entre agora</Link></p>
                </footer>

            </div>
        </div>
    );
}

export default Register;
